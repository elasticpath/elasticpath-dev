---
id: "_servertypes_index_"
title: "serverTypes/index"
sidebar_label: "serverTypes/index"
---

[@prismatic-io/spectral](../index.md) › ["serverTypes/index"](_servertypes_index_.md)

## Index

### Enumerations

* [OAuth2Type](../enums/_servertypes_index_.oauth2type.md)

### Interfaces

* [Action](../interfaces/_servertypes_index_.action.md)
* [ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)
* [Component](../interfaces/_servertypes_index_.component.md)
* [Connection](../interfaces/_servertypes_index_.connection.md)
* [ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)
* [DataSource](../interfaces/_servertypes_index_.datasource.md)
* [DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)
* [DisplayDefinition](../interfaces/_servertypes_index_.displaydefinition.md)
* [HttpResponse](../interfaces/_servertypes_index_.httpresponse.md)
* [Input](../interfaces/_servertypes_index_.input.md)
* [InputFieldChoice](../interfaces/_servertypes_index_.inputfieldchoice.md)
* [ServerPerformBranchingDataReturn](../interfaces/_servertypes_index_.serverperformbranchingdatareturn.md)
* [ServerPerformBranchingDataStructureReturn](../interfaces/_servertypes_index_.serverperformbranchingdatastructurereturn.md)
* [ServerPerformDataReturn](../interfaces/_servertypes_index_.serverperformdatareturn.md)
* [ServerPerformDataStructureReturn](../interfaces/_servertypes_index_.serverperformdatastructurereturn.md)
* [Trigger](../interfaces/_servertypes_index_.trigger.md)
* [TriggerBaseResult](../interfaces/_servertypes_index_.triggerbaseresult.md)
* [TriggerBranchingResult](../interfaces/_servertypes_index_.triggerbranchingresult.md)
* [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)

### Type aliases

* [ActionContext](_servertypes_index_.md#actioncontext)
* [ActionLoggerFunction](_servertypes_index_.md#actionloggerfunction)
* [ActionPerformFunction](_servertypes_index_.md#actionperformfunction)
* [ActionPerformReturn](_servertypes_index_.md#actionperformreturn)
* [DataSourcePerformFunction](_servertypes_index_.md#datasourceperformfunction)
* [DataSourceResult](_servertypes_index_.md#datasourceresult)
* [TriggerEventFunction](_servertypes_index_.md#triggereventfunction)
* [TriggerEventFunctionResult](_servertypes_index_.md#triggereventfunctionresult)
* [TriggerOptionChoice](_servertypes_index_.md#triggeroptionchoice)
* [TriggerPerformFunction](_servertypes_index_.md#triggerperformfunction)
* [TriggerResult](_servertypes_index_.md#triggerresult)

## Type aliases

###  ActionContext

Ƭ **ActionContext**: *object*

*Defined in [packages/spectral/src/serverTypes/index.ts:61](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L61)*

#### Type declaration:

* **configVars**: *TConfigVars*

* **crossFlowState**: *Record‹string, unknown›*

* **customer**: *[CustomerAttributes](../interfaces/_types_customerattributes_.customerattributes.md)*

* **executionId**: *string*

* **executionState**: *Record‹string, unknown›*

* **flow**: *[FlowAttributes](../interfaces/_types_flowattributes_.flowattributes.md)*

* **instance**: *[InstanceAttributes](../interfaces/_types_instanceattributes_.instanceattributes.md)*

* **instanceState**: *Record‹string, unknown›*

* **integration**: *[IntegrationAttributes](../interfaces/_types_integrationattributes_.integrationattributes.md)*

* **integrationState**: *Record‹string, unknown›*

* **invokeUrl**: *string*

* **logger**: *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)*

* **startedAt**: *string*

* **stepId**: *string*

* **user**: *[UserAttributes](../interfaces/_types_userattributes_.userattributes.md)*

* **webhookApiKeys**: *Record‹string, string[]›*

* **webhookUrls**: *Record‹string, string›*

___

###  ActionLoggerFunction

Ƭ **ActionLoggerFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:49](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L49)*

#### Type declaration:

▸ (...`args`: unknown[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

___

###  ActionPerformFunction

Ƭ **ActionPerformFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:266](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L266)*

#### Type declaration:

▸ (`context`: [ActionContext](_servertypes_index_.md#actioncontext), `params`: Record‹string, unknown›): *Promise‹[ActionPerformReturn](_servertypes_index_.md#actionperformreturn)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](_servertypes_index_.md#actioncontext) |
`params` | Record‹string, unknown› |

___

###  ActionPerformReturn

Ƭ **ActionPerformReturn**: *[ServerPerformDataStructureReturn](../interfaces/_servertypes_index_.serverperformdatastructurereturn.md) | [ServerPerformBranchingDataStructureReturn](../interfaces/_servertypes_index_.serverperformbranchingdatastructurereturn.md) | [ServerPerformDataReturn](../interfaces/_servertypes_index_.serverperformdatareturn.md) | [ServerPerformBranchingDataReturn](../interfaces/_servertypes_index_.serverperformbranchingdatareturn.md) | undefined*

*Defined in [packages/spectral/src/serverTypes/index.ts:259](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L259)*

___

###  DataSourcePerformFunction

Ƭ **DataSourcePerformFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:184](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L184)*

#### Type declaration:

▸ (`context`: [DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md), `params`: Record‹string, unknown›): *Promise‹[DataSourceResult](_servertypes_index_.md#datasourceresult)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md) |
`params` | Record‹string, unknown› |

___

###  DataSourceResult

Ƭ **DataSourceResult**: *object*

*Defined in [packages/spectral/src/serverTypes/index.ts:179](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L179)*

#### Type declaration:

* **result**: *[DataSourceResultType](_types_datasourceresult_.md#datasourceresulttype)*

* **supplementalData**? : *undefined | object*

___

###  TriggerEventFunction

Ƭ **TriggerEventFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:144](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L144)*

#### Type declaration:

▸ (`context`: [ActionContext](_servertypes_index_.md#actioncontext), `params`: Record‹string, unknown›): *Promise‹[TriggerEventFunctionResult](_servertypes_index_.md#triggereventfunctionresult)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](_servertypes_index_.md#actioncontext) |
`params` | Record‹string, unknown› |

___

###  TriggerEventFunctionResult

Ƭ **TriggerEventFunctionResult**: *[TriggerEventFunctionReturn](_types_triggereventfunction_.md#triggereventfunctionreturn) | void*

*Defined in [packages/spectral/src/serverTypes/index.ts:142](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L142)*

___

###  TriggerOptionChoice

Ƭ **TriggerOptionChoice**: *"invalid" | "valid" | "required"*

*Defined in [packages/spectral/src/serverTypes/index.ts:83](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L83)*

___

###  TriggerPerformFunction

Ƭ **TriggerPerformFunction**: *function*

*Defined in [packages/spectral/src/serverTypes/index.ts:136](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L136)*

#### Type declaration:

▸ (`context`: [ActionContext](_servertypes_index_.md#actioncontext), `payload`: [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md), `params`: Record‹string, unknown›): *Promise‹[TriggerResult](_servertypes_index_.md#triggerresult)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](_servertypes_index_.md#actioncontext) |
`payload` | [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md) |
`params` | Record‹string, unknown› |

___

###  TriggerResult

Ƭ **TriggerResult**: *[TriggerBranchingResult](../interfaces/_servertypes_index_.triggerbranchingresult.md) | [TriggerBaseResult](../interfaces/_servertypes_index_.triggerbaseresult.md) | undefined*

*Defined in [packages/spectral/src/serverTypes/index.ts:131](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L131)*
