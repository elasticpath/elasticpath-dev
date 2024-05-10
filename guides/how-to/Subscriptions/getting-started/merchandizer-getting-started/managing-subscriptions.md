---
title: Managing Subscriptions
nav_label: Managing Subscriptions
sidebar_position: 20
---

You can use Commerce Manager to create and manage your subscriptions. 

## Best Practices

The following steps describe the best practices for creating an offering.

1. Create your repeat products. The products and services are what you want to offer in a subscription.
1. Create your plans. Plans are the rules that govern your subscription, for example, delivery frequency, the quantity and any discount. You can combine and reuse plans for as many products as you want, making it quick and easy to create your subscription offerings.
1. Create your offerings. Offerings are the products and plans that a customer can choose. An offering can consist of many combinations of products or plans, depending on the products and services you offer.

## Scenario

In this scenario, an online streaming service organization has different services available for subscription, such as Standard Definition Streaming, High-Definition Streaming, and 4K Streaming; each service provides a specific level of video quality. The following steps describe how to:

1. Create a product for 4K streaming.
2. Create 2 plans, **Standard with adverts** and **Standard**.
3. Create an offering for customers that combines the 4K streaming product with the two plans.

## Creating a Product

In Commerce Manager, you can create the products and services that you want to offer in a subscription. The following steps describe how to create a **4k Streaming** product, including a description and a SKU.

:::note
Select **Product Preview** at any time to view a snapshot of your product or service.
:::

1. Log into Commerce Manager. 
2. Go to **SUBSCRIPTIONS** > **Repeat Products**.
3. Select **Create New**.
4. In **Name**, enter **4K Streaming**. This the product name to display to customers.
5. In **Description**, enter the following description to display to customers:

   What is 4K Streaming? It's the highest resolution available with excellent picture quality and crisp, clear details. 4K Streaming elevates your viewing experience to the next level. 
  
6. In **SKU**, enter **77012025**. This is an identifier for the product.

![getting started with products](/assets/getting_started_sub_products.png)

For more information about product media and pricing, see [Repeat Products](https://beta.elasticpath.dev/docs/commerce-manager/subscriptions/products/creating-products).

## Creating Plans

You can use plans to model your subscription. Plans are a set of rules and conditions that manage the provision of repeat products in an offering. You can combine and reuse plans for as many products as you want, making it quick and easy to create your subscription offerings.

The following steps describe how to create the **Standard with Adverts** plan.

- The subscription cycle is monthly and customers are billed on the 1st of the month.
- The plan length is 12 months and rolling. In other words, customers pay regularly and repeatedly, until the plan is cancelled.
- the plan has a fixed price.

To create the plan:

1. Go to **SUBSCRIPTIONS** > **Plans**. 
2. Select **Create New**.
3. In **Name**, enter **Standard with adverts**. This is the plan name to display to customers.
4. In **Description**, enter the following description to display to customers:

   Our Standard with Adverts plan allows you to enjoy movies and TV shows at a lower price. 

5. In **Subscription Cycle**, select **Months**.
6. Select **Choose a specific day of the month to bill customers**, select **1st** from the list.
7. In **Plan Pricing** select **Price** from the list.
8. For USD, enter a price of $6.99.
9. Expand **Rules**.
10. For **Allow customers to pause and resume their subscription if they are using this plan**, select **YES**.
11. For **Allow customers to cancel their subscription if they are using this plan**, select **YES**.

The following steps describe how to create the **Standard** plan. This is the same as the **Standard with Adverts** plan, apart from the price.

1. Go to **SUBSCRIPTIONS** > **Plans**.
2. Select **Create New**.
3. In **Name**, enter **Standard**. This is the plan name to display to customers.
4. In **Description**, enter the following description to display to customers:

   Our Standard plan allows unlimited ad-free movies, TV shows, and mobile games. 

5. In **Subscription Cycle**, select **Months**.
6. Select **Choose a specific day of the month to bill customers**, select **1st** from the list.
7. In **Plan Pricing** select **Price** from the list.
8. For USD, enter a price of $15.99.
9. Expand **Rules**.
10. For **Allow customers to pause and resume their subscription if they are using this plan**, select **YES**.
11. For **Allow customers to cancel their subscription if they are using this plan**, select **YES**.

![getting started with plans](/assets/getting_started_sub_plans.png).

For more information about plan pricing and trial periods, see [Plans](https://beta.elasticpath.dev/docs/commerce-manager/subscriptions/subscription-plans/creating-plans).

## Creating an Offering

Offerings can contain any combination of products and plans.

The following steps describe how to create an offering that combines the **4k Streaming** product with the **Standard with Adverts** and **Standard** plans.

1. Go to **SUBSCRIPTIONS** > **Offerings**.
2. In **Offering Details**, select **Name**. Enter **Dohi** as the name to display to your customers.
3. In **Description**, enter the following description to display to your customers: 

   Enjoy 60K+ movies and TV series. Choose the plan that's right for you. 

4. In **Manage Products**, select **Attach Product**.
5. Select **+** next to **4K Streaming**.

![adding a product to an offering](/assets/offering_products.png)

6. In **Manage Plans**, select **Attach Plan**.
7. Select **+** next to **Standard** and **Standard with Adverts**.

   ![adding plans to an offering](/assets/offering_plans.png)

8. Select **Save Offering**.

## Next steps

You can now quickly and easily create a new offering for a new product using the same plans.

1. Create a new product for high-definition video.
2. Create an offering.
   - Attach the new product
   - Attach the plans you previously created.
