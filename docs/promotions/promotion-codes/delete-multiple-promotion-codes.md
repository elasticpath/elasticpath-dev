---
title: Delete Multiple Promotio Codes
nav_label: Delete Multiple Promotion Codes
sidebar_position: 3.5
---

## `DELETE` Delete Multiple Promotion Codes

```http
https://useast.api.elasticpath.com/v2/promotions/:id/codes/
```

Use this endpoint to delete multiple promotion codes within a specific promotion.

## Parameters

### Path parameters

| Name | Required | Type     | Description                                    |
| ---- | -------- | -------- | ---------------------------------------------- |
| `id` | Required | `string` | ID of the promotion associated with the codes. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name           | Required | Type     | Description                                                         |
| -------------- | -------- | -------- | ------------------------------------------------------------------- |
| `type`         | Required | `string` | Specifies the type of the resource, you must use `promotion_codes`. |
| `codes[]`      | Required | `array`  | Specifies an array of codes that you want to delete. |
| `codes[].code` | Required | `object` | Specifies the code that you want to delete. |
| `codes[].user`   | Optional | `string` | Specifies the ID of the customer who can use the code. |
| `codes[].uses`   | Optional | `integer`| Specifies the maximum number of times the code can be used. If no value is set, the customer can use the code any number of times. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/promotions/:id/codes \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data":{
        "type":"promotion_codes",
        "codes": [
      {
          "code": "ABCXYZ"
      },
      {
          "code": "ABC",
          "user": "{customerID}",
          "uses": 10
      }
    ]
  }
}
```

### Response Example

`204 No Content`
