---
title: Update a Hierarchy Node
nav_label: Update a Node
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Hierarchy Node

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId
```

Updates the specified node in a hierarchy. You can do a partial update, where you specify only the field value to change.

### Sort Order

You can sort the order of your nodes, regardless of where the nodes are in the hierarchy.

You can do this by adding a `meta` object to the body of your request and specifying a `sort_order` value.

```json
"meta": {
            "sort_order": 1
        }
```

The node with the highest value of `sort_order` is displayed first. For example, a node with a `sort_order` value of `3` appears before a node with a `sort_order` value of `2`.

- If you don’t provide `sort_order` when creating nodes, all child nodes in the response for [Get a Node’s Children](/docs/api/pxm/products/get-all-node-children) request are ordered by the `updated_at` time in descending order, with the most recently updated child node first.
- If you set `sort_order` for only a few child nodes or not all, the child nodes with a `sort_order` value appear first and then other child nodes appear in the order of `updated_at` time.

You can also specify a `sort_order` when [creating a node relationship](/docs/pxm/hierarchies/node-relationships-api/create-node-child-relationships).

- If you update a node (**Node A**) with a `sort_order` and then you create a relationship for **Node A** with another node (**Node B**), the `sort_order` you specified when updating **Node A** is overwritten.
- If you have updated **Node A** and then you create a relationship with **Node B** but do not configure a `sort_order`, the `sort_order` you specified when you updated **Node A** is not overwritten.

## Curating Products in a Node

You can curate the products in a node. Product curation allows you to promote specific products within each node of your hierarchies, enabling you to create unique product collections in your storefront.  For example, you may find you have an abundance of cotton T-Shirts and you want to promote these products to the top of the product list. When a shopper navigates to **T-shirts**, the cotton T-Shirts are displayed first. 

You can do this by adding a `curated_products` attribute to the body of your request and adding an array of product IDs to the attribute. You should add the products IDs in the order you want them to be displayed in your node. The first product ID is displayed first in the product list.

```json
{
    “data”: {
            “type”: “product”,
            “attributes”: {
            /*** other product attributes ommitted ***/
               "curated_products": [
                   "c166dabf-eb42-4364-98a6-3802e0bb7582",
                   "c166dabf-eb42-4364-98a6-3802e0bb7582",
                   "7b8a1cac-bfe0-4ae9-90b1-c7a1393cccc5"
               ]
           }
      }
 }
```

- You can only curate 20 products or less. You cannot have more than 20 curated products.
- The product IDs you provide must exist in the specified node.
- If a curated product is removed from a node, the product is also removed from the `curated_products` list.

Once you have curated the products in a node, you can use the [get node productss](/docs/pxm/hierarchies/node-relationships-api/get-node-products) endpoint to retrieve a list of curated products.

You can then display your curated products in your catalogs using the following catalog endpoints.

- [Get a node in your latest catalog release](/docs/pxm/catalogs/catalog-latest-release/get-a-node-in-a-release).
- [Get a node in a catalog](/docs/pxm/catalogs/shopper-catalog/get-a-node).
- [Get all nodes in your latest catalog release](/docs/pxm/catalogs/catalog-latest-release/get-all-nodes-in-a-release).
- [Get all nodes in a catalog](/docs/pxm/catalogs/shopper-catalog/get-all-nodes).
- [Get node children in your latest catalog release](/docs/pxm/catalogs/catalog-latest-release/get-node-children-in-a-release).
- [Get node children in a catalog](/docs/pxm/catalogs/shopper-catalog/get-node-children).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

Specify whichever `attributes` you want to change. The values of the other `attributes` remain the same.  If the `attributes` section is empty, the node is not updated.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `node` |
| `id` | Required | `string` | The unique identifier of the node. Must match the node ID specified in the request path. |
| `attributes.name` | Optional | `string` | An updated name. Names must be unique among sibling nodes in the hierarchy, but otherwise names can be non-unique. Cannot be null. |
| `attributes.description` | Optional | `string` | An updated description. |
| `attributes.slug` | Optional | `string` | An updated slug. Slugs must be unique among sibling nodes in the hierarchy, but otherwise slugs can be non-unique. |
| `attributes.curated_products` | Optional | [`string`](/docs/pxm/hierarchies/hierarchies-api/hierarchies-api-overview#the-node-object) | The curated products for a node. See [Curating Products in a Node](#curating-products-in-a-node). |
| `attributes.locales`          | Optional | [`object`](/docs/pxm/hierarchies/hierarchies-api/hierarchies-api-overview#the-node-object) | The product details localized in the supported languages. For example, product names or descriptions. |
| `meta` | Optional | `object` | The `sort_order` for each node. This value determines the order of nodes in the response for the [Get a Node’s Children](/docs/api/pxm/products/get-all-node-children) request. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/d167d384-d2cf-4d05-ad41-6fc567855765 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "node",
          "id": "84a7792b-cc6e-4ad7-a164-ef44d082f1ee",
                "attributes": {
                    "description": "Moisturizers improve skin barrier repair, maintain skin's integrity and appearance by acting as humectants,      emollients, and occlusives, each with its own mechanism of action.",
                    "curated_products": [
                        "adb72fb0-6b26-4cb5-bdcb-717cc6bb3f93",
                        "e104d541-2c52-47fa-8a9a-c4382480d97c",
                        "07b8fcb2-2fc4-4148-9a2d-b83af96de2cd"
                    ],
                    "locales": {
                        "fr-FR": {
                            "name": "hydratant pour peau grasse",
                            "description": "Les hydratants améliorent la réparation de la barrière cutanée, maintiennent l'intégrité et l'apparence de la peau en agissant comme humectants, émollients et occlusifs, chacun ayant son propre mécanisme d'action."
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

`200 OK`
```json
{
  "data": {
    "type": "node",
    "id": "84a7792b-cc6e-4ad7-a164-ef44d082f1ee",
    "attributes": {
        "curated_products": [
            "adb72fb0-6b26-4cb5-bdcb-717cc6bb3f93",
            "e104d541-2c52-47fa-8a9a-c4382480d97c",
            "07b8fcb2-2fc4-4148-9a2d-b83af96de2cd"
        ],
        "description": "Moisturizers improve skin barrier repair, maintain skin's integrity and appearance by acting as humectants, emollients, and occlusives, each with its own mechanism of action.",
            "locales": {
               "fr-FR":
                  "name": "hydratant pour peau grasse",
                  "description": "Les hydratants améliorent la réparation de la barrière cutanée, maintiennent l'intégrité et l'apparence de la peau en agissant comme humectants, émollients et occlusifs, chacun ayant son propre mécanisme d'action."
               }
      },
        "name": "Moisturizer",
        "slug": "moisturizer",
      
    },
    "relationships": {
      "children": {
        "data": [],
        "links": {
                   
        }
      },
      "products": {
        "data": [],
        "links": {
          "related": "/hierarchies/af8ae0b8-e265-4fb9-8f7c-48a584af89bc/nodes/84a7792b-cc6e-4ad7-a164-ef44d082f1ee/products"
        }
      }
    },
    "meta": {
      "created_at": "2022-06-27T14:35:59.285Z",
      "owner": "store",
      "sort_order": 2,
      "updated_at": "2022-11-21T11:46:56.696Z"
    }
  }
```
