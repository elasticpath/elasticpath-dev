---
title: Create an Integration
nav_label: Create an Integration
sidebar_position: 70
---

## `POST` Create an Integration

```http
https://useast.api.elasticpath.com/v2/integrations
```

## Parameters

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Body

| Name               | Required | Type                              | Description                                                                             |
| ------------------ | -------- | --------------------------------- | --------------------------------------------------------------------------------------- |
| `configuration`    | Required | `object` | A [configuration object](#configuration-object).                                        |
| `observes`         | Required | `array`                           | An array of events you want to observe.                                                 |
| `enabled`          | Optional | `boolean`                         | Specifies whether the integration is enabled.                                           |
| `integration_type` | Required | `string`                          | Specifies how the event is delivered. The options are `webhook`, `aws_sqs`, or `stomp`. |
| `description`      | Required | `string`                          | Specifies a description for the integration.                                            |
| `name`             | Required | `string`                          | Specifies the name of the integration.                                                  |
| `type`             | Required | `string`                          | Represents the type of object.                                                          |

## Request Examples

```bash
curl -X POST https://useast.api.elasticpath.com/v2/integrations \
     -H "Authorization: Bearer: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "integration",
        "name": "Order shipping notification",
        "description": "Send a shipping notification via email with discount code.",
        "enabled": true,
        "observes": [
          "order.fulfilled"
        ],
        "integration_type": "webhook",
        "configuration": {
          "url": "https://yourwebsite.com/order-created-notification"
        }
      }
    }
```

### JavaScript SDK

```javascript
const data = {
    name: "Order shipping notification",
    description: "Send a shipping notification via email with discount code.",
    enabled: true,
    observes: ["order.fulfilled"],
    integration_type: "webhook",
    configuration: {
        url: "https://yourwebsite.com/order-created-notification",
    },
};

// Where `EPCC` is an authenticated client
await EPCC.Integrations.Create(data);
```

### Amazon Simple Message Queuing Service (SQS) request example

```json
{
    "data": {
        "type": "integration",
        "name": "Cart updated notifications",
        "description": "Send an SQS message when a cart is updated",
        "enabled": true,
        "observes": ["cart.updated"],
        "integration_type": "aws_sqs",
        "configuration": {
            "url": "https://sqs.eu-west-1.amazonaws.com/123456789/epcc-external-queue",
            "aws_access_key_id": "ASIAJLVYNHUWCPKOPSYQ",
            "aws_secret_access_key": "mgJteE7dZgSLC2eo2vKsAUWRSnchrWzCRnoDpUSJ",
            "region": "eu-west-1"
        }
    }
}
```

### Message Queuing Services Supporting STOMP request example

```json
{
    "data": {
        "type": "integration",
        "integration_type": "stomp",
        "name": "Customer address updated",
        "configuration": {
            "addresses": ["stomp://useast.api.elasticpath.com"],
            "destination": "/queue/queue1",
            "username": "user1",
            "password": "*******d123"
        },
        "observes": ["address.updated"],
        "links": {
            "self": "http://useast.api.elasticpath.com/v2/integrations/4dfa2c76-7d2e-4dda-8875-2b983c691976"
        },
        "meta": {
            "timestamps": {
                "created_at": "2021-11-11T10:45:04.688Z",
                "updated_at": "2021-11-11T10:45:04.688Z"
            }
        }
    }
}
```

## Response Example

`201 Created`

```json
{
    "data": {
        "id": "8cb9e689-ede7-4f6d-b61a-6aa970d572dd",
        "type": "integration",
        "integration_type": "webhook",
        "name": "Order shipping notification",
        "description": "Send a shipping notification via email with discount code.",
        "enabled": true,
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
                "updated_at": "2018-04-30T09:35:32.202Z"
            }
        }
    }
}
```

## Configuration Object

To have events delivered to your system, you must provide specific configuration to a new integration.

:::note
You can add only five events to the `observes` array. If you try to add more than five, the following error is returned:

- "You have reached the integration event limit of 5" (API).
- "There was a problem saving your integration" (Commerce Manager).

:::

The content of the configuration object depends on the value of the `integration_type`.

| Integration Type | Configuration Object                                                                                                                      |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `webhook`        | [Configuring a webhook](#configuring-a-webhook)                                                                                           |
| `aws_sqs`        | [Configuring an AWS SQS queue](#configuring-an-aws-sqs-queue)                                                                             |
| `stomp`          | [Configuring a Simple Text Oriented Messaging Protocol (STOMP) queue](#configuring-a-simple-text-oriented-messaging-protocol-stomp-queue) |

### Configuring a webhook

Webhooks are delivered using `POST` to the configured `url`. You can specify a `secret_key` to forward to \_\_`X-MOLTIN-SECRET-KEY` along with the request as a header.

:::note
`X-MOLTIN-INTEGRATION-TRIGGER` is also added to the request headers. This allows you to process several events at the same `url`. This is in the format of an [observable event](/docs/commerce-cloud/integrations/observable-events) key.
:::

The webhook configuration object has the following structure.

| Attribute    | Type   | Description                                                                                                             |
| :----------- | :----- | :---------------------------------------------------------------------------------------------------------------------- |
| `url`        | string | A **required** URL that the integration fires.                                                                          |
| `secret_key` | string | A _optional_ header. Useful to authenticate the response came from Elastic Path. This is sent as `X-MOLTIN-SECRET-KEY`. |

```javascript
{
  "url": "https://yourwebsite.com/order-created-notification", // Required
  "secret_key": "secret_key_to_validate_on_your_endpoint" // Optional
}
```

### Configuring an AWS SQS queue

These event types are delivered directly into the specified AWS SQS queue.

The AWS SQS configuration object has the following structure:

| Attribute               | Type   | Description                     |
| :---------------------- | :----- | :------------------------------ |
| `url`                   | string | The required SQS queue URL.     |
| `aws_access_key_id`     | string | The required AWS access key ID. |
| `aws_secret_access_key` | string | The required AWS secret key ID. |
| `region`                | string | The required AWS region.        |

```javascript
{
  "url": "https://sqs.eu-west-1.amazonaws.com/123456789/epcc-external-queue",
  "aws_access_key_id": "****************JIMB",
  "aws_secret_access_key": "************************************HK4o",
  "region": "eu-west-1"
}
```

### Configuring a Simple Text Oriented Messaging Protocol (STOMP) queue

These event types are delivered directly into the specified message queue.

The STOMP configuration object has the following structure:

| Attribute     | Type   | Description                                               |
| :------------ | :----- | :-------------------------------------------------------- |
| `username`    | string | The username used to authenticate against a STOMP server. |
| `password`    | string | The password used to authenticate against a STOMP server. |
| `destination` | string | The destination in the messaging queuing system.          |
| `addresses`   | string | The addresses that correspond with the destination name.  |

```javascript
{
  "username": "epcc-integration-1",
  "password": "****************************CDKn",
  "destination": "/queue/epcc-integrations.order-created",
  "addresses": [
      "stomp+ssl://b-618354a5-e04f-4eff-99c7-734e9d8b91a5-2.mq.us-west-2.amazonaws.com:61614",
      "stomp+ssl://b-618354a5-e04f-4eff-99c7-734e9d8b91a5-1.mq.us-west-2.amazonaws.com:61614"
    ]
}
```
