---
id: "_types_triggerresult_.triggerbaseresult"
title: "TriggerBaseResult"
sidebar_label: "TriggerBaseResult"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerResult"](../modules/_types_triggerresult_.md) › [TriggerBaseResult](_types_triggerresult_.triggerbaseresult.md)

Represents the result of a Trigger action.

## Type parameters

▪ **TPayload**: *[TriggerPayload](_types_triggerpayload_.triggerpayload.md)*

## Hierarchy

* **TriggerBaseResult**

  ↳ [TriggerBranchingResult](_types_triggerresult_.triggerbranchingresult.md)

## Index

### Properties

* [crossFlowState](_types_triggerresult_.triggerbaseresult.md#optional-crossflowstate)
* [error](_types_triggerresult_.triggerbaseresult.md#optional-error)
* [executionState](_types_triggerresult_.triggerbaseresult.md#optional-executionstate)
* [failed](_types_triggerresult_.triggerbaseresult.md#optional-failed)
* [instanceState](_types_triggerresult_.triggerbaseresult.md#optional-instancestate)
* [integrationState](_types_triggerresult_.triggerbaseresult.md#optional-integrationstate)
* [payload](_types_triggerresult_.triggerbaseresult.md#payload)
* [response](_types_triggerresult_.triggerbaseresult.md#optional-response)

## Properties

### `Optional` crossFlowState

• **crossFlowState**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/TriggerResult.ts:13](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L13)*

An optional object, the keys and values of which will be persisted in the crossFlowState and available in any flow for subsequent actions and executions

___

### `Optional` error

• **error**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/TriggerResult.ts:21](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L21)*

A field populated by the Builder platform which may refer to an object that contains data about any error that resulted in failure.

___

### `Optional` executionState

• **executionState**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/TriggerResult.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L15)*

An optional object, the keys and values of which will be persisted in the executionState and available for the duration of the execution

___

### `Optional` failed

• **failed**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerResult.ts:19](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L19)*

A field populated by the Builder platform which indicates whether the trigger failed with an error during execution.

___

### `Optional` instanceState

• **instanceState**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/TriggerResult.ts:11](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L11)*

An optional object, the keys and values of which will be persisted in the flow-specific instanceState and available for subsequent actions and executions

___

### `Optional` integrationState

• **integrationState**? : *Record‹string, unknown›*

*Defined in [packages/spectral/src/types/TriggerResult.ts:17](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L17)*

An optional object, the keys and values of which will be persisted in the integrationState and available in any flow of an Instance for any version of an Integration for subsequent actions and executions

___

###  payload

• **payload**: *TPayload*

*Defined in [packages/spectral/src/types/TriggerResult.ts:7](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L7)*

The payload in the request that invoked the Integration, which is returned as a result for later use.

___

### `Optional` response

• **response**? : *[HttpResponse](_types_httpresponse_.httpresponse.md)*

*Defined in [packages/spectral/src/types/TriggerResult.ts:9](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerResult.ts#L9)*

Optional HTTP response to the request that invoked the integration.
