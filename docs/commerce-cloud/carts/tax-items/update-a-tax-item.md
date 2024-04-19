---
title: Update a Tax Item
nav_label: Update a Tax Item
sidebar_position: 4
---

## `PUT` Update a Tax Item

```http
https://useast.api.elasticpath.com/v2/carts/:cartId/items/:itemId/taxes/:taxitemId
```

## Parameters

### Path parameters

| Name             | Required | Type     | Description                         |
|:-----------------|:---------|:---------|:------------------------------------|
| `itemId`         | Required | `string` | The unique identifier of the item.   |
| `taxitemId`      | Required | `string` | The unique identifier of the tax item. |

### Headers

| Name             | Required | Type     | Description                         |
|:-----------------|:---------|:---------|:------------------------------------|
| `Authentication` | Required | `string` | Authentication token to track down who is emptying our stocks. |

### Body

| Name           | Required | Type     | Description                           |
|:---------------|:---------|:---------|:--------------------------------------|
| `type`         | Required | `string` | This represents the type of the object being returned. |
| `name`         | Optional | `string` | A new name for the tax.               |
| `jurisdiction` | Optional | `string` | A new jurisdiction for this tax.      |
| `code`         | Optional | `string` | A new unique code for the tax in this jurisdiction. |
| `rate`         | Optional | `number` | A new tax rate, represented as a decimal (12.5% -> 0.125). |

## Request Examples

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/carts/:cartId/items/:itemId/taxes/:taxID \
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
const taxItemId = "08c53828-bf85-460f-9a31-985547e0e567";
const taxData = {
    type: "tax_item",
    name: "Tax Name",
    jurisdiction: "UK",
    code: "MYTAX01",
    rate: 0.2,
};

// Where `EPCC` is an authenticated client
await EPCC.Cart.UpdateItemTax(itemId, taxItemId, taxData);
```

## Response Example

`200 OK`

Tax item successfully updated.

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
