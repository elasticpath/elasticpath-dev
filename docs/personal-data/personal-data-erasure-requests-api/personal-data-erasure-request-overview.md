---
title: Personal-Data Erasure Requests Overview
nav_label: Personal-Data Erasure Requests Overview
sidebar_position: 10
---

Erasure requests enable you to exercise the right, referred to in regulations such as GDPR, as the right to be forgotten or right to erase.
Erasure requests allow you to wipe out personal data from Commerce in an automated way, including:

* All related resources (for example, addresses, customers, and so on.)
* Personal Data Logs

Erasure requests can be created for any data entry in the personal data set (see [Personal Data Concept](/docs/personal-data) for details), and the result is the same.

:::note
Currently, it does not include flows or data external to Commerce.
:::

Erasure requests are processed asynchronously. The POST requests return immediately, and processing continues in the background. You can use the GET endpoint to poll for results until you see `{..."status":"SUCCESS"...}` in the response body.

In the unlikely event an erasure request fails (if the status is not equal to `SUCCESS`), you are advised to retry by creating another erasure request. If the problem persists, contact Support.

:::note
Currently, personal data management is only enabled for a limited set of endpoints. See the [personal data concepts page](/docs/personal-data) for the list of endpoints that support personal data management.
:::

Seller Admin & IT users have full access to Erasure Requests, and Support users have read access.

## The Erasure Request Object

### Fields

| Attribute            | Type | Description                                                                                                      |
|----------------------|--- |------------------------------------------------------------------------------------------------------------------|
| `id`                 | `string` | The unique identifier for the log entry.                                                                         |
| `type`               | `string` | The type of the object. Must be `erasure_request`.                                                               |
| `resource_id`        | `string` | The ID of the data entry to be erased (note that also all data entries in the personal data set will be erased). |
| `resource_type`      | `string` | The type of the data entry to be erased.                                                                         |
| `initiator`          | `string` | Specifies who initiated the erasure request.  |
| `status`             | `string` | Specifies the status of the erasure request.                                                                     |
| `status_description` | `string` | Elaborates on the erasure request status.                                                                        |
| `created_at`         | `string` | Date and time when the erasure request was created.                                                              |
| `updated_at`         | `string` | Date and time when the erasure request was last changed.                                                         |
| `links.self`         | `string` | The self link.                                                                                                   |

## Single Erasure Request Response Example

```json
{
    "data": {
        "id": "fb25ecd9-c610-4659-97d6-0a7550ac0ddc",
        "type": "erasure_request",
        "resource_id": "98140362-6caf-4829-b93d-953ac6adbe6e",
        "resource_type": "account",
        "initiator": {
            "access-token-email": "accounts@molt.in",
            "access-token-id": "1222341536243515939",
            "access-token-name": "moltin test team",
            "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
            "access-token-type": "client-credentials-token"
        },
        "status": "SUCCESS",
        "status_description": "The erasure request is successfully processed",
        "created_at": "2022-06-07T12:25:38.52Z",
        "updated_at": "2022-06-07T12:25:38.69Z"
    },
    "links": {
        "self": "https://useast.api.elasticpath.com/v2/personal-data/erasure-requests/fb25ecd9-c610-4659-97d6-0a7550ac0ddc"
    }
}
```

## Filtering

The following operator and attributes are **required** for [filtering](/guides/Getting-Started/filtering) erasure requests.

| Operator | Description                                                                                          |
|:---------|:-----------------------------------------------------------------------------------------------------|
| `eq`     | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |

| Attribute       | Type | Operator | Example                                                 |
|:----------------| :--- | :--- |:--------------------------------------------------------|
| `resource_type` | `string` | `eq`  | `eq(resource_type,customer)`                            |
| `resource_id`   | `string` | `eq`  | `eq(resource_id,0f850c15-d643-480a-a2b4-9e3c26067178\)` |
