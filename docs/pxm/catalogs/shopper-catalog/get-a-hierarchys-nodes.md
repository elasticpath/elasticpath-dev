---
title: Get a Hierarchyʼs Nodes
nav_label: Get a Hierarchyʼs Nodes
sidebar_position: 60
---

## `GET` Get the Nodes in a Hierarchy

```text
https://useast.api.elasticpath.com/catalog/hierarchies/:hierarchyId/nodes
```

Returns all the nodes for the specified hierarchy.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

In the `bread_crumb` metadata, you can identify the parent nodes that a node is associated with. This is useful if you want to improve how your shoppers search your store, for example. For more information, see [Catalog Releases Overview](/docs/pxm/catalogs/catalog-latest-release/overview).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of a hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. The Implicit Bearer token returns only resources with the `live` status. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator  | Description | Attributes | Example |
| --- | --- | --- | --- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `name`, `slug` | `filter=eq(name,some-name)` |
| `in`      |  Checks if the values are included in the specified string. If they are, the condition is true.  | `Id` | `filter=in(id,9214719b-17fe-4ea7-896c-d61e60fc0d05,e104d541-2c52-47fa-8a9a-c4382480d97c,65daaf68-ff2e-4632-8944-370de835967d)` | 

For more information, see [Filtering](/docs/commerce-cloud/api-overview/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes \
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
                "bread_crumb": {
                  "04e748f1-83db-4013-85c8-9edfb0e1b5fa",
                  "e5a64eae-56c2-48cd-b8b1-f5d3be734d52",
                  "94b882fa-85de-470e-acb3-5b11358e02de"
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
        },
        {
            "id": "55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-08T17:33:36.070Z",
                "description": "Electric stoves and ovens",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2",
                "updated_at": "2021-03-08T17:33:36.070Z",
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
                        "related": "/catalog/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/children"
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
                        "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/d167d384-d2cf-4d05-ad41-6fc567855765"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/55ca5eb9-8da2-45d9-8741-9e6bf2e8b7df/relationships/products"
                    }
                }
            }
        },
        {
            "id": "d167d384-d2cf-4d05-ad41-6fc567855765",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T22:29:30.433Z",
                "description": "Electric stoves and ovens updated",
                "name": "Electric Ranges",
                "slug": "Electric-Ranges-MA2",
                "updated_at": "2021-03-05T22:52:23.569Z",
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
                        "related": "/catalog/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/relationships/children"
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
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/d167d384-d2cf-4d05-ad41-6fc567855765/relationships/products"
                    }
                }
            }
        },
        {
            "id": "de3c3590-4138-4943-b04d-d7b7dc48fa54",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-11T21:22:55.262Z",
                "description": "Gas stoves and ovens",
                "name": "Gas Ranges",
                "slug": "Gas-Ranges-MA2",
                "updated_at": "2021-03-12T22:11:08.709Z",
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
                        "related": "/catalog/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/children"
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
                        "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
                        "type": "node"
                    },
                    "links": {
                        "related": "/catalog/nodes/e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/products"
                    }
                }
            }
        },
        {
            "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec",
            "type": "node",
            "attributes": {
                "created_at": "2021-03-05T21:48:32.874Z",
                "description": "All stoves and ovens",
                "name": "Ranges",
                "slug": "Ranges-MA1",
                "updated_at": "2021-03-05T21:48:32.874Z",
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
        }
    ],
    "links": {
        "first": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes?page[offset]=0&page[limit]=25&",
        "last": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes?page[offset]=0&page[limit]=25&",
        "self": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
    }
}
```
