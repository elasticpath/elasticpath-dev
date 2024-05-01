---
title: Catalog Rules
nav_label: Catalog Rules
sidebar_position: 10
---

:::caution
The Catalog API is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

If your store requires multiple catalogs, add catalog rules to control when a catalog is displayed. A catalog rule contains a catalog plus the criteria under which to display the catalog.

:::caution
You cannot create catalog rules for organization catalogs.
:::

You can use catalog rules to schedule a catalog to appear during a particular period, such as on a specific date or during summer. The catalog might offer different pricing during this period. The pricing depends on the associated price book.

The following scenarios provides a few examples for using catalog rules:

- **Multiple geographical regions**. Display different catalogs in different regions with suitable pricing or combine product hierarchies from two different regions to display in a third region.
- **Multiple channels**. Display different catalogs based on how a shopper accesses your store, such as through a mobile app or a web storefront.
- **Direct to business versus direct to customers**. Offer different products and prices for business customers versus retail customers.
- **Preferred accounts**. Offer special pricing to a group of users while displaying a standard price catalog to other users.
- **Preferred customers**. Offer special pricing to preferred customers while displaying a standard price catalog to all other shoppers.
- **Reward programs**. Enable reward programs where catalog prices drop after a certain spending level is reached.
- **Product sales**. Offer sale items for a limited time.
- **Standard pricing**. Display a default catalog to the shoppers who do not meet the criteria of the other catalog rules.

You can define a catalog rule with any of the following criteria:

- **Accounts**. List the accounts that should see a catalog. When a user has logged in with the account, they see the configured catalog.
- **Customers**. List the customers that should see a catalog. When the customer is logged in, they see the configured catalog.
- **Channel**. Specify a shopper experience, such as web storefront or mobile app. Set up the channel to retrieve the catalog from the catalog rule that matches that channel.
- **Other tags**. Create your own user-defined tags. For example, you might want to tag by regions or you might want to distinguish between business and consumer customers.

If a catalog rule has no criteria defined, it is the default catalog rule.

