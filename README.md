This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This project is set up for [Vercel](https://vercel.com).

### Option 1: Deploy with Vercel CLI

1. Install the CLI: `npm i -g vercel`
2. From the project root, run:
   ```bash
   vercel
   ```
3. Follow the prompts (link to an existing project or create a new one).
4. For production: `vercel --prod`

### Option 2: Deploy from GitHub

1. Push your code to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository. Vercel will detect Next.js and use the build settings from `vercel.json`.
4. Deploy. Future pushes to your main branch will trigger production deployments (if configured).

### Build

- **Build Command:** `npm run build`
- **Output:** Next.js default (`.next`); no override needed unless you use a custom output.
- **Node:** Use Node 18 or 20 in Project Settings if needed.
