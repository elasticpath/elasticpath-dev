---
title: Common Integration Patterns
nav_label: Common Integration Patterns
sidebar_position: 10
---

There is much variety when it comes to building integrations. Despite that, your integrations are going to follow one of a few common patterns. Knowing what these patterns are and which ones are best suited for different scenarios will help when it comes to planning your approach to integrations – from the way to you set up your application API to how you leverage components.

Here are the common patterns we are going to examine:

- **Event-driven**: An event occurs in an app, which causes data to be sent to another app. The event may be in your system or the third-party system you are integrating with. This is probably the most common type of integration we see being used.
- **Scheduled**: An integration that runs on a regular schedule (every minute, every hour, daily, etc.) These integrations include exports (recurring reports) and imports (polling an API to request data for import to your system). Not as common as event-driven integrations.
- **Synchronous**: One system makes a request, then waits for the integration to complete and respond with an answer. Perhaps the most difficult type of integration. We don't see this one implemented very often for reasons we'll get into shortly.
- **Hybrid**: This isn't so much a pattern as parts of other patterns used together in a single integration.

Let's look at some use cases for these types and see when we should use each type and what is needed to build them.

## Event-driven integrations

As noted, this is probably the most common type of integration. When an event occurs in a source system (for example, a customer record is updated in CRM or an invoice is paid in POS), data about the event is sent to a destination system.

One of the benefits of event-driven integrations is having a near-real-time data exchange. When an event occurs in the source system, the data is sent to the destination system in seconds (or whatever time it takes to run the integration).

Event-driven integrations are further broken down into the following, which we'll get into shortly:

- One-way import
- One-way export
- Two-way

### Webhooks and payloads

We've touched on events, but we also need to cover webhooks and payloads. A **webhook** is an event-triggered request to an app. This is the third-party app, for an import integration, or your app, for an export integration. The **payload** is the data sent by the webhook.

While we commonly use the term webhook, some companies use different terms. For example, Salesforce refers to these as [Outbound Messages](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm), and Slack calls them [Events](https://api.slack.com/apis/connections/events-api).

The bottom line is that _something_ changes in the source system, which causes the source system to send data outside the system.

:::note
When the destination system creates an endpoint, it tells the source system, *when thing changes, let me know at this URL.*. That is, it is limited to defining where the payload is sent.
:::

For example, you could set up a webhook in an inventory app to notify you when the quantity for an inventory item is updated. When an update occurs in the inventory system, the system might send an HTTP request with a payload like this:

```json
{
  "event": "INVENTORY_UPDATE",
  "updates": [
    {
      "item": "widgets",
      "action": "add",
      "quantity": 20
    },
    {
      "item": "gadgets",
      "action": "remove",
      "quantity": 5
    }
  ]
}
```

For a great example of an event-driven API, let's consider GitHub, which has a variety of events that can trigger a webhook. GitHub also provides the shape of the payload sent via each webhook: [https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads).

When you integrate with GitHub, you'll create endpoints to receive those payloads: [https://docs.github.com/en/rest/repos/webhooks?apiVersion=2022-11-28](https://docs.github.com/en/rest/repos/webhooks?apiVersion=2022-11-28).

### Pub/sub systems

Though webhooks are perhaps the most common type of a pub/sub (publisher/subscriber) system, the source system for an integration may also be using Amazon SNS, Apache Kafka, email, or something else altogether. In each case, these systems provide you with something you subscribe to as the starting point for the integration.

### One-way import integration

Now that we've covered event-driven integrations in general, let's dive into the details of a (relatively) simple one-way event-driven import. This is an import of data from the third-party app into your app based on events in the third-party app. Once you've built a couple of these imports, you should be able to put the next one together pretty quickly and with a minimum of components.

#### Multiple events

First, let's talk about importing data from a third-party app that supports webhooks (or another pub/sub system). You may initially be importing a single, simple payload and may want to subscribe to only what you immediately need from the third-party system. However, you should probably subscribe to several webhooks (if available) in the third-party app to support the different payloads you may eventually need to receive.

After all, an import integration does not need to be limited to a single type of data or payload. A single integration, for example, may allow you to get updated customer records from a third-party system and updated order records from the same system. These different datasets may all be provided to your app via the same integration, but they may be sent via multiple webhooks in the third-party app.

#### Branching and flows

To support different events in the third-party app, you can either use branching or set up a unique flow within the integration for each event type. If your integration handles a small number of webhook events, then branching may be the best option. If, however, the integration is more complex, with substantially different logic for each payload, it is better to use [flows](/composer/builder/best-practices/tap-into-power-flows).

For an example of flows to support multiple events, let's consider Salesforce. You might have one flow in your integration that supports the Opportunity update event, with separate flows for the Opportunity create event and the Contact create event. By setting things up this way, each flow handles a small piece of the overall integration, and code used in separate flows is tailored precisely to the payload the flow is processing.

If the third-party app supports it, you could create a separate webhook for each flow. You could then use a [pre-process flow](/composer/builder/integrations/integrations-triggers/endpoint-configuration#instance-specific-endpoint-with-a-preprocess-flow) with a single endpoint. A pre-process flow examines incoming payloads and dispatches them appropriately to the integration's other flows.

#### Deploy-time flow

[A deploy-time flow](/composer/builder/integrations/integrations-triggers/how-to-use-integration-triggers#instance-deploy-trigger) helps to ensure that the webhooks are set up accurately. Deploy-time flows are set to run when you (or one of your customers) activate the integration. Since a deploy-time flow knows the webhook URLs (endpoints) for all its sibling flows, it can define those endpoints for the third-party app. This ensures that payloads are sent to the correct endpoints.

#### Third-party app component for import

If you are integrating with a common app for which we already have a component, you shouldn't need to write any custom code.

You might also have a scenario where the third-party app returns a subset of needed data (maybe IDs of records that have changed but not the actual records themselves). In this scenario, you may need to wrap a bit of the third-party API with your integration to get the records associated with the IDs before sending the entire payload to the next step in the integration.

### One-way export integration

Now that we've looked at the one-way event-driven import integration, let's flip everything around and look at the reverse. The primary difference between an export integration and an import integration is that the export integration starts with your core application, giving you absolute control over the initial steps of the integration.

#### Your app

You'll want to write the core product functionality for the export one time, so you don't have to keep building additional functionality. The best approach is to set up your app with an API that includes events, webhooks, and the corresponding payload definitions. Doing this saves considerable time for your developers since they won't need to keep defining new export functionality for the API. Instead, you can create integrations that subscribe to your webhooks, filter/transform the resulting payloads, and send the data to the third-party app.

If your app does not have an API, you'll probably need to use [scheduled integrations](#scheduled-integrations) instead of event-driven ones.

#### Third-party app component for export

If a standard component is available to access the third-party API, you will want to use that. If one isn't available, we recommend using the HTTP component to make calls to the third-party API or contact Elastic Path to have a standard component created. 

### Two-way event-driven integration

A two-way event-driven integration melds the one-way event-driven export and the one-way event-driven import into a single integration. The import will have its own flow or [flows](/composer/builder/best-practices/tap-into-power-flows), and the export will have its own flow or flows, but everything is contained within a single integration. A two-way integration most likely uses API calls for your app but a built-in component for the third-party app (since this is both an import and export integration). The advantage being you will have a single integration to support.

We recommend doing this as a single integration using multiple flows instead of assembling the pieces into several one-way integrations. Building a single integration simplifies integration development, deployment, and support.

## Scheduled integrations

When the system you need to transfer data from does not have webhooks or another pub/sub system to which you can subscribe, you need to use a scheduled integration. A scheduled integration can be either import or export. Instead of being triggered when the integration receives a notification, a scheduled integration is triggered at a specific time or time interval. For example, a scheduled integration may run every two minutes or every Thursday at 7:00 PM.

By definition, a scheduled integration is not near-real-time. For a scheduled integration that recurs frequently, the data may be only a minute or two old, but it will not be as fresh as one can get from an event-driven integration.

The main difference between a scheduled integration and an event-driven one is that the source system in an event-driven integration says, "I have something," but a scheduled integration asks the source system, "What do you have for me?"

Scheduled integrations generally fall into one of the following:

- Scheduled data import
- Scheduled file import
- Scheduled file export

### Scheduled data import integration

You'll use a scheduled integration to import when you have a third-party API that does not have webhooks or another pub/sub system. If a pre-built component is available, then you will use that. If a pre-built component for this third-party app isn't available, you'll need to build a fully fleshed-out integration that wraps the various API endpoints containing the data the integration will query. The API then processes the query and returns the requested payload.

### Scheduled file import integrations

Some third-party apps may be configured with a file export instead of an API, which is more common with non-SaaS (legacy) systems. In this case, the app may write out data as PDF, XML, CSV, or another file type to an external data source such as Dropbox, SFTP, MS SQL, Queue, and so on. To import this data, you'll build an integration that checks the location(s) according to a regular schedule to see if there are new files to process.

When there is new data within the location (for example, new XML files in a Dropbox folder), your integration will loop over each of the files, process the files, and then move or delete the processed files. As with other scheduled integrations, this still is not near-real-time but can be current within a few minutes of the file(s) being placed in the external data source.

### Scheduled file export integration

We tend to see this type of integration where you generate a regular report for your customers. You set up an integration where you are either querying your API (for your app) or a third-party API for specific data.

Once the data has been returned, your integration generates a file with the data in the necessary format (PDF, XML, CSV, and so on.) Finally, this file is packaged up and sent off to its destination (which could range from a filesystem to email or SMS).

You should be able to use a built-in Builder component to handle the part where the file is placed into a filesystem, sent via email, etc.

Some of the common data platforms for which builder has built-in components are Dropbox, Amazon S3, Google Drive, and Azure Files.

## Synchronous Integrations

A synchronous integration may be what you need if you have data from a third-party app that you must have *right* now. An integration of this type calls an integration URL and then waits for a response.

If a synchronous integration is working quickly and has very little to no lag between the call and the response, then the integration should work well. However, if the integration takes a while to run (much data to process, the third-party app is slow in fulfilling requests, etc.), that makes the integration susceptible to network disconnects and timeouts.

You are probably better off building this as a two-way asynchronous integration. Then, the integration can send off the request and "hang up." When the integration completes the process, it can "redial" to return the requested data.

## Hybrid Integrations

As noted, hybrid integrations are some combination of other integration types. For example, suppose that your app supports webhooks, but the third-party app you are working with only has an API with no webhooks. As a result, you might build a hybrid integration where you have an event-driven export from your app but are running a scheduled data import from the third-party app. Instead of setting this up as two separate integrations, you would be able to combine them in the same integration with distinct flows.
