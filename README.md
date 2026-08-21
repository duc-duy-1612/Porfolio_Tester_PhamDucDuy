# Phạm Đức Duy - Business Analyst Portfolio

Modern, case-study-driven portfolio for a Fresher IT Business Analyst with healthcare product experience and a technical foundation in requirements, workflows, APIs, databases, integration flows and testing.

## Technology Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React icons

## Local Setup

```bash
npm install
npm run dev
```

The development server prints the local URL after it starts.

## Production Build

```bash
npm run build
npm run preview
```

`npm run build` also copies `dist/index.html` to `dist/404.html` so static hosts can fall back to the React app.

## Deployment

### Vercel

Use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

For a repository named `portfolio-main`, run:

```bash
npm run build:github
```

If the repository name changes, update the `--base=/portfolio-main/` value in `package.json`.

## Content Configuration

All portfolio content is data-driven:

- Profile and contact placeholders: `src/data/profile.ts`
- Internship experience: `src/data/experience.ts`
- Case studies: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Education and awards: `src/data/education.ts`

## Contact Links

Replace the TODO values in `src/data/profile.ts`:

- `TODO_EMAIL`
- `TODO_PHONE`
- `TODO_LINKEDIN_URL`
- `TODO_GITHUB_URL`
- `TODO_RESUME_FILE`
- `TODO_PROFILE_IMAGE`
- `TODO_CANONICAL_URL`
- `TODO_OG_IMAGE`

The site hides unconfigured contact links so TODO placeholders are not shown to visitors.

## Resume

Add the resume PDF to `public/`, for example:

```text
public/resume-pham-duc-duy.pdf
```

Then set:

```ts
resumeFile: "/resume-pham-duc-duy.pdf"
```

Ensure your terminal is in the project root containing `package.json`.
1. Run `npm ci` to install dependencies.
2. Run `npm run dev` to start the development server.
3. Run `npm run build` to verify the production build.
4. Run `npm run preview` to serve the built files locally.

## Content and Contact Configuration
- **Profile Data**: Edit `src/data/profile.ts` to configure your name, title, SEO metadata, and contact links (Email, LinkedIn, GitHub, Resume, Profile Image, OG Image).
- **Missing Values**: Any unconfigured or `TODO_` values will cleanly hide the corresponding CTAs in the UI instead of rendering broken links.

## Asset Management
- **Public Assets**: Place images and resumes in the `public/` directory (e.g., `public/assets/projects/`). 
- **GitHub Pages**: The project supports deployment under a sub-path using `%BASE_URL%` in `index.html` and the `withBasePath` helper for dynamic links.
- **reference-private**: Confidential source files (e.g., `*.confidential.docx`, PDFs) MUST remain in the `reference-private/` folder. This folder is ignored in `.gitignore` and must **never** be committed or deployed.

## Adding a Case Study
To add a new project, update the `projects.ts` data array. Follow the existing schema, ensuring appropriate categories (`internship`, `academic`, `independent`) and confidentiality labels are used. Place any public-facing anonymised assets in `public/assets/projects/{slug}/`.

## Deployment
- **GitHub Pages**: Run `npm run build:github` and deploy the `dist/` folder. The `scripts/copy-404.mjs` script automatically generates a `404.html` file to support client-side routing on GitHub Pages.
- **Vercel**: Deploy the project root normally. The standard `npm run build` will suffice.

## Future Enhancements (P2 Preparation)
- Prerendering or SSR for improved initial load times.
- Project table of contents for longer case studies.
- Privacy-friendly analytics (once a real domain/site ID is available).
- Automated accessibility and route smoke tests.
Configure canonical and Open Graph image URLs before publishing.
