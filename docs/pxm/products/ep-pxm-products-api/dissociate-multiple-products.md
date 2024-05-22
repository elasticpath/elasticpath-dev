---
title: Dissociate Products from Multiple Nodes
nav_label: Dissociate Products from Multiple Nodes
sidebar_position: 90
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Detach multiple nodes

```http
https://useast.api.elasticpath.com/pcm/products/detach_nodes
```

Dissociates products from multiple hierarchies and their children nodes.

## Request Parameters

### Body

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `filter`   | Required | `string` | Filters applied to search for appropriate products. For more details on filtering, see [Filtering](/guides/Getting-Started/filtering). |
| `node_ids` | Required | `string` | A list of node UUIDs that you want to dissociate from the products. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

This request dissociates the products that you have selected from multiple hierarchies and their children nodes.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products/detach_nodes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "filter": "eq(sku,book)",
        "node_ids": ["123"]
      }
     }
```

## Response Example

`200 OK`

```json
{
  "meta": {
    "nodes_detached": 1,
    "nodes_not_found": []
  }
}
```

## Response Objects

| Name              | Description                                        |
|:------------------|:---------------------------------------------------|
| `nodes_detached`  | Number of nodes dissociated from the products.     |
| `nodes_not_found` | A list of node UUIDs that could not be identified. |

## Related Resources

- [Dissociate products from multiple nodes](/docs/pxm/hierarchies/hierarchy#dissociating-products-from-multiple-nodes)
