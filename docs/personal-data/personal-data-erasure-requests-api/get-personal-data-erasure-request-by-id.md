---
title: Get Personal-Data Erasure Request by ID
nav_label: Get Personal-Data Erasure Request by ID
sidebar_position: 30
---

## `GET` Get by ID

This request serves to get an existing erasure request by its ID.

```http
https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/:id
```

## Parameters

### Path parameters

| Name         | Required | Type | Description                                     |
|--------------| --- | --- |-------------------------------------------------|
| `id`         | Required | `string` | The ID of the erasure request.                  |

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


## Request Example

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/:id \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### Javascript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X'
})
const resourceType = 'account'
const resourceId = '98140362-6caf-4829-b93d-953ac6adbe6e'
Moltin.ErasureRequests.Filter(resourceType, resourceId).All().then(erasureRequestsPage => {
    // Do something
})
```


## Response Example

```json
{
    "data": {
        "id": "fb25ecd9-c610-4659-97d6-0a7550ac0ddc",
        "type": "erasure_request",
        "resource_id": "98140362-6caf-4829-b93d-953ac6adbe6e",
        "resource_type": "account",
        "initiator": {
            "access-token-email": "accounts@molt.in",
            "access-token-id": "1222341536243515939",
            "access-token-name": "moltin test team",
            "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
            "access-token-type": "client-credentials-token"
        },
        "status": "SUCCESS",
        "status_description": "The erasure request is successfully processed",
        "created_at": "2022-06-07T12:25:38.52Z",
        "updated_at": "2022-06-07T12:25:38.69Z"
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/fb25ecd9-c610-4659-97d6-0a7550ac0ddc"
    }
}
```
