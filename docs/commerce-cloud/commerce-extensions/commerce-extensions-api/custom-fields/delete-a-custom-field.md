---
title: Delete a Custom Field
nav_label: Delete a Custom Field
nav_position: 5
---

## `DELETE` Delete Custom Field by ID

```http
https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields/:customFieldId
```

## Paramerers

### Path parameters

| Name            | Required | Type     | Description                                              |
|-----------------|----------|----------|----------------------------------------------------------|
| `customApiId`   | Required | `string` | The unique identifier of the Custom API.                 |
| `customFieldId` | Required | `string` | The unique identifier of the Custom Field to be deleted. |


### Headers

| Name            | Required | Type     | Description                                         |
|-----------------|----------|----------|-----------------------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example

```bash
curl -X DELETE https://useast.api.elasticpath.com/v2/settings/extensions/custom-apis/:customApiId/fields/:customFieldId \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`204 No Content`
