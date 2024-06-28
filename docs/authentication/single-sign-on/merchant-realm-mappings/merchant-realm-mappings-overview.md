---
title: Merchant Realm Mappings
nav_label: Merchant Realm Mappings
sidebar_position: 10
---

The Merchant Realm Mapping object is used to locate the [Authentication Realm](/docs/authentication/single-sign-on/authentication-realm-api/authentication-realm-api-overview) which administrators use to sign in to a store via single sign-on. When supplied in the mapping, the prefix field is used during authentication to determine the appropriate authentication realm to sign in with.

## Merchant Realm Mapping object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for this merchant realm mapping. |
| `prefix` | `string` | The store prefix that is assigned to this merchant realm mapping. This can be null if a store prefix has not been assigned. |
| `realm_id` | `string` | The ID of the authentication realm used to sign in as administrator. |
| `store_id` | `string` | System-generated store ID. |
| `type` | `string` | The type represents the object being returned. |

## Sample Object

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
