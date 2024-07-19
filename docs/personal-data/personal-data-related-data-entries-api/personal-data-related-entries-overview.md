---
title: Personal-Data Related Data Entries Overview
nav_label: Personal-Data Related Data Entries Overview
sidebar_position: 10
---

This is a supplementary endpoint for the [logs](/docs/personal-data/personal-data-logs-api/personal-data-logs-api-overview) endpoint. It allows you to view all data entries that are related to the
resource specified in the filter. For example, a user can get all data items that relate to a customer, such as addresses or user authentication info.

This API is read only, and you cannot add/update/delete anything using this API.

The API only allows you to list related data items for a particular data entry (specified in the filter GET parameter).

## The Log Object

### Fields

| Attribute                         | Type | Description                                                   |
|-----------------------------------|--- |---------------------------------------------------------------|
| `type`                            | `string` | The type of the object. Always equal to `related_data_entry`. |
| `resource_id`                     | `string` | The ID of a related data entry.                               |
| `resource_type`                   | `string` | The type of a related data entry.                             |

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
            "total": 1
        }
    },
    "data": [
        {
            "resource_id": "00000000-0000-1000-8000-111111111112",
            "type": "related_data_entry",
            "resource_type": "user-authentication-info"
        }
    ],
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?page[offset]=0&page[limit]=20",
        "first": "https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?page[limit]=20&page[offset]=0",
        "last": "https://useast.api.elasticpath.com/v2/personal-data/related-data-entries?page[offset]=0&page[limit]=20",
        "next": "null",
        "prev": "null"
    }
}
```

## Filtering

The following operator and attributes are **required** for [filtering](/guides/Getting-Started/filtering) related data entries.

| Operator | Description                                                                                          |
|:---------|:-----------------------------------------------------------------------------------------------------|
| `eq`     | Checks whether the values of two operands are equal. If the values are equal, the condition is true. |

| Attribute       | Type | Operator | Example                                                 |
|:----------------| :--- | :--- |:--------------------------------------------------------|
| `resource_type` | `string` | `eq`  | `eq(resource_type,customer)`                            |
| `resource_id`   | `string` | `eq`  | `eq(resource_id,0f850c15-d643-480a-a2b4-9e3c26067178\)` |
