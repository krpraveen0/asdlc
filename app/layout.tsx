import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineering Academy",
  description: "Production-ready AI Engineering course platform. Master LLMs, MLOps, Cloud Infrastructure, and more.",
  keywords: ["AI Engineering", "Machine Learning", "LLM", "MLOps", "Course Platform"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
