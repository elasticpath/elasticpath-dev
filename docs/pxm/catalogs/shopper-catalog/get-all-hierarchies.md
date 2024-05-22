---
title: Get all Hierarchies
nav_label: Get all Hierarchies
sidebar_position: 30
---

## `GET` Get all Hierarchies

```text
https://useast.api.elasticpath.com/catalog/hierarchies
```

Returns all hierarchies from the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules)#resolving-catalog-rules).

## Parameters

### Path parameters

| Name                      | Required | Type     | Description                                                                                                           |
| :------------------------ | :------- | :------- | :-------------------------------------------------------------------------------------------------------------------- |
| `Authorization`           | Required | `string` | The Bearer token to grant access to the API. The Implicit Bearer token returns only resources with the `live` status. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object.        |
| `EP-Channel`              | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object.                |
| `EP-Context-Tag`          | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object.               |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]`  | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/guides/Getting-Started/pagination).      |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/guides/Getting-Started/pagination). |

## Filtering

The following operators and attributes are available when filtering on this endpoint.

| Operator  | Description | Attributes | Example |
| --- | --- | --- | --- |
| `Eq` | Checks if the values of two operands are equal. If they are, the condition is true. | `name`, `slug` | `filter=eq(name,some-name)` |
| `in`      |  Checks if the values are included in the specified string. If they are, the condition is true.  | `Id` | `filter=in(id,9214719b-17fe-4ea7-896c-d61e60fc0d05,e104d541-2c52-47fa-8a9a-c4382480d97c,65daaf68-ff2e-4632-8944-370de835967d)` | 

For more information, see [Filtering](/guides/Getting-Started/filtering).

### Building breadcrumbs in a storefront

In a catalog, you can use a filter to return a list of nodes in a hierarchy structure that a product belongs to. You can use this to build breadcrumbs in your storefront. An example is shown below.

`filter=in(id,c83bfe55-0d87-4302-a86d-ab19e7e323f1,6003d7ef-84f3-49bb-a8bd-4cbfa203dcbb)`

- Specify the node Ids in the filter expression.
- You can have as many node Ids as you want.
- It does not matter what order you specify the node Ids. The nodes are returned in the order they were last updated.

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog/hierarchies \
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
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "type": "hierarchy",
            "attributes": {
                "created_at": "2021-03-05T21:45:28.395Z",
                "description": "Free-standing appliances",
                "name": "Major Appliances",
                "slug": "Major-Appliances-MA0",
                "updated_at": "2021-03-05T22:15:44.684Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                    }
                },
                "nodes": {
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products"
                    }
                }
            }
        },
        {
            "id": "4a5a476e-f28d-491f-95d7-86e53f05daf9",
            "type": "hierarchy",
            "attributes": {
                "created_at": "2021-03-05T21:55:39.042Z",
                "description": "Counter-top appliances",
                "name": "Small Appliances",
                "slug": "Small-Appliances-SA0",
                "updated_at": "2021-03-05T22:13:55.756Z",
                "published_at": "2021-04-13T02:36:16.505Z"
            },
            "relationships": {
                "children": {
                    "links": {
                        "related": "/catalog/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/children"
                    }
                },
                "nodes": {
                    "links": {
                        "related": "/catalog/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/nodes"
                    }
                },
                "products": {
                    "links": {
                        "related": "/catalog/hierarchies/4a5a476e-f28d-491f-95d7-86e53f05daf9/products"
                    }
                }
            }
        }
    ],
    "links": {
        "first": "/catalog/hierarchies?page[offset]=0&page[limit]=25&",
        "last": "/catalog/hierarchies?page[offset]=0&page[limit]=25&",
        "self": "/catalog/hierarchies"
    }
}
```
