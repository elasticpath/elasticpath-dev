---
title: Replicate a Price Book
nav_label: Replicate a Price Book
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Replicate a Price Book

```http
https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/replicate
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `id` | Required | `string` | The ID of the price book that you want to replicate. |
| `type` | Required | `string` | The type of resource object. You must use `pricebook`. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `name` | Required | `string` | The name of the new price book. |
| `description` | Optional | `string` | The description of the new price book. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks/:pricebookId/replicate \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`201 Created`

```json
{
    "data": {
      "id": "4c45e4ec-26e0-4043-86e4-c15b9cf985a7",
      "type": "pricebook",
      "attributes": {
        "created_at": "2020-09-22T09:00:00",
        "description": "This is a price book",
        "name": "pricebook-store-abc",
        "updated_at": "2020-09-22T09:00:00"
         },
        "meta": {
            "owner": "store"
        }
    },
  "links": {
        "self": "/pcm/pricebooks/4c45e4ec-26e0-4043-86e4-c15b9cf985a7"
    }
}
```
