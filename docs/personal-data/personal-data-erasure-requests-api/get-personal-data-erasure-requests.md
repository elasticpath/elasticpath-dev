---
title: Get Personal-Data Erasure Requests
nav_label: Get Personal-Data Erasure Requests
sidebar_position: 20
---

Gets a list of erasure requests for a specific resource id and resource type.

## Get Personal Data Erasure Requests

This request serves to get a list of existing erasure requests. Filtering by resource ID and Type is an option.

```http
https://useast.api.elasticpath.com/v2/personal-data/logs
```

:::note

* This request is only accessible to `client_credentials` token users with `Seller Admin`, `Support` and `IT` roles.
* Non `client_credentials` token users cannot access this endpoint. See [Permissions](/docs/authentication/Tokens/permissions).
* This request requires a filter for `resource_type` and `resource_id`.

:::

## Path parameters

### Headers

| Name | Required | Type | Description                                         |
| --- | --- | --- |-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `filter` | Required | `string` | Filter attributes. For more information, see the [Filtering](/docs/personal-data/personal-data-logs-api/personal-data-logs-api-overview#filtering) section. |

:::note

You can use pagination with this resource. For more information, see [pagination](/guides/Getting-Started/pagination).

:::

## Request Examples

### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/personal-data/erasure-requests?filter=eq(resource_type,account_member):eq(resource_id,00000000-0000-1000-8000-000f00000300) \
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

`200 OK`

```json
{
    "meta": {
        "page": {
            "limit": 10,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 3
        }
    },
    "data": [
        {
            "id": "43eb23ef-9a97-466f-9315-d0e0c9df25b5",
            "type": "erasure_request",
            "resource_id": "abe71c87-974d-4ced-9f83-6b8d5502b0e8",
            "resource_type": "account",
            "initiator": {
                "access-token-email": "accounts@molt.in",
                "access-token-id": "1222341536243515939",
                "access-token-name": "moltin test team",
                "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
                "access-token-type": "client-credentials-token"
            },
            "status": "FAILURE",
            "status_description": "There was an error processing your request, you can retry it or report it using the id",
            "created_at": "2022-05-25T10:10:58.623Z",
            "updated_at": "2022-05-25T10:10:58.676Z"
        },
        {
            "id": "eeb182ed-f929-4197-bb43-7104afa852f2",
            "type": "erasure_request",
            "resource_id": "74f98b7a-dbbf-49ed-b7a7-eaea766b8e38",
            "resource_type": "address",
            "initiator": {
                "access-token-email": "accounts@molt.in",
                "access-token-id": "1222341536243515939",
                "access-token-name": "moltin test team",
                "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
                "access-token-type": "client-credentials-token"
            },
            "status": "SUCCESS",
            "status_description": "The erasure request is successfully processed",
            "created_at": "2022-05-26T08:25:37.618Z",
            "updated_at": "2022-05-26T08:25:37.698Z"
        },
        {
            "id": "39787c4b-a338-4bd7-ace9-456d1ae8e90b",
            "type": "erasure_request",
            "resource_id": "3327fb93-b687-4c0c-a850-ee95e0303ef1",
            "resource_type": "account",
            "initiator": {
                "access-token-email": "accounts@molt.in",
                "access-token-id": "1222341536243515939",
                "access-token-name": "moltin test team",
                "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
                "access-token-type": "client-credentials-token"
            },
            "status": "FAILURE",
            "status_description": "There was an error processing your request, you can retry it or report it using the id",
            "created_at": "2022-05-26T08:48:56.183Z",
            "updated_at": "2022-05-26T08:48:56.365Z"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/personal-data/erasure-requests?filter=eq(resource_type,account_member):eq(resource_id,00000000-0000-1000-8000-000f00000300)&page[offset]=0&page[limit]=10",
        "first": "https://useast.api.elasticpath.com/v2/personal-data/erasure-requests?filter=eq(resource_type,account_member):eq(resource_id,00000000-0000-1000-8000-000f00000300)&page[offset]=0&page[limit]=10",
        "last": "https://useast.api.elasticpath.com/v2/personal-data/erasure-requests?filter=eq(resource_type,account_member):eq(resource_id,00000000-0000-1000-8000-000f00000300)&page[offset]=0&page[limit]=10",
        "next": "null",
        "prev": "null"
    }
}
```
