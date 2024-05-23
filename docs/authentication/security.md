---
title: Security
nav_label: Security
sidebar_position: 5
---

Store administrators and team members share responsibility for keeping a store secure.

## User Credentials

Store admins receive their user credentials from Elastic Path to log in to Composable Commerce. Store admins can invite team members to work on a store.

After a team member receives an invitation to a Composable Commerce store, they register and create their username and password. Store admins do not have access to the user credentials of the team members.

:::caution
Never share your user credentials.
:::

## API Authentication Credentials

All API requests must contain a generated access token for authentication purposes. To generate an access token, you need your API keys. API keys are the client ID and client secret. Access tokens expire after a predefined period of time. Application keys are used manage your own keys directly. They are not associated to a specific user, and are identified based on their names.


:::caution
Never share your API keys or generated access tokens.
:::

You can generate different types of access tokens based on the level of access needed for a particular task.

- `client_credentials` token - Enables full access to all resources in the store. Use this type of token to create, read, update, or delete resources by using the API.
- `implicit` token - Enables read access to resources in the store. Use this type of token to perform actions that a store customer would do, that is, access live resources available from the storefront.

In addition, a `customer` token is required to access a customer profile, including addresses and order history when using an `implicit` token.

:::caution
Removing a team member removes the unique ClientID and Client Secret associated with that team member.
:::

## Single Sign-on

Single sign-on allows authentication with Commerce using an external authentication provider. Using an existing authentication provider allows for integration with company-specific or customizable authentication systems. In some cases, it can also simplify the log-in experience because they don’t need to remember another password. For more information, see [Single Sign-on](/docs/authentication/single-sign-on/openid).

## Related Resources

- [Your first API request](/guides/Getting-Started/your-first-api-request)
- [Authentication](/docs/authentication)
- [Application Keys](/docs/authentication/application-keys/application-keys-overview)
