---
title: Configuring Locales
nav_label: Configuring Locales
sidebar_position: 30
---

You can localize product names and descriptions when creating your products. 

By default, there are a number of language codes available. You activate locales in Commerce Manager in [**SYSTEM** > **Store Settings** > **Locales**](/docs/pxm/products/locales/locales). You can activate a maximum of five languages. 

You can also add your own custom language codes if the language that you want to use is not available in [**SYSTEM** > **Store Settings** > **Locales**](/docs/pxm/products/locales/locales). You can do this using the [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product) API request. Locales that are added using the [Create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product) API request are available in Commerce Manager under **Custom Product Locales**.

1. In the **Product Details** tab, expand **Locale** drop-down list. The languages you have activated in [**SYSTEM** > **Store Settings** > **Locale**](/docs/pxm/products/locales/locales) are displayed.
1. Select the language you want to use. If the language you want is not available, perform the following steps.

    1. Go to **SYSTEM** > **Store Settings** > **Locales** to find and activatd the language you want.
    1. If the language you want is not shown in **SYSTEM** > **Store Settings** > **Locales** then add a custom locale using [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product).

       :::caution
       If you add locales using [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product) API request.

         - Locales created using this API request are not displayed in Commerce Manager.
         - The localized product names and descriptions for products created using this API request cannot be edited in Commerce Manager. You must update localized product names and descriptions using [update a product](/docs/pxm/products/ep-pxm-products-api/update-a-product) API request.

       :::

1. Commerce Manager prompts you to enter the product name and description in the language you selected.
1. Type a localized name and description. A flag representing the language you are currently using is displayed.
1. When you have finished, select **Global** from the **Locale** drop-down list to return to **Product Details**. Commerce Manager shows you which localizations are being used for this product.
![Locales](/assets/locales2.png)
1. Repeat these steps for each language you want to use.
1. You can go back and edit any localized names and descriptions at any time by selecting the language you want from the **Locale** drop-down list.
