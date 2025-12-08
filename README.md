# etailment 2026

Modern eCommerce industry news portal prototype built with Next.js.

## Getting Started

### Development

```bash
npm install
npm run dev
```

The app will run on [http://localhost:3001](http://localhost:3001)

### Build

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project directory:
   ```bash
   cd /Users/phogenkamp/Code/Scope/etailment-2026
   vercel
   ```

4. Follow the prompts:
   - Link to existing project or create new
   - Confirm project settings
   - Deploy

### Option 2: Using GitHub Integration

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin master
   ```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Next.js settings

6. Click "Deploy"

### Important Notes

- The project uses port 3001 locally, but Vercel handles ports automatically
- Make sure all dependencies are in `package.json` (they are)
- The build command `next build` is already configured
- No environment variables needed for this project

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components
- `/data` - Mock data files
- `/lib` - Utility functions
- `/public` - Static assets

## Features

- Modern responsive design with TailwindCSS
- Interactive filters (Companies, Sources, Topics, Countries)
- Newsletter integration
- Insights dashboard with charts
- Real-time article filtering
- Company icons and tags
