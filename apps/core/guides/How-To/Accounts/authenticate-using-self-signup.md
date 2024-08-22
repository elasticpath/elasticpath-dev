---
title: Authenticating using Self Sign Up
nav_label: Authenticating using Self Sign Up
nav_position: 60
---

## Before You Begin

If you want to follow along, you need the following:

- A Commerce account and the Client ID and Client Secret of your store, available from your [Commerce Manager](/ui).
- A front-end application or a custom application accessible to you in a web browser which accesses the Commerce API with the [implicit token](/docs/authentication/Tokens/implicit-token).
- A basic understanding of object-oriented programming or JavaScript.
- An [access token](/guides/Getting-Started/your-first-api-request).

## Step-by-step Walkthrough

The following list outlines the steps of the single sign-on authentication flow to get account token:
1. [Create Password Profile](#create-password-profile). 
2. [Update the Account Authentication Settings](#update-the-account-authentication-settings).
3. [Generate a token using self_signup mechanism](#generate-a-token-using-self-signup-mechanism).
4. [Login as an admin and add account member created to the account](#login-as-an-admin-and-add-account-member-created-to-the-account).

### Create password profile

Send a POST request to create a password profile to use for self sign up. Make sure you set the `username_format` to `email`.
Use the `id` from the returned response to authenticate using self sign up.

You can find more detailed instructions on password profile creation [here](/docs/authentication/single-sign-on/password-profiles-api/create-a-password-profile)

### Update the account authentication settings

Send a PUT request to update [Account Authentication Settings](/docs/api/accounts/account-authentication-settings) to set `enable_self_signup` to `true`. This enables self sign up for the account.

You can also set `auto_create_account_for_account_members` to `true`. This automatically creates an account for the account member and then creates a membership. 

### Generate a token using self sign up

Send a POST request to generate a token using the self sign up authentication mechanism. This creates an account member that you can add to the account.
You can find more detailed instructions on generating an authentication token using self sign up [here](/docs/api/accounts/post-v-2-account-members-tokens).

### Login as an admin and add account member created to the account

Log in as an Admin to [add a newly created account member to the account](/docs/api/accounts/post-v-2-accounts-account-id-account-memberships). Once this step is completed, a buyer can [log in as usual](/docs/authentication/Tokens/account-management-authentication-token). 

If your `auto_create_account_for_account_members` setting in [account authentication settings](/docs/api/accounts/account-authentication-settings) is set to `false` then you need to manually create an account for the account member and afterwards [create account membership](/docs/api/accounts/post-v-2-accounts-account-id-account-memberships). 

If the setting is set to `true`, you can log in as usual without any additional steps.
