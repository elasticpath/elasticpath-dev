---
title: Accounts API Overview
nav_label: Accounts API Overview
sidebar_position: 11
---

An `Account` resource represents a business account within a store.

## The Account Object

| Attribute         | Type     | Description                                                                                                                                                                                                     |
|:------------------|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`              | `string` | The unique identifier for an Account.                                                                                                                                                                           |
| `type`            | `string` | The type of the object returned. Always use `account`.                                                                                                                                                                             |
| `name`            | `string` | The name of the account.                                                                                                                                                                                        |
| `legal_name`      | `string` | The legal name of the account.                                                                                                                                                                                  |
| `registration_id` | `string` | The registration ID of the account. The maximum character limit for this field is 63.                                                                                                                           |
| `external_ref`    | `string` | The optional external ID reference. For example, this could be an external reference from a separate company system. The maximum length is 2048 characters. Default is `null`.                                  |
| `meta`            | `object` | Additional information for this realm. For more information, see [The meta object](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview#the-meta-object) section.         |
| `relationships`   | `object` | A list of related resources. For more information, see [The relationships object](/docs/commerce-cloud/accounts/using-account-management-api/account-management-api-overview#the-relationships-object) section. |

### Sample response

```json
{
  "data": {
    "id": "6e46b042-cb5a-45bf-a6c2-9991bcd7260e",
    "type": "account",
    "name": "Account Level 4",
    "legal_name": "acc-legal-name",
    "registration_id": "0addf4f1-0347-4336-ae41-e44a39e762e8",
    "external_ref": "16bedceb-8b2d-4f82-a973-b0a8d8432708",
    "relationships": {
      "parent": {
        "data": {
          "id": "558d7153-2d2a-48d1-bde4-f8c21649842e",
          "type": "account"
        }
      },
      "ancestors": [
        {
          "data": {
            "id": "b511062a-0a86-4bcc-99f9-528092ac35a6",
            "type": "account"
          }
        },
        {
          "data": {
            "id": "c4a13b06-8083-416f-80cd-ef1281e83f5b",
            "type": "account"
          }
        },
        {
          "data": {
            "id": "558d7153-2d2a-48d1-bde4-f8c21649842e",
            "type": "account"
          }
        }
      ]
    },
    "meta": {
      "timestamps": {
        "created_at": "2021-04-16T15:39:06.884Z",
        "updated_at": "2021-04-16T15:39:06.884Z"
      }
    }
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/accounts/6e46b042-cb5a-45bf-a6c2-9991bcd7260e"
  }
}
```

## The `meta` Object

| Attribute                    | Type     | Description                                                         |
|:-----------------------------|:---------|:--------------------------------------------------------------------|
| `meta.timestamps`            | `string` | Specifies the time and date that the account is created or updated. |
| `meta.timestamps.created_at` | `string` | Specifies the date the account is created.                          |
| `meta.timestamps.updated_at` | `string` | Specifies the date the account is last updated.                     |

## The `relationships` Object

| Attribute                              | Type     | Description                                                                                                                                                                                                                                                                                |
|:---------------------------------------|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `relationships.parent`                 | `object` | Provides details about the relationship between the account and the parent account.                                                                                                                                                                                                        |
| `relationships.parent.data`            | `object` | Specifies the details of the parent account.                                                                                                                                                                                                                                               |
| `relationships.parent.data.id`         | `string` | Specifies the ID of the parent account.                                                                                                                                                                                                                                                    |
| `relationships.parent.data.type`       | `string` | Specifies the type of the parent account.                                                                                                                                                                                                                                                  |
| `relationships.ancestors`              | `object` | Displays an array with the details about the relationship between an account and the ancestors of the account. The first index of the array is the top-level account, and the last index is the parent of this account. This field is displayed only if the account consists of ancestors. |
| `relationships.ancestors[x].data`      | `object` | Specifies the information regarding a specific ancestor.                                                                                                                                                                                                                                   |
| `relationships.ancestors[x].data.id`   | `string` | Specifies the ID of the ancestor.                                                                                                                                                                                                                                                          |
| `relationships.ancestors[x].data.type` | `string` | Specifies the type of the ancestor.                                                                                                                                                                                                                                                        |
