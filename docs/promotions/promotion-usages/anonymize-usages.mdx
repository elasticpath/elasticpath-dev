---
title: Anonymize usages
nav_label: Anonymize Usages
sidebar_position: 3
---

You can anonymize promotion usage.

When anonymization is successful, Personal Identifiable Information such as `customer_email` address is replaced with `*`.

## `POST` Anonymize Usages

```http
https://useast.api.elasticpath.com/v2/promotions/usages/anonymize
```

## Parameters

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. The grant type must be `client_credentials`. |

### Body

| Name   | Required | Type     | Description |
|:-------|:---------|:---------|:------------|
| `usage_ids` | Required | `array [string]` | The unique identifiers of the usages to be anonymized. You can anonymize multiple usages at the same time. |

## Request Example - Curl

```bash
curl -X POST https://useast.api.elasticpath.com/v2/promotions/usages/anonymize \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "usage_ids": ["ca4385ec-7fb2-4a95-8690-f752c508d68a"]
  }
}
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "ca4385ec-7fb2-4a95-8690-f752c508d68a",
            "order_id": "8edd5ca8-39b7-468d-aea9-a470690ca98d",
            "code_id": "00fc633b-9932-4e18-b122-fd5c3173caa3",
            "code": "node1off",
            "times_used": 1,
            "used_on": "2023-06-19T18:05:20.846Z",
            "cusomter_id": "9ef25142-d67a-41d3-99b2-4d30aeef6c9d",
            "customer_email": "**",
            "meta": {
                "timestamps": {
                    "updated_at": "2023-06-19T18:05:39.141Z"
                }
            },
            "updated_by": "Key-2439657140697170361",
            "anonymized": true
        }
    ]
}
```
## Errors

The following response is returned if some `usage_ids` are successfuly anonymized and if some `usage_ids` are not valid. The invalid `usage_ids` are returned in the `errors:[]` array.

```json
{
    "data": [
        {
            "id": "6a847eba-aec1-4d35-b43a-c9ff7f14e3e3",
            "order_id": "2ff49239-3a3c-4877-8611-37515aac20c2",
            "code_id": "00fc633b-9932-4e18-b122-fd5c3173caa3",
            "code": "node1off",
            "times_used": 1,
            "used_on": "2023-06-16T17:38:11.403Z",
            "customer_email": "**",
            "meta": {
                "timestamps": {
                    "updated_at": "2023-06-16T18:14:14.218Z"
                }
            },
            "anonymized": true
        }
    ],
    "errors": [
        {
            "status": "404",
            "title": "Could not anonymize some usages",
            "detail": "Usages not found.",
            "meta": {
                "usage_ids": [
                    "6a847eba-aec1-4d35-b43a-c9ff7f14e3e4"
                ]
            }
        }
    ]
}
```