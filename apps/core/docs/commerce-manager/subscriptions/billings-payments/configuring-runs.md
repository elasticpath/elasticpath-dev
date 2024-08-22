---
title: Configuring Billing & Payments
nav_label: Configuring Billing & Payments
sidebar_position: 20
---

You can configure schedules for your billing and payment runs. By scheduling billing and payment runs, you automate the process, reducing manual intervention and ensuring the jobs are run in a timely manner. 

## Schedules

You can define a schedule in the format (* * * * *) which is a set of five fields in a line, indicating when a job should be executed. For example, you can define a schedule so that your job runs multiple times a day, or runs on specific days and months.

### Unrestricted fields

Setting a field to an asterisk (`*`) is sometimes referred to as leaving a field unrestricted because it is not restricted to a specific value.
      
You can use the asterisk (`*`) to indicate the range of all values for the field. When you use the asterisk, the first value in the range is: 0 for the minute, hour, and day of the week (Sunday) fields, and 1 for day of the month and the month fields.
      
### Configuring fields
      
The time fields have the following format and possible values and must be specified in the following order:
      
| Field | Format | Description  |                                                                                                    
| --- | --- | -----|
| Minute | 0-59 | Indicates how far past the top of the hour your job runs, in minutes. For example if a minute is set to 0, then the job runs at the top of the hour because it is 0 minutes after the hour. This means if the hour is 8.00 AM, the job runs at 8.00 AM. |
| Hour | 0-23 | Indicates how far past midnight your job runs, in hours. This is rounded down to the nearest hours. This is because minutes are indicated by the minute field. |
| Day of the month | 0-31 | Indicates the calendar date of the month. For example, 1 for the first day of the month. |
| Month | 1-12 or JAN to DEC | Indicates the month. Specify the month number or the first three letters of the month name in uppercase. For example, 1 or JAN for January.  |
| Day of the week | 0-6 (or SUN to SAT, or 7 for Sunday) | Indicates the day of the week. Monday is 1, Tuesday is 2, and so on. Either 0 or 7 indicates Sunday. Alternatively, specify the day of the week using the first three letters of the weekday name in uppercase. For example SUN for Sunday. If you use this field with the day of the month field, then this field is evaluated as an inclusive OR. For example, if the day of the month is set to 1 and the day of the week is set to SAT, the job runs on the first day of the month and on every Saturday of the month, even if the first day of the month is not a Saturday. If the day of the week is marked by an asterisk (*) then the field is marked as unrestricted. This means the job only runs on the first day of the month. |
      
### Matching all values
      
To match all values for a field, set the field to an asterisk (`*`). When a field is set to an asterisk, the field matches all valid values for that field whenever the other field conditions are satisfied. 
      
Here are some examples.

- `30 0 * * *`: the job runs every day at 12:30am.
- `0 16 * * 1`: the job runs once a week at 4pm on a Monday.

### Matching a range
      
To match a range of values, specify your start and stop values, separated by a hyphen (`-`). Do not include spaces in the range. Ranges are inclusive. The first number must be less than the second number. If you are using abbreviated names for the month or weekday (for example, JAN instead of 1 for the first month of the year), the first value must come earlier in the month or week than the second value.

The following equivalent examples run at midnight on Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays (for all months):

- `0 0 * * 1-5`
- `0 0 * * MON-FRI`

### Matching a list
      
Lists can contain any valid value for the field, including ranges. Specify your values, separated by a comma (,). Do not include spaces in the list.

Examples:

- `0 0,12 * * *`: the job runs at midnight and noon.
- `0-5,30-35 * * * *`: the job runs in each of the first five minutes of every half hour (at the top of the hour and at half past the hour).
      
### Skipping values in a range
      
You can skip values in a range by specifying a rate at which to step through the range. To do this, specify the range, followed by the forward slash (`/`) and the rate at which you want to skip through the range.
      
The step value cannot be larger than the largest possible value for the field. The default step is 1, so the step function `/1` is the same as not using a step function at all.

Example ranges that use step functions:

- `*/2`: this is a valid step function for any field. 
    - For the minute field, it matches 0, 2, 4, ... , 58. 
    - For the hour, it matches 0, 2, 4, ... , 22. 
    - For the day of the month, it matches 1, 3, 5, ... , 31 (for a month with 31 days). 
    - For the month, it matches 1, 3, 5, ... , 11. 
    - For the day of the week, it matches 0, 2, 4, 6.

- `0-12/2`: this is a valid step function for the minute and hour fields. It matches 0, 2, 4, ... , 12.

Example schedules using step functions:
      
- `*/2 * * * *`: the job runs every two minutes.
- `0 0-12/2 * * *`: the job runs every two hours, on the hour. The first run is at midnight. The last run is at noon.

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
6. Select **Save**.

![billing run schedule example](/assets/subscription-schedule.png)

