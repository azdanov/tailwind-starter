# Tailwind CSS Webpack Starter Project

This is an example of a super simple Webpack setup for using [Tailwind CSS](https://tailwindcss.com) with [PurgeCSS](https://www.purgecss.com/).

```sh
# Install using yarn
yarn install

# For development with webpack watch:
yarn run start

# For minified and purged production build:
yarn run build

# For unminified and purged dev build:
yarn run build:dev
```

Webpack will watch `./src/styles.css` and `./src/index.html` and rebuild your stylesheet on every change.
