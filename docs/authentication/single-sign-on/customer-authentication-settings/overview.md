---
title: Customer Authentication Settings
nav_label: Overview
sidebar_position: 1
---

You can use the Customer Authentication Settings endpoint to retrieve settings controlling customer authentication.

## The Customer Authentication Settings object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | The unique identifier for these customer authentication settings. |
| `meta` | [`object`](#the-meta-object) | Additional information for these customer authentication settings. Also see: **The meta object** below. |
| `relationships` | [`object`](#the-relationships-object) | Related resources. Also see: **The relationships object** below. |
| `type` | `string` | The type represents the object being returned. |

## Sample Object

```json
{
    "data": {
        "id": "88888888-4444-4333-8333-111111111111",
        "meta": {
            "client_id": "customers"
        },
        "relationships": {
            "authentication-realm": {
                "data": {
                    "id": "40086652-2779-45f0-8ea6-ae630dfd13cb",
                    "links": {
                        "self": "https://useast.api.elasticpath.com/v2/authentication-realms/40086652-2779-45f0-8ea6-ae630dfd13cb"
                    },
                    "duplicate_email_policy": "allowed",
                    "type": "authentication-realm"
                }
            }
        },
        "type": "customer-authentication-settings"
    }
}
```

## The `meta` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.client_id` | `string` | The client id to be used in Single Sign On authentication flows for customers. For more information on where to use this client id, refer to the Developer How-To: [Single sign-on with OpenID Connect](/docs/authentication/single-sign-on/get-single-sign-on-customer-token). |

## The `relationships` object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.authentication-realm` | `object` | Relationship information regarding the authentication realm entity used for authentication for this store. |
| `relationships.authentication-realm.data` | `object` | Information regarding the authentication realm entity. |
| `relationships.authentication-realm.data.id` | `string` | The id of the authentication realm entity. |
| `relationships.authentication-realm.data.type` | `string` | The type of the authentication realm entity. |
