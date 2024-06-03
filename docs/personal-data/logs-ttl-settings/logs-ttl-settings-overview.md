---
title: Logs Time to Live Settings Overview
nav_label: Logs Time to Live Settings Overview
sidebar_position: 10
---

You can use the `Logs TTL Settings` endpoint to retrieve and update settings controlling logs time-to-live (TTL).

## The Logs TTL Settings Object

| Attribute | Type | Description |
|:---|:---|:---|
| `days` | `integer` | The number of days to retain the logs. Allowed values are between 1 and 365. |
| `type` | `string` | The type represents the object being returned. You must use `time_to_live. |

## Sample Response

```json
{
    "data": {
        "days": 10,
        "type": "time_to_live"
    }
}
```
