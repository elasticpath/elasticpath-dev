---
id: front-end
title: Configuring Reference Storefront
sidebar_label: Configuring Reference Storefront
original_id: front-end
---

Built into the [Elastic Path`react-pwa-reference-storefront`](https://github.com/elasticpath/react-pwa-reference-storefront) master branch is support for the PunchOut integration. The storefront detects if a cookie containing an access token is placed into the browser during redirection from a buyers procurement system to the storefront. This token identifies the specific user coming from the procurement system in the storefront and will use this token to enable shopping on the shopper’s behalf. During checkout in the storefront, the shopper will be redirected back to the initial procurement system with all of the checkout items conveniently populated.

To set up the storefront to be part of the integration, you must adjust the configuration file on the storefront to point to the Cortex Lambda’s. Upload a distribution of the storefront to a Content Delivery Network (CDN) and ensure the Lambda configuration is pointing to the CDN where the storefront is hosted.

## Setting up the integration

1. Clone the [react-pwa-reference-storefront repository](https://github.com/elasticpath/react-pwa-reference-storefront).
2. Go to the `ep.config.json` file.
3. Update `cortexApi.path` key to point the application to Cortex Lambda’s.
4. In the root directory, run the `yarn build` command.
5. Upload the `dist` folder up into your CDN of choice.
6. Go to the Lambda configuration and ensure that it is pointing to the CDN that is hosting the storefront.
