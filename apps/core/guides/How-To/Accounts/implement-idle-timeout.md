---
title: Implementing Idle Timeout
nav_label: Implementing Idle Timeout
nav_position: 60
---

To implement an idle timeout feature where users are automatically logged out after a period of inactivity, you can configure the expiry time of [Account Management Authentication Tokens](/docs/authentication/Tokens/account-management-authentication-token). Here's how you can do it:
1. **Configure Timeout:** In the [Update Account Authentication Settings](/docs/api/accounts/put-v-2-settings-account-authentication) endpoint, set `account_management_authentication_token_timeout_secs` to a short duration, such as 1 hour.
2. **Refresh Token:** While the user is active in the front-end side, periodically refresh their session token using the [Generate an Account Management Authentication Token](/docs/api/accounts/post-v-2-account-members-tokens) endpoint. This ensures that the user remains logged in without requiring them to reauthenticate.
3. **Detect Inactivity:** If the user becomes inactive for a specified period, stop refreshing the token.
