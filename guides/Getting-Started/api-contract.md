---
title: API Contract
nav_label: API Contract
sidebar_position: 15
---

Whenever Elastic Path decides to discontinue or remove features from an API, a 90 days notice is provided to the customers. However, we might provide less than 90 days notice before making major changes or decommissioning APIs if an API creates security risk or an update is required to be in compliance with a law or a third-party relationship.

For each deprecating API, we will provide the following information to the customers:

- The deprecating API and the version, if applicable.
- A new API, if available, to use instead of the deprecating API.

## Compatibility

We ensure that every change to Commerce is compatible with existing API clients, and only contains the following backwards compatible changes:

- New API endpoints
- New optional fields to request payloads
- New fields in response and message payloads
- New events

## Parallel Calls to API Objects

If you make multiple calls to the same object, there is a risk that one call might overwrite the other. For example, if you try to add multiple items to the same shopping cart at the same time, one cart item might overwrite the other. Best practice is to make an API call to add an item and then proceed with a second API call once you have a response from the first API call. 

It is important to note that this applies only when the API calls are targeting to the same object. For example, you can make parallel API calls to different carts.

This is relevant to all persistent objects in Commerce APIs. If an object has an ID, it is esstential to avoid parallel API calls that add, update or delete that object.

## Beta APIs

An API with Beta label provides users an early access to an upcoming feature. Users can provide feedback on the features earlier in the development process and before we finalize the APIs. These feedback help us to understand functional requirements better and address problems early.

:::caution
Beta features are not certified for use in a production environment. These features might change without a notice.
:::

When you use beta APIs, you must include the `EP-Beta-Features` header in the API call as in the following example:

`EP-Beta-Features=feature1`

When you request multiple beta features, use comma as a delimiter. An example for using `EP-Beta-Features` to call multiple beta feature is:

`EP-Beta-Features=feature1,feature2`
 







