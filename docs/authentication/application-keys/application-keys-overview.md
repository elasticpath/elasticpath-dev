---
title: Application Keys Overview
nav_label: Application Keys Overview
sidebar_position: 10
---

Application keys are used to directly manage access to Organizations and stores. These keys are identified based on their names, and are not associated with a user.

You can use application keys to generate `client_credentials` and `implicit tokens`. Unlike [User Credentials](/docs/authentication/security#user-credentials), Application keys are still valid even after a team member is removed from a store or organization.

Each organization and store has a specific [rate limit](/guides/Getting-Started/rate-limits). You can fine-tune the performance and availability of your applications that are integrated with our platform by reserving a rate limit for each Application Key. Reserved rate limits ensures that applications using a token generated from that key can make at least that many requests per second.

## Scenarios

For example, consider the following two scenarios for using reserved rate limits:

- Scenario 1: Suppose you use a key for your store front. You can reduce the risk of customers experiencing throttling while shopping by reserving a majority of your store's rate limit for that store front to ensure a smooth shopping experience.

- Scenario 2: If you have a key for the store front but you also need to support several backend processes syncing data across systems, you can reserve a part of your store's rate limit to your store front key. This ensures that the backend process doesn't slow down the store front. Additionally, you can also reserve a rate limit for the key that is associated with most critical backend process.

It is important to note that the sum of the reserved value for all keys in your store or organization cannot exceed the total allowed requests per second for that store or organization. For example, suppose a store has a rate limit of 100 requests per second, and there is already a key that has a reserved limit of 80 requests per second. If you try to create a new key with reserved rate limit of 21 requests per second, the request will fail. However, if you reserve only 20 requests per second, it will succeed as it doesn't exceed the store's rate limit.

Keys without a reserved rate limits share from the same pool. If the total reserved rate limit across keys reaches the total rate limit for your store or organization, there will be nothing left in the unreserved, shared pool. Keys without a reserved rate limit will experience throttling when they attempt to make requests. Keys with a reserved rate limit can also use this shared pool.

Adjustments made to the reserved rate limit may take up to one hour to become effective.

The following table describes the management of application keys for organizations and stores.

| Organizations | Stores | 
| --------------- | -------- | 
| Application keys are granted the same permissions as Org Admins. | Application keys are granted the same permissions as Store Admins. |
| Org Admins can view and manage the list of application keys in their organization and all stores belonging to that organization. | Store Admins can view and manage the list of application keys within the store. |
| Application keys can be used to manage access to an organization and all stores in the organization. | Application keys can be used to manage access to a store. |

## Best Practices for Application Keys

- Assign a descriptive name for the application key associated with its purpose.
- Create a unique application key each each distinct type of interactions, such as storefront and back-end interactions.
- Do not embed API keys directly in your code.
- Do not store API keys in files within your application's source tree.
- Regularly review your application keys and delete any that are no longer in use.
- Assign a reserved rate limit for your critical application keys.
- Do not fully reserve the rate limit for your store or organizations across all keys. Instead, reserve rate limits thoughtfully to ensure that keys without a reserved rate limit can draw from a shared pool when needed.

To create your application key, see [Creating an Application Key](/docs/commerce-manager/application-keys/application-keys-cm).

## The Application Key Object

| Attribute | Type | Description |
| :--- | :--- | :---- |
| `id` | `string` | Specifies the unique id of the application key. |
| `name` | `string` | Specifies the name of the application key. |
| `type` | `string` | Represents the type of object being returned. Always `application_key`. |
| `client_id` | `string` | Represents the unique  `client_id`. |
| `client_secret` | `string` | Represents the unique `client_secret`. |
| `reserved_rate_limit` | `integer` | Indicates the reserved rate limit for an application key.
| `meta.timestamps.last_used_at` | `string` | Specifies the approximate last used date of the key. A `null` value indicates that the key has not been used. |
| `meta.timestamps.created_at` | `string` | Specifies the creation date of the key. |
| `meta.timestamps.updated_at` | `string` | Specifies the last updated date of the key. |

## Sample Response

```json
{
    "data": {
        "id": "2a0949f6-661b-4a19-b0ed-e97b41e98623",
        "name": "Test keys",
        "type": "application_key",
        "client_id": "d4fcc576f661778c29fcd7b78461da8291cc6b003d",
        "client_secret": "8c52f85e3d6915e76f97139bdd71780f4ce0a8f13a",
        "reserved_rate_limit": 15,
        "meta": {
            "timestamps": {
                "last_used_at": "2022-08-24T19:53:52.474283337Z",
                "created_at": "2022-08-24T19:53:52.474283337Z",
                "updated_at": "2022-08-24T19:53:52.474283337Z"
            }
        }
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/application-keys/2a0949f6-661b-4a19-b0ed-e97b41e98623"
    }
}
```
