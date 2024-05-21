---
title: Get all Catalog Rules
nav_label: Get all Rules
sidebar_position: 20
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get all Catalog Rules

```text
https://useast.api.elasticpath.com/pcm/catalogs/rules
```

Retrieves a list of all the catalog rules that you are authorized to view.

## Parameters

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. You must use the client credentials token of your store. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `filter`| Optional | `string` | Specifies the filter attributes. See [Filtering](#filtering). |
| `page[limit]` | Optional | `integer` | Specifies the number of items to return per page. The minimum value is `1`. See [Pagination](/guides/Getting-Started/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | Specifies the number of items to offset the results by. The offset is zero-based. See [Pagination](/guides/Getting-Started/api-overview/pagination). |

## Filtering

The following operator and attribute are available when filtering on this endpoint.

| Operator | Description | Supported Attributes | Example |
|:--- |:--- |:--- |:--- |
| `In` | Checks if the values are included in the specified string. If they are, the condition is true. | `id` | `filter=in(id,some-id)` | 

For more information, see [Filtering](/guides/Getting-Started/api-overview/filtering).

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/catalogs/rules \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "attributes": {
                "catalog_id": "c05112ee-b4d5-4bea-bdcb-81b5ef3306d2",
                "created_at": "2021-03-02T20:28:00.199Z",
                "description": "Website channel",
                "name": "Web storefront",
                "channels": ["in_store"],
                "schedules": [
                  {
                    "valid_from": "2021-09-22T00:00:00.000+01:00(Europe/Paris)",
                    "valid_to": "2021-12-21T00:00:00.000+01:00(Europe/Paris)"
                  }
                ],
                "updated_at": "2021-03-02T20:28:00.199Z"
            },
            "id": "ac7d1ea8-6220-44b6-978d-a55bf111772d",
            "type": "catalog_rule"
        },
        {
            "attributes": {
                "catalog_id": "aea233e7-1300-48ce-9b45-7d0c0b60dde3",
                "created_at": "2021-04-12T16:39:27.635Z",
                "customer_ids": [
                    "fcb065be-0af3-4bb1-94c2-a1ffc53277a9"
                ],
                "description": "Preferred customers",
                "name": "Preferred customers",
                "channels": ["in_store"],
                "schedules": [
                  {
                    "valid_from": "2021-09-22T00:00:00.000+01:00(Europe/Paris)",
                    "valid_to": "2021-12-21T00:00:00.000+01:00(Europe/Paris)"
                  }
                ],
                "updated_at": "2021-04-12T16:39:27.635Z"
            },
            "id": "a01fc6f9-70f9-4d08-af8f-4357e35febd4",
            "type": "catalog_rule"
        },
        {
            "attributes": {
                "catalog_id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a",
                "channels": [
                    "dealers-site"
                ],
                "created_at": "2021-04-12T16:47:39.178Z",
                "description": "Dealers",
                "name": "Dealers",
                "channels": ["in_store"],
                "schedules": [
                  {
                    "valid_from": "2021-09-22T00:00:00.000+01:00(Europe/Paris)",
                    "valid_to": "2021-12-21T00:00:00.000+01:00(Europe/Paris)"
                  }
                ],
                "updated_at": "2021-04-12T16:47:39.178Z"
            },
            "id": "4abd19fa-b697-4cec-a1c7-922a16a264f6",
            "type": "catalog_rule"
        }
    ],
    "links": {
        "first": "/pcm/catalogs/rules?page[offset]=0&page[limit]=25&",
        "last": "/pcm/catalogs/rules?page[offset]=0&page[limit]=25&",
        "self": "/pcm/catalogs/rules"
    }
}
```
