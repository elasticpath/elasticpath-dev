---
title: Update a Merchant Realm Mapping
nav_label: Update a Merchant Realm Mapping
sidebar_position: 30
---

## `PUT` Update a Merchant Realm Mapping

```http
https://useast.api.elasticpath.com/v2/merchant-realm-mappings/:mappingId
```

## Parameters

### Path parameters

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `mapping-id` | Required | `string` | The ID for the requested merchant realm mapping. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name     | Required | Type     | Description                                |
| -------- | -------- | -------- | ------------------------------------------ |
| `type`   | Required | `string` | merchant-realm-mappings                    |
| `prefix` | Required | `string` | The prefix name to associate with a store. |

## Request Example

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/merchant-realm-mappings/:mappingId \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $'{
     "data": {
       "type": "merchant-realm-mappings",
        "prefix": "awesomeName"
     }
   }'
```

### JavaScript SDK

```javascript
const mappingId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const data = {
    type: "merchant-realm-mappings",
    prefix: "awesomeName",
};

// Where `EPCC` is an authenticated client
await EPCC.MerchantRealmMappings.Update(mappingId, data);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "925c8617-41b3-44fa-ac4b-2f6edd1bd3c5",
        "prefix": "awesomeName",
        "realm_id": "e730bf37-ed95-4ca9-b4c4-2c5ee08b21d7",
        "store_id": "88888888-4444-4333-8333-111111111111",
        "type": "merchant-realm-mappings"
    }
}
```
