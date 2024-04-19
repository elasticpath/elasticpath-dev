---
title: Account Memberships API Overview
nav_label: Account Memberships API Overview
sidebar_position: 10
---

The `Account Membership` resource represents the relationship between an account and an account member.

## The Account Membership Object

| Attributes | Type | Description |
| --- | --- | --- |
| `id` | `string` | Represents the unique identifier for the account membership. |
| `type` | `string` | Represents the type of the object returned. |
| `meta` | `object` | Represents additional information for this realm. For more information, see [The meta object](/docs/commerce-cloud/accounts/using-account-membership-api/overview#the-meta-object) section. |
| `relationships` | `object` | Represents a list of the related resources. For more information, see [The relationships object](/docs/commerce-cloud/accounts/using-account-membership-api/overview#the-relationships-object) section. |

### Sample response

```json
{
  "data": {
    "id": "9e227208-b592-49c0-8c8f-043b66c634b0",
    "type": "account_membership",
    "meta": {
      "timestamps": {
        "created_at": "2021-03-10T07:35:38.883Z",
        "updated_at": "2021-03-10T07:35:38.883Z"
      }
    },
    "relationships": {
      "account_member": {
        "data": {
          "id": "486fa6f1-d85a-44a0-abdf-ff0076fffd6c",
          "type": "account_member"
        }
      }
    }
  },
  "links": {
    "self": "https://useast.api.elasticpath.com/v2/accounts/b1e8f9ea-7c04-4e16-911c-6898d35731ed/account-memberships/9e227208-b592-49c0-8c8f-043b66c634b0"
  }
}
```

## The `meta` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `meta.timestamps` | `string` | Specifies the time and date that the account membership is created or updated. |
| `meta.timestamps.created_at` | `string` | The date the Account Membership was created. |
| `meta.timestamps.updated_at` | `string` | The date the Account Membership was last updated. |

## The `relationships` Object

| Attribute | Type | Description |
| :--- | :--- | :--- |
| `relationships.account_member` | `object` | Provides information about the relationships of the account member of this account membership. |
| `relationships.account_member.data` | `object` | Provides information about the account member. |
| `relationships.account_member.data.id` | `string` | Specifies the ID of the account member. |
| `relationships.account_member.data.type` | `string` | Specifies the type of the Account Member. |


## Filtering

The following operators and attributes are available for [filtering](/docs/commerce-cloud/api-overview/filtering) account memberships.

| Operator | Description |
| :--- | :--- |
| `eq` | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |
| `like` | Checks if the operand contains the specified string. You can use wildcard characters in operand. |

| Attribute | Type | Operator | Example |
| :--- | :--- | :--- | :--- |
| `account_member_id` | `string` | `eq` / `like` | `eq(account_member_id,00000000-0000-1000-8000-0000000)` |
