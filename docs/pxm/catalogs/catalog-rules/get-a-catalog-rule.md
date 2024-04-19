---
title: Get a Catalog Rule
nav_label: Get a Rule
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get by ID

```text
https://useast.api.elasticpath.com/pcm/catalogs/rules/:catalogRuleId
```

Retrieves the specified catalog rule.

## Parameters

### Path parameters

 | Name | Required | Type | Description |
 | :--- | :--- | :--- | :--- |
 | `catalogRuleId` | Required | `string` | Specifies the unique identifier of the catalog rule. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Note that this must be a client credentials token. |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/rules/a01fc6f9-70f9-4d08-af8f-4357e35febd4 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": {
        "attributes": {
            "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
            "created_at": "2021-04-12T16:39:27.635Z",
            "customer_ids": [
                "fcb065be-0af3-4bb1-94c2-a1ffc53277a9"
            ],
            "description": "Preferred customers",
            "name": "Preferred customers",
            "channels": ["in_store"],
            "schedules": [
                {
                    "valid_from": "2021-09-22T00:00:00.000+01:00(Europe/Paris)",
                    "valid_to": "2021-12-21T00:00:00.000+01:00(Europe/Paris)"
                }
            ],
            "updated_at": "2021-04-12T16:39:27.635Z"
        },
        "id": "a01fc6f9-70f9-4d08-af8f-4357e35febd4",
        "type": "catalog_rule"
    },
    "links": {
        "self": "/pcm/catalogs/rules/a01fc6f9-70f9-4d08-af8f-4357e35febd4"
    }
}
```
