---
title: Setting up Custom Proxy Paths for BYLT Shopify App
nav_label: Setting up Custom Proxy Paths BYLT Shopify App
sidebar_position: 65
---

You can use Vercel's Rewrites feature in your Vercel project to redirect a Studio URL source to a specific URL path on your BYLT Shopify app, allowing you to redirect traffic from one URL to another seamlessly. You can do this by setting up URL redirection rules within your Vercel project.

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



