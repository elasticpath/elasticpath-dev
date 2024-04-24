---
title: Update a Promotion
nav_label: Update a Promotion
sidebar_position: 12
---

:::note
You can re-enable an expired promotion by updating the end date to a future date. However, when you enable a promotion again, all codes previously attached to it are deleted to make sure that duplicate promotion codes do not exist on different promotions.
:::

## `PUT` Update a Promotion

```http
https://useast.api.elasticpath.com/v2/promotions/:id
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
| ---- | -------- | -------- | -------------------------------- |
| `id` | Required | `string` | The unique promotion identifier. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name                        | Required | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                      | Required | `string`  | "promotion".                                                                                                                                                                                                                                                                                                                                                                                |
| `id`                        | Required | `number`  | The unique promotion identifier.                                                                                                                                                                                                                                                                                                                                                            |
| `name`                      | Optional | `string`  | The name of your promotion.                                                                                                                                                                                                                                                                                                                                                                 |
| `description`               | Optional | `string`  | A description of your promotion.                                                                                                                                                                                                                                                                                                                                                            |
| `enabled`                   | Optional | `boolean` | `true` if enabled, `false` if not.                                                                                                                                                                                                                                                                                                                                                          |
| `start`                     | Optional | `string`  | The end time of the promotion datetime (yyyy-mm-dd, yyyy-mm-ddThh:mm:ss+hh:mm). The simpler format will start the promotion at 00:00 UTC of the datetime specified. If time is not specified, it will default to the time at which the request was created.                                                                                                                                 |
| `end`                       | Optional | `string`  | The end time of the promotion date and time (yyyy-mm-dd, yyyy-mm-ddThh:mm:ss+hh:mm). The simpler format starts the promotion at 00:00 UTC of the date and time specified. If time is not specified, it defaults to the time at which the request was created.                                                                                                                               |
| `max_applications_per_cart` | Optional | `integer` | Specifies the maximum number of application of a promotion per cart.                                                                                                                                                                                                                                                                                                                        |
| `min_cart_value`            | Optional | `array`   | Specifies an array of currency-value objects, `min_cart_value[].currency` and `min_cart_value[].amount`, that provide the minimum cart value required for the promotion to apply. You can add one or several value specifications in different currencies.                                                                                                                                  |
| `automatic`                 | Required | `boolean` | Specifies whether the promotion is applied automatically to the cart or a code is required to apply the promotion. The default setting is `false`. When this value is set `true`, a code is autogenerated. If this value is set `false`, you must create the code manually. For more information about creating codes, see the [Create Promotion Codes](/docs/commerce-cloud/promotions/promotion-codes/create-promotion-codes) section. |
| `max_discount_value`        | Optional | `array`   | Specifies an array of currency-value objects, `max_discount_value[].currency` and `max_discount_value[].amount`, that provides the maximum possible discount for the cart.                                                                                                                                                                                                                  |
| `schema`                    | Required | `object`  | Specifies the schema of the promotion. You can update the values in the schema object.                                                                                                                                                                                                                                                                                                      |

## Request Example

The following sample request extends the life of a promotion.

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/promotions/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
        "data": {
        "type":"promotion",
        "id": "PROMOTION_ID",
        "name": "Promo #1",
        "description": "Promotion (extended)",
        "enabled": true,
        "start":"2020-09-01",
        "end":"2020-12-31"
    }
}
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "promotion",
        "id": "7005b249-300b-4cf6-964e-e663278af218",
        "name": "Promo #1",
        "description": "Initial Promotion",
        "enabled": true,
        "promotion_type": "fixed_discount",
        "schema": {
            "currencies": [
                {
                    "currency": "USD",
                    "amount": 900
                },
                {
                    "currency": "GBP",
                    "amount": 1100
                }
            ]
        },
        "start": "2017-11-13T00:00:00Z",
        "end": "2019-11-13T00:00:00Z",
        "created_by": "seller@elasticpath.com",
        "updated_by": "another_seller@elasticpath.com",
        "created_at": "2018-05-10T15:25:21.164Z",
        "updated_at": "2018-05-10T15:26:18.203942092Z"
    }
}
```

## Errors

When extending the end date of an expired promotion with over 1000 codes, you will receive the following error response. In such cases, we recommend [duplicating the promotion](/docs/commerce-cloud/promotions/promotions-cm/overview#duplicating-promotions), allowing you to set the new end dates and create promotion codes as needed.

```json
{
    "errors": [
        {
            "status": 422,
            "source": "request",
            "title": "Unprocessable Entity",
            "detail": ""
        }
    ]
}
```
