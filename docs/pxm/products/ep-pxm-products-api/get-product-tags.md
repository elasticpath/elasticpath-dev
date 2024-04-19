---
title: Get Product Tags
nav_label: Get Product Tags
sidebar_position: 30
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get Product Tags

```http
https://useast.api.elasticpath.com/pcm/products/tags
```

Retrieves all product tags for a store. A store can view the tags associated with the organization to which the store belongs. However, an organization can only view the tags associated with the organization.  

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |


## Request Example

### Curl

```bash
curl GET https://useast.api.elasticpath.com/pcm/products/tags \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
  "type": "tag",
  "id": "e500c8de-1856-44d9-9bb7-cfb5a0c974db",
  "attributes": {
    "value": "blue"
  },
  "meta": {
    "created_at": "2024-03-20T20:53:11.961Z",
    "owner": "organization",
    "updated_at": "2024-03-20T20:54:43.172Z"
  }
},
```
