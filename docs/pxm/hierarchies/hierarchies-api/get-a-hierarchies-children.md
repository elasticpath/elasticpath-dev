---
title: Get a Hierarchies Children
nav_label: Get a Hierarchies Children
sidebar_position: 31
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `GET` Get a Hierarchies Children

```http
https://useast.api.elasticpath.com/pcm/hierarchies/:hierarchyId/children
```

Retrieves the child nodes for a specified hierarchy.

## Parameters

### Path parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `hierarchyId` | Required | `string` | The unique identifier of the hierarchy. |

### Headers

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Query parameters

| Name | Required | Type | Description |
| :--- | :--- | :--- | :--- |
| `page[limit]` | Optional | `integer` | The number of items to return per page. Minimum value is `1`. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |
| `page[offset]` | Optional | `integer` | The number of items to offset the results by. Offset is zero-based. See [Pagination](/docs/commerce-cloud/api-overview/pagination). |

## Request Example

```bash
curl -X GET https://useast.api.elasticpath.com/pcm/hierarchies/0e119de2-5fb0-4bca-9b84-b3fc6c903007/children \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "data": [
        {
            "type": "node",
            "id": "c7f4361f-f938-448e-84ba-ab8c7b1c3e38",
            "attributes": {
                "description": "Books that can make you dream or scare you.",
                "locales": {
                    "fr-FR": {
                        "name": "Science-fiction, fantastique et horreur",
                        "description": "Des livres qui peuvent vous faire rêver ou vous faire peur avec joie."
                    }
                },
                "name": "Science Fiction, Fantasy & Horror",
                "slug": "Slug-365932029288"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0ad394b5-33b3-4a1f-ad75-f24fc24445f5/nodes/c7f4361f-f938-448e-84ba-ab8c7b1c3e38/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0ad394b5-33b3-4a1f-ad75-f24fc24445f5/nodes/c7f4361f-f938-448e-84ba-ab8c7b1c3e38/products"
                    }
                }
            },
            "meta": {
                "created_at": "2022-03-03T10:19:19.764Z",
                "owner": "store",
                "updated_at": "2022-07-21T12:43:35.792Z"
            }
        },
        {
            "type": "node",
            "id": "8fab0b55-3af2-4965-bf78-51db1169f7dc",
            "attributes": {
                "description": "Literature and fiction books that we sell.",
                "locales": {
                    "fr-FR": {
                        "name": "Littérature & Fiction",
                        "description": "Livres de littérature et de fiction que nous vendons"
                    }
                },
                "name": "Literature & Fiction",
                "slug": "Slug-219613184873"
            },
            "relationships": {
                "children": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0ad394b5-33b3-4a1f-ad75-f24fc24445f5/nodes/8fab0b55-3af2-4965-bf78-51db1169f7dc/children"
                    }
                },
                "products": {
                    "data": [],
                    "links": {
                        "related": "/hierarchies/0ad394b5-33b3-4a1f-ad75-f24fc24445f5/nodes/8fab0b55-3af2-4965-bf78-51db1169f7dc/products"
                    }
                }
            },
            "meta": {
                "created_at": "2022-03-03T10:21:36.381Z",
                "owner": "store",
                "updated_at": "2022-03-03T10:21:36.381Z"
            }
        }
    ],
    "meta": {
        "results": {
            "total": 2
        }
    }
}
```
