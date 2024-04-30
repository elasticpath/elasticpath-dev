---
title: Update a Custom API Entry
nav_label: Update a Custom API Entry
sidebar_position: 4
---

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/extensions/:customApiSlug/:customEntryId
```

## Paramerers

### Path parameters

| Name   | Required | Type     | Description                                               |
|--------|----------|----------|-----------------------------------------------------------|
| `customApiSlug` | Required | `string` | The unique identifier of the Custom API.                  |
| `customEntryId`   | Required | `string` | The unique identifier for the custom entry to be updated. |


### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |


### Body

{% table %}
* Name
* Required
* Type
* Description
---
*
  `type`
*
  Required
*
  `string`
*
  Represents the type of the object being returned. Must be the `api_type` of the [Custom API](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-apis/overview).
---
*
  [customFields](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview)
*
  Optional
*
  * `string`
  * `integer`
  * `boolean`
*
  Represents the values to store in the object. Each key must match a `slug` of a Custom Field and the corresponding value must conform to the defined `field_type` and meet the `validation` defined for that field if set.
{% /table %}

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/extensions/:slug/:id \
    -H "Authorization: Bearer XXXX" \
    -H "Content-Type: application/json" \
    -d $ {
      "data": {
        "type": "wishlist_ext",
        "name": "My Tech Wishlist"
      }
    }
```

## Response Example

`200 OK`

```json
{
  "data": {
    "id": "859aeba1-03c2-4822-bd4c-89afce93d7eb",
    "links": {
      "self": "https://useast.api.elasticpath.com/v2/extensions/wishlists/859aeba1-03c2-4822-bd4c-89afce93d7eb"
    },
    "meta": {
      "timestamps": {
        "created_at": "2024-02-12T16:58:11.189Z",
        "updated_at": "2024-02-12T17:19:03.713Z"
      }
    },
    "type": "wishlist_ext",
    "name": "My Tech Wishlist"
  }
}
```

`400 Bad Request`

In this example there exists a string Custom Field, province, with `data.field.validation.max_length: 2` and `data.field.validation.regex: "[A-Z]"`. The Custom API Entry that we tried to update did not meet these [validation](/docs/commerce-cloud/commerce-extensions/commerce-extensions-api/custom-fields/overview#validation) rules.

```json
{
  "errors": [
    {
      "status": "400",
      "title": "Bad Request",
      "detail": "Invalid value for field 'province'. Expected max_length to be no greater than 2."
    },
    {
      "status": "400",
      "title": "Bad Request",
      "detail": "Invalid value for field 'province'. Expected string to match regex: '[A-Z]'."
    }
  ]
}
```

`413 Payload Too Large`

The total size of a Custom API Entry must not exceed 64KB, the following error is returned if the request payload is too large.

```json
{
  "errors": [
    {
      "status": "413",
      "title": "Request Entity Too Large",
      "detail": "Maximum entry size reached."
    }
  ]
}
```