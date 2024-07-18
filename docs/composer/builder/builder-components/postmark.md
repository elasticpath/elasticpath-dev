---
title: Postmark Component
nav_label: Postmark
sidebar_position: 140
---

You can use the Postmark component to send emails to single or multiple recipients.

## Connections

You need your **Postmark-API-Key** which is the Postmark API Key generated in your Postmark account to access dynamic email templates in Postmark.

## Actions

The component has the following actions.

### Configure Postmark Integrations

| Input | Type | Description |
|:--- |:--- | :--- | 
| **EPCC Postmark Connection**  | `string` | The EPCC Postmark connection. | 
| **Postmark Integration Webhook URL**  | `string` | The webhook URl that is displayed in Integrations Hub when you activate the integration. | 
| **Postmark Event-Mapping** | `string` | Mapping of information between Commerce Manager and Postmark is done through a combination of event names and JSON values. See [Configuring Event-Mapping Configurations](/docs/composer/integration-hub/marketing-communication/postmark). | 
| **Log Level** | `string` | The level of logging. | 
| **Webhook API Key** | `string` | The webhook key that is displayed in Integrations Hub when you activate the integration. | 

### Hash the Client Secret

| Input | Type | Description |
|:--- |:--- | :--- | 
| **EPCC Postmark Connection**  |  | The EPCC Postmark connection. |  
| **Log Level** | `string` | The level of logging. | 

#### Output Example

### Hydrate event mappings for the incoming event data

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Event JSON**  | `string` | The payload from the event. See [Integration Payload](/docs/api/integrations/integrations-introduction#example-typical-payload). | 
| **Postmark Event-Mapping** | `string` | Mapping of information between Commerce Manager and Postmark is done through a combination of event names and JSON values. See [Configuring Event-Mapping Configurations](/docs/composer/integration-hub/marketing-communication/postmark#configuring-event-mapping-configurations). | 
| **Log Level** | `string` | The level of logging. | 

### Returns the templated emails to the caller without invoking Postmark

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Event configuration hydrated array**  | `string` | The output of the applyEventMappingToEventAction action. | 
| **Log Level** | `string` | The level of logging. |

### Send a templated email via Postmark Email

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Event Configuration Hydrated Array**  | `string`  | The payload from the event. See [Integration Payload](/docs/api/integrations/integrations-introduction). | 
| **Postmark API Key** | `string` | Your **Postmark-API-Key** which is the Postmark API Key generated in your Postmark account. | 
| **Log Level** | `string` | The level of logging. | 

### Take action based on email result

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Error on Fail**  | `boolean` | An error is returned when there is a failure in sending emails to recipients. | 
| **Log email errors**  | `boolean` | Log the errors that are returned when there is a failure in sending emails to recipients. | 
| **Postmark Results**  | `string` | Postmark sends back results to the Postmark integration when emails are sent to recipients. | 
| **Log Level** | `string` | The level of logging. | 

### Validate Event Mappings

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Postmark Event-Mapping** | `string` | Mapping of information between Commerce Manager and Postmark is done through a combination of event names and JSON values. See [Configuring Event-Mapping Configurations](/docs/composer/integration-hub/marketing-communication/postmark#configuring-event-mapping-configurations). | 
| **Log Level** | `string` | The level of logging. | 
