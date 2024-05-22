---
title: Tax Items
nav_label: Tax Items
sidebar_position: 2
---

:::note
Tax items can be added and removed using [client_credentials](/docs/authentication/Tokens/client-credential-token) tokens. Only administrators with `client-credentials` are able to manage tax items.
:::

## The Tax Item object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this cart item. |
| `type` | `string` | `tax_item` |
| `name` | `string` | Denotes the name of this tax item. |
| `jurisdiction` | `string` | The jurisdiction in which this tax applies. |
| `code` | `string` | A tax code for this type of tax item. |
| `rate` | `float` | The tax rate as a decimal (20.5% -> 0.205). |

## Sample Object

```json
{
    "data": {
        "id": "003e2458-3415-4fd2-a10c-ed422bfac4bb",
        "type": "tax_item",
        "name": "Tax Name",
        "jurisdiction" : "UK",
        "code": "MYTAX01",
        "rate": 0.205
    }
}
```
