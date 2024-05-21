---
title: Create Promotion codes
nav_label: Create Promotion codes
sidebar_position: 2
---

:::note
When a promotion expires, the promotion codes attached to the promotion automatically become invalid. However, when you re-enable the expired promotion, the promotion codes attached to the promotion are deleted.
:::

## `POST` Create Promotion Codes

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes
```

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `id` | Required | `string` | The unique promotion identifier. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type      | Description                          |
|:---------------|:---------|:----------|:-------------------------------------|
| `type`         | Required | `string`  | Specifies the type of the resource. The type of resource for promotions is `promotion_codes`. |
| `codes`        | Required | `array`   | Specifies the code details in an array of objects. |
| `codes[].code` | Required | `string`  | Specifies the string to use as a code for the promotion. |
| `codes[].uses` | Optional | `integer` | Specifies the number of times the code can be used. If no value is set, the customer can use the code any number of times. |
| `codes[].user` | Optional | `string`  | Specifies a string that specifies the users who can use the code. You can use the customer object ID or an array of customer object IDs. For more information, see the [Create a customer](/docs/customer-management/customer-managment-api/create-a-customer) section. Additionally, you could pass any identifying string to the promotions service that identifies a user. |
| `consume_unit` | Optional | `string`  | Specifies whether the code is applied to a line item or cart. The options are `per_item` or `per_cart`. The default setting is `per_cart`, which is applied at cart level. The `per_item` setting specifies how many times a buyer can use a promotion code on promotion items in a cart. For example, in a store that offers 50% off on SKU1, but limits the maximum usage of the promotion code to two, buyer can apply the promotion to SKU1 up to 2 times if cart has two quantities of SKU1. The third SKU1 is sold for regular price. The code usage is applied at checkout. You must set the `automatic` setting to `false` and create a code for this promotion to work. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/promotions/:id/codes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data":{
        "type":"promotion_codes",
        "codes": [
      {
        "code": "2uses",
        "uses": 2,
        "consume_unit": "per_item"
      }
    ]
  }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "type": "promotion",
        "id": "451c7bd1-93c1-49eb-a98f-182f95144b8f",
        "parent_id": "451c7bd1-93c1-49eb-a98f-182f95144b8f",
        "name": "Item percent discount promotion example",
        "description": "50% off for SKU1",
        "enabled": true,
        "current": true,
        "promotion_type": "item_percent_discount",
        "schema": {
            "targets": [
                "SKU1"
            ],
            "percent": 50,
            "target_catalogs": [
                "{{catalogId}}"
            ],
            "exclude": {
                "targets": null
            }
        },
        "start": "2000-01-01T00:00:00Z",
        "end": "2100-01-01T00:00:00Z",
        "created_by": "seller@elasticpath.com",
        "updated_by": "another_seller@elasticpath.com",
        "meta": {
            "timestamps": {
                "created_at": "2022-09-23T15:02:40.945Z",
                "updated_at": "2022-09-23T15:02:40.945Z"
            }
        }
    }
}
```
