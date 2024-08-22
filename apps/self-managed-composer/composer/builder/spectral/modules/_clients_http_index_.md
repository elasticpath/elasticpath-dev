---
id: "_clients_http_index_"
title: "clients/http/index"
sidebar_label: "clients/http/index"
---

[@prismatic-io/spectral](../index.md) › ["clients/http/index"](_clients_http_index_.md)

## Index

### Interfaces

* [ClientProps](../interfaces/_clients_http_index_.clientprops.md)
* [RetryConfig](../interfaces/_clients_http_index_.retryconfig.md)

### Type aliases

* [HttpClient](_clients_http_index_.md#httpclient)
* [SendRawRequestValues](_clients_http_index_.md#sendrawrequestvalues)

### Functions

* [buildRawRequestAction](_clients_http_index_.md#const-buildrawrequestaction)
* [computeRetryDelay](_clients_http_index_.md#const-computeretrydelay)
* [createClient](_clients_http_index_.md#const-createclient)
* [handleErrors](_clients_http_index_.md#const-handleerrors)
* [sendRawRequest](_clients_http_index_.md#const-sendrawrequest)
* [toAuthorizationHeaders](_clients_http_index_.md#const-toauthorizationheaders)
* [toAxiosRetryConfig](_clients_http_index_.md#const-toaxiosretryconfig)
* [toFormData](_clients_http_index_.md#const-toformdata)

## Type aliases

###  HttpClient

Ƭ **HttpClient**: *AxiosInstance*

*Defined in [packages/spectral/src/clients/http/index.ts:13](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L13)*

___

###  SendRawRequestValues

Ƭ **SendRawRequestValues**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹typeof inputs›*

*Defined in [packages/spectral/src/clients/http/index.ts:178](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L178)*

## Functions

### `Const` buildRawRequestAction

▸ **buildRawRequestAction**(`baseUrl`: string, `label`: string, `description`: string): *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹object, object, boolean, object›*

*Defined in [packages/spectral/src/clients/http/index.ts:220](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L220)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`baseUrl` | string | - |
`label` | string | "Raw Request" |
`description` | string | "Issue a raw HTTP request" |

**Returns:** *[ActionDefinition](../interfaces/_types_actiondefinition_.actiondefinition.md)‹object, object, boolean, object›*

___

### `Const` computeRetryDelay

▸ **computeRetryDelay**(`retryDelay`: RetryConfig["retryDelay"], `useExponentialBackoff`: RetryConfig["useExponentialBackoff"]): *IAxiosRetryConfig["retryDelay"]*

*Defined in [packages/spectral/src/clients/http/index.ts:71](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`retryDelay` | RetryConfig["retryDelay"] |
`useExponentialBackoff` | RetryConfig["useExponentialBackoff"] |

**Returns:** *IAxiosRetryConfig["retryDelay"]*

___

### `Const` createClient

▸ **createClient**(`__namedParameters`: object): *[HttpClient](_clients_http_index_.md#httpclient)*

*Defined in [packages/spectral/src/clients/http/index.ts:93](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L93)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`baseUrl` | undefined &#124; string | - |
`debug` | boolean | false |
`headers` | undefined &#124; AxiosHeaders‹› &#124; object & object | - |
`params` | undefined &#124; object | - |
`responseType` | undefined &#124; "text" &#124; "json" &#124; "arraybuffer" &#124; "blob" &#124; "document" &#124; "stream" | - |
`retryConfig` | undefined &#124; [RetryConfig](../interfaces/_clients_http_index_.retryconfig.md)‹› | - |
`timeout` | undefined &#124; number | - |

**Returns:** *[HttpClient](_clients_http_index_.md#httpclient)*

___

### `Const` handleErrors

▸ **handleErrors**(`error`: unknown): *unknown*

*Defined in [packages/spectral/src/clients/http/index.ts:167](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | unknown |

**Returns:** *unknown*

___

### `Const` sendRawRequest

▸ **sendRawRequest**(`baseUrl`: string, `values`: [SendRawRequestValues](_clients_http_index_.md#sendrawrequestvalues), `authorizationHeaders`: Record‹string, string›): *Promise‹AxiosResponse›*

*Defined in [packages/spectral/src/clients/http/index.ts:180](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L180)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`baseUrl` | string | - |
`values` | [SendRawRequestValues](_clients_http_index_.md#sendrawrequestvalues) | - |
`authorizationHeaders` | Record‹string, string› | {} |

**Returns:** *Promise‹AxiosResponse›*

___

### `Const` toAuthorizationHeaders

▸ **toAuthorizationHeaders**(`connection`: [Connection](../interfaces/_types_inputs_.connection.md)): *object*

*Defined in [packages/spectral/src/clients/http/index.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`connection` | [Connection](../interfaces/_types_inputs_.connection.md) |

**Returns:** *object*

* **Authorization**: *string*

___

### `Const` toAxiosRetryConfig

▸ **toAxiosRetryConfig**(`__namedParameters`: object): *IAxiosRetryConfig*

*Defined in [packages/spectral/src/clients/http/index.ts:81](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L81)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`rest` | rest |
`retryAllErrors` | undefined &#124; false &#124; true |
`retryCondition` | undefined &#124; function |
`retryDelay` | undefined &#124; number &#124; function |
`useExponentialBackoff` | undefined &#124; false &#124; true |

**Returns:** *IAxiosRetryConfig*

___

### `Const` toFormData

▸ **toFormData**(`formData`: [KeyValuePair](../interfaces/_types_inputs_.keyvaluepair.md)‹unknown›[], `fileData`: [KeyValuePair](../interfaces/_types_inputs_.keyvaluepair.md)‹unknown›[], `fileDataFileNames`: Record‹string, string›): *FormData*

*Defined in [packages/spectral/src/clients/http/index.ts:40](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/clients/http/index.ts#L40)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`formData` | [KeyValuePair](../interfaces/_types_inputs_.keyvaluepair.md)‹unknown›[] | - |
`fileData` | [KeyValuePair](../interfaces/_types_inputs_.keyvaluepair.md)‹unknown›[] | - |
`fileDataFileNames` | Record‹string, string› | {} |

**Returns:** *FormData*
