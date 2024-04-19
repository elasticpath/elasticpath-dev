---
title: Get a Modifier
nav_label: Get a Modifier
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Modifier

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId
```

### Parameters

#### Path parameters

| Name         | Required | Type     | Description                             |
|:-------------|:---------|:---------|:----------------------------------------|
| `optionId`   | Required | `string` | The ID of the option which is modified. |
| `modifierId` | Required | `string` | The ID of the modifier to get.          |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "product-variation-modifier",
        "id": "0e681196-f238-46b3-934d-1782a3e2a5e8",
        "attributes": {
            "type": "commodity_type",
            "value": "digital"
        }
    }
}
```
