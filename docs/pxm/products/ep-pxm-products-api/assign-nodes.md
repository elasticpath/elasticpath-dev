---
title: Assign Products to Multiple Nodes
nav_label: Assign Products to Multiple Nodes
sidebar_position: 80
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Attach multiple nodes

```http
https://useast.api.elasticpath.com/pcm/products/attach_nodes
```

Assigns products to multiple hierarchies and their children nodes.

## Request Parameters

### Body

| Name       | Required | Type     | Description                               |
|:-----------|:---------|:---------|:------------------------------------------|
| `filter`   | Required | `string` | Filters applied to search for appropriate products. For more details on filtering, see [Filtering](/guides/Getting-Started/filtering) |
| `node_ids` | Required | `string` | A list of node UUIDs that you want to assign to the products. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

This request assigns the products that you have selected to multiple hierarchies and their children nodes.

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/products/attach_nodes \
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
         "nodes_attached": 3,
         "nodes_not_found": []
    }
}'
```

## Response Objects

| Name              | Description                                        |
|:------------------|:---------------------------------------------------|
| `nodes_attached`  | Number of nodes assigned to the products.          |
| `nodes_not_found` | A list of node UUIDs that could not be identified. |

## Related Resources

- [Assigning Products to Multiple Nodes](/docs/pxm/hierarchies/hierarchy#assigning-products-to-multiple-nodes)
