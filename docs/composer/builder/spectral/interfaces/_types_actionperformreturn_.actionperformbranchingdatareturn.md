---
id: "_types_actionperformreturn_.actionperformbranchingdatareturn"
title: "ActionPerformBranchingDataReturn"
sidebar_label: "ActionPerformBranchingDataReturn"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionPerformReturn"](../modules/_types_actionperformreturn_.md) › [ActionPerformBranchingDataReturn](_types_actionperformreturn_.actionperformbranchingdatareturn.md)

Used to represent a binary or serialized data branching return as content type must be specified

## Type parameters

▪ **ReturnData**

## Hierarchy

* [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md)‹ReturnData›

  ↳ **ActionPerformBranchingDataReturn**

## Index

### Properties

* [branch](_types_actionperformreturn_.actionperformbranchingdatareturn.md#branch)
* [contentType](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-contenttype)
* [crossFlowState](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-crossflowstate)
* [data](_types_actionperformreturn_.actionperformbranchingdatareturn.md#data)
* [error](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-error)
* [executionState](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-executionstate)
* [failed](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-failed)
* [instanceState](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-instancestate)
* [integrationState](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-integrationstate)
* [statusCode](_types_actionperformreturn_.actionperformbranchingdatareturn.md#optional-statuscode)

## Properties

###  branch

• **branch**: *string*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:29](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L29)*

Name of the Branch to take.

___

### `Optional` contentType

• **contentType**? : *undefined | string*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[contentType](_types_actionperformreturn_.actionperformdatareturn.md#optional-contenttype)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:6](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L6)*

The Content Type of the payload data

___

### `Optional` crossFlowState

• **crossFlowState**? : *Record‹string, unknown›*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[crossFlowState](_types_actionperformreturn_.actionperformdatareturn.md#optional-crossflowstate)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:12](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L12)*

An optional object, the keys and values of which will be persisted in the crossFlowState and available in any flow for subsequent actions and executions

___

###  data

• **data**: *ReturnData*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[data](_types_actionperformreturn_.actionperformdatareturn.md#data)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:4](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L4)*

Data payload containing data of the specified contentType

___

### `Optional` error

• **error**? : *Record‹string, unknown›*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[error](_types_actionperformreturn_.actionperformdatareturn.md#optional-error)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:20](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L20)*

A field populated by the Builder platform which may refer to an object that contains data about any error that resulted in failure.

___

### `Optional` executionState

• **executionState**? : *Record‹string, unknown›*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[executionState](_types_actionperformreturn_.actionperformdatareturn.md#optional-executionstate)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:14](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L14)*

An optional object, the keys and values of which will be persisted in the executionState and available for the duration of the execution

___

### `Optional` failed

• **failed**? : *undefined | false | true*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[failed](_types_actionperformreturn_.actionperformdatareturn.md#optional-failed)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:18](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L18)*

A field populated by the Builder platform which indicates whether the action failed with an error during execution.

___

### `Optional` instanceState

• **instanceState**? : *Record‹string, unknown›*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[instanceState](_types_actionperformreturn_.actionperformdatareturn.md#optional-instancestate)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:10](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L10)*

An optional object, the keys and values of which will be persisted in the flow-specific instanceState and available for subsequent actions and executions

___

### `Optional` integrationState

• **integrationState**? : *Record‹string, unknown›*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[integrationState](_types_actionperformreturn_.actionperformdatareturn.md#optional-integrationstate)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:16](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L16)*

An optional object, the keys and values of which will be persisted in the integrationState and available in any flow of an Instance for any version of an Integration for subsequent actions and executions

___

### `Optional` statusCode

• **statusCode**? : *undefined | number*

*Inherited from [ActionPerformDataReturn](_types_actionperformreturn_.actionperformdatareturn.md).[statusCode](_types_actionperformreturn_.actionperformdatareturn.md#optional-statuscode)*

*Defined in [packages/spectral/src/types/ActionPerformReturn.ts:8](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionPerformReturn.ts#L8)*

The HTTP Status code that will be used if this terminates a synchronous invocation
