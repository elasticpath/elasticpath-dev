---
id: "_types_triggereventfunction_"
title: "types/TriggerEventFunction"
sidebar_label: "types/TriggerEventFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerEventFunction"](_types_triggereventfunction_.md)

## Index

### Type aliases

* [TriggerEventFunction](_types_triggereventfunction_.md#triggereventfunction)
* [TriggerEventFunctionReturn](_types_triggereventfunction_.md#triggereventfunctionreturn)

## Type aliases

###  TriggerEventFunction

Ƭ **TriggerEventFunction**: *function*

*Defined in [packages/spectral/src/types/TriggerEventFunction.ts:20](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerEventFunction.ts#L20)*

Definition of the function to execute when a Trigger Event occurs.

#### Type declaration:

▸ (`context`: [ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹void | [TriggerEventFunctionReturn](_types_triggereventfunction_.md#triggereventfunctionreturn)›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars› |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs› |

___

###  TriggerEventFunctionReturn

Ƭ **TriggerEventFunctionReturn**: *object*

*Defined in [packages/spectral/src/types/TriggerEventFunction.ts:8](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerEventFunction.ts#L8)*

#### Type declaration:

* **crossFlowState**? : *Record‹string, unknown›*

* **executionState**? : *Record‹string, unknown›*

* **instanceState**? : *Record‹string, unknown›*

* **integrationState**? : *Record‹string, unknown›*
