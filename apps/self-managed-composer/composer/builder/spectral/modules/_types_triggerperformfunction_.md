---
id: "_types_triggerperformfunction_"
title: "types/TriggerPerformFunction"
sidebar_label: "types/TriggerPerformFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerPerformFunction"](_types_triggerperformfunction_.md)

## Index

### Type aliases

* [TriggerPerformFunction](_types_triggerperformfunction_.md#triggerperformfunction)

## Type aliases

###  TriggerPerformFunction

Ƭ **TriggerPerformFunction**: *function*

*Defined in [packages/spectral/src/types/TriggerPerformFunction.ts:11](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerPerformFunction.ts#L11)*

Definition of the function to perform when a Trigger is invoked.

#### Type declaration:

▸ (`context`: [ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›, `payload`: [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md), `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars› |
`payload` | [TriggerPayload](../interfaces/_types_triggerpayload_.triggerpayload.md) |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs› |
