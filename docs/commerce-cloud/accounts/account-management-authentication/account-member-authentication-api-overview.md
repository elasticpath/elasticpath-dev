---
title: Account Management Authentication API Overview
nav_label: Account Management Authentication API Overview
sidebar_position: 11
---

Commerce provides authentication tokens for an account and an account member.

## The Account Management Authentication Token Object

| Attribute      | Type        | Description                                                                                                                                                                                                                   |
|:---------------|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `account_name` | `string`    | The name of the account that this token grants access to.                                                                                                                                                                     |
| `account_id`   | `string`    | The ID of the account that this token grants access to.                                                                                                                                                                       |
| `token`        | `string`    | The JWT authentication token that the shopper uses as the `EP-Account-Management-Authentication-Token` header [in all other endpoints](/docs/commerce-cloud/authentication/Tokens/account-management-authentication-token).   |
| `type`         | `string`    | The type of the object returned.                                                                                                                                                                                              |
| `expires`      | `timestamp` | The epoch time that this token expires at. The time is set to 24 hours after the token is generated.                                                                                                                          |

### Sample response

```json
{
    "data": {
        "account_name": "acc-name-1",
        "account_id": "9e227208-b592-49c0-8c8f-043b66c634b0",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAzLTE2VDE5OjM2OjExLjA3MFoiLCJpYXQiOiIyMDIxLTAzLTE1VDE5OjM2OjExLjA3MFoiLCJzY29wZSI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMyIsInN1YiI6IjFjNDVlNGVjLTI2ZTAtNDA0My04NmU0LWMxNWI5Y2Y5ODVhMiJ9.ytQ3UutTl_RJ8NiB1xN29Ta23p-FXsYOhcUM7MUQ4CM",
        "type": "account_management_authentication_token",
        "expires": "2021-03-16T19:36:11.070Z"
    }
}
```
