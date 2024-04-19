---
title: Build Custom Functions with Code Components
nav_label: Build Custom Functions with Code Components
sidebar_position: 30
---

The code component allows you to execute product or industry-specific code within an integration.
This page outlines when and how to use a code component.

## Why use a code component?

You will likely have integration logic that can't be solved using the [standard components](/docs/composer/builder/builder-components/epcc) we provide.
The portion of your integrations that are specific to your product or industry can be accomplished using code component steps.

## Adding a code component to an integration

Within the integration designer, [add a step](/docs/composer/builder/integrations/building-integrations#adding-steps-to-integrations) to your integration.
Select the **Code** component, **Code Block** action.

You will be presented with a new code step in your integration, and you can click the "Edit" button to open the code editor:

![Code editor](/assets/code-step.png)

## Code structure

The code component provides a stub function by default.
Let's examine the structure of the code:

```javascript
module.exports = async ({ logger, configVars }, stepResults) => {
  return { data: null };
};
```

The code component requires you to export an asynchronous function.
The default code uses [arrow function notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) to create an `async` function to return.

## Code component parameters

This function is provided a few parameters:

1. The first positional parameter, is comprised of several properties:
   - `logger` allows you to write out log lines.
   - `configVars` lets you access config variables (including connections).
   - `instanceState`, `crossFlowState`, `integrationState` and `executionState` gives you access to persisted state.
   - `stepId` is the ID of the current step being executed.
   - `executionId` is the ID of the current execution.
   - `webhookUrls` contains the URLs of the running instance's sibling flows.
   - `webhookApiKeys` contains the API keys of the running instance's sibling flows.
   - `invokeUrl` was the URL used to invoke the integration.
   - `instance` is an object containing an `id` and `name` of the running instance.
1. The second positional parameter, `stepResults`, is an object that contains output from previous steps of the integration.

### Logging

`context.logger` is an object that can be used for logging and debugging.
`context.logger` has four functions: `debug`, `info`, `warn`, and `error`.
For example:

```javascript
module.exports = async (context, stepResults) => {
  context.logger.info("Things are going great");
  context.logger.warn("Now less great...");
};

// or

module.exports = async ({ logger }, stepResults) => {
  logger.info("Hello World");
};
```

**Note**: Log lines are truncated after 4096 characters.

### Config variables

`context.configVars` provides the Code Component with access to all [config variables](/docs/composer/builder/integrations/building-integrations#config-variables-in-integrations), including connections, associated with the integration.

If you have a config variable named `Acme ERP Base URL`, for example, you could reference that config variable in a code step with `context.configVars["Config Variable Name"]` syntax:

```javascript
module.exports = async ({ configVars }, stepResults) => {
  const fuelApiUrl = `${configVars["Acme ERP Base URL"]}/fuel`;
  // ...
};
```

### Connections

[Connections](/docs/composer/builder/integrations/building-integrations#connection-config-variables) are a special type of config variable.
You can access the contents of a connection the same way that you would any other config variable.
In this example, suppose you have a connection config variable named `Acme ERP Connection` that contains two fields, `tenantId` and `apiKey`:

```javascript title="Destructuring a connection config variable"
module.exports = async ({ logger, configVars }, stepResults) => {
  const {
    fields: { tenantId, apiKey },
  } = configVars["Acme ERP Connection"];
  const result = await doAThing({ tenantId, apiKey });
  return { data: result };
};
```

## Referencing previous step outputs

Most steps of an integration return some sort of value.
An **HTTP - GET** action, for example, might return a JSON payload from a REST API.
An **Amazon S3 - Get Object** will return a binary file pulled from S3.

The code component can reference those outputs through the `stepResults` parameter.
`stepResults` is an object that contains results from all previous steps.

For example, if you have an **HTTP - GET** step named **Fetch Users List** that pulls down an array of users from `https://jsonplaceholder.typicode.com/users`, you can generate an array of email addresses with this code:

```javascript
module.exports = async (context, stepResults) => {
  const userArray = stepResults.fetchUsersList.results;
  const emailArray = userArray.map((user) => user.email);
  return { data: emailArray };
};
```

{% callout  %} 

Step results are often objects. Many components return objects that have multiple keys. So, you can reference `stepResults.myStepName.results.someKey`. It's rare for a component to return serialized JSON, so there's rarely need to `JSON.parse()` results from a previous step.
:::

### Previous steps names as variables

Since names of steps can include spaces and non-JavaScript-friendly characters, alphanumeric characters of step names are converted to camelCase.
So, a step named **Download JSON from API** would be converted to **downloadJsonFromApi**.

### Referencing integration trigger payload data

The integration trigger is simply another step that can have a unique name.
Suppose an integration is triggered by a webhook, the trigger is named `My Integration Trigger`, and the webhook is provided a payload `body.data` of `{"exampleKey": "exampleValue"}`.

![Reference integration trigger payload](/assets/trigger-payload.png)

That `exampleKey` would be accessible using `stepResults.myIntegrationTrigger` like so:

```javascript
module.exports = async ({ logger }, stepResults) => {
  const exampleKey =
    stepResults.myIntegrationTrigger.results.body.data.exampleKey;
  logger.info(`Received '${exampleKey}'`);
};
```

Using JavaScript destructuring, you can instead write this:

```javascript
module.exports = async (
  { logger },
  {
    myIntegrationTrigger: {
      results: {
        body: {
          data: { exampleKey },
        },
      },
    },
  }
) => {
  logger.info(`Received '${exampleKey}'`);
};
```

Notice the logged message in the testing pane

![Test runner step results](/assets/using-stepresults.png)

## Code component return values

The code component can optionally return a value for use by a subsequent step.
The return value can be an object, string, integer, etc., and will retain its type as the value is passed to the next step.

The return value is specified using the `data` key in the return object.

In this example we return a string with value `"https://ipinfo.io/ip"`:

```javascript
module.exports = async (context, stepResults) => {
  return { data: "https://ipinfo.io/ip" };
};
```

The output can be used as input for the next step by referencing `codeComponentStepName.results`.

![Use output for prior step for input to new step](/assets/return-values.png)

To see an example of returning more complex data structures, and a good example use case for a code component, see the [Using a Code Component to Transform Data](/docs/composer/builder/quickstarts/code-component/code-component-to-transform-data) quickstart.

### Returning binary data from a code component

Sometimes you'll want your code component to return binary data (like a rendered image or PDF).
To do that, return an object with a `data` property of type `Buffer` (a file buffer), and a `contentType` property of type `String` that contains the file's [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types):

```javascript
module.exports = async (context, stepResults) => {
  // ...
  const fileBuffer = SomePdfLibrary.generatePdf();
  return {
    data: fileBuffer,
    contentType: "application/pdf",
  };
};
```

To see an example use case for returning binary data from a code component, check out our Generate a PDF with a Code Component.

**For More Information**:
See **Using a Code Component to Transform Data**.

## Adding dependencies to a code component

If your code component depends on node modules from `npm`, dependencies will be dynamically imported from the [UNPKG CDN](https://unpkg.com/).
For example, if your code component reads:

```javascript
const fetch = require("node-fetch@2.6.1/lib/index.js");

module.exports = async (context, stepResults) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const responseJson = await response.json();
  return { data: responseJson };
};
```

Then [node-fetch](https://unpkg.com/browse/node-fetch@2.6.1/lib/index.js) version 2.6.1 will be imported as a dependency.

You should specify specific known working versions of `npm` packages for your code component:

```javascript
const lodash = require("lodash@2.4.2");
const fetch = require("node-fetch@2.6.1/lib/index.js");
```

You can require any file from `npm` using `package[@version][/file]` syntax.
Note that with the `lodash` import above, no file was specified.
If no file is specified, the `main` file defined in the `npm` package's `package.json` is imported.
An explicit path was called out for the `node-fetch` import because the `node-fetch` package defaults to importing a browser version of the package, and we want a compiled server version instead.

{% callout title="CDN outages and downstream dependencies" type="warning" %}

Dynamic imports may or may not work, depending on how the dependency maintainer compiled their package.
If the package has its own dependencies that are not compiled in, you may see errors in your code.

You might also see errors if the UNPKG CDN is unavailable for any amount of time.

Components have their dependencies compiled in, and are not dependent on the uptime of an external CDN.
:::
