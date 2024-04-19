---
title: Create a Price Book
nav_label: Create a Price Book
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `POST` Create a Price Book

```http
https://useast.api.elasticpath.com/pcm/pricebooks
```

Creates a price book. You can add the prices to the price book now or update the price book later.

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

Required. A [`pricebook`](/docs/pxm/pricebooks/pxm-pricebooks/pxm-pricebooks-overview#the-pricebook-object) object with the following attributes:

| Name | Required | Type | Description                                                                                                                                                                  |
| :--- | :--- | :--- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type` | Required | `string` | Always: `pricebook`                                                                                                                                                          |
| `attributes.name` | Required | `string` | A unique name for the price book. Price books must have a unique name.                                                                                                       |
| `attributes.description` | Optional  | `string` | The purpose for the price book, such as flash sale pricing or preferred customer pricing.                                                                                    |
| `attributes.external_ref` | Optional | `string` | The unique attribute associated with the price book. For example, this could be an external reference from a separate company system. The maximum length is 2048 characters. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/pcm/pricebooks \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "type": "pricebook",
            "attributes": {
                "name": "Customer AAA Pricing",
                "description": "Tier 1 pricing"
            }
        }
    }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "60472644-9682-4364-8ff6-40c92f4bb091",
        "type": "pricebook",
        "attributes": {
            "created_at": "2021-02-08T20:54:07.494Z",
            "description": "Tier 1 pricing",
            "name": "Customer AAA Pricing",
            "updated_at": "2021-02-08T20:54:07.494Z"
        },
        "meta": {
            "owner": "store"
        }
    },
    "links": {
        "self": "/pcm/pricebooks/60472644-9682-4364-8ff6-40c92f4bb091"
    }
}
```
