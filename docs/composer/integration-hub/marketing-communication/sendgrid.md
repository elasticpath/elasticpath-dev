---
title: Integrating with SendGrid
nav_label: SendGrid Integration
sidebar_position: 20
---

You can quickly and easily integrate Commerce with SendGrid using the **Integrations Hub** in Commerce Manager. Integrating with SendGrid allows you to send emails to your customers when events in Commerce are triggered. For example, you can send a customer registration email when you create a customer in Commerce, or send an order confirmation email when an order is created.

An example of how an email is sent using a SendGrid integration is described below.

1. When an order is created, an `order.created` event is triggered.
1. Once an `order.created` event is received by the webhook, the integration begins to execute.
1. The integration:
    - Uses **Init Flow** to validate that your Commerce events are in the correct format and creates a Commerce webhook for each event.
    - Uses **Main Flow** to:
        - Consume the events.
        - Passes a SendGrid email **Template ID** so that SendGrid knows which email template to use.
        - Populates the fields configured in a SendGrid dynamic template with the values from Commerce.
        - Uses [SendGrid V3 Mail Send API](https://docs.sendgrid.com/api-reference/mail-send/mail-send) to send an email to your customer.

## Prerequisites

You must have completed the following tasks in SendGrid before configuring the integration in Commerce.

1. Created an account.
1. Verified your sender email addresses. This can be a single sender or inbox providers that you own in your domain.
1. Obtained a SendGrid API key with, at least, **Mail Send** access.

See [SendGrid Documentation](https://docs.sendgrid.com/) for more information.

## Best Practices

Below is an overview of the steps you need to follow to integrate Commerce with SendGrid.

1. Make sure you have met the prerequisites. See [Prerequisites](#prerequisites).
1. Collect the setup information for SendGrid and Commerce.  See [Collecting Your Setup Information](#collecting-your-setup-information).
1. Create a dynamic template in SendGrid. See [Creating Dynamic Templates in SendGrid](/docs/composer/integration-hub/marketing-communication/sendgrid#creating-dynamic-templates-in-send-grid).
1. Create the event mapping between Commerce and the SendGrid email template. See [Configuring Event Mapping](#configuring-event-mapping).
1. Create a SendGrid integration in **Commerce Manager** > **Integrations Hub**.  See [Configuring the SendGrid Integration](#configuring-the-send-grid-integration).

:::note
When integrating with third party providers, we recommend you use the closest region in the third party service to reduce latency as much as possible. See [Regions and URLs table](/guides/Getting-Started/elastic-path-domains#regions-and-ur-ls).
:::

## Collecting Your Setup Information

Before you begin configuring your SendGrid integration in Commerce Manager, you need to collect the necessary setup information from SendGrid and Commerce Manager.

:::caution
Collect the following information and make sure you have it available, for example, in a text file, before configuring your SendGrid integration in Commerce Manager. If you leave the **SendGrid Email** page in **Integrations Hub**, the integration is not saved and you must remove the integration and create a new one.
:::

### Collecting SendGrid Setup Information

You need the **SendGrid API Key ID** which is the API Key for your SendGrid account. In SendGrid, API keys are found in **Settings** > **API Keys**.

### Collecting Commerce Manager Setup Information

Collect the following Commerce API keys. You can find this information in **SYSTEM** > **Application Keys** in Commerce Manager when logged in as a user with Seller Admin privileges.

| Commerce API Key | Description                            |
|:------------------------------------|:---------------------------------------|
| **API Base URL**                    | Your Commerce API Base URL. |
| **Client ID**                       | Your Commerce Client ID. |
| **Client Secret**                   | Your Commerce Client Secret. |

## Creating Dynamic Templates in SendGrid

Once you have created a dynamic template in SendGrid, you need to do the following. For more information, see [SendGrid Documentation](https://docs.sendgrid.com/).

1. Add placeholders in your dynamic template for the data that you want to pass from Commerce to the email.
1. Make a note of the **Template ID** as you need this when configuring your SendGrid integration in  **Commerce Manager** > **Integrations Hub**.

## Configuring Event Mapping

Each event mapping configuration is a set of parameters for a specific event type in Commerce. The event mapping configuration is stored as key + value pairs.

- An event key is the name of the Commerce event that triggers the event mapping configuration. For example, `order.paid` or `order.created`. See [Observable events](http://localhost:3000/docs/api/integrations/integrations-introduction#observable-events) for a list of Commerce events.
- An event value is a JSON object that must contain a `messagingProvider` element and a `dynamicFieldMapping` element. The event value object can be:
    - A single object (if you want to send one email when a Commerce event is triggered).
    - An array of event value objects (if you want to send more than one email from SendGrid when a Commerce event is triggered).

### Configuring a `messagingProvider` object

The attributes and types for the `messagingProvider` object are defined in the following table.

| Attribute             | Type                                      | Required | Description                                                                                                                                                                                                                                       |
|:----------------------|:------------------------------------------|:---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `templateId`          | string                                    | Required | The `templateId` of your SendGrid Dynamic Email template. See [Creating Dynamic Templates in SendGrid](/docs/composer/integration-hub/marketing-communication/sendgrid#creating-dynamic-templates-in-send-grid).                                  |
| `from`                | string                                    | Required | The email address to use in the `From` email field. This is the email address you verified in SendGrid. See [Prequisites](#prerequisites).                                                                                                        |
| `name`                | string                                    | Optional | A free text name that allows you to replace your sender email address with a custom name, so the recipient sees the specified text instead of the actual email address. For example, **MyCompany Customer Service** or **No Reply at MyCompany**. |
| `dynamicFieldMapping` | [object](#the-dynamic-field-mapping-object) | Required | The key + value pairs that maps data from Commerce to the SendGrid dynamic template.                                                                                                                                                              |

#### The `dynamicFieldMapping` object

The `dynamicFieldMapping` object uses [JSONata](http://docs.jsonata.org/overview.html) as its query language.

The attributes and types for the `dynamicFieldMapping` object are defined in the following table.

| Attribute | Type | Description |
| --- | --- | --- |
| *SendgridTemplateFieldnames* | string | The placeholder fields from your SendGrid dynamic templates. See [Creating Dynamic Templates in SendGrid](/docs/composer/integration-hub/marketing-communication/sendgrid#creating-dynamic-templates-in-send-grid). |
| *ElasticPathCommerceCloudPayload* | string | The payload delivered to your webhook from Commerce contains the information about the resources affected by the fired event. See [Integration Payload](/docs/api/integrations/integrations-introduction). The payload must include:  <ul><li>A `To` field that defines the email address that the email should be sent to. This can be defined as a single email address or a comma-separated list of email addresses.</li><li>The data from Commerce that you want to include in a SendGrid email. The format of the data depends on whether you have a single item or an array of items. </li><ul><li>A single item is in the format `$payload.data.EPCCresource`. For example, `$payload.data.billing.address.first_name`. </li><li>An array of items is in the format of `$payload.data.EPCCobjectname.{'EPPCresourcename': EPCCresourcevalue,'EPPCresourcename': EPCCresourcevalue}`. For example, `$.payload.included.items.{'name': name,'sku':sku, 'price': meta.display_price.with_tax.value.formatted}`.</li></ul></ul> |

Below is an example of a single `messagingProvider` object.

```json
{
  "messagingProvider": {
    "templateId": "d-7fd1f0f905974f9abc9f8f44f883e0b5",
    "from": "customer-service@foo.com",
    "name": "Foo Customer Service"
  },
  "dynamicFieldMapping": {
    "marketingImage": "http://example.com/static/value.png",
    "to": "$.payload.data.customer.email",
    "firstName": "$.payload.data.billing_address.first_name",
    "lastName": "$.payload.data.billing_address.last_name",
    "orderId": "$.payload.data.id",
    "orderTotal": "$.payload.data.meta.display_price.with_tax.formatted",
    "items": "$.payload.included.items[].{'name': name,'sku':sku, 'price': meta.display_price.with_tax.value.formatted}"
  }
}
```

Below is an example of an array of `messagingProvider` objects.

```json
[
  {
    "messagingProvider": {
      "templateId": "d-5377hisuhf477h2hhbahd563gag5h",
      "from": "no-reply@foo.com",
      "name": "No Reply at Foo.com"
    },
    "dynamicFieldMapping": {
      "marketingImage": "http://example.com/static/order-notification.png",
      "to": "customer-service@foo.com, jane.doe@example.com",
      "firstName": "$.payload.data.billing_address.first_name",
      "lastName": "$.payload.data.billing_address.last_name",
      "orderId": "$.payload.data.id",
      "orderTotal": "$.payload.data.meta.display_price.with_tax.formatted",
      "items": "$.payload.included.items[].{'name': name,'sku':sku, 'price': meta.display_price.with_tax.value.formatted}"
    }
  },
  {
    "messagingProvider": {
      "templateId": "d-7fd1f0f905974f9abc9f8f44f883e0b5",
      "from": "customer-service@foo.com"
    },
    "dynamicFieldMapping": {
      "marketingImage": "http://example.com/static/thank-you.png",
      "to": "$.payload.data.customer.email",
      "firstName": "$.payload.data.billing_address.first_name",
      "lastName": "$.payload.data.billing_address.last_name",
      "orderId": "$.payload.data.id",
      "orderTotal": "$.payload.data.meta.display_price.with_tax.formatted",
      "items": "$.payload.included.items[].{'name': name,'sku':sku, 'price': meta.display_price.with_tax.value.formatted}"
    }
  }
]
```

### Publishing custom events from external systems

You can trigger an email to be sent from SendGrid using a custom event from a system that is external to Commerce. For example, you might have a **Contact Us** page where your customers can ask questions and you can email them in return. Custom events use HTTP POST to post to the webhook endpoint for the integration.  The URL of the webhook endpoint is visible in either the **SendGrid Email** integration in **Integrations Hub** or within **SYSTEM** > **Store Settings** > **Webhooks**. You can configure your storefront to post an event to this webhook and trigger a custom event so that the integration causes a SendGrid email to be sent.

The fields that you define in your custom event object can be anything you want. For example, you may want to include `subject`, `body` and `received_at` fields, in addition to any Commerce data that needs to be sent to your SendGrid email template.

The attributes and types for custom event object are defined in the following table.

| Attribute          | Type     | Description                                  |
|:-------------------|:---------|:---------------------------------------------|
| `triggered_by`     | string   | The target key from the event mapping configuration. See [Configuring Event Mapping](#configuring-event-mapping). |
| `configuration`    | object   | Contains `secret_key` which is the Commerce Secret. See [Collecting Your Setup Information](#collecting-your-setup-information). |
| `customfieldnames` | [object] | You can use custom fields to specify any additional values that you want to populate in the email template. Custom fields can be of any type and are queried using the `dynamicFieldMapping` element in the event mapping configuration. |

Below is an example a custom event object.

```json
{
  "triggered_by": "custom.contact-us",
  "customer_email": "john.doe@example.com",
  "subject": "Question about Product ABC",
  "body": "Does it come in XS size?",
  "received_at": "2022-09-09T12:34:38.679Z",
  "configuration": {
    "secret_key": "ABC123ZY715XdZkAMrrsN410xSd99yir0WAECl7dij+M="
  }
}
```

## Configuring the SendGrid Integration

Once you have:

- [Met the prequisites](#prerequisites).
- [Collected your setup information](#collecting-your-setup-information).
- [Created your dynamic templates in SendGrid](/docs/composer/integration-hub/marketing-communication/sendgrid#creating-dynamic-templates-in-send-grid).
- [Configured your event mapping](#configuring-event-mapping).

You are ready to configure the SendGrid integration in **Integrations Hub**.

1. In Commerce Manager, go to **COMPOSER** > **Integrations Hub**.
1. Under **Email and SMS Integrations**, click **SendGrid Email**. The **SendGrid Email** integration guides you through the steps you need to follow to complete the integration.
1. Click **Configure**. The **Trigger details** consist of the webhooks for the **Init Flow** and **Main Flow**. You do not need to change any of the information here.

    :::caution
    Do not configure any API keys for the webhooks. The webhooks are authorized using the `configuration.secret_key` value in the request body.  Configuring an API key directly on the webhook results in a non-functional integration.
    :::
1. Click **Next**. The **Configuration** page is displayed.
1. Complete the information in the **Configuration** page and configure the following.

    - **EPCC-Base-URL** - Your Commerce API Base URL.
    - **EPCC-Client-ID**  - Your Commerce Client ID.
    - **EPCC-Client-Secret** - Your Commerce Client Secret.
    - **SendGrid-API-key** - The **SendGrid API Key ID** which is the API Key for your SendGrid account.
1. In **Event-Mapping**, click **+ Add value**.
1. In **Key** type the name of the Commerce event that, when triggered, causes an email to be sent from SendGrid. For example, `order.created` or `customer.created`.
1. In **Value**, copy the `messagingProvider` object that you want to use when the Commerce event is triggered.

![Sendgrid event mapping](/assets/sendgrideventmapping.PNG)

1. Click **+ Add value** to add as many key + value pairs as you want.
1. Click **Finish**. Your integration is enabled.

## Using SendGrid Integration

To add more event mappings to your SendGrid integration, go to **Summary** > **Reconfigure**.

In addition, from **Summary**, you can view, pause or delete your SendGrid integration.

If there is an update to the Commerce SendGrid Email integration, a message is displayed in **Summary**. Click **Update** to update your integration. You are walked through the steps to configure your integration.

You can test your Commerce payloads in **Test**.

## Troubleshooting the SendGrid Email Integration

You can debug any issues in **Executions**. Each time an event that triggers an email to be sent from SendGrid is executed, you can click on that execution. The **Logs** shows the output and any errors or warnings.

From **Step Outputs**, you can do the following.

1. Select **Validate Event Mappings** to see which events were properly formatted. Events that are not properly formatted are ignored and are, therefore, not shown.
1. Select **EPCC Event Publish Trigger** to see the code that was posted that triggered the email. This is useful if you want to check the code.
1. Select **Apply Event Mapping to Request** to see all the values that were sent to SendGrid.
1. Select **Send Email via SendGrid** to see the HTTP code and status text for the API response that sent the email to SendGrid.

Select **Retry** to initiate an execution again.
