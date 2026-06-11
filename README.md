# DPC Website — Local Setup

## Requirements
- Node.js v18 or later (you have v24 ✓)
- npm (comes with Node.js)

## Steps to run locally

1. Open a terminal in this folder

2. Install dependencies:
   ```
   npm install
   ```

3. Start the dev server:
   ```
   npm run dev
   ```

4. Open your browser at: http://localhost:3000

## Build for production

```
npm run build
```
Output goes into the `dist/` folder — you can host those files on any static web host (Netlify, Vercel, GitHub Pages, etc.).

## Project structure

```
dpc-website/
├── public/
│   ├── dpc-logo.png       DPC logo
│   ├── building.jpg       Building photo
│   └── sbp-people.jpg     SBP photo
├── src/
│   ├── App.tsx            All page components
│   ├── main.tsx           Entry point
│   └── index.css          Theme & styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```
