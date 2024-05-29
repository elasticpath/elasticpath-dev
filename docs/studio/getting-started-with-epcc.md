---
title: Getting-Started with Composable Commerce
nav_label: Getting-Started with Composable Commerce
sidebar_position: 5
---

## Prerequisites

- Ensure that you have an account within Elastic Path Commerce Manager.
- Ensure that you have a paid plan in [Studio](https://app.unstack.com/) account.
- Ensure that you have created the following items in Commerce Manager for seamless integration into the Studio storefront:
    - [Products](/docs/commerce-manager/product-experience-manager/Products/overview)
    - [Pricebooks](/docs/commerce-manager/product-experience-manager/pricebooks/pxm-pricebooks)
    - [Hierarchies](/docs/commerce-manager/product-experience-manager/hierarchies/creating_hierarchies)
    - [Templates](/docs/commerce-manager/product-experience-manager/extending-products/templates)
    - [Catalogs](/docs/commerce-manager/product-experience-manager/catalogs/catalog-configuration)
- Ensure that you have configured [Elastic Path Payments Powered by Stripe](/docs/commerce-manager/payments/ep-payments-powered-by-stripe) in Commerce Manager.
- Ensure that the Stripe gateway is enabled in Studio to sucessfully perform the checkout process. For more information, see [Stripe Integration](/docs/studio/Integrations/Integrating-stripe).
- (Optional) Ensure that you have set up an [Algolia integration](/docs/studio/Integrations/algolia) if you want to enable search indexing in your CX studio storefront.

## Procedure

1. Log into Commerce Manager.
1. Go to **SYSTEM** > **Application keys** to create your new API keys. See [Application keys](/docs/commerce-manager/application-keys/application-keys-cm).
1. Log into Studio.
1. Go to **Settings** > **Integrations**.
1. Navigate to **Payment & Storefront**.
1. Select **+** next to **Elastic Path**.
1. Enter the following details that you generated from step 2.

    - **Store ID**
    - **Client ID**
    - **Client Secret**
    - **API Base URL**

1. Select **Connect account** to save your changes. 
1. Go to **Storefront** to confirm that all products and catogories are successfully integrated from Commerce Manager into Studio.

Under **Content** > **Website**, you can see **Checkout** and **Thank You** pages are automatically created and ready to use. You can modify them as needed.
