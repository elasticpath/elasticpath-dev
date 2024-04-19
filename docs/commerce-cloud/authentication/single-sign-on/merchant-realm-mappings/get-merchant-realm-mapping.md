---
title: Get a Merchant Realm Mapping
nav_label: Get a Merchant Realm Mapping
sidebar_position: 20
---

## `GET` Get the Merchant Realm Mapping for the current store

For a direct GET on a Merchant Realm Mapping, see [Get a Merchant Realm Mapping by ID](#get-get-a-merchant-realm-mapping-by-id).

```http
https://useast.api.elasticpath.com/v2/merchant-realm-mappings
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request examples

#### Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/merchant-realm-mappings \
     -H "Authorization: Bearer XXXX"
```

#### JavaScript SDK

```javascript
// Where `EPCC` is an authenticated client
await EPCC.MerchantRealmMappingsEndpoint.All();
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "925c8617-41b3-44fa-ac4b-2f6edd1bd3c5",
        "prefix": "mystore",
        "realm_id": "e730bf37-ed95-4ca9-b4c4-2c5ee08b21d7",
        "store_id": "88888888-4444-4333-8333-111111111111",
        "type": "merchant-realm-mappings"
    }
}
```

## `GET` Get a Merchant Realm Mapping by ID

```http
https://useast.api.elasticpath.com/v2/merchant-realm-mappings/:mapping-id
```

### Parameters

#### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `mapping-id` | Required | `string` | The ID for the requested merchant realm mapping. |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Request example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/merchant-realm-mappings/925c8617-41b3-44fa-ac4b-2f6edd1bd3c5 \
     -H "Authorization: Bearer XXXX"
```

### Response example

`200 OK`

```json
{
    "data": {
        "id": "925c8617-41b3-44fa-ac4b-2f6edd1bd3c5",
        "prefix": "mystore",
        "realm_id": "e730bf37-ed95-4ca9-b4c4-2c5ee08b21d7",
        "store_id": "88888888-4444-4333-8333-111111111111",
        "type": "merchant-realm-mappings"
    }
}
```
