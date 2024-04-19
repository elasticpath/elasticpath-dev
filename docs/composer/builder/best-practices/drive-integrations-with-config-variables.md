---
title: Drive Integrations with Config Variables
nav_label: Drive Integrations with Config Variables
sidebar_position: 11
---

Builder allows you to build productized, reusable integrations that can be configured differently for each consumer. In addition, you can set specific config variables for your instances to use, and you can restrict other variables to your integration development teams.

## What are config variables?

A config variable is a value that can be different for each of your consumers of a given integration. The key here is that the value _can_ be different for each consumer but does not _need_ to be different. You may have a variable that 95% of your consumers don't change from the default, but 5% need it to be something else. You'll still want to set it up as a config variable instead of hardcoding it.

Items frequently defined as config variables include auth info, API endpoints, Slack channels, file paths, and data mappings. This is not an exhaustive list but should give you an idea of the breadth of possibilities for config variables.

## What types of variables should you use?

We support a variety of config types, ranging from a simple string to multi-field connection variables. A full list of the config types is found in our [Building Integrations](/docs/composer/builder/integrations/building-integrations#config-variable-data-types) article.

## What should you set as a config variable?

There are a surprising number of things that should become config variables. We've categorized them as follows:

### Anything that might change on a consumer basis

Before building an integration, try to think through absolutely everything that can change from one consumer to another. Even if there is a value that is currently the same for each existing consumer, but the value could change in the future, set that up as a config variable. You can always set the value your consumers are currently using as the default value.

## Anything used as an input in multiple places

Suppose you have a file path that you use as an input for each of ten SFTP steps. You'll want to make that file path a variable, so when you inevitably need to change it, you can do so in one place instead of editing ten different steps. This is one of the scenarios where you'll want to set the value for the config variable but only show it to your integration development teams.

## Anything that changes between environments

Suppose you have an endpoint (`https://prod.example.com/api`) that all your consumers use. However, your team needs to use another endpoint (`https://qa.example.com/api`) for testing. You'll want to define “endpoint” as a config variable, set the default to “prod,” and make it “not customer configurable.” Then, your instances won't see that it is a variable and can't inadvertently change it and break the integration. But your team can easily toggle the value as needed.

## How do you make the configuration wizard easy for consumers?

When your consumers activate an instance, they are taken to the configuration page. To ensure that your consumers have the best possible activation experience, you want to make the page as straightforward to use as possible. The goal is for consumers to click a few toggles and dropdowns, maybe type a string or two, and they are good to go.

Here are a few things you can do to help your consumers with config variables:

### Use headings

Let's say that you've built an integration that connects to Salesforce and Dropbox. Create a heading on the config page that says “Dropbox” and place the connection and file path variables under that heading. Then, create another heading for “Salesforce” and place the connection and other variables under that heading. Here's an example of using [headings for config variables](/docs/composer/builder/quickstarts/integrations/configuration-driven-integration#basic-config-variables).

### Use descriptions

Give each config variable a description. These show up in the instance activation page as helpful text located below each config variable. It is especially beneficial if the descriptions include examples (where the config variable is something other than a button, toggle, or dropdown). For example, if the instance needs a Slack webhook URL, you can make sure the description text says something like, “Your URL should look like this: `https://hooks.slack.com/some/api/key`.”

### Use default values

We've already touched on this a bit, but using default values can simplify the activation process greatly. If you know that consumers will generally use a specific value (though not always, or perhaps not always in the future), set that as the default value for the config variable.

### Use dropdown menus

If it makes sense to use a dropdown menu for config variables, please do so. This allows users to select valid options but limits their ability to break the instance by entering invalid data.
