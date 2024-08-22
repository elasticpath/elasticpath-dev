---
title: Overview
nav_label: Overview
sidebar_position: 10
---

In Commerce Manager, you can create the products and services that you want to offer in a subscription. See [Creating Repeat Products](/docs/commerce-manager/subscriptions/products/creating-products).

For example, an online streaming service organization might have different services available for subscription, such as Standard Definition Streaming, High-Definition Streaming, and 4K Streaming; each service provides a specific level of video quality. Products can have additional attributes, such as price, and rich media assets, such as images or files containing additional product details. See [Product Media](/docs/commerce-manager/subscriptions/products/creating-products).

In addition, you can build offerings with products created in Product Experience Manager. Product Experience Manager manages product information, hierarchies, and price books. Ideally, Product Experience Manager becomes the single source of truth for product data across your organization. See [Creating Subscription Products in Product Experience Manager](/docs/commerce-manager/subscriptions/products/creating-pxm-products).

Product data is stored in a database. After you have added your products, you can update your product information at any time and include those products in your offerings.

## Product Media

Images and files are linked to repeat products using a hypertext reference (HREF). You can either upload your images to Commerce or you can use your own content delivery network. 

An extensive range of [media and file extensions](/docs/commerce-manager/product-experience-manager/product-assets/files) are supported.

## Product Pricing

You can assign prices for your products and services. 

In addition, you can specify a unit price for a product. A unit price is the timeframe during which the product price is applicable, either days or months. For example, for a streaming service, the price is $12.99 and the unit price is months. In other words, the streaming service is available for $12.99 a month. You may want to specify a unit price if you have many products that all have different prices. Rather than having to create separate plans for each product, you can specify the timeframe during which the product price is applicable and then create one plan that determines the billing frequency for those products.

You can display prices to your customers in their local currency. You can configure up to 10 currencies per subscription. [Create](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies) currencies only for the locales in which you do business, and select one of the currencies to be the default currency. If a default currency is not selected, the store uses the United States Dollar (USD).

In addition, when creating a plan, you can configure a total price for all the products in an offering. This is useful, as it allows you to provide a fixed price for all products in an offering, enabling those products to be offered at a discounted price. The prices you specify for a plan override the individual product prices you specified when creating a product. See [Plan Pricing](/docs/commerce-manager/subscriptions/subscription-plans/managing-subscription-plans-cm).
