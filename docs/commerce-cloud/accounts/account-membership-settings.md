---
title: Account Membership Settings
nav_label: Account Membership Settings
sidebar_position: 41
---

Account Membership Settings allow Account Members to be associated to, at most, N accounts at a time. You can set this value to any number up to 10,000. The default value is 10,000.

This setting is only applied to new account memberships. If an account member is added to 3 accounts, and the setting is reduced to 1, the account member remains in the 3 accounts and can no longer be added to more.

## `GET` Account Membership Settings

```http
https://useast.api.elasticpath.com/v2/settings/account-membership
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

### Request example

```bash
curl -X GET https://useast.api.elasticpath.com/v2/settings/account-membership \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "account_membership_setting",
        "membership_limit": 10
    }
}
```

## `PUT` Account Membership Settings

```http
https://useast.api.elasticpath.com/v2/settings/account-membership
```

### Parameters

#### Headers

| Name | Required | Type | Description |
| --- | --- | --- | --- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Grant type must be `client_credentials`. |

#### Body

{% table %}
* Name
* Required
* Type
* Description
---
* `type`
* Required
* `string`
* The type must be `account_membership_setting`.
---
* `membership_limit`
* Required
* `number`
* The number of accounts an account member can be associated with. You can set this value to any number up to 10,000.
{% /table %}

### Request example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/settings/account-membership \
     -H "Authorization: Bearer XXXX"
     -d $'{
        "data": {
           type: "account_membership_setting",
           membership_limit: 10
        }
      }'
```

### Response example

`200 OK`

```json
{
    "data": {
        "type": "account_membership_setting",
        "membership_limit": 10
    }
}
```
