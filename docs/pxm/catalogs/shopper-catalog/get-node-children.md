---
title: Get a Nodeʼs Children
nav_label: Get a Nodeʼs Children
sidebar_position: 90
---

## `GET` Get a Nodeʼs Children

```http
https://useast.api.elasticpath.com/catalog/nodes/:nodeId/relationships/children
```

Returns the child nodes for a node in the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

You can see which parent nodes a node is associated with in the `bread_crumb` metadata for each node. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

The response lists the products associated with the nodes. If products are [curated](/docs/pxm/products/curating-products), they are displayed in `curated_products`. Product curation allows you to promote specific products within each of your hierarchies, enabling you to create unique product collections in your storefront. 

- If you don't provide any `curated_products`, products are listed by their `updated_at` time in descending order, with the most recently updated product first.
- If you configure `curated_products` for only a few products, the curated products are displayed first and the other products are displayed in the order of `updated_at` time.
- You can only curate 20 products or less. You cannot have more than 20 curated products.
- A product that is curated has the `"curated_product": true` attribute displayed.
- If a curated product is removed from a node, the product is also removed from the `curated_products` list. 

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `nodeId` | Required | `string` | The unique identifier of a hierarchy node. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status are not included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/guides/Getting-Started/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting-Started/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator  | Description                                                                                                                                       | Attributes            | Example |
| --- |---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------| --- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. For `tags`, you can specify more than one. | `name`, `slug`, `tags` | `filter=eq(name,some-name)` |
| `in`      | Checks if the values are included in the specified string. If they are, the condition is true. For `tags`, you can specify more than one.                                                   | `Id`, `tags`          | `filter=in(id,9214719b-17fe-4ea7-896c-d61e60fc0d05,e104d541-2c52-47fa-8a9a-c4382480d97c,65daaf68-ff2e-4632-8944-370de835967d)` |

For more information, see [Filtering](/guides/Getting-Started/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.
 
## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "EP-Channel: web store" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T21:48:32.874Z",
                "description": "All stoves and ovens",
                "name": "Ranges",
                "slug": "Ranges-MA1",
                "curated_products": [
                  "57ddfc7c-81c1-4855-88a5-2dd9d2055897",
                  "42d940f9-fe26-4eed-9070-5e00234febe5",
                  "2ab84aa8-232c-4199-8cc5-e1554ff58884"
                ],
                "updated_at": "2021-03-05T21:48:32.874Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
                "bread_crumb": [
                  "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                  "94b882fa-85de-470e-acb3-5b11358e02de",
                  "a96a898b-444c-40b6-9c27-5fc74d08e685"
                ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec/relationships/products"
                    }
                }
            }
        },
        {
            "id": "39f96a3f-5577-473f-a263-f21fb2013469",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-08T17:50:14.629Z",
                "description": "All cooling units for food",
                "name": "Refrigerators",
                "slug": "Refrigerators-MA1",
                "updated_at": "2021-03-08T17:50:14.629Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "meta": {
              "bread_crumb": [
                  "e5a64eae-56c2-48cd-b8b1-f5d3be734d52"
              ]
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/children"
                    }
                },
                "hierarchy": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "hierarchy"
                    },
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "parent": {
                    "data": {
                        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/39f96a3f-5577-473f-a263-f21fb2013469/relationships/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children?page[offset]=0&page[limit]=25&",
        "last": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children?page[offset]=0&page[limit]=25&",
        "self": "/catalog/nodes/0e119de2-5fb0-4bca-9b84-b3fc6c903007/relationships/children"
      }
}
```
