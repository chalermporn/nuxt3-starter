# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Configulation HTTPS for nuxt

```bash
brew install mkcert
brew install nss   
mkcert localhost
```

```json
// package.json
"scripts": {
    "dev": "nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem",
}
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
})

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
