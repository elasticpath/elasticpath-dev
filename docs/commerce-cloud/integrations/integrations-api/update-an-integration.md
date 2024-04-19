---
id: update-an-integration
title: Update an Integration
nav_label: Update an Integration
sidebar_position: 80
---

## `PUT` Update by ID

```http
https://useast.api.elasticpath.com/v2/integrations/:id
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

### Body

| Name               | Required | Type                                                      | Description                                                                      |
| ------------------ | -------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `configuration`    | Optional | `object` | A [configuration object](/docs/commerce-cloud/integrations/integrations-api/create-an-integration#configuration-object).         |
| `observes`         | Optional | `array`                                                   | An array of events you want to observe.                                          |
| `enabled`          | Optional | `boolean`                                                 | Specifies whether the integration is enabled. Default:`false`.                   |
| `integration_type` | Optional | `string`                                                  | This defines how the event is delivered, either `webhook`, `aws_sqs` or `stomp`. |
| `description`      | Optional | `string`                                                  | A description for the integration.                                               |
| `name`             | Optional | `string`                                                  | The name of the integration.                                                     |
| `type`             | Required | `string`                                                  | Represents the type of object.                                                   |

## Request Example

### Curl

```bash
curl -X PUT https://useast.api.elasticpath.com/v2/integrations/:id \
     -H "Authorization: Bearer: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "integration",
        "enabled": false
      }
    }
```

### JavaScript SDK

```javascript
const integrationId = "25617d3e-14a6-434c-bfab-3fda87517aaf";
const data = {
    type: "integration",
    enabled: false,
};

// Where `EPCC` is an authenticated client
await EPCC.Integrations.Update(integrationId, data);
```

## Response Example

`200 OK`

```json
{
    "data": {
        "id": "8cb9e689-ede7-4f6d-b61a-6aa970d572dd",
        "type": "integration",
        "integration_type": "webhook",
        "name": "Order shipping notification",
        "description": "Send a shipping notification via email with discount code.",
        "enabled": false,
        "configuration": {
            "url": "https://yourwebsite.com/order-created-notification"
        },
        "observes": ["order.fulfilled"],
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/integrations/8cb9e689-ede7-4f6d-b61a-6aa970d572dd"
        },
        "meta": {
            "timestamps": {
                "created_at": "2018-04-30T09:35:32.202Z",
                "updated_at": "2018-04-30T09:48:24.816Z"
            }
        }
    }
}
```
