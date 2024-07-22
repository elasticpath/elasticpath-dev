---
title: Implementing Dunning
nav_label: Implementing Dunning
sidebar_position: 40
---

Dunning is the process of handling failed payment attempts. This is important for recovering revenue from failed payments, reduces customer churn and maintains cashflow. By implementing efficient dunning processes, you can enhance financial health and operational efficiency.

Subscriptions retries failed payments automatically. By default, payments are retried once a day for 10 days. You can decided whether to keep the subscription active or make the subscription inactive.

Alternatively, Subscriptions enables you to create a dunning rule that allows you to configure payment retry schedules. You can customize the timing and frequency of the payment retries. You can create as many dunning rules as you want but you can have only one default dunning rule.

This guide describe how to use the Subscriptions API to:

- Configure a dunning rule that defines:

    - sets this dunning rule to be the default for the store.
    - the unit of time used to measure the intervals between payment attempts or retries is days.
    - the number of intervals to wait between each payment retry attempt is 2.
    - the number of times Subscriptions attempts payments retries before an action is taken is 10.
    - the action to take if payment is not successful is to close the subscription.
  
- Make the dunning rule default.
- List your dunning rules.
- Demonstrate what happens when a payment fails.
- Demonstrate how subscribers can query their payments.
- Demonstrate how you can retrieve an invoice, check its status and resume an inactive subscription.
- Update a dunning rule.
- Delete a dunning rule from a store.

## Making Your API Calls

All API requests must contain a generated access token for authentication purposes. See [Making your first API call](/guides/How-To/Subscriptions/getting-started/developer-getting-started/first-api-call).

## Creating a Dunning Rule

Dunning rules must use a `fixed` strategy. This means payments are retried on a fixed schedule.

When an invoice is created, it immediately becomes eligible for payment by the next payment run. If the first payment attempt fails then the invoice enters dunning. In subsequent payment runs, invoices are only considered for payment if they meet the dunning rules you create.

You can specify that the dunning rule is no longer the default. You do not have to specify another rule to replace it. If you do remove the default dunning rule, the store defaults to the behavior that is followed when dunning is not enabled.

### Request example

```json
curl --location 'https://euwest.api.elasticpath.com/v2/subscriptions/dunning-rules' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: ••••••' \
--data '{
        "data": {
          "type": "subscription_dunning_rule",
          "attributes": {
            "default": true,
            "payment_retry_type": "fixed",
            "payment_retry_unit": "week",
            "payment_retry_interval": 2,
            "payment_retries_limit": 10,
            "action": "close"
          }
        }
 }'
```

### Response example

```json
{
    "data": {
        "attributes": {
            "action": "close",
            "default": true,
            "payment_retries_limit": 10,
            "payment_retry_interval": 2,
            "payment_retry_type": "fixed",
            "payment_retry_unit": "day"
        },
        "id": "2b5d0580-baa1-45c3-93dc-d06bccca4884",
        "meta": {
            "owner": "store",
            "timestamps": {
                "created_at": "2024-07-22T12:33:29.995Z",
                "updated_at": "2024-07-22T12:33:29.995Z"
            }
        },
        "type": "subscription_dunning_rule"
    }
}
```

## List dunning rules 

You can see retrieve a list of all your dunning rules.

### Request example

```json
curl --location 'https://euwest.api.elasticpath.com/v2/subscriptions/dunning-rules' \
--header 'Accept: application/json' \
--header 'Authorization: ••••••'
```

### Response example

```json
{
    "data": [
        {
            "attributes": {
                "action": "close",
                "default": false,
                "payment_retries_limit": 10,
                "payment_retry_interval": 2,
                "payment_retry_type": "fixed",
                "payment_retry_unit": "week"
            },
            "id": "7f2fcb64-9a88-4f35-b624-43109ba420ed",
            "meta": {
                "owner": "store",
                "timestamps": {
                    "created_at": "2024-07-22T12:58:59.725Z",
                    "updated_at": "2024-07-22T12:58:59.725Z"
                }
            },
            "type": "subscription_dunning_rule"
        },
        {
            "attributes": {
                "action": "close",
                "default": true,
                "payment_retries_limit": 10,
                "payment_retry_interval": 2,
                "payment_retry_type": "fixed",
                "payment_retry_unit": "day"
            },
            "id": "2b5d0580-baa1-45c3-93dc-d06bccca4884",
            "meta": {
                "owner": "store",
                "timestamps": {
                    "created_at": "2024-07-22T12:33:29.995Z",
                    "updated_at": "2024-07-22T12:55:36.129Z"
                }
            },
            "type": "subscription_dunning_rule"
        },
        {
            "attributes": {
                "action": "none",
                "default": false,
                "payment_retries_limit": 10,
                "payment_retry_interval": 1,
                "payment_retry_type": "fixed",
                "payment_retry_unit": "day"
            },
            "id": "85b85cb2-d20b-4d2e-8064-a60aaf151a86",
            "meta": {
                "owner": "store",
                "timestamps": {
                    "created_at": "2024-07-04T15:36:13.448Z",
                    "updated_at": "2024-07-04T15:45:13.585Z"
                }
            },
            "type": "subscription_dunning_rule"
        }
    ],
    "links": {
        "first": "https://epcc-integration.global.ssl.fastly.net/v2/subscriptions/dunning-rules?page%5Blimit%5D=25&page%5Boffset%5D=0",
        "last": null,
        "next": null,
        "prev": null
    }
}
```

## Managing Failed Payments


A payment fails and a subscription is closed.
A subscriber sees the failed payment and pays the bill.  You can then:
- retrieve the invoice
- resume the subscription.

## Updating a Dunning Rule

## Deleting a Dunning Rule
  Sometime later you want to update a ruleset, then new ruleset is applied.
  Sometime after that you decide to delete the ruleset from the store - goes back to global default.

