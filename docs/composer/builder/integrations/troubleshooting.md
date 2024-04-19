---
title: Troubleshooting Integrations
nav_label: Troubleshooting Integrations
sidebar_position: 40
---

## Common Error Messages

This page outlines common error messages that you may see, and how to fix them.

### P10001: Result too large to serialize

You may see this error when dealing with large files (greater than 128MB) due to limitations on how large a JavaScript `Buffer` can be.
Reduce the size of your step result if possible.

### P10002: Result contains non-serializable functions

You may see this error if your step result contains JavaScript functions.
Builder serializes step results using [MessagePack](https://msgpack.org/index.html).
JavaScript functions are non-serializable.
So, you cannot `return { data: { foo: () => "" } }`, for example.

As a work-around, you can JSON stringify and JSON parse an object, and functions will be automatically removed.

```typescript
const myReturnValue = {
  foo: 123,
  bar: "Hello, World",
  baz: () => {
    console.log("Hi!");
  },
};
const sanitizedResults = JSON.parse(JSON.stringify(myReturnValue));
return { data: sanitizedResults }; // Returns {foo: 123, bar: "Hello, World"}
```

### P10003: Error serializing step results

An unknown error occurred when serializing your step results.
Builder serializes step results using [MessagePack](https://msgpack.org/index.html).
MessagePack supports a number of complex and primitive types (numbers, strings, objects, arrays, Buffers, null, etc).
Ensure that the data you are returning is included in the [MessagePack spec](https://github.com/msgpack/msgpack/blob/master/spec.md).
