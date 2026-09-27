# Contributing

We'd love for you to get involved in developing this repository.

## Setup Workflow

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run generate` | Generate a static build |
| `npm run preview` | Preview the production build locally |

## Schema Workflow

This is a Nuxt 4 application built with the Vue 3 Composition API and TypeScript.

- `app/pages` holds the file-based routes, including the localized landing page and the redirect/dynamic-section utility routes.
- `app/components` holds Vue components grouped by domain: `header`, `footer`, `landing` (page sections), `icons`, and `ui` (shared building blocks).
- `app/composables` holds reusable Composition API logic (SEO metadata, icon resolution, loading state).
- `app/layouts` holds the shared page shells.
- `i18n/locales` holds the translation dictionaries for each supported language.
- `plugins` holds Nuxt plugins that run during app initialization.
- `server/routes` holds Nitro server routes for dynamically generated files such as `robots.txt` and `llms.txt`.
- `public` holds static assets served as-is (favicons, images, manifest).

## Contribution Workflow

Changes follow Conventional Commits for commit messages, and go through a feature-branch and pull-request review flow before merging.
