---
title: Update a Hierarchy
nav_label: Update a Hierarchy
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Hierarchy

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId
```

Updates the specified hierarchy.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

Specify whichever `attributes` you want to change. The values of the other `attributes` remain the same. If the `attributes` section is empty, the hierarchy is not updated.

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | `string` | Always: `hierarchy` |
| `id` | Required | `string` | The unique identifier of the hierarchy. Must match the hierarchy ID specified in the request path. |
| `attributes.name` | Optional | `string` | An updated name. Cannot be null. |
| `attributes.description` | Optional | `string` | An updated description. |
| `attributes.slug` | Optional | `string` | An updated slug. Must be unique. |
| `attributes.locales` | Optional | `object` | The product details localized in the supported languages. For example, product names or descriptions. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "hierarchy",
            "id": "0e119de2-5fb0-4bca-9b84-b3fc6c903007",
            "attributes":{
                "name": "Major Appliances",
                "description": "Free-standing appliances",
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
            "description": "Free-standing appliances",
            "name": "Major Appliances",
            "slug": "Major-Appliances-MA0",
            "locales":{
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
