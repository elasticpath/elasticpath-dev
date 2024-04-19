---
title: Configure Simple Queue Service (SQS) Events
nav_label: Configure (SQS) Events
sidebar_position: 110
---

You can manually set up an AWS SQS queue to receive integration messages using the AWS Console.

:::caution
SQS supports a maximum message size of 256KiB. When some large events, usually related to an order or cart where the payload includes the cart and the order items, exceed the limit, the included resources are removed from the payload and are replaced with the following tag:

```json
  "included": {
    "meta": {
      "includes_elided": true
    }
  }
```
:::

## Procedure

1. Create a new Identity and Access Management (IAM) user group.

    1. Go to IAM and select **User groups**.
    1. Click **Create group**.
    1. Enter a name for your group and click **Create Group**.


2. Create a new IAM policy for the group.

    1. Click the group name, then select the **Permissions** tab.
    1. Click **Add Permissions** and select **Create Inline Policy**.
    1. Click the JSON tab. Use the following code to paste into the editor.

        :::note
        Ensure that you change `123456789012` to your AWS account number.
        :::

        ```json
        {
          "Version": "2012-10-17",
          "Statement": [{
              "Effect": "Allow",
              "Action": "sqs:SendMessage",
              "Resource": "arn:aws:sqs:*:123456789012:epcc*"
          }]
        }
        ```

    1. Click **Review Policy**.
    1. Enter a name for your policy and click **Create Policy**.

        This will create a policy and attach it to your IAM group. This policy allows a user in the group to send messages to all SQS queues in their AWS account which have a name starting with `epcc`.


3. Create an IAM user.

    1. Go to **Users** and click **Add user**.
    1. Enter a user name and select **Programmatic access**.
    1. Click **Next:Permissions** and select the user group that you created in step 1.
    1. Click **Next:Tags**.
    1. Add any optional tags and then click **Next:Review**.
    1. Review and confirm the details are correct and click **Create User**.

        :::caution
        An Access Key ID and Secret Access Key is displayed for the user. Ensure that you save this information as it is only shown once and required later.
        :::

4. Create an SQS queue.

    1. Go to the SQS service in the AWS console and click **Create Queue**.
    1. Enter a name for the queue beginning with `epcc`.

        :::caution
        The user policy created in step 2 can only access queues with names that begin with `epcc`.
        :::

    1. Define who can send messages to the queue and enter the Amazon Resource Name (ARN) of the user created at step 3.

        :::note
        Only specified AWS accounts, IAM users and roles can access the queue.

        The ARN of the user created at step 3. You can find it in the IAM service and click on the user name. The ARN displays at the top of the summary.
        :::

    1. Click **Create Queue** after you paste the ARN of the user.
