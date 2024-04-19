---
title: Google Content API for Shopping Component
nav_label: Google Content API for Shopping
sidebar_position: 70
---

You can use the Google Content API component to upload your Commerce products so that they automatically appear in Google Search results in the Shopping tab.

## Connections

Once your Google Merchant account is set-up, you need to create an API authentication key for the Content API. The API key is some JSON data which you must save securely and not check-in to source control. You need the `client_email` and `private_key` from this JSON file when you configure the integration. 

| Option | Description                            |
|:------------------------------------|:---------------------------------------|
| **client_email**                    | The email address associated with your Google Merchant account. |
| **private_key**                     | Your Google Merchant account private key. |
| **google_merchant_id**              | Your Google Merchant account ID. |

For more information, see [Merchant Center - Google for Retail](https://www.google.com/retail/solutions/merchant-center/).

## Actions

The component has the following action.

### Upload Products to Google

| Input | Type | Description |
|:--- |:--- | :--- | 
| **The cient email value of service account key file**  | `string` | The email address associated with your Google Merchant account. | 
| **The private_key of service account key file** | `string` | Your Google Merchant account private key. | 
| **The JSON for the custom batch request** | `string` | The JSON you want to send to Google Merchant Center. | 
| **Log Level** | `string` | The level of logging. | 
