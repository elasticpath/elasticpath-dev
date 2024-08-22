---
id: "_clients_http_inputs_"
title: "clients/http/inputs"
sidebar_label: "clients/http/inputs"
---

[@prismatic-io/spectral](../index.md) › ["clients/http/inputs"](_clients_http_inputs_.md)

## Index

### Variables

* [data](_clients_http_inputs_.md#const-data)
* [debugRequest](_clients_http_inputs_.md#const-debugrequest)
* [fileData](_clients_http_inputs_.md#const-filedata)
* [fileDataFileNames](_clients_http_inputs_.md#const-filedatafilenames)
* [formData](_clients_http_inputs_.md#const-formdata)
* [headers](_clients_http_inputs_.md#const-headers)
* [maxRetries](_clients_http_inputs_.md#const-maxretries)
* [method](_clients_http_inputs_.md#const-method)
* [queryParams](_clients_http_inputs_.md#const-queryparams)
* [responseType](_clients_http_inputs_.md#const-responsetype)
* [retryAllErrors](_clients_http_inputs_.md#const-retryallerrors)
* [retryDelayMS](_clients_http_inputs_.md#const-retrydelayms)
* [supportedMethods](_clients_http_inputs_.md#const-supportedmethods)
* [supportedResponseTypes](_clients_http_inputs_.md#const-supportedresponsetypes)
* [timeout](_clients_http_inputs_.md#const-timeout)
* [url](_clients_http_inputs_.md#const-url)
* [useExponentialBackoff](_clients_http_inputs_.md#const-useexponentialbackoff)

### Object literals

* [inputs](_clients_http_inputs_.md#const-inputs)

## Variables

### `Const` data

• **data**: *object* = input({
  label: "Data",
  placeholder: "Data to send",
  type: "string",
  required: false,
  comments: "The HTTP body payload to send to the URL.",
  example: '{"exampleKey": "Example Data"}',
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:34](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L34)*

#### Type declaration:

* **comments**: *string* = "The HTTP body payload to send to the URL."

* **example**: *string* = "{"exampleKey": "Example Data"}"

* **label**: *string* = "Data"

* **placeholder**: *string* = "Data to send"

* **required**: *false* = false

* **type**: *"string"* = "string"

___

### `Const` debugRequest

• **debugRequest**: *object* = input({
  label: "Debug Request",
  type: "boolean",
  required: false,
  comments: "Enabling this flag will log out the current request.",
  clean: (value) => util.types.toBool(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:171](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L171)*

#### Type declaration:

* **comments**: *string* = "Enabling this flag will log out the current request."

* **label**: *string* = "Debug Request"

* **required**: *false* = false

* **type**: *"boolean"* = "boolean"

* **clean**(`value`: unknown): *boolean*

___

### `Const` fileData

• **fileData**: *object* = input({
  label: "File Data",
  placeholder: "Data to send",
  type: "string",
  collection: "keyvaluelist",
  required: false,
  comments: "File Data to be sent as a multipart form upload.",
  example: `[{key: "example.txt", value: "My File Contents"}]`,
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:149](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L149)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "File Data to be sent as a multipart form upload."

* **example**: *string* = `[{key: "example.txt", value: "My File Contents"}]`

* **label**: *string* = "File Data"

* **placeholder**: *string* = "Data to send"

* **required**: *false* = false

* **type**: *"string"* = "string"

___

### `Const` fileDataFileNames

• **fileDataFileNames**: *object* = input({
  label: "File Data File Names",
  placeholder: "The file name to apply to a file",
  type: "string",
  collection: "keyvaluelist",
  required: false,
  comments:
    "File names to apply to the file data inputs. Keys must match the file data keys above.",
  clean: (values: any) =>
    values ? util.types.keyValPairListToObject&lt;string&gt;(values) : undefined,
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:159](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L159)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "File names to apply to the file data inputs. Keys must match the file data keys above."

* **label**: *string* = "File Data File Names"

* **placeholder**: *string* = "The file name to apply to a file"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`values`: any): *undefined | object*

___

### `Const` formData

• **formData**: *object* = input({
  label: "Form Data",
  placeholder: "Data to send",
  type: "string",
  collection: "keyvaluelist",
  required: false,
  comments: "The Form Data to be sent as a multipart form upload.",
  example: '[{"key": "Example Key", "value": new Buffer("Hello World")}]',
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:139](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L139)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "The Form Data to be sent as a multipart form upload."

* **example**: *string* = "[{"key": "Example Key", "value": new Buffer("Hello World")}]"

* **label**: *string* = "Form Data"

* **placeholder**: *string* = "Data to send"

* **required**: *false* = false

* **type**: *"string"* = "string"

___

### `Const` headers

• **headers**: *object* = input({
  label: "Header",
  placeholder: "Header",
  type: "string",
  collection: "keyvaluelist",
  required: false,
  comments: "A list of headers to send with the request.",
  example: "User-Agent: curl/7.64.1",
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:77](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L77)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "A list of headers to send with the request."

* **example**: *string* = "User-Agent: curl/7.64.1"

* **label**: *string* = "Header"

* **placeholder**: *string* = "Header"

* **required**: *false* = false

* **type**: *"string"* = "string"

___

### `Const` maxRetries

• **maxRetries**: *object* = input({
  label: "Max Retry Count",
  placeholder: "Max Retries",
  type: "string",
  required: false,
  comments:
    "The maximum number of retries to attempt. Specify 0 for no retries.",
  default: "0",
  clean: (value) => util.types.toNumber(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:97](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L97)*

#### Type declaration:

* **comments**: *string* = "The maximum number of retries to attempt. Specify 0 for no retries."

* **default**: *string* = "0"

* **label**: *string* = "Max Retry Count"

* **placeholder**: *string* = "Max Retries"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *number*

___

### `Const` method

• **method**: *object* = input({
  label: "Method",
  type: "string",
  required: true,
  model: supportedMethods.map((method) => ({ label: method, value: method })),
  comments: "The HTTP method to use.",
  clean: (value) => util.types.toString(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:53](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L53)*

#### Type declaration:

* **comments**: *string* = "The HTTP method to use."

* **label**: *string* = "Method"

* **model**: *object[]* = supportedMethods.map((method) => ({ label: method, value: method }))

* **required**: *true* = true

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *string*

___

### `Const` queryParams

• **queryParams**: *object* = input({
  label: "Query Parameter",
  placeholder: "Query Parameter",
  type: "string",
  collection: "keyvaluelist",
  required: false,
  comments:
    "A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.",
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:87](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L87)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2."

* **label**: *string* = "Query Parameter"

* **placeholder**: *string* = "Query Parameter"

* **required**: *false* = false

* **type**: *"string"* = "string"

___

### `Const` responseType

• **responseType**: *object* = input({
  label: "Response Type",
  placeholder: "Response Type",
  type: "string",
  default: "json",
  required: true,
  comments:
    "The type of data you expect in the response. You can request json, text, or binary data.",
  model: supportedResponseTypes.map((responseType) => ({
    label: responseType,
    value: responseType,
  })),
  clean: (value) => util.types.toString(value) as ResponseType,
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:62](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L62)*

#### Type declaration:

* **comments**: *string* = "The type of data you expect in the response. You can request json, text, or binary data."

* **default**: *string* = "json"

* **label**: *string* = "Response Type"

* **model**: *object[]* = supportedResponseTypes.map((responseType) => ({
    label: responseType,
    value: responseType,
  }))

* **placeholder**: *string* = "Response Type"

* **required**: *true* = true

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *"text" | "json" | "arraybuffer" | "blob" | "document" | "stream"*

___

### `Const` retryAllErrors

• **retryAllErrors**: *object* = input({
  label: "Retry On All Errors",
  type: "boolean",
  default: "false",
  required: false,
  comments:
    "If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.",
  clean: (value) => util.types.toBool(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:129](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L129)*

#### Type declaration:

* **comments**: *string* = "If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors."

* **default**: *string* = "false"

* **label**: *string* = "Retry On All Errors"

* **required**: *false* = false

* **type**: *"boolean"* = "boolean"

* **clean**(`value`: unknown): *boolean*

___

### `Const` retryDelayMS

• **retryDelayMS**: *object* = input({
  label: "Retry Delay (ms)",
  placeholder: "Retry Delay",
  type: "string",
  required: false,
  comments:
    "The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.",
  default: "0",
  clean: (value) => util.types.toNumber(value, 0),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:108](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L108)*

#### Type declaration:

* **comments**: *string* = "The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled."

* **default**: *string* = "0"

* **label**: *string* = "Retry Delay (ms)"

* **placeholder**: *string* = "Retry Delay"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *number*

___

### `Const` supportedMethods

• **supportedMethods**: *Method[]* = [
  "DELETE",
  "GET",
  "HEAD",
  "LINK",
  "OPTIONS",
  "PATCH",
  "POST",
  "PURGE",
  "PUT",
  "UNLINK",
]

*Defined in [packages/spectral/src/clients/http/inputs.ts:4](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L4)*

___

### `Const` supportedResponseTypes

• **supportedResponseTypes**: *ResponseType[]* = [
  "arraybuffer",
  "document",
  "json",
  "text",
]

*Defined in [packages/spectral/src/clients/http/inputs.ts:17](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L17)*

___

### `Const` timeout

• **timeout**: *object* = input({
  label: "Timeout",
  type: "string",
  required: false,
  comments:
    "The maximum time that a client will await a response to its request",
  example: "2000",
  clean: (value) => util.types.toNumber(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:43](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L43)*

#### Type declaration:

* **comments**: *string* = "The maximum time that a client will await a response to its request"

* **example**: *string* = "2000"

* **label**: *string* = "Timeout"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *number*

___

### `Const` url

• **url**: *object* = input({
  label: "URL",
  placeholder: "URL to call",
  type: "string",
  required: true,
  comments: "This is the URL to call.",
  example: "/sobjects/Account",
  clean: (value) => util.types.toString(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:24](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L24)*

#### Type declaration:

* **comments**: *string* = "This is the URL to call."

* **example**: *string* = "/sobjects/Account"

* **label**: *string* = "URL"

* **placeholder**: *string* = "URL to call"

* **required**: *true* = true

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *string*

___

### `Const` useExponentialBackoff

• **useExponentialBackoff**: *object* = input({
  label: "Use Exponential Backoff",
  type: "boolean",
  default: "false",
  required: false,
  comments:
    "Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.",
  clean: (value) => util.types.toBool(value),
})

*Defined in [packages/spectral/src/clients/http/inputs.ts:119](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L119)*

#### Type declaration:

* **comments**: *string* = "Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored."

* **default**: *string* = "false"

* **label**: *string* = "Use Exponential Backoff"

* **required**: *false* = false

* **type**: *"boolean"* = "boolean"

* **clean**(`value`: unknown): *boolean*

## Object literals

### `Const` inputs

### ▪ **inputs**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:179](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L179)*

###  data

• **data**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:182](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L182)*

#### Type declaration:

* **comments**: *string* = "The HTTP body payload to send to the URL."

* **example**: *string* = "{"exampleKey": "Example Data"}"

* **label**: *string* = "Data"

* **placeholder**: *string* = "Data to send"

* **required**: *false* = false

* **type**: *"string"* = "string"

###  debugRequest

• **debugRequest**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:190](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L190)*

#### Type declaration:

* **comments**: *string* = "Enabling this flag will log out the current request."

* **label**: *string* = "Debug Request"

* **required**: *false* = false

* **type**: *"boolean"* = "boolean"

* **clean**(`value`: unknown): *boolean*

###  fileData

• **fileData**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:184](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L184)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "File Data to be sent as a multipart form upload."

* **example**: *string* = `[{key: "example.txt", value: "My File Contents"}]`

* **label**: *string* = "File Data"

* **placeholder**: *string* = "Data to send"

* **required**: *false* = false

* **type**: *"string"* = "string"

###  fileDataFileNames

• **fileDataFileNames**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:185](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L185)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "File names to apply to the file data inputs. Keys must match the file data keys above."

* **label**: *string* = "File Data File Names"

* **placeholder**: *string* = "The file name to apply to a file"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`values`: any): *undefined | object*

###  formData

• **formData**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:183](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L183)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "The Form Data to be sent as a multipart form upload."

* **example**: *string* = "[{"key": "Example Key", "value": new Buffer("Hello World")}]"

* **label**: *string* = "Form Data"

* **placeholder**: *string* = "Data to send"

* **required**: *false* = false

* **type**: *"string"* = "string"

###  headers

• **headers**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:187](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L187)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "A list of headers to send with the request."

* **example**: *string* = "User-Agent: curl/7.64.1"

* **label**: *string* = "Header"

* **placeholder**: *string* = "Header"

* **required**: *false* = false

* **type**: *"string"* = "string"

###  maxRetries

• **maxRetries**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:193](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L193)*

#### Type declaration:

* **comments**: *string* = "The maximum number of retries to attempt. Specify 0 for no retries."

* **default**: *string* = "0"

* **label**: *string* = "Max Retry Count"

* **placeholder**: *string* = "Max Retries"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *number*

###  method

• **method**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:181](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L181)*

#### Type declaration:

* **comments**: *string* = "The HTTP method to use."

* **label**: *string* = "Method"

* **model**: *object[]* = supportedMethods.map((method) => ({ label: method, value: method }))

* **required**: *true* = true

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *string*

###  queryParams

• **queryParams**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:186](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L186)*

#### Type declaration:

* **collection**: *"keyvaluelist"* = "keyvaluelist"

* **comments**: *string* = "A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2."

* **label**: *string* = "Query Parameter"

* **placeholder**: *string* = "Query Parameter"

* **required**: *false* = false

* **type**: *"string"* = "string"

###  responseType

• **responseType**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:188](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L188)*

#### Type declaration:

* **comments**: *string* = "The type of data you expect in the response. You can request json, text, or binary data."

* **default**: *string* = "json"

* **label**: *string* = "Response Type"

* **model**: *object[]* = supportedResponseTypes.map((responseType) => ({
    label: responseType,
    value: responseType,
  }))

* **placeholder**: *string* = "Response Type"

* **required**: *true* = true

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *"text" | "json" | "arraybuffer" | "blob" | "document" | "stream"*

###  retryAllErrors

• **retryAllErrors**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:192](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L192)*

#### Type declaration:

* **comments**: *string* = "If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors."

* **default**: *string* = "false"

* **label**: *string* = "Retry On All Errors"

* **required**: *false* = false

* **type**: *"boolean"* = "boolean"

* **clean**(`value`: unknown): *boolean*

###  retryDelayMS

• **retryDelayMS**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:191](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L191)*

#### Type declaration:

* **comments**: *string* = "The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled."

* **default**: *string* = "0"

* **label**: *string* = "Retry Delay (ms)"

* **placeholder**: *string* = "Retry Delay"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *number*

###  timeout

• **timeout**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:189](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L189)*

#### Type declaration:

* **comments**: *string* = "The maximum time that a client will await a response to its request"

* **example**: *string* = "2000"

* **label**: *string* = "Timeout"

* **required**: *false* = false

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *number*

###  url

• **url**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:180](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L180)*

#### Type declaration:

* **comments**: *string* = "This is the URL to call."

* **example**: *string* = "/sobjects/Account"

* **label**: *string* = "URL"

* **placeholder**: *string* = "URL to call"

* **required**: *true* = true

* **type**: *"string"* = "string"

* **clean**(`value`: unknown): *string*

###  useExponentialBackoff

• **useExponentialBackoff**: *object*

*Defined in [packages/spectral/src/clients/http/inputs.ts:194](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/inputs.ts#L194)*

#### Type declaration:

* **comments**: *string* = "Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored."

* **default**: *string* = "false"

* **label**: *string* = "Use Exponential Backoff"

* **required**: *false* = false

* **type**: *"boolean"* = "boolean"

* **clean**(`value`: unknown): *boolean*
