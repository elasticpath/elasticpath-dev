---
title: Setting up Custom Proxy Paths 
nav_label: Setting up Custom Proxy Paths 
sidebar_position: 65
---

You can use Vercel's Rewrites feature in your Vercel project to redirect a Studio URL source to a specific URL. This enables you  to set up their site so that when a shopper visits their site, Vercel will fetch the content from another site (for example studio) and serve it using the customers URL even though the content is coming from Studio.allowing you to redirect traffic from one URL to another seamlessly. 

You can do this by setting up URL redirection rules within your Vercel project.

## Prerequisites

You must configure your project with vercel.json. See [Configuring Projects with vercel.json](https://vercel.com/docs/projects/project-configuration#project-configuration/rewrites).

Studio must be installed on the BYLT Shopify account. 

1. Set up your account. 
2. Once your account is active, contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us) to enable the proxy support tooling for your account.

## Rewriting to an external URL

Rewrites allow you to rewrite to an external URL. See the example below.

```json
module.exports = {
  async rewrites() {
    return [ "rewrites": [
      { "source": "/page/:match*",
       "destination": "https://bylt.unstackproxy.com/:match*" }
    ]
  ]
}
```

For more information, see [rewrites](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites).

