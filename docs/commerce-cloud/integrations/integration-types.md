---
title: Integrations Types
nav_label: Integration Types
sidebar_position: 20
---

Commerce supports the following integration types:

- Using [webhooks](#webhooks), you can have Commerce deliver events to a configured HTTP endpoint.

 :::caution
Webhooks that return anything other than a 2XX status code, or take more than 30 seconds to respond, are considered failed.
:::

- Using [message queuing services](#message-queuing-services), you can deliver Commerce events to a message queue. The advantages of using message queuing services over webhooks are:

  - A temporary failure of a webhook endpoint can result in lost events. However, if messages are on your own queue, you can leave the event on the queue to retry later.
  - If events take a long time to process, a webhook can timeout, but delivery to a queue is always going to take the same amount of time.

### Webhooks

An integration with an `integration_type` of [`webhook`](/docs/commerce-cloud/integrations/integrations-api/create-an-integration#configuring-an-aws-sqs-queue) delivers its events to a configured HTTP endpoint.

#### Response example

```json
{
    "data": {
        "id": "328b4e0b-4032-48d0-8c85-04cc4c0a331d",
        "type": "integration",
        "name": "Order shipping notification",
        "description": "Send a shipping notification via email with discount code.",
        "integration_type": "webhook",
        "enabled": true,
        "observes": ["order.fulfilled"],
        "configuration": {
            "url": "https://ilovelamp.now.sh/send-shipped-email",
            "secret_key": "SOME_SECRET_KEY"
        }
    }
}
```

### Message Queuing Services

Elastic Path allows you to integrate with the following message queuing services:

- Amazon Simple Message Queuing Service (SQS).
- Message queuing services that use Simple Text Orientated Messaging Protocol (STOMP), for example, Amazon MQ.

    :::note
    You can integrate Amazon SQS and message queuing services that support STOMP through the Integrations API. You can view the integration details in Commerce Manager > **SYSTEM** > **Store Settings** > **Webhooks**. For more information, see [Create an integration](/docs/commerce-cloud/integrations/integrations-api/create-an-integration).
    :::

#### Amazon Simple Message Queuing Service (SQS)

An integration with an `integration_type` of [`aws_sqs`](/docs/commerce-cloud/integrations/integrations-api/create-an-integration#configuring-an-aws-sqs-queue) delivers its events directly into the configured AWS SQS queue. These messages can be processed by any appropriate means, such as a Lambda function.

For more information about creating Simple Queue Service (SQS) queues, see the [Simple Queue Service (SQS)](/docs/commerce-cloud/integrations/sqs-queues) and [SQS Events with CloudFormation](/docs/commerce-cloud/integrations/sqs-queues-cloudformation) sections.

##### Request example

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

##### Response example

`201 Created`

```json
{
    "data": {
        "id": "74dcfb94-a294-45f2-b3e5-93e55b6f4240",
        "type": "integration",
        "integration_type": "aws_sqs",
        "name": "Cart updated notifications",
        "description": "Send an SQS message when a cart is updated",
        "enabled": true,
        "configuration": {
            "url": "https://sqs.eu-west-1.amazonaws.com/123456789/epcc-external-queue",
            "aws_access_key_id": "****************PSYQ",
            "aws_secret_access_key": "************************************pUSJ",
            "region": "eu-west-1"
        },
        "observes": ["cart.updated"],
        "links": {
            "self": "https://useast.api.elasticpath.com/v2/integrations/74dcfb94-a294-45f2-b3e5-93e55b6f4240"
        },
        "meta": {
            "timestamps": {
                "created_at": "2021-08-27T08:41:23.621Z",
                "updated_at": "2021-08-27T08:41:23.621Z"
            }
        }
    }
}
```

#### Simple Text Orientated Messaging Protocol (STOMP)

An integration with the [`stomp`](/docs/commerce-cloud/integrations/integrations-api/create-an-integration) integration type delivers its events directly into a configured queue. Any message queuing service that uses STOMP, such as Amazon MQ, can process these messages.

For more information, see the documentation provided with the message queuing service you are using.

##### Request example

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

##### Response example

`201 Created`

```json
{
    "data": {
        "id": "4dfa2c76-7d2e-4dda-8875-2b983c691976",
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
