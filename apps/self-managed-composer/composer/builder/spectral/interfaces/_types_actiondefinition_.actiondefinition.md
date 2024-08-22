---
id: "_types_actiondefinition_.actiondefinition"
title: "ActionDefinition"
sidebar_label: "ActionDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionDefinition"](../modules/_types_actiondefinition_.md) › [ActionDefinition](_types_actiondefinition_.actiondefinition.md)

ActionDefinition is the type of the object that is passed in to `action` function to
define a component action.

## Type parameters

▪ **TInputs**: *[Inputs](../modules/_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

▪ **TAllowsBranching**: *boolean*

▪ **TReturn**: *[ActionPerformReturn](../modules/_types_actionperformreturn_.md#actionperformreturn)‹TAllowsBranching, unknown›*

## Hierarchy

* **ActionDefinition**

## Index

### Properties

* [allowsBranching](_types_actiondefinition_.actiondefinition.md#optional-allowsbranching)
* [breakLoop](_types_actiondefinition_.actiondefinition.md#optional-breakloop)
* [display](_types_actiondefinition_.actiondefinition.md#display)
* [dynamicBranchInput](_types_actiondefinition_.actiondefinition.md#optional-dynamicbranchinput)
* [examplePayload](_types_actiondefinition_.actiondefinition.md#optional-examplepayload)
* [inputs](_types_actiondefinition_.actiondefinition.md#inputs)
* [perform](_types_actiondefinition_.actiondefinition.md#perform)
* [staticBranchNames](_types_actiondefinition_.actiondefinition.md#optional-staticbranchnames)
* [terminateExecution](_types_actiondefinition_.actiondefinition.md#optional-terminateexecution)

## Properties

### `Optional` allowsBranching

• **allowsBranching**? : *TAllowsBranching*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:38](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L38)*

Determines whether an Action will allow Conditional Branching.

___

### `Optional` breakLoop

• **breakLoop**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:36](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L36)*

Specifies whether an Action will break out of a loop.

___

###  display

• **display**: *[ActionDisplayDefinition](_types_displaydefinition_.actiondisplaydefinition.md)*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:23](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L23)*

Defines how the Action is displayed in the Builder interface.

___

### `Optional` dynamicBranchInput

• **dynamicBranchInput**? : *undefined | string*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:42](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L42)*

The Input associated with Dynamic Branching.

___

### `Optional` examplePayload

• **examplePayload**? : *Awaited‹ReturnType‹this["perform"]››*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:44](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L44)*

An example of the payload outputted by an Action

___

###  inputs

• **inputs**: *TInputs*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:32](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L32)*

InputFields to present in the Builder interface for configuration of this Action.

___

###  perform

• **perform**: *[ActionPerformFunction](../modules/_types_actionperformfunction_.md#actionperformfunction)‹TInputs, TConfigVars, TAllowsBranching, TReturn›*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:25](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L25)*

Function to perform when this Action is invoked.

___

### `Optional` staticBranchNames

• **staticBranchNames**? : *string[]*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:40](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L40)*

Static Branch names associated with an Action.

___

### `Optional` terminateExecution

• **terminateExecution**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/ActionDefinition.ts:34](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionDefinition.ts#L34)*

Optional attribute that specifies whether an Action will terminate execution.
