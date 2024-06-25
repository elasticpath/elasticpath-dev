---
title: Create Personal-Data Erasure Request
nav_label: Create Personal-Data Erasure Request
sidebar_position: 40
---

## `POST` Create erasure request

This request serves to create a new erasure request for a given resource ID and Type. All resources that belong to the same personal data set will be erased.

```http
https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/
```

## Parameters

### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


## Request Examples

### Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/ \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "resource_id": "98140362-6caf-4829-b93d-953ac6adbe6e",
        "resource_type": "account",
        "type": "erasure_request"
        }
      }
```

### Javascript SDK

```javascript
const MoltinGateway = require('@moltin/sdk').gateway
const Moltin = MoltinGateway({
    client_id: 'X'
})
const resourceType = 'account'
const resourceId = '98140362-6caf-4829-b93d-953ac6adbe6e'
Moltin.ErasureRequests.Create(resourceType, resourceId).then(erasureRequest => {
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
        "status": "CREATED",
        "status_description": "The erasure request successfully created",
        "created_at": "2022-06-07T12:25:38.52Z",
        "updated_at": "2022-06-07T12:25:38.69Z"
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/fb25ecd9-c610-4659-97d6-0a7550ac0ddc"
    }
}
```
