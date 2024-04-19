---
title: Integrations API Overview
nav_label: Integrations API Overview
sidebar_position: 20
---

You can integrate Commerce with your external systems like enterprise resource planning, order management, fulfilment, and other systems, ensuring that buying is quick and easy for your shoppers.

With integrations, you can trigger custom code, which performs actions outside of the Commerce ecosystem, from [observable events](/docs/commerce-cloud/integrations/observable-events). Events can be delivered in a number of ways, such as a webhook or a message queuing service like Amazon SQS. For example, you can send a discount code or a Net Promoter Score (NPS) survey email a few days after an order is fulfilled. You can do this through a webhook that sends event data to your custom function, or by sending a message that is delivered to your message queue.

Events are processed concurrently. This means that events may not be delivered in the order they are created. For example, if the status of an order is updated multiple times, the events may not be delivered in the same sequence they were updated. Integration events operate on an "at least once" delivery policy. We aim to deliver messages within 30 minutes or less. Ensure that you design your receiving code accordingly.

## Integration Object

| Attribute          | Type                                                      | Description                                                                         |
| :----------------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `id`               | `string`                                                  | Specifies the unique identifier for the integration.                                |
| `type`             | `string`                                                  | Represents the type of object being returned.                                       |
| `name`             | `string`                                                  | Specifies the name of the integration.                                              |
| `description`      | `string`                                                  | Specifies a description for the integration.                                        |
| `integration_type` | `string`                                                  | Specifies how the integration is delivered, either `webhook`, `aws_sqs`, or `stomp` |
| `enabled`          | `boolean`                                                 | Specifies whether the integration is enabled.                                       |
| `observes`         | `array[string]`                  | Specifies an array of [observable events](/docs/commerce-cloud/integrations/observable-events).                    |
| `configuration`    | `object` | Specifies a [configuration object](/docs/commerce-cloud/integrations/integrations-api/create-an-integration#configuration-object).  |

