---
title: Update a Modifier
nav_label: Update a Modifier
sidebar_position: 40
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Modifier

```http
https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId
```

### Parameters

#### Path parameters

| Name         | Required | Type     | Description                             |
|:-------------|:---------|:---------|:----------------------------------------|
| `optionId`   | Required | `string` | The ID of the option that consists of the modifier. |
| `modifierId` | Required | `string` | The ID of the modifier that you want to update. |

#### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name               | Required                       | Type     | Description |
|:-------------------|:-------------------------------|:---------|:------------|
| `type`             | Required                       | `string` | The type of resource object. You must use `product-variation-modifier`. |
| `id`               | Required                       | `string` | The ID of the modifier. |
| `attributes.type`  | Required                       | `string` | The modifier type. |
| `attributes.value` | Required                       | `string` | The value of the modifier type. |
| `attributes.seek`  | Required for builder modifiers | `string` | The sub-string to match for find and replace. |
| `attributes.set`   | Required for builder modifiers | `string` | The value to replace the string in `seek`. |

### Request example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/variations/:variationId/options/:optionId/modifiers/:modifierId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
    "data": {
        "type": "product-variation-modifier",
        "id": "0e681196-f238-46b3-934d-1782a3e2a5e8",
        "attributes": {
            "type": "commodity_type",
            "value": "digital"
        }
    }
}'
```

### Response example

`200 Created`

```json
{
    "data": {
        "id": "2950cae3-1050-4c43-9fbd-2aa60dc5c249",
        "type": "product-variation-modifier",
        "attributes": {
            "type": "commodity_type",
            "value": "digital"
        }
    }
}
```
