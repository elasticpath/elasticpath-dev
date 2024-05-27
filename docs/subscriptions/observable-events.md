---
title: Observable Events
nav_label: Observable Events
sidebar_position: 100
---
You can integrate Subscriptions with external systems like enterprise resource planning, fulfilment and other systems. For example, when a subscriber updates their address, the Customer Relationship Management system is updated with the change.

Events are actions that occur in Subscriptions, such as a subscriber changing their address or a subscription changing from active to inactive. You can create custom functions that perform additional processing outside of Subscriptions, and create integrations so that when an event occurs in your store, the custom function is run.

Events are processed concurrently. This means that events may not be delivered in the order they are created. For example, if a subscription is updated multiple times, the events may not be delivered in the same sequence they were updated. Events operate on an "at least once" delivery policy. We aim to deliver messages within 30 minutes or less. Ensure that you design your receiving code accordingly.

For more information about integrating Subscriptions, see [**Integration Types**](/docs/api/integrations/integrations-introduction#integration-types).

| Resource | Action | Observable Key | Availability |
| --- | --- | --- | --- |
| Product | <ul><li>Created</li><li>Updated</li><li>Deleted</li></ul> | <ul><li>`subscription-product.created`</li><li>`subscription-product.updated`</li><li>`subscription-product.deleted`</li></ul> | Store |
| Plan |  <ul><li>Created</li><li>Updated</li><li>Deleted</li></ul> | <ul><li>`subscription-plan.created`</li><li>`subscription-plan.updated`</li><li>`subscription-plan.deleted`</li></ul> | Store |
| Offering |  <ul><li>Created</li><li>Updated</li><li>Deleted</li></ul> | <ul><li>`subscription-offering.created`</li><li>`subscription-offering.updated`</li><li>`subscription-offering.deleted`</li></ul> | Store |
| Subscription | <ul><li>Created</li><li>Create-failed</li><li>Paused</li><li>Canceled</li><li>Pending-cancel</li><li>Pending-pause</li><li>Resumed</li><li>Closed</li></ul> | <ul><li>`subscription.created`</li><li>`subscription.create-failed`</li><li>`subscription.canceled`</li><li>`subscription.paused`</li><li>`subscription.pending_cancel`</li><li>`subscription.pending_pause`</li><li>`subscription.resumed`</li><li>`subscription.closed`</li></ul> | Store |
| Job | <ul><li>Created</li><li>Updated</li><li>Deleted</li></ul> | <ul><li>`subscription-job.created`</li><li>`subscription-job.updated`</li><li>`subscription-job.deleted`</li></ul> | Store |
| Invoices | <ul><li>Created</li><li>Deleted</li></ul> | <ul><li>`subscription-invoice.created`</li><li>`subscription-offering.deleted`</li></ul> | Store |
| Schedule | <ul><li>Created</li><li>Updated</li><li>Deleted</li></ul> | <ul><li>`subscription-schedule.created`</li><li>`subscription-schedule.updated`</li><li>`subscription-schedule.deleted`</li></ul> | Store |
| Subscriber | <ul><li>Created</li><li>Updated</li><li>Deleted</li></ul> | <ul><li>`subscription-subscriber.created`</li><li>`subscription-subscriber.updated`</li><li>`subscription-subscriber.deleted`</li></ul> | Store |
