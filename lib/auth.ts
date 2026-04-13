import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export type UserRole = "ADMIN" | "STUDENT" | "GUEST";

export async function getUserRole(): Promise<UserRole> {
  try {
    const { userId } = await auth();
    if (!userId) return "GUEST";

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { role: true },
    });

    return (user?.role as UserRole) || "STUDENT";
  } catch {
    return "GUEST";
  }
}

export async function requireAdmin() {
  const role = await getUserRole();
  if (role !== "ADMIN") {
    throw new Error("Unauthorized: Admin access required");
  }
}

export async function syncUser() {
  try {
    const { userId } = await auth();
    if (!userId) return null;

    const clerkUser = await currentUser();
    if (!clerkUser) return null;

    const email = clerkUser.emailAddresses[0]?.emailAddress || "";
    const name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim();

    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: { email, name },
      create: {
        clerkId: userId,
        email,
        name,
        role: "STUDENT",
      },
    });

    return user;
  } catch {
    return null;
  }
}
