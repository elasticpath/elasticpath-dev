---
title: Get the Catalog
nav_label: Get the Catalog
sidebar_position: 20
---

## `GET` Get the Catalog

```text
https://useast.api.elasticpath.com/catalog
```

Retrieves details about the published catalog.

If you have multiple catalog rules defined, the rule that best matches the shopperʼs context is used to determine which catalog is retrieved. For information about how rules are matched, see [Resolving Catalog Rules](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#resolving-catalog-rules).

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. Implicit Bearer token only returns products with live status; products with draft status won’t be included. |
| `X-Moltin-Customer-Token` | Optional | `string` | The unique identifier of a signed-in customer. Corresponds to the `customer_ids` attribute in a `rule` object. |
| `EP-Account-Management-Authentication-Token` | Optional | `string` | The unique identifier of a signed-in account. Corresponds to the `accounts_ids` attribute in a `rule` object. |
| `EP-Channel` | Optional | `string` | The channel, such as website or mobile app. Corresponds to the `channel` attribute in a `rule` object. |
| `EP-Context-Tag` | Optional | `string` | A tag defined in the store, such as `clearance`. Corresponds to the `tag` attribute in a `rule` object. |
| `accept-language` | Optional | `string` | The natural language and locale that your storefront prefers. See [accept-language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/catalog \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -H "EP-Channel": "web store" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
        "type": "catalog-release",
        "attributes": {
            "hierarchies": [
                {
                    "id": "eb3bd9e6-857c-4886-bc3f-fcebd600ae22"
                }
            ],
            "description": "Ranges Catalog",
            "name": "Ranges Catalog",
            "published_at": "2021-04-13T02:18:16.450Z"
        },
        "relationships": {
            "hierarchies": {
                "links": {
                    "related": "/catalog/hierarchies"
                }
            },
            "products": {
                "links": {
                    "related": "/catalog/products"
                }
            }
        }
    },
    "links": {
        "self": "/catalog"
    }
}
```
