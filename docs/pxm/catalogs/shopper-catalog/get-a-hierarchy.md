---
title: Get a Hierarchy
nav_label: Get a Hierarchy
sidebar_position: 40
---

## `GET` Get a Hierarchy

```http
https://useast.api.elasticpath.com/catalog/hierarchies/:hierarchyId
```

Returns a hierarchy from the catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog to retrieve. For information about how catalog rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of a hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |S
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "EP-Channel: web store" \
```

## Response Example

```json
{
    "data": {
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
                    "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                }
            },
            "nodes": {
                "links": {
                    "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes"
                }
            },
            "products": {
                "links": {
                    "related": "/catalog/aea233e7-1300-48ce-9b45-7d0c0b60dde3/releases/latest/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog/hierarchies"
    }
}
```
