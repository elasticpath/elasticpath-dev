---
id: "_types_triggerdefinition_.triggerdefinition"
title: "TriggerDefinition"
sidebar_label: "TriggerDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/TriggerDefinition"](../modules/_types_triggerdefinition_.md) › [TriggerDefinition](_types_triggerdefinition_.triggerdefinition.md)

TriggerDefinition is the type of the object that is passed in to `trigger` function to
define a component trigger.

## Type parameters

▪ **TInputs**: *[Inputs](../modules/_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

▪ **TAllowsBranching**: *boolean*

▪ **TResult**: *[TriggerResult](../modules/_types_triggerresult_.md#triggerresult)‹TAllowsBranching, [TriggerPayload](_types_triggerpayload_.triggerpayload.md)›*

## Hierarchy

* **TriggerDefinition**

## Index

### Properties

* [allowsBranching](_types_triggerdefinition_.triggerdefinition.md#optional-allowsbranching)
* [breakLoop](_types_triggerdefinition_.triggerdefinition.md#optional-breakloop)
* [display](_types_triggerdefinition_.triggerdefinition.md#display)
* [dynamicBranchInput](_types_triggerdefinition_.triggerdefinition.md#optional-dynamicbranchinput)
* [examplePayload](_types_triggerdefinition_.triggerdefinition.md#optional-examplepayload)
* [inputs](_types_triggerdefinition_.triggerdefinition.md#inputs)
* [isCommonTrigger](_types_triggerdefinition_.triggerdefinition.md#optional-iscommontrigger)
* [onInstanceDelete](_types_triggerdefinition_.triggerdefinition.md#optional-oninstancedelete)
* [onInstanceDeploy](_types_triggerdefinition_.triggerdefinition.md#optional-oninstancedeploy)
* [perform](_types_triggerdefinition_.triggerdefinition.md#perform)
* [scheduleSupport](_types_triggerdefinition_.triggerdefinition.md#schedulesupport)
* [staticBranchNames](_types_triggerdefinition_.triggerdefinition.md#optional-staticbranchnames)
* [synchronousResponseSupport](_types_triggerdefinition_.triggerdefinition.md#synchronousresponsesupport)
* [terminateExecution](_types_triggerdefinition_.triggerdefinition.md#optional-terminateexecution)

## Properties

### `Optional` allowsBranching

• **allowsBranching**? : *TAllowsBranching*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:51](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L51)*

Determines whether this Trigger allows Conditional Branching.

___

### `Optional` breakLoop

• **breakLoop**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:49](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L49)*

Specifies whether an Action will break out of a loop.

___

###  display

• **display**: *[ActionDisplayDefinition](_types_displaydefinition_.actiondisplaydefinition.md)*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:28](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L28)*

Defines how the Trigger is displayed in the Builder interface.

___

### `Optional` dynamicBranchInput

• **dynamicBranchInput**? : *undefined | string*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:55](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L55)*

The Input associated with Dynamic Branching.

___

### `Optional` examplePayload

• **examplePayload**? : *Awaited‹ReturnType‹this["perform"]››*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:57](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L57)*

An example of the payload outputted by this Trigger.

___

###  inputs

• **inputs**: *TInputs*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:41](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L41)*

InputFields to present in the Builder interface for configuration of this Trigger.

___

### `Optional` isCommonTrigger

• **isCommonTrigger**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:59](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L59)*

Specifies if this Trigger appears in the list of 'common' Triggers. Only configurable by Builder. @default false

___

### `Optional` onInstanceDelete

• **onInstanceDelete**? : *[TriggerEventFunction](../modules/_types_triggereventfunction_.md#triggereventfunction)‹TInputs, TConfigVars›*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:39](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L39)*

Function to execute when an Instance of an Integration with a Flow that uses this Trigger is deleted.

___

### `Optional` onInstanceDeploy

• **onInstanceDeploy**? : *[TriggerEventFunction](../modules/_types_triggereventfunction_.md#triggereventfunction)‹TInputs, TConfigVars›*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:37](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L37)*

Function to execute when an Instance of an Integration with a Flow that uses this Trigger is deployed.

___

###  perform

• **perform**: *[TriggerPerformFunction](../modules/_types_triggerperformfunction_.md#triggerperformfunction)‹TInputs, TConfigVars, TAllowsBranching, TResult›*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:30](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L30)*

Function to perform when this Trigger is invoked.

___

###  scheduleSupport

• **scheduleSupport**: *[TriggerOptionChoice](../modules/_types_triggerdefinition_.md#triggeroptionchoice)*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:43](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L43)*

Specifies whether this Trigger supports executing the Integration on a recurring schedule.

___

### `Optional` staticBranchNames

• **staticBranchNames**? : *string[]*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:53](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L53)*

Static Branch names associated with this Trigger.

___

###  synchronousResponseSupport

• **synchronousResponseSupport**: *[TriggerOptionChoice](../modules/_types_triggerdefinition_.md#triggeroptionchoice)*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:45](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L45)*

Specifies whether this Trigger supports synchronous responses to an Integration webhook request.

___

### `Optional` terminateExecution

• **terminateExecution**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/TriggerDefinition.ts:47](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/TriggerDefinition.ts#L47)*

Optional attribute that specifies whether this Trigger will terminate execution.
