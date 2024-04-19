---
title: Integrating Yotpo
nav_label: Yotpo
sidebar_position: 301
---

You can quickly and easily integrate Studio with Yotpo. Once configured, you can use Studio's built-in Yotpo component to enable your customers to provide ratings and reviews in your Studio product details pages for the products they purchase. You can also sync the customer feedback with any search provider that you use, enabling you to display average customer ratings and product reviews. 

Optionally, you can also sync your Commerce data with the Yotpo integration through Composer. Customer data is shared with Yotpo to enable a feedback email to be sent when a customer places an order, allowing them to provide feedback on the products purchased. 

## Prerequisites

You must have the following before configuring the Yotpo integration.

1. A Studio storefront.
2. Ensure that you have a Yotpo [App Key](https://support.yotpo.com/docs/finding-your-yotpo-app-key-and-secret-key).

In addition, if you are syncing the Yotpo integration with your Commerce data, ensure that your Studio storefront is integrated with Commerce. See [Getting Started with Composable Commerce](/docs/studio/getting-started-with-epcc).

## Best Practices

Follow these steps to integrate with Yotpo.

1. (Optional) In Commerce Manager, go to **Composer** and configure a [Yotpo Integration](/docs/composer/integration-hub/product-information/yotpo) in [Integrations Hub](/docs/composer/integration-hub/integrations-hub).
2. In Studio, configure the [Yotpo Integration](#configure-the-yotpo-integration).

## Configure the Yotpo Integration

Follow these steps to configure the Yotpo integration in Studio.

1. Select **Settings** > **Integrations**.
2. Navigate to **Payment & Storefront**.
3. Select **+** next to **Yotpo**.
4. In **App Key**, enter your Yotpo App key.
5. Select **Save**.

## Using the Yotpo Integration

You can use your Yotpo integration to display customer reviews for your products.

- add a **Yotpo Reviews** section to a **Product** template. The reviews are automatically associated with the products that use the template. See [Adding a Yotpo Reviews component to a product template](#adding-a-yotpo-reviews-component-to-a-product-template).
- for all other page types, you must select **Edit** and associate the product with the component. See [Adding a Yotpo Reviews component to other pages](#adding-a-yotpo-reviews-component-to-other-pages).

### Adding a Yotpo Reviews component to a product template

To add a **Yotpo Reviews** component to a product detail page:

1. Select **Storefront** > **Templates**.
2. Select your product detail page template.
3. Navigate to the area of the page where you want to add the new section.
4. Select **Add Section**.
5. Select **Quotes & Reviews** > **Yotpo Reviews**. The reviews are automatically associated.

![yotpo reviews](/assets/studio/yotpo_reviews.png)

### Adding a Yotpo Reviews component to other pages

To add a **Yotpo Reviews** component to other page types:

1. Select **Content** > **Landing Pages** or **Website**.
2. Select the page where you want to add your **Yotpo Reviews** section. 
3. Navigate to the area of the page where you want to add the new section.
4. Select **Add Section**. 
5. Select **Quotes & Reviews** > **Yotpo Reviews**.
6. Select **Edit** and associate a product with the component to enable the collection of feedback for that specific product.

