---
title: 'Legacy keys removal'
date: '2023-02-01'
tag: ['Integrations','Authentication']
---
**Major**
We will remove all legacy keys on April 17, 2023. The legacy keys used at least once from March 1 to March 31, 2023, will be seamlessly migrated to a corresponding [Application key](/docs/commerce-cloud/authentication/security#application-keys). The migrated keys will appear on the **System > Application Keys** page in Commerce Manager. Therefore, you do not have to take any action at this time.

**Minor**
SQS supports a maximum message size of 256KiB. For larger events, product attribute details are removed from the payload. For more information, see [Configure SQS Events](/docs/commerce-cloud/integrations/sqs-queues).
