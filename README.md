# Dennis Rosenbaum Portfolio + Ticketing Demo

This is a simple React/Vite portfolio website with an embedded analytics ticketing system.

## What it includes

- Home page
- Project portfolio page
- About page
- Contact page
- BI / Analytics ticketing system demo
- Ticket creation form
- Ticket queue
- Status and category updates

## Important note

This is a polished front-end demo. Ticket data is stored in browser memory while the site is open. For a live portfolio demo, that is acceptable because the goal is to demonstrate the workflow and design thinking.

A future upgrade would add a real database such as Supabase, SQLite, or Firebase.

## Run locally

1. Install Node.js from https://nodejs.org
2. Open Terminal
3. Go to this project folder
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite gives you.

## Deploy to Vercel

1. Create a GitHub account if you do not have one.
2. Create a new repository.
3. Upload this project to GitHub.
4. Go to Vercel.
5. Import the GitHub repository.
6. Framework preset: Vite.
7. Build command: npm run build.
8. Output directory: dist.
9. Deploy.

## Connect custom domain

After deployment:
1. Go to the Vercel project.
2. Open Settings.
3. Click Domains.
4. Add www.dennisrosenbaum.com.
5. Follow the DNS records Vercel gives you.
6. Add those records wherever you bought the domain.
