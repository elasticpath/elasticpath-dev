---
title: Update an Account Membership
nav_label: Update an Account Membership
sidebar_position: 51
---

You can update and extend an account member details using [core flows](/docs/commerce-cloud/custom-data/custom-data-flows-api/custom-data-flows-api-overview#extend-a-resource). However, you cannot update the `account_member_id` of an account member.

## `PUT` Update an Account Membership

```http
https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/:membershipId
```

### Parameters

#### Path parameters

| Name           | Required | Type     | Description                                                                                  |
| -------------- | -------- | -------- | -------------------------------------------------------------------------------------------- |
| `accountId`    | Required | `string` | The unique identifier of the account that the account member is associated with.             |
| `membershipId` | Required | `string` | The unique identifier of the account membership to update the details of the account member. |

#### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

#### Body

| Name                | Required | Type     | Description                                                                                   |
| ------------------- | -------- | -------- | --------------------------------------------------------------------------------------------- |
| `type`              | Required | `string` | Specifies the type of the object. Set this value to `account_membership`.                     |
| `account_member_id` | Optional | `string` | Specifies the unique identifier of the account member that the membership is associated with. |

### Request example - cURL

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/accounts/:accountId/account-memberships/:membershipId/ \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
        "data": {
            "type": "account_membership",
            "account_member_id": "486fa6f1-d85a-44a0-abdf-ff0076fffd6c"
          }
    }
```

## Response Example

`200 OK`

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
