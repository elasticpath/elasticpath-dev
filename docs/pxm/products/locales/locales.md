---
title: Using Locales in Commerce Manager
nav_label: Using Locales in Commerce Manager
sidebar_position: 20
---

You can localize product names and descriptions when creating your products.

By default, there are a number of language codes available. You activate locales in Commerce Manager in [**SYSTEM** > **Store Settings** > **Locales**](/docs/pxm/products/locales/locales). You can activate a maximum of five languages.

By default, there are a number of language codes available to activate. If you want to use a language code that is not available by default, then you can add a localized product name and description for this language using [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product) API request.

:::caution
If you add locales using [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product) API request.

- Locales created using this API request are not displayed in Commerce Manager.
- The localized product names and descriptions for products created using this API request cannot be edited in Commerce Manager. You must update localized product names and descriptions using [update a product](/docs/pxm/products/ep-pxm-products-api/update-a-product) API request.

:::

You can activate a maximum of 5 languages.

## Adding a New Locale

1. On the **SYSTEM > Store Settings > Locales** tab, select the language names you want to activate.
1. Click **Save**. The status of the language names you have selected changes to **Active**.
1. Once you have selected a language name, in [**Products** > **Product details**](/docs/pxm/products/pxm-products-commerce-manager/configure-locales), you can create product information for your products in the languages you have selected.
1. You can make an active language inactive by clearing its checkbox.

![Checkbox](/assets/locales3.png)
