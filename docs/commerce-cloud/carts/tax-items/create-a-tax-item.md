---
title: Create a Tax Item
nav_label: Create a Tax Item
sidebar_position: 3
---

:::caution
Please note there is a soft limit of 5 unique tax items per cart item at any one time.
:::

## `POST` Create a Tax Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartID/items/:itemId/taxes
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type     | Description                                             |
| -------------- | -------- | -------- | ------------------------------------------------------- |
| `type`         | Required | `string` | This represents the type of object being returned.      |
| `name`         | Optional | `string` | The name of the tax item.                               |
| `jurisdiction` | Optional | `string` | The relevant tax jurisdiction.                          |
| `code`         | Optional | `string` | A unique tax code in this jurisdiction.                 |
| `rate`         | Required | `float`  | The tax rate represented as a decimal (12.5% -> 0.125). |

## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/carts/:cartID/items/:itemId/taxes \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer XXXX" \
    -d $ {
        "data": {
            "type": "tax_item",
            "name": "Tax Name",
            "jurisdiction" : "UK",
            "code": "MYTAX01",
            "rate": 0.2
        }
    }

```

### JavaScript SDK

```javascript
const itemId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const taxData = {
    type: "tax_item",
    name: "Tax Name",
    jurisdiction: "UK",
    code: "MYTAX01",
    rate: 0.2,
};

// Where `EPCC` is an authenticated client
await EPCC.Cart.AddItemTax(itemId, taxData);
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "003e2458-3415-4fd2-a10c-ed422bfac4bb",
        "type": "tax_item",
        "name": "Tax Name",
        "jurisdiction": "UK",
        "code": "MYTAX01",
        "rate": 0.2
    }
}
```

`422 Unprocessable Entity`

In this example, we skip passing `name` to fail validation.

```json
{
    "errors": [
        {
            "title": "Failed Validation",
            "detail": "The data.name field is required."
        }
    ]
}
```
