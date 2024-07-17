---
title: Overview
nav_label: Overview
sidebar_position: 10
---

Proration is the adjustment of charges or credits on a subscribers account based on the amount of time a service is used. Proration ensures that subscribers are only charged for the actual time they use the service, whether they upgrade, downgrade, start, or cancel their subscription partway through a billing cycle. This means fair billing for your subscribers and provides you with the flexibility to change your subscribers subscriptions at any time.

Proration occurs for:

- Product additions/deletions: If a subscriber adds or removes products to their subscription in the middle of a billing cycle, proration adjusts the charges to reflect the product changes.
- Plan upgrades/downgrades: If a subscriber changes their plan in the middle of a billing cycle, proration adjusts the charges to reflect the time spent on each plan.
- Service cancellation: If a subscriber cancels a subscription before the end of a billing cycle, they may receive a prorated refund for the unused portion of the subscription.
- Mid-cycle subscription: If a subscriber starts a subscription in the middle of a billing cycle, they are charged a prorated amount for the remaining days in the billing cycle.
There are several scenarios when implementing proration policies.

There are several scenarios when implementing proration policies.

- You may want one policy for multiple offerings because only some subscriptions need prorating.
- You may want a default proration policy for your store.
- You may want several policies for different offerings.

In Subscriptions, charges only prorate by day. As soon as a subscriber changes their subscription, a manual billing run is triggered and an invoice is generated with the new price on the next billing run and the difference in price is prorated over days.

By default, proration is not enabled for Subscriptions. Once you have applied a proration policy to an offering, proration is enabled automatically. See [Creating Proration Policies](/docs/commerce-manager/subscriptions/dunning-proration/proration/creating-proration).


