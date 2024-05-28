---
title: API Reference Guide
nav_label: API Reference
sidebar_position: 2
---

[Composable Commerce](https://elasticpath.com) is a [headless eCommerce](https://elasticpath.com/headless-commerce) service. You can use the Composable Commerce API to build unique and flexible shopping experiences for your customers.

:::tip
If you want to evaluate Elastic Path Composable Commerce, please [Sign Up for a Free Trial](https://useast.cm.elasticpath.com/free-trial).
:::

This API Reference Guide describes the resources, endpoints, methods, requests, and responses that are available to you in the Composable Commerce API. See [API Documentation](/api).

## Introduction to API

The Composable Commerce API follows a microservice architecture that enables you to plug commerce into any part of your application. The API is inspired by the [JSON API](http://jsonapi.org/) specification, follows predictable [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) URLs, and supports [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). The two-track [Authentication Layer](/docs/authentication) enables destructive and non-destructive actions across projects.

## API Base URLs

Commerce supports multiple geographical regions. For each customer, Commerce accounts and stores are created in a specific region. When you interact with and use the Commerce API, ensure that you use the API end point for the region your store is in. To view the **API base URL** field, go to **System > Application Keys** in **Commerce Manager**.

In the documentation, we use the variable name `<your_elasticpath_api_base_url>` in the sample requests. When making API requests, customers substitute the hostname for the variable.

## Authentication

All requests must include an authentication token in the header. Generate the token by using your API keys.

- To find your API keys, go to **System > Application Keys** section in **Commerce Manager**.
- To use the API to generate a token from your API keys, see the [Authentication](/docs/authentication) or [Your first API request](/guides/Getting-Started/your-first-api-request#lesson-1-authenticate) sections.
- To learn more about API keys, see the [Security](/docs/authentication/security#api-authentication-credentials) section.

## Postman

If you are looking to test or develop with the Composable Commerce API, we recommend using the [Elastic Path Postman collection](/guides/Getting-Started/test-with-postman-collection). The collection includes all endpoints.
