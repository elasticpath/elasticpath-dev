---
title: Test with a Postman collection
nav_label: Test with a Postman collection
sidebar_position: 180
---

Use the Postman collection to run and explore Commerce APIs. The collection includes the relevant types of requests for each endpoint, including create, read, update, and delete.

## Prerequisites

- Ensure that the Postman client is installed.
- Ensure that you have downloaded the latest Postman collection and environment from the following links:

    - [Collection](https://documentation.elasticpath.com/assets/epcc/postman/collection.json)
    - [Environment](https://documentation.elasticpath.com/assets/epcc/postman/environment.json)

## Procedure

1. In Commerce Manager, go to **SYSTEM > Application Keys**.
1. Click **Create New** to create a new application key. See [Creating an Application Key](/docs/authentication/application-keys/create-an-application-key).

    Make a note of the following values:

    - **Client ID**
    - **Client secret**
    - **API base URL**

    :::note
    
    The **Client secret** is only shown to you at this time. Copy and keep it somewhere safe and secure. Do not share it.

    :::

1. Go to Postman client on your system and import the Commerce Postman [Collection](https://documentation.elasticpath.com/assets/epcc/postman/collection.json).
1. Import the [Environment](https://documentation.elasticpath.com/assets/epcc/postman/environment.json) file.
1. Update the values of the following environment variables with the values copied from Commerce Manager.
    
    - `client_id`
    - `client_secret`

1. The Postman collection contains the following environment variables. Elastic Path supports multiple regions and each region has a unique hostname and base URL for API requests. Each Commerce store is assigned to a specific region, so all API requests related to the store must be made to the `API base URL` for its assigned region. You may need to change the Postman collection environment variables depending on your [regional URL](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls). 

    | Environment Variable | Description                                | Initial Value                           | Current Value                                                                                                                                                                              |
    | :--- |:-------------------------------------------|:----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `baseUrl` | Used for most API calls.                   | `https://useast.api.elasticpath.com/v2` | If your store's **API Base URL** is `https://useast.api.elasticpath.com`, replace `https://euwest.api.elasticpath.com` with `https://useast.api.elasticpath.com`.                          |
    | `authUrl` | Used for authentication requests.          | `https://useast.api.elasticpath.com`                | If your store's **API Base URL** is `https://useast.api.elasticpath.com`, replace `https://euwest.api.elasticpath.com` with `https://useast.api.elasticpath.com`.                          |
    | `pcmUrl` | Used for Product Experience Manager calls. | `https://useast.api.elasticpath.com/pcm`            | If your store's **API Base URL** is `https://useast.api.elasticpath.com`, replace `https://euwest.api.elasticpath.com` with `https://useast.api.elasticpath.com`.                          |

1. In Postman, open the **authentication** folder and run the **Get client credentials token** or the **Get implicit token** request.
1. Click **Send**.

    Authentication for the current session is done, and an access token is returned. You can now test the rest of your API endpoints in your Postman collection. An access token is valid for an hour, you must authenticate the session and get new tokens every time the access token expires. For more information about authentication permissions, see [Client credential token](/docs/authentication/Tokens/client-credential-token) and [Implicit token](/docs/authentication/Tokens/implicit-token).
