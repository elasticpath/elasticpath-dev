---
title: Overview
nav_label: Overview
sidebar_position: 10
---

You can use plans to model your subscription. Plans are a set of rules and conditions that manage the provision of repeat products in an offering. 

- **Subscription Cycles** - Plans specify the frequency at which your customer is billed – yearly, monthly, or weekly. See [Billing Frequency](#billing-cycles).
- **Trial Periods** - Plans specify any trial periods. See [Trial Periods](#trial-periods).
- **Recurring Payments** - Plans specify if the subscription rolls over, (customers pay regularly and repeatedly), or expired (customers pay for a subscription for a specified billing cycle). See [Recurring Payments](#recurring-payments).
- **Pricing** - Plans may also specify whether a discount is offered and specify the timeframe during which the discount is available to your customers. See [Plan Pricing](#plan-pricing).
      
You create plans based on your business requirements. Once the plans are available, you can associate the repeat products and plans in an offering. You can combine and reuse plans in your offerings. Offerings can contain any combination of products and plans. For example, your company provides customized meal boxes; you can create different subscription plans, like weekly or monthly meal boxes at specific prices. See [Creating a Plan](#creating-a-plan).

## Subscription Cycles

You can configure the subscription cycle when creating a plan. A plan's subscription cycle is determined by its subscription interval and frequency, For example, a customer with a monthly subscription set to cycle on the 2nd of the month is always billed on the second. If you do not configure a specific day or month day, then the plan is cycled from the date a subscription becomes active.

## Trial Periods
      
You can configure a trial period when creating a plan. For example, if your billing cycle is months, and your trial period is **1** then the trial period is 1 month. The trial period becomes active as soon as a subscription becomes active. When creating a subscription with a trial period, no payment method is required for the customer. An immediate invoice is still created, but with a price of zero.
      
When a trial period ends, Subscriptions automatically generates an invoice.

## Plan Pricing

You can provide a price for the total cost of a plan, or, provide a discount on the total cost of any products within an offering. For example, you can configure a percentage discount on the total cost of any products within an offering.

You can configure a total price for all the products in an offering. This is useful, as it allows you to provide a fixed price for all products in an offering, enabling these products to be offered at a discounted price. You can enter a price for all the currencies you have configured for your store. See [Managing Currencies](/docs/commerce-manager/product-experience-manager/currencies/manage-currencies).

Alternatively, instead of configuring pricing on a plan, you can set individual prices for a product when creating your products. See [Repeat Products](/docs/commerce-manager/subscriptions/products/managing-products-cm).

## Recurring Payments

There are two types of recurring payments:

- **Roll Over** - customers pay regularly and repeatedly.
- **Expire** - customers pay for a subscription for a specified billing cycle.
