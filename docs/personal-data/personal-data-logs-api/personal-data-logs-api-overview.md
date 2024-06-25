---
title: Personal-Data Logs API Overview
nav_label: Personal-Data Logs API Overview
sidebar_position: 10
---

When a user’s personal data is changed, an event is logged by Commerce. You can use the Personal Data Logs endpoint to access these logs.

This API is read only, and you cannot add/update/delete logs using this API.

The API only allows you to read all logs for a particular data entry (specified in the filter GET parameter).

:::note
Currently, personal data management is only enabled for a limited set of endpoints. See the [personal data concepts page](/docs/personal-data) for the list of endpoints that support personal data management.
:::

## The Log Object

### Fields

| Attribute                         | Type | Description                                                        |
|-----------------------------------|--- |-----------------------------------------------------------------------------------------------------------------------|
| `id`                              | `string` | The unique identifier for the log entry.                           |
| `store_id`                        | `string` | The unique identifier for the store id.                            |
| `type`                            | `string` | The type of the object. Always equal to `personal_data_log_entry`. |
| `initiator`                       | `string` | Specifies who initiated the personal data change.                  |
| `time`                            | `string` | Specifies the time when the change happened.                       |
| `event_type`                      | `string` | Specifies the type of the event.                                   |
| `delta`                           | `string` | Includes fields that were changed as a result of the event.        |
| `resource_id`                     | `string` | The ID of the data entry that was changed.                         |
| `resource_type`                   | `string` | The type of the data entry that was changed.                       |
| `relationships.resource_path.url` | `string` | The URL of the data entry that was changed.                        |
| `links.self`                      | `string` | The self link.                                                     |

## Response Example

```json
{
    "meta": {
        "page": {
            "limit": 20,
            "offset": 0,
            "current": 1,
            "total": 1
        },
        "results": {
            "total": 4
        }
    },
    "data": [
        {
            "id": "faf8c40f-a680-40ae-b7bc-78533bbdd8c3",
            "store_id": "00000000-0000-1000-8000-000000000000",
            "type": "personal_data_log_entry",
            "initiator": {
                "access-token-email": "accounts@molt.in",
                "access-token-id": "1222341536243515939",
                "access-token-name": "moltin test team",
                "access-token-store-id": "15ea9633-278c-4807-80f7-2009fed63c7e",
                "access-token-type": "client-credentials-token"
            },
            "time": "2022-04-29T10:51:14.374Z",
            "event_type": "user-authentication-info.event.created",
            "delta": {
                "email": "some@email.com",
                "id": "00000000-0000-1000-8000-111111111112",
                "name": "some_name",
                "realm_id": "00000000-0000-1000-8000-111111111111",
                "store_id": "00000000-0000-1000-8000-000000000000",
                "type": "user-authentication-info"
            },
            "resource_id": "00000000-0000-1000-8000-111111111112",
            "resource_type": "user-authentication-info",
            "relationships": {
                "resource_path": {
                    "url": "http://www.elaticpath.com"
                }
            },
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/personal-data/logs?page[offset]=0&page[limit]=20",
        "first": "https://useast.api.elasticpath.com/v2/personal-data/logs?page[offset]=0&page[limit]=20",
        "last": "https://useast.api.elasticpath.com/v2/personal-data/logs?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```

## Filtering

The following operator and attributes are **required** for [filtering](/guides/Getting-Started/filtering) personal data logs.

| Operator | Description                                                                                          |
|:---------|:-----------------------------------------------------------------------------------------------------|
| `eq`     | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |

| Attribute       | Type | Operator | Example                                                 |
|:----------------| :--- | :--- |:--------------------------------------------------------|
| `resource_type` | `string` | `eq`  | `eq(resource_type,customer)`                            |
| `resource_id`   | `string` | `eq`  | `eq(resource_id,0f850c15-d643-480a-a2b4-9e3c26067178\)` |
