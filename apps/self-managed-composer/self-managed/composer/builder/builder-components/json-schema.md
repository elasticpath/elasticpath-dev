---
title: Elastic Path JSON Schema Component
nav_label: Elastic Path JSON Schema
sidebar_position: 100
---

This component provides actions to work with JSON Schemas.

## Actions

This component has the following action.

### Validate JSON Object with Schema

This action provides a way to validate the format of a given JSON Object against a given JSON Schema using the [jsonschema](https://www.npmjs.com/package/jsonschema) library.  The result is returned as a [ValidatorResult](https://github.com/tdegrunt/jsonschema/blob/b53e5853d88763b3de57be0250f46a55445789f6/lib/helpers.js#L33) object.  The `errors` array field on the result will be empty if the object was successfully validated.

| Input | Type | Description |
|:--- |:--- | :--- |
| **JSON Object to Validate**  | `code` | The JSON object to validate. |
| **JSON Schema**  | `code` | The JSON Schema object to use for validation. |
| **Throw Error If Validation Fails** | `boolean` | Enable this flag if you want a hard stop if the validation fails.  Disable to handle the validation failure directly in your integration. |
| **Log Level**  | `string` | The level of component logging. |
