---
id: "_types_actionperformfunction_"
title: "types/ActionPerformFunction"
sidebar_label: "types/ActionPerformFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionPerformFunction"](_types_actionperformfunction_.md)

## Index

### Type aliases

* [ActionContext](_types_actionperformfunction_.md#actioncontext)
* [ActionPerformFunction](_types_actionperformfunction_.md#actionperformfunction)

## Type aliases

###  ActionContext

Ƭ **ActionContext**: *object*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:26](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformFunction.ts#L26)*

Context provided to perform method containing helpers and contextual data

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

* **logger**: *[ActionLogger](../interfaces/_types_actionlogger_.actionlogger.md)*

* **startedAt**: *string*

* **stepId**: *string*

* **user**: *[UserAttributes](../interfaces/_types_userattributes_.userattributes.md)*

* **webhookApiKeys**: *Record‹string, string[]›*

* **webhookUrls**: *Record‹string, string›*

___

###  ActionPerformFunction

Ƭ **ActionPerformFunction**: *function*

*Defined in [packages/spectral/src/types/ActionPerformFunction.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformFunction.ts#L15)*

Definition of the function to perform when an Action is invoked.

#### Type declaration:

▸ (`context`: [ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹TReturn›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars› |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs› |
