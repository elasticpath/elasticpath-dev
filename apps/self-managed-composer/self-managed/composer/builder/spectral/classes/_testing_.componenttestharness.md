---
id: "_testing_.componenttestharness"
title: "ComponentTestHarness"
sidebar_label: "ComponentTestHarness"
---

[@prismatic-io/spectral](../index.md) › ["testing"](../modules/_testing_.md) › [ComponentTestHarness](_testing_.componenttestharness.md)

## Type parameters

▪ **TComponent**: *[Component](../interfaces/_servertypes_index_.component.md)*

## Hierarchy

* **ComponentTestHarness**

## Index

### Constructors

* [constructor](_testing_.componenttestharness.md#constructor)

### Properties

* [component](_testing_.componenttestharness.md#component)

### Methods

* [action](_testing_.componenttestharness.md#action)
* [buildParams](_testing_.componenttestharness.md#private-buildparams)
* [connectionValue](_testing_.componenttestharness.md#connectionvalue)
* [dataSource](_testing_.componenttestharness.md#datasource)
* [trigger](_testing_.componenttestharness.md#trigger)
* [triggerOnInstanceDelete](_testing_.componenttestharness.md#triggeroninstancedelete)
* [triggerOnInstanceDeploy](_testing_.componenttestharness.md#triggeroninstancedeploy)

## Constructors

###  constructor

\+ **new ComponentTestHarness**(`component`: TComponent): *[ComponentTestHarness](_testing_.componenttestharness.md)*

*Defined in [packages/spectral/src/testing.ts:390](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L390)*

**Parameters:**

Name | Type |
------ | ------ |
`component` | TComponent |

**Returns:** *[ComponentTestHarness](_testing_.componenttestharness.md)*

## Properties

###  component

• **component**: *TComponent*

*Defined in [packages/spectral/src/testing.ts:390](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L390)*

## Methods

###  action

▸ **action**‹**TConfigVars**›(`key`: string, `params?`: Record‹string, unknown›, `context?`: Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars››): *Promise‹[ActionPerformReturn](../modules/_types_actionperformreturn_.md#actionperformreturn)›*

*Defined in [packages/spectral/src/testing.ts:470](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L470)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars›› |

**Returns:** *Promise‹[ActionPerformReturn](../modules/_types_actionperformreturn_.md#actionperformreturn)›*

___

### `Private` buildParams

▸ **buildParams**(`inputs`: [Input](../interfaces/_servertypes_index_.input.md)[], `params?`: Record‹string, unknown›): *Record‹string, unknown›*

*Defined in [packages/spectral/src/testing.ts:396](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L396)*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | [Input](../interfaces/_servertypes_index_.input.md)[] |
`params?` | Record‹string, unknown› |

**Returns:** *Record‹string, unknown›*

___

###  connectionValue

▸ **connectionValue**(`__namedParameters`: object): *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

*Defined in [packages/spectral/src/testing.ts:410](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L410)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[ConnectionValue](../interfaces/_servertypes_index_.connectionvalue.md)*

___

###  dataSource

▸ **dataSource**‹**TConfigVars**›(`key`: string, `params?`: Record‹string, unknown›, `context?`: Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars››): *Promise‹[DataSourceResult](../modules/_types_datasourceresult_.md#datasourceresult)›*

*Defined in [packages/spectral/src/testing.ts:482](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L482)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[DataSourceContext](../interfaces/_servertypes_index_.datasourcecontext.md)‹TConfigVars›› |

**Returns:** *Promise‹[DataSourceResult](../modules/_types_datasourceresult_.md#datasourceresult)›*

___

###  trigger

▸ **trigger**‹**TConfigVars**›(`key`: string, `payload?`: [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md), `params?`: Record‹string, unknown›, `context?`: Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars››): *Promise‹[TriggerResult](../modules/_types_triggerresult_.md#triggerresult)›*

*Defined in [packages/spectral/src/testing.ts:422](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L422)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`payload?` | [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md) |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars›› |

**Returns:** *Promise‹[TriggerResult](../modules/_types_triggerresult_.md#triggerresult)›*

___

###  triggerOnInstanceDelete

▸ **triggerOnInstanceDelete**‹**TConfigVars**›(`key`: string, `params?`: Record‹string, unknown›, `context?`: Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars››): *Promise‹void | [TriggerEventFunctionReturn](../modules/_types_triggereventfunction_.md#triggereventfunctionreturn)›*

*Defined in [packages/spectral/src/testing.ts:453](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L453)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars›› |

**Returns:** *Promise‹void | [TriggerEventFunctionReturn](../modules/_types_triggereventfunction_.md#triggereventfunctionreturn)›*

___

###  triggerOnInstanceDeploy

▸ **triggerOnInstanceDeploy**‹**TConfigVars**›(`key`: string, `params?`: Record‹string, unknown›, `context?`: Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars››): *Promise‹void | [TriggerEventFunctionReturn](../modules/_types_triggereventfunction_.md#triggereventfunctionreturn)›*

*Defined in [packages/spectral/src/testing.ts:436](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/testing.ts#L436)*

**Type parameters:**

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`params?` | Record‹string, unknown› |
`context?` | Partial‹[ActionContext](../modules/_types_actionperformfunction_.md#actioncontext)‹TConfigVars›› |

**Returns:** *Promise‹void | [TriggerEventFunctionReturn](../modules/_types_triggereventfunction_.md#triggereventfunctionreturn)›*
