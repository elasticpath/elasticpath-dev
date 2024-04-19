---
title: Overview
nav_label: Overview
sidebar_position: 10
---

You can integrate Commerce with your external systems like enterprise resource planning, order management, fulfilment, and other systems, ensuring that buying is quick and easy for your shoppers.

Events are actions that occur in your commerce workflow, such as a customer changing their address or an order changing status from created to paid. You can create custom functions that perform additional processing outside of Commerce, and create integrations so that when an event occurs in your store, the custom function is run.

For example:

- When a customer updates their address, the Customer Relationship Management system is updated with the change.
- When an order status changes to paid, the affected stock in an inventory management system is reduced by the number of items in the order.

Events are processed concurrently. This means that events may not be delivered in the order they are created. For example, if the status of an order is updated multiple times, the events may not be delivered in the same sequence they were updated. Integration events operate on an "at least once" delivery policy. We aim to deliver messages within 30 minutes or less. Ensure that you design your receiving code accordingly.

:::note
For a list of all the events that can be used, see [Observable Events](/docs/commerce-cloud/integrations/observable-events) in the API reference.
:::

You can integrate Commerce with your external systems using:

- Webhooks
- Message Queuing Services

## Webhooks

You can use Webhooks to deliver Commerce events to a configured HTTP endpoint.

## Message Queuing Services

You can deliver Commerce events to messages queues through the following message queuing services:

- Amazon Simple Queuing Service (SQS)
- Message queuing services that support the Message Simple Text Orientated Messaging Protocol (STOMP), for example, Amazon MQ.

    :::note
    You can integrate Amazon SQS and message queuing services that support STOMP through the Integrations API. You can view the integration details in Commerce Manager > **SYSTEM** > **Store Settings** > **Webhooks**. For more information, see [Create an integration](/docs/commerce-cloud/integrations/integrations-api/create-an-integration).
    :::
