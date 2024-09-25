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
          "end": "2024-10-25T08:49:40.485Z",
          "start": "2024-09-25T08:49:40.485Z"
        },
        "created_at": "2024-09-25T08:50:34.210Z",
        "invoice_items": [
          {
            "description": "Classic road running shoes",
            "price": {
              "amount": 7647,
              "currency": "GBP",
              "includes_tax": true
            }
          }
        ],
        "manual_payment_pending": false,
        "number": 4,
        "outstanding": true,
        "payment_retries_limit_reached": false,
        "tax_required": false,
        "updated_at": "2024-09-25T08:50:34.210Z"
      },
      "id": "e5e23720-3277-4592-a7bb-8f2c54631593",
      "meta": {
        "owner": "store",
        "price": {
          "amount": 7647,
          "currency": "GBP",
          "includes_tax": true
        },
        "proration_events": null,
        "subscriber_id": "02330006-0c32-44e1-9a3e-42735941a626",
        "subscription_id": "0a55c0f9-6aa6-4b6f-813f-84cfeccc1733",
        "timestamps": {
          "created_at": "2024-09-25T08:50:34.210Z",
          "updated_at": "2024-09-25T08:50:34.210Z"
        }
      },
      "type": "subscription_invoice"
    },
    {
      "attributes": {
        "billing_period": {
          "end": "2024-10-25T08:46:39.424Z",
          "start": "2024-09-25T08:46:39.424Z"
        },
        "created_at": "2024-09-25T08:50:34.200Z",
        "invoice_items": [
          {
            "description": "Magazine",
            "price": {
              "amount": 1978,
              "currency": "EUR",
              "includes_tax": true
            }
          }
        ],
        "manual_payment_pending": false,
        "number": 3,
        "outstanding": true,
        "payment_retries_limit_reached": false,
        "tax_required": false,
        "updated_at": "2024-09-25T08:50:34.200Z"
      },
      "id": "e4fa172b-74de-4d73-b54f-6ff4923f6acf",
      "meta": {
        "owner": "store",
        "price": {
          "amount": 1978,
          "currency": "EUR",
          "includes_tax": true
        },
        "proration_events": null,
        "subscriber_id": "97faeacc-9e2e-4472-b04b-e711ee0411ef",
        "subscription_id": "d24b2105-cc3f-4510-8ca1-9dd4fcfc9ea1",
        "timestamps": {
          "created_at": "2024-09-25T08:50:34.200Z",
          "updated_at": "2024-09-25T08:50:34.200Z"
        }
      },
      "type": "subscription_invoice"
    },
    {
      "attributes": {
        "billing_period": {
          "end": "2024-10-25T08:46:10.463Z",
          "start": "2024-09-25T08:46:10.463Z"
        },
        "created_at": "2024-09-25T08:50:34.187Z",
        "invoice_items": [
          {
            "description": "Magazine",
            "price": {
              "amount": 1720,
              "currency": "EUR",
              "includes_tax": true
            }
          }
        ],
        "manual_payment_pending": false,
        "number": 2,
        "outstanding": true,
        "payment_retries_limit_reached": false,
        "tax_required": false,
        "updated_at": "2024-09-25T08:50:34.187Z"
      },
      "id": "1a0290e5-9e44-4efe-b47f-0d595e70cced",
      "meta": {
        "owner": "store",
        "price": {
          "amount": 1720,
          "currency": "EUR",
          "includes_tax": true
        },
        "proration_events": null,
        "subscriber_id": "d7fe9955-63dd-4c00-8a72-f10e178a8e9b",
        "subscription_id": "9d938d61-b86a-4e19-8920-da60bfcbe658",
        "timestamps": {
          "created_at": "2024-09-25T08:50:34.187Z",
          "updated_at": "2024-09-25T08:50:34.187Z"
        }
      },
      "type": "subscription_invoice"
    },
    {
      "attributes": {
        "billing_period": {
          "end": "2024-10-25T08:45:29.483Z",
          "start": "2024-09-25T08:45:29.483Z"
        },
        "created_at": "2024-09-25T08:50:34.170Z",
        "invoice_items": [
          {
            "description": "Magazine",
            "price": {
              "amount": 1140,
              "currency": "EUR",
              "includes_tax": false
            }
          }
        ],
        "manual_payment_pending": false,
        "number": 1,
        "outstanding": true,
        "payment_retries_limit_reached": false,
        "tax_required": true,
        "updated_at": "2024-09-25T08:50:34.170Z"
      },
      "id": "bab99a26-8cbe-4b00-bd04-e6434358ed86",
      "meta": {
        "owner": "store",
        "price": {
          "amount": 1140,
          "currency": "EUR",
          "includes_tax": false
        },
        "proration_events": null,
        "subscriber_id": "a87b7ff5-df96-471d-9555-76887bcfac58",
        "subscription_id": "2a7024d6-3e2a-4943-9663-65b6629c1072",
        "timestamps": {
          "created_at": "2024-09-25T08:50:34.170Z",
          "updated_at": "2024-09-25T08:50:34.170Z"
        }
      },
      "type": "subscription_invoice"
    }
  ]
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