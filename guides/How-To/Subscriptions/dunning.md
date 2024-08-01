---
title: Implementing a Dunning Rule
nav_label: Implementing Dunning Rule
sidebar_position: 40
---

Dunning is the process of handling failed payment attempts. This is important for recovering revenue from failed payments, reduces customer churn and maintains cashflow. By implementing efficient dunning processes, you can enhance the financial health and operational efficiency of your business.

Subscriptions retries failed payments automatically. By default, payments are retried once a day for 10 days. You can decide whether to keep the subscription active or make the subscription inactive.

Alternatively, Subscriptions enables you to create a dunning rule that allows you to configure payment retry schedules. You can customize the timing and frequency of the payment retries. You can create as many dunning rules as you want but you can have only one default dunning rule.

This guide describe how to use the Subscriptions API to:

- Configure a dunning rule that defines:

    - the unit of time used to measure the intervals between payment attempts or retries is days.
    - the number of intervals to wait between each payment retry attempt is 2.
    - the number of times Subscriptions attempts payments retries before an action is taken is 10.
    - the action to take if payment is not successful is to close the subscription.
  
- Makes the dunning rule default.
- Lists your dunning rules.
- Demonstrates what happens when a payment fails.
- Demonstrates how subscribers can query their payments.
- Demonstrate how you can retrieve an invoice, check its status and resume an inactive subscription.
- Updates a dunning rule.
- Deletes a dunning rule from a store.

## Making Your API Calls

All API requests must contain a generated access token for authentication purposes. See [Making your first API call](/guides/How-To/Subscriptions/getting-started/developer-getting-started/first-api-call).

## Creating a Dunning Rule

Dunning rules must use a `fixed` strategy. This means payments are retried on a fixed schedule.

When an invoice is created, it immediately becomes eligible for payment by the next [payment run](/docs/api/subscriptions/jobs). If the first payment attempt fails then the invoice enters dunning. In subsequent payment runs, invoices are only considered for payment if they meet the criteria specified in the dunning rule you created.

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

You can retrieve a list of all your dunning rules.

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

Once the number of payment retries reaches the limit, the payment retries stop, resulting in the status of the invoice becoming unpaid.

### Retrieving a list of outstanding invoices

You can retrieve a list of outstanding invoices.

#### Request example

```json
curl --location 'https://euwest.api.elasticpath.com/v2/subscriptions/invoices?filter=eq(outstanding%2Ctrue)' \
--header 'Accept: application/json' \
--header 'Authorization: ••••••'
```

#### Response example

```json
{
    "data": [
        {
            "attributes": {
                "billing_period": {
                    "end": "2024-11-24T13:46:13.732Z",
                    "start": "2024-05-24T13:46:13.732Z"
                },
                "created_at": "2024-05-25T23:00:18.563Z",
                "invoice_items": [
                    {
                        "description": "Mint toothpaste",
                        "price": {
                            "amount": 0,
                            "currency": "",
                            "includes_tax": false
                        },
                        "product_id": "00000000-0000-0000-0000-000000000000"
                    }
                ],
                "number": 1,
                "outstanding": true,
                "payment_retries_limit_reached": false,
                "tax_required": true,
                "updated_at": "2024-05-25T23:00:18.563Z"
            },
            "id": "6a7b635a-4274-4da9-bef6-2046d205a5fe",
            "meta": {
                "owner": "store",
                "price": {
                    "amount": 0,
                    "currency": "",
                    "includes_tax": false
                },
                "proration_events": null,
                "subscriber_id": "9388d90a-eda3-4239-84ff-615a53e3f4f7",
                "subscription_id": "5eb2dd8b-aa76-43ed-9bea-f3fc6dd8cc8e",
                "timestamps": {
                    "created_at": "2024-05-25T23:00:18.563Z",
                    "updated_at": "2024-05-25T23:00:18.563Z"
                }
            },
            "type": "subscription_invoice"
        },
        {
            "attributes": {
                "billing_period": {
                    "end": "2024-05-24T13:46:13.732Z",
                    "start": "2023-11-24T13:46:13.732Z"
                },
                "created_at": "2024-03-31T00:00:11.431Z",
                "invoice_items": [
                    {
                        "description": "Mint toothpaste",
                        "price": {
                            "amount": 0,
                            "currency": "",
                            "includes_tax": false
                        },
                        "product_id": "00000000-0000-0000-0000-000000000000"
                    }
                ],
                "number": 1,
                "outstanding": true,
                "payment_retries_limit_reached": false,
                "tax_required": true,
                "updated_at": "2024-03-31T00:00:11.431Z"
            },
            "id": "cd350e15-6f52-4f04-814d-5a9b38c8e5f1",
            "meta": {
                "owner": "store",
                "price": {
                    "amount": 0,
                    "currency": "",
                    "includes_tax": false
                },
                "proration_events": null,
                "subscriber_id": "9388d90a-eda3-4239-84ff-615a53e3f4f7",
                "subscription_id": "5eb2dd8b-aa76-43ed-9bea-f3fc6dd8cc8e",
                "timestamps": {
                    "created_at": "2024-03-31T00:00:11.431Z",
                    "updated_at": "2024-03-31T00:00:11.431Z"
                }
            },
            "type": "subscription_invoice"
        }
    ],
    "links": {
        "first": "https://epcc-integration.global.ssl.fastly.net/v2/subscriptions/invoices?page%5Blimit%5D=25&page%5Boffset%5D=0",
        "last": null,
        "next": null,
        "prev": null
    }
}
```

### Resuming a subscription

If a subscriber then pays an outstanding invoice, you can then resume a subscription. 

#### Request example

```json
curl --location 'https://euwest.api.elasticpath.com/v2/subscriptions/subscriptions/5eb2dd8b-aa76-43ed-9bea-f3fc6dd8cc8e/states' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer 899319731156f3fffa099192cb7203e659885fd5' \
--data '{
  "data": {
    "type": "subscription_state",
    "attributes": {
      "action": "resume"
    }
  }
}'
```
#### Response example

`204 no content`

## Updating a Dunning Rule

You can update a dunning rule at any time. You only need to specify the attributes that you want to change. The new dunning rule is applied immediately.

### Request example

```json
curl --location --request PUT 'https://euwest.api.elasticpath.com/v2/subscriptions/dunning-rules/2b5d0580-baa1-45c3-93dc-d06bccca4884' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer 899319731156f3fffa099192cb7203e659885fd5' \
--data '{
  "data": {
    "id": "2b5d0580-baa1-45c3-93dc-d06bccca4884",
    "type": "subscription_dunning_rule",
    "attributes": {
      "payment_retry_unit": "week",
      "payment_retry_interval": 3
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
            "payment_retry_interval": 3,
            "payment_retry_type": "fixed",
            "payment_retry_unit": "week"
        },
        "id": "2b5d0580-baa1-45c3-93dc-d06bccca4884",
        "meta": {
            "owner": "store",
            "timestamps": {
                "created_at": "2024-07-22T12:33:29.995Z",
                "updated_at": "2024-07-22T15:12:56.435Z"
            }
        },
        "type": "subscription_dunning_rule"
    }
}
```

## Deleting a Dunning Rule

You can delete a dunning rule at any time. If a dunning rule is deleted then Subscriptions reverts to the configuration used if no dunning rule is set; payment is retried once a day for 10 days, in total 11 payments. You can decide what action to take after the Subscriptions has stopped retrying the payments.

### Request example

```json
curl --location --request DELETE 'https://euwest.api.elasticpath.com/v2/subscriptions/dunning-rules/2b5d0580-baa1-45c3-93dc-d06bccca4884' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer 899319731156f3fffa099192cb7203e659885fd5'
```

### Response example

`204 no content`