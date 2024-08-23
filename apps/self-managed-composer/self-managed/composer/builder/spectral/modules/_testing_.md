---
id: "_testing_"
title: "testing"
sidebar_label: "testing"
---

[@prismatic-io/spectral](../index.md) › ["testing"](_testing_.md)

## Index

### Classes

* [ComponentTestHarness](../classes/_testing_.componenttestharness.md)

### Interfaces

* [InvokeReturn](../interfaces/_testing_.invokereturn.md)

### Type aliases

* [TestConfigVarValues](_testing_.md#testconfigvarvalues)
* [TestConnectionValue](_testing_.md#testconnectionvalue)
* [ToTestValues](_testing_.md#totestvalues)

### Variables

* [defaultConnectionValueEnvironmentVariable](_testing_.md#const-defaultconnectionvalueenvironmentvariable)

### Functions

* [connectionValue](_testing_.md#const-connectionvalue)
* [createActionContext](_testing_.md#const-createactioncontext)
* [createConfigVars](_testing_.md#const-createconfigvars)
* [createConnection](_testing_.md#const-createconnection)
* [createDataSourceContext](_testing_.md#const-createdatasourcecontext)
* [createHarness](_testing_.md#const-createharness)
* [defaultTriggerPayload](_testing_.md#const-defaulttriggerpayload)
* [invoke](_testing_.md#const-invoke)
* [invokeDataSource](_testing_.md#const-invokedatasource)
* [invokeFlow](_testing_.md#const-invokeflow)
* [invokeTrigger](_testing_.md#const-invoketrigger)
* [loggerMock](_testing_.md#const-loggermock)

## Type aliases

###  TestConfigVarValues

Ƭ **TestConfigVarValues**: *Record‹string, string | [TestConnectionValue](_testing_.md#testconnectionvalue)›*

*Defined in [packages/spectral/src/testing.ts:307](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L307)*

___

###  TestConnectionValue

Ƭ **TestConnectionValue**: *Pick‹[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md), "fields" | "context" | "token"›*

*Defined in [packages/spectral/src/testing.ts:302](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L302)*

___

###  ToTestValues

Ƭ **ToTestValues**: *object*

*Defined in [packages/spectral/src/testing.ts:309](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L309)*

#### Type declaration:

## Variables

### `Const` defaultConnectionValueEnvironmentVariable

• **defaultConnectionValueEnvironmentVariable**: *"PRISMATIC_CONNECTION_VALUE"* = "PRISMATIC_CONNECTION_VALUE"

*Defined in [packages/spectral/src/testing.ts:52](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L52)*

## Functions

### `Const` connectionValue

▸ **connectionValue**(`envVarKey`: string): *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

*Defined in [packages/spectral/src/testing.ts:55](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L55)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`envVarKey` | string | defaultConnectionValueEnvironmentVariable |

**Returns:** *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

___

### `Const` createActionContext

▸ **createActionContext**‹**TConfigVars**›(`context?`: Partial‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars››): *[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›*

*Defined in [packages/spectral/src/testing.ts:83](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L83)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | Partial‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›› |

**Returns:** *[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›*

___

### `Const` createConfigVars

▸ **createConfigVars**‹**TConfigVarValues**›(`values?`: TConfigVarValues): *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

*Defined in [packages/spectral/src/testing.ts:314](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L314)*

**Type parameters:**

▪ **TConfigVarValues**: *[TestConfigVarValues](_testing_.md#testconfigvarvalues)*

**Parameters:**

Name | Type |
------ | ------ |
`values?` | TConfigVarValues |

**Returns:** *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

___

### `Const` createConnection

▸ **createConnection**‹**T**›(`__namedParameters`: object, `values`: Record‹string, unknown›, `tokenValues?`: Record‹string, unknown›): *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

*Defined in [packages/spectral/src/testing.ts:41](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L41)*

**Type parameters:**

▪ **T**: *[ConnectionDefinition](_types_connectiondefinition_.md#connectiondefinition)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`key` | string |

▪ **values**: *Record‹string, unknown›*

▪`Optional`  **tokenValues**: *Record‹string, unknown›*

**Returns:** *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

___

### `Const` createDataSourceContext

▸ **createDataSourceContext**‹**TConfigVars**›(`context?`: Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars››): *[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars›*

*Defined in [packages/spectral/src/testing.ts:132](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L132)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars›› |

**Returns:** *[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars›*

___

### `Const` createHarness

▸ **createHarness**‹**TComponent**›(`component`: TComponent): *[ComponentTestHarness](../classes/_testing_.componenttestharness.md)‹TComponent›*

*Defined in [packages/spectral/src/testing.ts:495](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L495)*

**Type parameters:**

▪ **TComponent**: *[Component](../interfaces/_servertypes_index_.component.md)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | TComponent |

**Returns:** *[ComponentTestHarness](../classes/_testing_.componenttestharness.md)‹TComponent›*

___

### `Const` defaultTriggerPayload

▸ **defaultTriggerPayload**(): *[TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)*

*Defined in [packages/spectral/src/testing.ts:192](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L192)*

**Returns:** *[TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)*

___

### `Const` invoke

▸ **invoke**‹**TInputs**, **TConfigVars**, **TAllowsBranching**, **TReturn**›(`__namedParameters`: object, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›, `context?`: Partial‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars››): *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TReturn››*

*Defined in [packages/spectral/src/testing.ts:171](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L171)*

Invokes specified ActionDefinition perform function using supplied params
and optional context. Accepts a generic type matching ActionPerformReturn as a convenience
to avoid extra casting within test methods. Returns an InvokeResult containing both the
action result and a mock logger for asserting logging.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TAllowsBranching**: *boolean*

▪ **TReturn**: *InvokeActionPerformReturn‹TAllowsBranching, unknown›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`perform` | function |

▪ **params**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›*

▪`Optional`  **context**: *Partial‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars››*

**Returns:** *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TReturn››*

___

### `Const` invokeDataSource

▸ **invokeDataSource**‹**TInputs**, **TConfigVars**, **TDataSourceType**›(`__namedParameters`: object, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›, `context?`: Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars››): *Promise‹InvokeDataSourceResult‹TDataSourceType››*

*Defined in [packages/spectral/src/testing.ts:287](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L287)*

Invokes specified DataSourceDefinition perform function using supplied params.
Accepts a generic type matching DataSourceResult as a convenience to avoid extra
casting within test methods. Returns a DataSourceResult.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TDataSourceType**: *[DataSourceType](_types_datasourceresult_.md#datasourcetype)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`perform` | function |

▪ **params**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›*

▪`Optional`  **context**: *Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars››*

**Returns:** *Promise‹InvokeDataSourceResult‹TDataSourceType››*

___

### `Const` invokeFlow

▸ **invokeFlow**‹**TConfigPages**, **TConfigVars**, **TConfigVarValues**›(`flow`: [Flow](../interfaces/_types_integrationdefinition_.flow.md)‹TConfigPages, [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any››, `__namedParameters`: object): *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹InvokeActionPerformReturn‹false, unknown›››*

*Defined in [packages/spectral/src/testing.ts:341](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L341)*

Invokes specified Flow of a Code Native Integration using supplied params.
Runs the Trigger and then the Action function and returns the result of the Action.

**Type parameters:**

▪ **TConfigPages**: *[ConfigPages](_types_integrationdefinition_.md#configpages)‹any›*

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TConfigVarValues**: *[TestConfigVarValues](_testing_.md#testconfigvarvalues)*

**Parameters:**

▪ **flow**: *[Flow](../interfaces/_types_integrationdefinition_.flow.md)‹TConfigPages, [ComponentSelector](../interfaces/_types_integrationdefinition_.componentselector.md)‹any››*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`configVars` | undefined &#124; TConfigVarValues |
`context` | undefined &#124; object |
`payload` | undefined &#124; object |

**Returns:** *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹InvokeActionPerformReturn‹false, unknown›››*

___

### `Const` invokeTrigger

▸ **invokeTrigger**‹**TInputs**, **TConfigVars**, **TAllowsBranching**, **TResult**›(`__namedParameters`: object, `context?`: Partial‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars››, `payload?`: [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md), `params?`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TResult››*

*Defined in [packages/spectral/src/testing.ts:253](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L253)*

Invokes specified TriggerDefinition perform function using supplied params
and optional context. Accepts a generic type matching TriggerResult as a convenience
to avoid extra casting within test methods. Returns an InvokeResult containing both the
trigger result and a mock logger for asserting logging.

**Type parameters:**

▪ **TInputs**: *[Inputs](_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)*

▪ **TAllowsBranching**: *boolean*

▪ **TResult**: *InvokeTriggerResult‹TAllowsBranching, [TriggerPayload](../interfaces/_servertypes_index_.triggerpayload.md)›*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`perform` | function |

▪`Optional`  **context**: *Partial‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars››*

▪`Optional`  **payload**: *[TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md)*

▪`Optional`  **params**: *[ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›*

**Returns:** *Promise‹[InvokeReturn](../interfaces/_testing_.invokereturn.md)‹TResult››*

___

### `Const` loggerMock

▸ **loggerMock**(): *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)*

*Defined in [packages/spectral/src/testing.ts:73](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L73)*

Pre-built mock of ActionLogger. Suitable for asserting logs are created as expected.
See https://prismatic.io/docs/custom-components/writing-custom-components/#verifying-correct-logging-in-action-tests for information on testing correct logging behavior in your custom component.

**Returns:** *[ActionLogger](../interfaces/_servertypes_index_.actionlogger.md)*
