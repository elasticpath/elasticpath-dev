---
title: Sendgrid Component
nav_label: Sendgrid
sidebar_position: 180
---

Integrating with SendGrid allows you to send emails to your customers when events in Commerce are triggered. For example, you can send a customer registration email when you create a customer in Commerce, or send an order confirmation email when an order is created.

## Connections

You need the **SendGrid API Key ID** which is the API Key for your SendGrid account. In SendGrid, API keys are found in **Settings** > **API Keys**.

## Actions

The component has the following actions.

### Configure Sendgrid Integrations

| Input | Type | Description |
|:--- |:--- | :--- |
| **EPCC Sendgrid Connection**  | `connection` | The EPCC Sendgrid connection. | 
| **Sendgrid Integration Webhook URL**  | `string` | The Sendgrid webhook URL that is displayed in Integrations Hub wheb you activate the integration. | 
| **Sendgrid Event-Mapping** | `string` | Mapping of information between Commerce Manager and Postmark is done through a combination of event names and JSON values. See [Configuring Event-Mapping Configurations](/docs/composer/integration-hub/marketing-communication/sendgrid#configuring-event-mapping). | 
| **Log Level** | `string` | The level of logging. | 

### Extract all JSONATA Mappings

| Input | Type | Description |
|:--- |:--- | :--- |
| **Event JSON**  | `string` | The payload from the event. See [Integration Payload](/docs/api/integrations/integrations-introduction). | 
| **Sendgrid Event-Mapping** | `string` | Mapping of information between Commerce Manager and Postmark is done through a combination of event names and JSON values. See [Configuring Event-Mapping Configurations](/docs/composer/integration-hub/marketing-communication/sendgrid#configuring-event-mapping). | 
| **Log Level** | `string` | The level of logging. | 

### Send a templated email via Sendgrid Email 

| Input | Type | Description |
|:--- |:--- | :--- |
| **Event Type**  | `string` | The EPCC Event Type. See [Observable Events](/docs/api/integrations/integrations-introduction#observable-events). | 
| **Sendgrid Event-Mapping** | `string` | Mapping of information between Commerce Manager and Postmark is done through a combination of event names and JSON values. See [Configuring Event-Mapping Configurations](/docs/composer/integration-hub/marketing-communication/sendgrid#configuring-event-mapping). | 
| **Event Map Results**  | `string` | The event map results | 
| **Sendgrid API Key**  | `string` | The API Key for your SendGrid account. | 
| **Log Level** | `string` | The level of logging. | 
