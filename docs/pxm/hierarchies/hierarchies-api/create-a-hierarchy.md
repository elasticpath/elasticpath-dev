---
title: Create a Hierarchy
nav_label: Create a Hierarchy
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Hierarchy

```http
https://useast.api.elasticpath.com/pcm/hierarchies/
```

Creates a hierarchy.

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `hierarchy` |
| `attributes.name` | Required | `string` | The name of the hierarchy. The maximum length is 1000 characters. |
| `attributes.description` | Optional | `string` | A description of the hierarchy. |
| `attributes.slug` | Optional | `string` | A unique slug for the hierarchy. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/hierarchies/ \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data":{
            "type":"hierarchy",
            "attributes":{
                "name": "Major Appliances",
                "description": "Free standing appliances",
                "slug": "Major-Appliances-MA0"
                }
            }
        }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "type": "hierarchy",
        "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
        "attributes": {
            "description": "Free standing appliances",
            "name": "Major Appliances",
            "slug": "Major-Appliances-MA0",
            "locales": {
                "fr-FR": {
                    "name": "Gros électroménagers",
                    "description": "Appareils autonomes"
                }
            }
        },
        "relationships": {
            "children": {
                "data": [],
                "links": {
                    "related": "/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children"
                }
            }
        },
        "meta": {
            "created_at": "2023-02-07T14:01:51.247Z",
            "owner": "store",
            "updated_at": "2023-02-07T14:01:51.247Z"
        }
    }
}
```
