---
title: Using a Code Component to Transform Data
nav_label: Using a Code Component to Transform Data
sidebar_position: 10
---

Builder's code component lets you incorporate custom JavaScript code anywhere in your integration.
The code component allows you to write the product- or industry-specific portions of your integration that aren't readily solved using built-in components from the [component catalog](/docs/composer/builder/builder-components/epcc).

As a reminder here: code components are handy to write simple one-off, single integration code snippets.

## Today's problem

Today we'll address a problem that B2B companies often see when working with third-party vendors: data not coming in within an agreed upon spec.
Suppose that we and a third-party vendor agreed that we would be sent JSON-formatted data via webhook payload that looked like this:

```json
[
  {
    "firstName": "John",
    "lastName": "Smith",
    "dob": "1987-05-20",
    "userid": "123"
  },
  {
    "firstName": "Jane",
    "lastName": "Smith",
    "dob": "1992-07-16",
    "userid": "172"
  }
]
```

Our integration worked during testing with sample data, but when we turn on our integration for third-party vendor consumption, errors are generated when our integration tries to parse the data that was sent.
Logs indicate that the data the vendor is sending is formatted entirely differently than what we agreed to:

```json
{
  "123": {
    "name": "John Smith",
    "dob": "05/20/1987"
  },
  "172": {
    "name": "Jane Smith",
    "dob": "07/16/1992"
  }
}
```

The other vendor drags its feet, and claims a fix is a "long ways off".
We don't have time to wait for the other vendor to fix its software - we need the integration working!
We can fortunately implement a quick fix by adding a code component to the top of our integration to transform the malformed data into the format we expect.

## Using a code component as a shim

Our integration was written to expect one format of input, but received another.
We need to transform the data like this:

```json
{
  "123": {
    "name": "John Smith",
    "dob": "05/20/1987"
  }
}
```

into something like this:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "dob": "1987-05-20",
  "userid": "123"
}
```

That should be pretty easy to do.
We really just need to do three things:

- Split the name at the space character to form a first and last name
- Reformat the date of birth into a more reasonable format
- Pull the JSON key ("123") into a value of `userid`

If we add a code component to our integration, by default it reads:

```javascript
module.exports = async (context, stepResults) => {
  const results = null; // Result of calculation, API request, etc.
  return { data: results };
};
```

The first thing I want to do is use JavaScript destructuring to capture the JSON that the third-party vendor sent as part of the integration trigger's webhook payload:

```javascript
module.exports = async (
  { logger },
  {
    integrationTrigger: {
      results: {
        body: { data: userData },
      },
    },
  }
) => {
  logger.info(userData); // Verify we're capturing in user data properly
  const result = null;
  return { data: result };
};
```

Looking at logs, it looks like we've written our destructuring correctly.
Let's next [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the objects (users) that we were sent with `Object.entries(userData).map()`.

Each iteration of our `map()` will generate an object with `firstName`, `lastName`, `dob`, and `userid`.
We'll reformat the date of birth with the `Date()` object, split the name that was provided to us into a first and last name using `split()`, and grab the `userid` from the keys that were provided to us:

```javascript
module.exports = async (
  { logger },
  {
    integrationTrigger: {
      results: {
        body: { data: userData },
      },
    },
  }
) => {
  const result = Object.entries(userData).map(([userid, user]) => {
    const dob = new Date(Date.parse(user.dob)).toISOString().slice(0, 10);
    const firstName = user.name.split(" ").slice(0, -1).join(" ");
    const lastName = user.name.split(" ").slice(-1).join(" ");
    return {
      firstName,
      lastName,
      dob,
      userid,
    };
  });
  return { data: result };
};
```

That's it!
The rest of our integration can now be configured to reference the results of the code component rather than the body of the integration payload, and it'll start working as we'd expect it to despite the poorly formatted JSON from the third-party vendor.
We can see from a test of our code component that our code component is reformatting data like we expect it to:

![Step outputs in integration designer](/assets/results.png)
