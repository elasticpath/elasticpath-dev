---
title: Configuring Billing & Payments
nav_label: Configuring Billing & Payments
sidebar_position: 20
---

You can configure schedules for your billing and payment runs. By scheduling billing and payment runs, you automate the process, reducing manual intervention and ensuring the jobs are run in a timely manner. 

## Schedules



You can define a schedule in the format (* * * * *) which is a set of five fields in a line, indicating when a job should be executed. For example, you can define a schedule so that your job runs multiple times a day, or runs on specific days and months.

## Configuring Billing & Payment Runs

The following steps describe how to configure billing and payment runs.

1. Log in to Commerce Manager.
2. Go to **SUBSCRIPTIONS** > **Billing & Payments**. 
3. Select **Configure** > **Manage Schedules**.
4. Select **Configure New Schedule**.
5. You can select either:

    - **Guided options**. Select this if you want to schedule your billing and payment runs to  occur on a weekly, monthly, or yearly basis.

     | Option                      | Required | Description                                                                                                                                                                             |
     |-----------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     | **Name**                    | Required | The name of the schedule.                                                                                                                                                               |
     | **Select Payment Run Type** | Required | The payment type you are scheduling. Must be either **Payment Run** or **Billing Run**.                                                                                                 |
     | **External Reference**      | Optional | A unique reference that you could use to contain information from another company system, for example.                                                                                  |
     | **Location**                | Required | The location of the time zone that the schedule operates in. Subscriptions runs on Coordinated Universal Time (UTC) and conforms to [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339). |
     | **Select a frequency**      | Required | Select either:<ul><li>Weekly</li><li>Hours</li><li>Minutes</li></ul>                                                                                                                    |

    - **Advanced options (Crontab)**. Select this if you require your billing and payment runs to occur on a more precise basis, such as at specific time and day of every month.

     | Option                      | Required | Description                                                                                                                                                                                                                                                                                 |
     |-----------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     | **Name**                    | Required | The name of the schedule.                                                                                                                                                                                                                                                                   |
     | **Select Payment Run Type** | Required | The payment type you are scheduling. Must be either **Payment Run** or **Billing Run**.                                                                                                                                                                                                     |
     | **External Reference**      | Optional | A unique reference that you could use to contain information from another company system, for example.                                                                                                                                                                                      |
     | **Location**                | Required | The location of the time zone that the schedule operates in. Subscriptions runs on Coordinated Universal Time (UTC) and conforms to [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339).                                                                                                     |
     | Configure your crontab      | Required | You can define a schedule in the format (* * * * *) which is a set of five fields in a line, indicating when a job should be executed. For example, you can define a schedule so that your job runs multiple times a day, or runs on specific days and months. See [Schedules](#schedules). |



