# AI Engineering Academy

A production-ready AI Engineering Course Platform built with Next.js, MUI, Clerk, and Prisma.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **MUI v5** — Dark theme with custom palette (Inter font via CSS system font stack)
- **Clerk** — Authentication (sign-in, sign-up, protected routes)
- **Prisma v7 + SQLite** — Database ORM

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables by copying `.env.local` and filling in real Clerk keys:
   ```bash
   cp .env.local .env.local
   ```

3. Generate Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with Hero, Courses, and Pricing |
| `/courses/bridge` | 16-week Bridge Course (Python → AI Engineering) |
| `/courses/ai-engineering` | 22-week AI Engineering Pro curriculum (5 phases) |
| `/dashboard` | Student dashboard with course progress |
| `/admin` | Admin dashboard with course management |
| `/sign-in` | Clerk sign-in page |
| `/sign-up` | Clerk sign-up page |

## Environment Variables

```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```
