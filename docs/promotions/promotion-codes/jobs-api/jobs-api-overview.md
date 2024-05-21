---
title: Jobs API Overview
nav_label: Jobs API Overview
sidebar_position: 0.5
---

:::caution
The `jobs` endpoints work using `client_credentials` token.
:::

## The `Job` Object

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | A unique ID generated when a job is created. |
| `type` | `string` | Always `promotion_job`. |
| `promotion_id` | `string` | A unique ID of a promotion. |
| `job_type` | `string`| The type of job you want to run. For example, `code_generate` to generate codes or `code_export` to export codes. |
| `name` | `string`| The name of the job. The maximum length allowed is 50 characters. |
| `parameters.number_of_codes` | `integer` | The number of codes to be generated. It cannot be greater than the maximum number of codes per promotion, which defaults at 1000. |
| `parameters.consume_unit` | `string` | Whether the usage limitation is at the item-level or cart-level. The options available are `per_item` and `per_cart`. |
| `parameters.max_uses_per_code` | `integer` | The maximum number of usages of a code for a promotion. If set to zero, you cannot use this promotion. If no value is set, it can be used unlimited times. |
| `parameters.code_length` | `integer` | The code length, which ranges from 8 to 16 characters. The default code length is eight characters, and a dash is added after every four characters in the code. For example, *aa2b-3c4d*. |
| `parameters.code_prefix` | `string` | The prefix to include with the promotion code. For example, when the generated value is *aa2b-3c4d* and the prefix value is set as `summer`, the promotion code becomes *summer-aa2b-3c4d*.
| `status` | `string` | The status of the job. See [Overview](/docs/promotions/promotion-codes/jobs-api/overview). |
| `meta.timestamps.created_at` | `string` | The creation date of the job. |
| `meta.timestamps.updated_at` | `string` | The last updated date of the job. |

## Sample Response

`200 OK`

```json
{
    "data": {
        "type": "promotion_job",
        "id": "84d86114-a92d-4c34-92f1-3e36ef6cabeb",
        "promotion_id": "ad386702-e780-42c6-b190-0527ad768917",
        "job_type": "code_generate",
        "name": "job",
        "parameters": {
            "number_of_codes": 100,
            "consume_unit": "per_cart",
            "max_uses_per_code": 1,
            "code_length": 8,
            "code_prefix": "promo-"
        },
        "status": "pending",
        "meta": {
            "timestamps": {
                "created_at": "2023-12-06T13:52:29.587645714Z",
                "updated_at": "2023-12-06T13:52:29.587645714Z"
            }
        }
    }
}
```






