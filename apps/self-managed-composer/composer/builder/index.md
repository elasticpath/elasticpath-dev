---
title: Builder Introduction
nav_label: Builder
sidebar_position: 10
---

Builder is a Commerce integration platform for Commerce customers. It's the quickest way to build integrations to the other apps that you use. You can do this using the Commerce pre-built components. 

Builder significantly reduces overall integration effort and enables non-dev teams to take on more of the integration workload, so that you can deliver integrations faster and spend more time on customer experience.

With Builder, you can:

- Build reusable integrations in a low-code integration designer.
- Use pre-built components to handle most of your integrations' functionality.
- Easily deploy customer-specific integration instances with unique configurations and connections.
- Provide better support with tools like logging and alerting.
- Run your integrations in a purpose-built environment designed for security and scalability.

## Types of Integrations 

You can build the following types of integrations with Builder.

- Search providers, like Algolia or Coveo, enable your customers to search your Commerce products using a third-party search provider.
- Order management providers, like Onport or Fluent, enabling support for marketplace and drop-ship vendor models in Commerce. 
- Product management providers, like Pimberly or Salsify, to synchronize catalog data such as products, price, images, and categories between Commerce and a third-party product management provider.
- Marketing & Communication providers like SendGrid or Braze, allows you to share customer profile information, or send emails to your customers when events in Commerce are triggered. For example, you can send a customer registration email when you create a customer in Commerce.
- Manage your Commerce stores by integrating with the Commerce component. For example, exporting and importing products between stores.

## Integrations

You can assemble an integration by tying together multiple components' actions. That integration can be tested. Once you are satisfied with your integration, it can be published, and instances of the integration can be configured and deployed to Integrations Hub where it can be activated.

Instances are deployed using your specific config variables.sd

## Logging, Monitoring, and Alerting

When an integration behaves unexpectedly (takes too long to run, or fails to run to completion), you want your team to be notified. Alert monitors can be configured to monitor your instances, and notify your team in the event of an issue. Logs of all instance runs are retained, so you can debug production issues and rapidly resolve problems.

Not all alerts indicate bad things happened; alert monitors can be configured to run when an instance is enabled (so you can mark implementations as complete), or can be configured to alert you via Slack or Email that an integration that runs daily ran successfully.
