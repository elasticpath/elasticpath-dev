---
title: Implementing Dunning
nav_label: Implementing Dunning
sidebar_position: 40
---

Dunning is the process of handling failed payment attempts. This is important for recovering revenue from failed payments, reduces customer churn and maintains cashflow. By implementing efficient dunning processes, you can enhance financial health and operational efficiency.

Subscriptions enables you to create a dunning rule that allows you to configure payment retry schedules. Subscriptions retries failed payments automatically. You can customize the timing and frequency of the payment retries.

## Scenario

Configure a dunning rule that configures:

- the unit of time used to measure the intervals between payment attempts or retries is days.
- the number of intervals to wait between each payment retry attempt is 2.
- the number of times Subscriptions attempts payments retries before an action is taken is 10.
- the action to take if payment is not successful is to close the subscription.

## Creating a Dunning Rule

You can create a dunning rule 

1. 

Create a dunning rule.
Make them default
List the dunning rules to see they are OK.
A payment fails and a subscription is suspended.
A subscriber sees the failed payment and pays the bill.  You can then:
- retrieve the invoice
- resume the subscription.
  Sometime later you want to update a ruleset, then new ruleset is applied.
  Sometime after that you decide to delete the ruleset from the store - goes back to global default.

