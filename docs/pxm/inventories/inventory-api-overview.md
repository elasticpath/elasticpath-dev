---
title: Inventory API Overview
nav_label: Inventory API Overview
sidebar_position: 20
---

:::caution
The Inventory API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

The Inventory API allows you to manage stock for products at both organization and store levels. Each product keeps a history of inventory transactions, enabling easier stock auditing.

You can specify an initial stock level when you create a product. The stock is set to `0` by default.

:::note
However, you cannot create multiple inventories of the same organization-level product in different stores because no unique stock ID, specific to each store, is currently generated. Hence, when you try to manage inventory of the same product for different stores, you get an invalid product identifier error. 
:::

:::caution
There are a number of actions that happen to your inventory when checking out and paying for an order. For more information about the inventory process, see [Inventory](/docs/pxm/inventories/inventory).
:::

## The Stock object

### Attributes

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the stock. |
| `type` | `string` | The type represents the object being returned. |
| `total` | `integer` | The total amount of stock we have. |
| `available` | `integer` | The amount of stock available for purchase. |
| `allocated` | `integer` | The amount of paid for stock, also known as "reserved". |

### Sample Object

```javascript
{
  "data": {
    "id": "15fbeab0-75a3-4d6b-b23b-9db7455c077e",
    "type": "stock",
    "total": 100,
    "available": 90,
    "allocated": 10
  }
}
```

Each product has its own inventory and stock history. This is useful when auditing product movements across your project. The object response specifies the following inventory details:

- `total` = available + allocated products
- `available` = total products - number of products allocated
- `allocated` = amount of products reserved until the payment is confirmed

While creating a new product, if you have modified its inventory details, the object response will specify the updated values.

## The Stock Transaction object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for the stock transaction. |
| `type` | `string` | The type represents the object being returned. |
| `action` | `string` | The type of [action](/docs/pxm/inventories/update-inventory#action-types) performed by this transaction. |
| `product_id` | `string` | The product identifier that this stock transaction is for. |
| `quantity` | `integer` | The amount of stock affected by the stock transaction. |

## Managing Inventory for Organization Products

You can use this API to manage stock for products at both organization and store levels. However, if a product is associated with multiple catalogs of different stores, you will get an error when you try to create inventory for the product in multiple stores.
