---
sidebar_position: 5
title: Troubleshooting
---

## Error: Invalid src prop ... on `next/image`, hostname is not configured under images in your `next.config.js`

We are using next/image to optimize images for your storefront. A common reason for this error is you have added images with "External URLs" in Product Experience Manager. To fix this, you need to add the domain to the `next.config.js` file.

```javascript
module.exports = {
  images: {
    domains: ['cdn.example.com'],
  },
}
```

## Failed configuration tasks
One of my configuration tasks failed. What should I do?

If one or more of your configuration tasks failed you can retry them by running the appropriate CLI command from your project directory:

e.g. Algolia configuration:

```bash
ep int algolia
```

e.g. Elastic Path Payments configuration:

```bash
ep payments ep-payments
```

full list of available configuration tasks can be found in the [Composable CLI docs](/docs/developer-tools/composable-cli/commands).
