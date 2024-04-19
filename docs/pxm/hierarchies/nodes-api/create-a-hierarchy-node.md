---
title: Create a Hierarchy Node
nav_label: Create a Node
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Node in a Hierarchy

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes
```

Creates a node in the specified hierarchy.

### Sort Order

You can sort the order of your nodes, regardless of where the nodes are in the hierarchy.

You can do this by adding a `meta` object to the body of your request and specifying a `sort_order` value.

```json
"meta": {
            "sort_order": 1
        }
```

The node with the highest value of `sort_order` is displayed first. For example, a node with a `sort_order` value of `3` appears before a node with a `sort_order` value of `2`.

- If you don’t provide `sort_order` when creating nodes, all child nodes in the response for [Get a Node’s Children](/docs/pxm/hierarchies/node-relationships-api/get-node-children) request are ordered by the `updated_at` time in descending order, with the most recently updated child node first.
- If you set `sort_order` for only a few child nodes, the child nodes with a `sort_order` value appear first and then other child nodes appear in the order of `updated_at` time.

You can also specify a `sort_order` when [creating a node relationship](/docs/pxm/hierarchies/node-relationships-api/create-node-child-relationships).

- If you create a node (**Node A**) with a `sort_order` and then you create a relationship for **Node A** with another node (**Node B**), the `sort_order` you specified when creating **Node A** is overwritten.
- If you create **Node A** and then you create a relationship with **Node B** but do not configure a `sort_order`, the `sort_order` you specified when you created **Node A** is not overwritten.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

| Name | Required | Type | Description                                                                                                                                                                                       |
| :--- | :--- | :--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type` | Required | `string` | Always: `node`                                                                                                                                                                                    |
| `attributes.name` | Required | `string` | A name for the node. Names must be unique among sibling nodes in the hierarchy, but otherwise a name can be non-unique. Cannot be null.                                                           |
| `attributes.description` | Optional | `string` | A description of the node.                                                                                                                                                                        |
| `attributes.slug` | Optional | `string` | A slug for the node. Slugs must be unique among sibling nodes in the hierarchy, but otherwise a slug can be non-unique.                                                                           |
| `attributes.locales` | Optional | `object` | The node details localized in the supported languages. For example, node names or descriptions.                                                                                                   |
| `meta` | Optional | `object` | The `sort_order` for each node. This value determines the order of nodes in the response for the [Get a Node’s Children](/docs/pxm/hierarchies/node-relationships-api/get-node-children) request. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
         "data": {
           "type": "node",
           "attributes": {
             "name": "Exotic Fruit",
             "description": "Exotic Fruit",
             "slug": "Exotic-Fruit"
           },
           "relationships": {
             "parent": {
               "data": {
                 "id": "e3a35410-94ed-435e-a006-d88b4eaaefbf",
                 "type": "node"
               }
             }
           },
           "meta": {
             "sort_order": 2
           }
         }
       }
```

## Response Example

`201 Created`

```json

    "data": {
        "type": "node",
        "id": "5992f585-feb9-46dd-af0d-ef76ac34ba88",
        "attributes": {
            "description": "Exotic Fruit",
            "name": "Exotic Fruit",
            "slug": "Exotic-Fruit"
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "related": "/hierarchies/046c5c21-4b28-4945-9a59-b100b7a5e533/nodes/5992f585-feb9-46dd-af0d-ef76ac34ba88/children"
                }
            },
            "parent": {
                "data": {
                    "type": "node",
                    "id": "e3a35410-94ed-435e-a006-d88b4eaaefbf"
                }
            },
            "products": {
                "data": [],
                "links": {
                    "related": "/hierarchies/046c5c21-4b28-4945-9a59-b100b7a5e533/nodes/5992f585-feb9-46dd-af0d-ef76ac34ba88/products"
                }
            }
        },
        "meta": {
            "created_at": "2022-06-08T13:18:51.172Z",
            "owner": "store",
            "sort_order": 2,
            "updated_at": "2022-06-08T13:18:51.172Z"
        }
    }
}
```
