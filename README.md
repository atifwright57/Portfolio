# Atif Wright — Data Engineering Portfolio

A responsive React, TypeScript, Vite, and Tailwind CSS portfolio. Professional content is centralized in `src/data/portfolio.ts` so verified resume details can be updated independently of the presentation.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Vite prints a local URL after the development server starts.

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. The build runs the TypeScript project checks before bundling.

## Deployment to Vercel

Import the repository in Vercel and use the detected Vite defaults:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The included `vercel.json` supports the single-page app route fallback. No environment variables or backend services are required.

## Editing portfolio content

Update `src/data/portfolio.ts` to edit profile text, contact links, skills, experience, project descriptions, and resume settings. Keep claims aligned with the underlying resume. Project areas on the site are explicitly presented as resume-listed areas; their employer or personal-project attribution is not specified in the supplied document. The architecture diagrams are illustrative rather than verified production designs.

The supplied resume is used as the source of portfolio content but is not published as a site asset.

The contact form validates in the browser and opens the visitor's configured email application with a draft addressed to the resume email. It does not send or store messages. Configure a backend form provider before changing the form to claim successful delivery.

The resume does not include a LinkedIn URL, education institution or graduation date, certifications, or verified project outcomes/metrics. Those values are intentionally omitted; add them to the centralized data only after verification.
