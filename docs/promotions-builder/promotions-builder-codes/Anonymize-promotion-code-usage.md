---
title: Anonymize Promotion Code Usage
nav_label: Anonymize Promotion Code Usage
sidebar_position: 8
---

## `Post` Anonymize Promotion Code Usage

```http
https://useast.api.elasticpath.com/v2/rule-promotions/usages/anonymize

```

Use this endpoint to anonymize promotion code usage. When anonymization is successful, Personal Identifiable Information such as the `customer_email` address is replaced with `*`.

## Parameters

### Path parameters

| Name | Required | Type     | Description                      |
|:-----|:---------|:---------|:---------------------------------|
| `usage_ids` | Required | `array [string]` | The unique identifiers of the usages to be anonymized. You can anonymize multiple usages at the same time. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X POST https://useast.api.elasticpath.com/v2/promotions/usages/anonymize \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "usage_ids": ["333ad446-8611-435a-97e4-0d1aa970e6c7"]
  }
}
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "id": "333ad446-8611-435a-97e4-0d1aa970e6c7",
            "order_id": "b9b21932-a021-4b84-861f-501f1c222dfc",
            "code_id": "31b5877e-2c19-4d9c-9418-166d7759c8e7",
            "code": "unlimited",
            "times_used": 1,
            "used_on": "2024-08-15T23:27:18.068Z",
            "customer_id": "5abb8d4e-57c0-459b-91d5-c4e6f77e9c5e",
            "customer_email": "**",
            "meta": {
                "timestamps": {
                    "updated_at": "2024-08-15T23:28:08.874Z"
                }
            },
            "updated_by": "Key-2439657140697170361",
            "anonymized": true
        }
    ]
}
```