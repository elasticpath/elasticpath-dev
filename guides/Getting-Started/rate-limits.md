---
title: Rate Limits
nav_label: Rate Limits
sidebar_position: 139
---

Commerce limits the number of requests it can accept from a web browser or client. The purpose of a rate limit is to ensure consistent performance and stability of the Commerce platform, and a quality experience for all customers. Each organization and store has its own rate limit. To learn about reserved rate limits, refer to [Application  Keys Overview](/docs/authentication/application-keys/application-keys-overview).

- Each store and organization has a rate limit based on its type and usage.
- API requests made against a store and an organization are counted separately. 
- API requests made against a store do not contribute to the organization's rate limit. The organization’s rate limit would not be affected by the requests made specifically to its stores.
- Rate limits are not shared across stores and do not count towards the organization's usage. Each store has its own independent rate limit.

By separating rate limits for Organizations and their stores, Commerce ensures better resource management and optimal system performance. It allows each store to operate within its specific rate limit without affecting the overall rate limit of the organization. This approach enables more flexibility and control in managing requests, ensuring a smooth and efficient experience for the users. 

The following table shows the rate limits for stores and organization:

| Entity | Rate limit |
| :--- | :--- |
| Organizations (Default) | 100 requests per second |
| Production store | 100 requests per second |
| Development store (Default) | 25 requests per second |

The following scenarios describe how rate limits work for organization and their stores:

1. Let's say an organization has a rate limit of 100 requests per second, and a store within that organization has a separate limit of 25 requests per second. In this case, an Org Admin can make up to 100 requests within the organization, while a Store Admin can make up to 25 requests specifically for that store, all within the same second.
2. Let’s say in a given business setup, all product data and pricing information are maintained at the organization level. These centralized resources are then shared across all 10 stores within the organization. Each store sells the organization products with the predefined organization pricing without making any modifications to the organization product data or pricing. 
    - Given this setup, the majority of API requests and resource usage will occur at the organization level. This is because any changes or updates made to the product data or pricing at the organization level will be applied universally across all stores. This means, making modifications at the organization level significantly reduces the need for individual API requests or updates at the store level.
    - Conversely, the API requests made at the store level primarily focus on store-specific actions and functionalities that do not impact the shared organization products and pricing. These store-level requests are typically tailored to address local or specific requirements such as store-specific promotions, customizations, or local inventory management. In addition to administrative APIs, store-level requests will also include storefront or shopper-specific APIs.

The rate limit for your organization or store depends on your current plan. Higher rate limits may apply depending on your current plan. In case of a sudden rise in the number of rate-limited requests or to request a change in the limit, contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us). Elastic Path may reduce the limit to prevent abuse or increase the limit to enable high-traffic applications. To increase the limit, you must contact [Elastic Path Support](https://support.elasticpath.com/hc/en-us) a minimum of four weeks in advance before you need the changes to apply.

Requests that are rate limited will get error responses with a status code `429`. For more information about error responses, see the [Errors](/guides/Getting-Started/errors) section. In addition, if you send multiple requests to multiple API endpoints simultaneously, it is easy to exceed API rate limits, which may cause unexpected results. You must ensure that the code invoking the endpoints complies with its rate limits. 

When an error response with a status code `429` is received, the web browser automatically retries the request after some time if you use JS-SDK. Although the JS-SDK automatically retries the requests, you must be careful not to send too many requests, to prevent the JS-SDK from being overwhelmed. You must ensure the code invoking the JS-SDK complies with its rate limits. If you do not use JS-SDK, you might have to manually retry the request.

## Rate Limits for Scripted Import

When importing large datasets using the `Import Products` endpoint, it is easy for a script on a moderately powerful machine to exceed API rate limits. It is important that you are aware of this. If the API returns a `429 Too Many Requests` HTTP response, you should wait a few seconds and try the failed request again.

The JS-SDK handles retries for occasional failed requests. However, you must not use the JS-SDK to handle rate limits for bulk imports. You must ensure the code invoking the JS-SDK complies with its rate limits.

## Rate Limits for Jobs

Several PXM endpoints function as [Jobs](/docs/api/pxm/products/jobs). Jobs are processed one at a time. You can continue to send requests using endpoints that function as jobs, but those jobs are queued. In other words, Commerce looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed.

If you have multiple stores under an organisation, the stores are linked to that organization. Stores can simultaneously submit requests through endpoints that operate as jobs. These jobs are then queued and processed one at a time, starting with the job that has the earliest created date. 

If you have two organisations with a store in each, the stores can simultaneously submit requests throught endpoints that operate as jobs, as each store is linked to a different organization. 

