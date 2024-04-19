---
title: Retry and Replay Save Time
nav_label: Retry and Replay Save Time
sidebar_position: 15
---

Not all systems are accessible all the time. So, when it makes sense, you should [build a retry function](/docs/composer/builder/integrations/building-integrations#integration-retry-configuration) into an integration. Retry allows the system to automatically resend the payload to the destination system every few minutes or even according to a geometric progression (retry in 2 minutes, 4 minutes after that, 8 minutes after that, etc.) Setting the retry in the integration ensures that your integration is still likely to run successfully if the destination system or something in the integration suffers a temporary outage.

Using the retry function also ensures that you are not getting your devs involved with solving an integration issue until you have determined that the problem is more severe than a brief system outage. Including the retry function in integrations prevents many transient issues from being brought to support.

If, however, the error persists (for example, the destination system appears to be up, but the integration keeps throwing some type of internal server error message), you may need to move up from the retry function to the replay function.

Unlike retry, replay is not something that can be done automatically within an integration. Instead, it is a function you manually invoke by clicking the replay button in the UI for that instance. Doing this runs the full integration with the same payload as before while allowing you to debug by viewing all the steps in the integration as they execute to determine precisely what is working and where things error out.
