# RegDocPortal — local scaffold

This repository contains a local scaffold of the RegDocPortal frontend (React + Vite + Tailwind).

It is a prototype implementing the multi-step approval flow, audit trail, and role-based UI locally. It is intentionally independent of SELISE Blocks so it can be reviewed and iterated on before connecting to Blocks.

Local dev:

1. cd regdocportal
2. npm install
3. npm run dev

To connect to SELISE Blocks later, register a public OIDC client in the Blocks project and run:

blocks sdk client --x-blocks-key D4e4a58e95710414a9bc8b40fa7d29da2 --app-domain https://dbjcxu-ejcqg.slsblx.com --client-id <publicOidcClientId> --blocks-api-url https://blocksapi.slsblx.com

Do not commit client secrets or tokens.
