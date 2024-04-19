---
title: Update a Nodeʼs Parent
nav_label: Update a Nodeʼs Parent
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Nodeʼs Parent

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/nodes/:nodeId/relationships/parent
```

Changes the parent of the specified node. The new parent node must be located within the same hierarchy as the specified node.

:::note
You cannot move a node to another hierarchy. If you want to put the specified node into another hierarchy, create the node in the target hierarchy and delete it from the current hierarchy.
:::

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |
| `nodeId` | Required | `string` | The unique identifier of the node in the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token to grant access to the API. |

### Body

Required. A Node Reference object that identifies the new parent node.

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `type` | Required | `string` | Always: `node` |
| `id` | Required | `string` | The unique identifier of a node within the same hierarchy as the node you specified in the request. A node cannot be its own parent. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/nodes/de3c3590-4138-4943-b04d-d7b7dc48fa54/relationships/parent \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data":{
            "type":"node",
            "id": "e2f3372c-89ed-49ae-a9c7-0dc1888f10ec"
            }
        }
```

## Response Example

`204 No Content`
