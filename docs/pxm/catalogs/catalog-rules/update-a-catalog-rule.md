---
title: Update a Catalog Rule
nav_label: Update a Rule
sidebar_position: 50
---

:::caution
This endpoint is for Administrator use only. Do not use this endpoint on your customer-facing frontends.
:::

## `PUT` Update a Catalog Rule

```text
https://useast.api.elasticpath.com/pcm/catalogs/rules/:catalogRuleId
```

Updates an existing catalog rule. This operation performs a sparse update. Only the fields included in the request body are updated.

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `catalogRuleId` | Required | `string` | Specifies the unique identifier of a catalog rule. |

### Headers

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. Note that this must be a client credentials token. |

### Body

Required. A [`Rule`](/docs/pxm/catalogs/shopper-catalog/catalog-shopper-overview#the-rule-object) object with the fields you want to update.

| Attribute                 | Required | Type      | Description               |
|:--------------------------|:---------|:----------|:--------------------------|
| `id`                      | Required | `string`  | Specifies the ID of the catalog that you want to update. The same `catalogRuleId` is used as the path parameter in the request. |
| `type`                    | Required | `string`  | Specifies the type of the catalog that you want to update. Set this value to `catalog_rule`. |
| `attributes.name`         | Required | `string`  | Specifies the name of the rule that you want to update. |
| `attributes.description`  | Optional | `string`  | Specifies the purpose for this rule that you want to update. |
| `attributes.catalog_id`   | Required | `string`  | Specifies the unique identifier of the catalog for this rule that you want to update. |
| `attributes.account_ids`  | Optional | `[array]` | Specifies the list of accounts who are eligible to see this catalog. If this field is empty, the rule matches all accounts. |
| `attributes.customer_ids` | Optional | `[array]` | Specifies the list of customers who can see this catalog. If this field is empty, the rule matches all customers. |
| `attributes.channels`     | Optional | `[array]` | Specifies the list of channels in which this catalog can be displayed. A channel is the shopping experience, such as a mobile app or web storefront. If empty, the rule matches all channels. |
| `attributes.tags`         | Optional | `[array]` | Specifies a list of user-defined tags that can be used to refine the rule in any way you want. |
| `attributes.schedules`    | Optional | `[array]` | Specifies a time period when a catalog is displayed, such as on a specific date or during summer. The `schedules` attribute must include `valid_from` and `valid_to`. `valid_from` matches the date and time that the catalog is displayed from. `valid_to` matches the date and time the catalog is displayed to. Commerce runs on Coordinated Universal Time (UTC) time and conforms to [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339). You can offset the timezone by adding the offset to the end of the date and time. For example, a catalog which contains a sale hierarchy that should appear for a set timeframe may be scheduled to publish on a given date and time within a given timezone. For instance, a sale that should begin on 1st of June 2022 05:00 ET and end on the 15th of June 2022 at 23:50 PT would have a valid schedule of `"valid_from": "2022-06-01T05:00:00.000-05:00",` `"valid_to": "2022-06-15T11:59:99.000-08:00"`. |

## Request Example

```bash
curl -X PUT https://useast.api.elasticpath.com/pcm/catalogs/rules/4abd19fa-b697-4cec-a1c7-922a16a264f6 \
     -H "Authorization: Bearer XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
        "data": {
            "id": "4abd19fa-b697-4cec-a1c7-922a16a264f6",
            "type": "catalog_rule",
            "attributes": {
                "catalog_id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a"
            }
        }
    }
```

## Response Example

`200 OK`

```json
{
    "data": {
        "attributes": {
            "catalog_id": "8caf81b8-9bc7-4b72-92fc-3775722aa06a",
            "channels": ["dealers-site"],
            "created_at": "2021-04-12T16:47:39.178Z",
            "description": "Dealers",
            "name": "Dealers",
            "channels": ["in_store"],
            "schedules": [
                {
                    "valid_from": "2021-09-22T00:00:00.000+01:00",
                    "valid_to": "2021-12-21T00:00:00.000+01:00"
                }
            ],
            "updated_at": "2021-04-12T16:56:36.029Z"
        },
        "id": "4abd19fa-b697-4cec-a1c7-922a16a264f6",
        "type": "catalog_rule"
    },
    "links": {
        "self": "/pcm/catalogs/rules/4abd19fa-b697-4cec-a1c7-922a16a264f6"
    }
}
```
