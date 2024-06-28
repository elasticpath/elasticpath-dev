---
title: Creating Plans
nav_label: Creating Plans
sidebar_position: 20
---

The following steps describe creating a plan.

1. Log in to Commerce Manager.
2. Go to **SUBSCRIPTIONS** > **Plans**.
3. Select **Create New**
4. (Required) Configure the plan details.

    | Option      | Required | Description                      |
    |-------------|----------|----------------------------------|
    | Name        | Required | A name for the plan.             |
    | Description | Optional | A brief description of the plan. |

5. (Required) In **Subscription Cycle**, configure the subscription cycle. The subscription cycle determines how frequently customers are charged for their subscription, and how often their subscription is renewed. For example, if you select **Years** with a timeframe of **2** your customer receives a bill annually and the subscription plan continues for 2 years. From the drop-down list select either:

    - years
    - months
    - weeks
    - days

6. (Required) Enter a timeframe.
7. (Required) In **Plan Length**, specify the duration of the subscription.
8. (Required) In **End Behavior**, select:

   - **Roll Over**: If your plan rolls over, your customers pay regularly and repeatedly.
   - **Expire**: If your plan expires, customers pay for a subscription for a specified billing cycle.

9. (Optional) In **Trial Period**, specify a trial period. For example, if your billing cycle is months, and your trial period is **1** then the trial period is 1 month.
10. (Optional) In **Plan pricing**, you can provide a price for the cost of a plan, or provide a discount on the total cost for any of the products in an offering. Alternatively, you can apply pricing directly to your products. See [Repeat Products](/docs/commerce-manager/subscriptions/products/managing-products-cm). Choose one of the following options.

     | Option     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    |------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     | None       | There is no price for a plan. The product price is used. See [Repeat Products](/docs/commerce-manager/subscriptions/products/managing-products-cm).                                                                                                                                                                                                                                                                                                                              |
     | Percentage | The cost of a plan equates to the total value of all products within an offering, reduced by a percentage. Enter the percentage value. For example, if you specify **10**, a 10% discount is applied to the total value of all repeat products in an offering.                                                                                                                                                                                                                   |
     | Price      | You can specify a fixed price for all the repeat products or services in an offering. This allows you to provide a fixed price for all products in an offering, enabling those products to be offered at a discounted price. Enter a price for all the currencies you have configured for your store. See [Managing Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies). If the price includes tax, turn on the **Includes Tax** toggle. | 

11. (Required) In **Rules**, decide whether to:

    - **Allow customers to pause and resume their subscription if they are using this plan**: This enables your customers to stop and restart the plan. The default is **YES**.
    - **Allow customers to cancel their Subscription if they are using this plan**: This enables your customers to permanently cancel the plan. The default is **YES**.
12. Click **Save Plan**.
13. You can edit a plan at any time by selecting **...** > **Edit** on the plan you want to edit.

## Demo

<iframe class="vidyard_iframe" title="Getting Started with Elastic Path Subscriptions" src="//play.vidyard.com/7ydBC7uNBwmiAJyC6LUGiQ.html?" width="640" height="360" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
