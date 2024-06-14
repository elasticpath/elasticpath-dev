---
title: Managing Subscriptions
nav_label: Managing Subscriptions
sidebar_position: 10
---

You can manage your subscribers subscriptions. You can pause, cancel and resume subscriptions. For example, a customer might pause a meal delivery service during a vacation, or want to resume a gym membership without having to start over with a new gym membership. Having a simple, straightforward process for pausing, cancelling and resuming subscriptions leads to customer trust and satisfaction, which in turn improves customer retention and recovery.
      
Below is an example of what happens when pausing or canceling and resuming a subscription.
      
1. The subscriber pauses or cancels the subscription.
    - The subscription status is `active`.
    - The subscription state is either `paused` or `cancelled`, depending on the action you chose.
2. When the next billing run is due, the billing run checks the subscription state. If the subscription state is `paused` or `cancelled` then no invoice is created and the subscription status is updated to `inactive`.
3. Subsequent billing runs skip that subscription completely as the subscription status is `inactive`.
4. If the subscriber resumes the subscription, when the next billing run is due, the billing run checks the subscription state. As the subscription state is no longer `paused` or `cancelled`, then the billing run creates an invoice.
6. The payment run processes the invoice. Once the payment succeeds then the payment run updates the status of the subscription to `active`.

You can pause, cancel and/or resume a subscription as follows:

1. Log in to Commerce Manager.
2. Select **Subscriptions** > **Subscribers**. A list of all subscribers is displayed.
3. Select the subscribers whose subscriptions you want to pause, cancel and/or resume. A list of the subscribers subscriptions are displayed.
4. Select the subscription you want to pause, cancel and/or resume.
5. Select:
    - **Pause** to temporarily halt a subscription.
    - **Cancel** to permanently terminate a subscription. A cancelled subscription can be resumed.
    - **Resume** to resume a paused or cancelled subscription.


