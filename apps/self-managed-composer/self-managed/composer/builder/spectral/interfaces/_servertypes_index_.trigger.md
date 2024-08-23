---
id: "_servertypes_index_.trigger"
title: "Trigger"
sidebar_label: "Trigger"
---

[@prismatic-io/spectral](../index.md) › ["serverTypes/index"](../modules/_servertypes_index_.md) › [Trigger](_servertypes_index_.trigger.md)

## Hierarchy

* **Trigger**

## Index

### Properties

* [allowsBranching](_servertypes_index_.trigger.md#optional-allowsbranching)
* [breakLoop](_servertypes_index_.trigger.md#optional-breakloop)
* [display](_servertypes_index_.trigger.md#display)
* [dynamicBranchInput](_servertypes_index_.trigger.md#optional-dynamicbranchinput)
* [examplePayload](_servertypes_index_.trigger.md#optional-examplepayload)
* [hasOnInstanceDelete](_servertypes_index_.trigger.md#optional-hasoninstancedelete)
* [hasOnInstanceDeploy](_servertypes_index_.trigger.md#optional-hasoninstancedeploy)
* [inputs](_servertypes_index_.trigger.md#inputs)
* [isCommonTrigger](_servertypes_index_.trigger.md#optional-iscommontrigger)
* [key](_servertypes_index_.trigger.md#key)
* [onInstanceDelete](_servertypes_index_.trigger.md#optional-oninstancedelete)
* [onInstanceDeploy](_servertypes_index_.trigger.md#optional-oninstancedeploy)
* [perform](_servertypes_index_.trigger.md#perform)
* [scheduleSupport](_servertypes_index_.trigger.md#schedulesupport)
* [staticBranchNames](_servertypes_index_.trigger.md#optional-staticbranchnames)
* [synchronousResponseSupport](_servertypes_index_.trigger.md#synchronousresponsesupport)
* [terminateExecution](_servertypes_index_.trigger.md#optional-terminateexecution)

## Properties

### `Optional` allowsBranching

• **allowsBranching**? : *undefined | false | true*

*Defined in [packages/spectral/src/serverTypes/index.ts:155](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L155)*

___

### `Optional` breakLoop

• **breakLoop**? : *undefined | false | true*

*Defined in [packages/spectral/src/serverTypes/index.ts:154](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L154)*

___

###  display

• **display**: *[DisplayDefinition](_types_displaydefinition_.displaydefinition.md) & object*

*Defined in [packages/spectral/src/serverTypes/index.ts:151](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L151)*

___

### `Optional` dynamicBranchInput

• **dynamicBranchInput**? : *undefined | string*

*Defined in [packages/spectral/src/serverTypes/index.ts:157](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L157)*

___

### `Optional` examplePayload

• **examplePayload**? : *unknown*

*Defined in [packages/spectral/src/serverTypes/index.ts:165](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L165)*

___

### `Optional` hasOnInstanceDelete

• **hasOnInstanceDelete**? : *undefined | false | true*

*Defined in [packages/spectral/src/serverTypes/index.ts:162](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L162)*

___

### `Optional` hasOnInstanceDeploy

• **hasOnInstanceDeploy**? : *undefined | false | true*

*Defined in [packages/spectral/src/serverTypes/index.ts:160](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L160)*

___

###  inputs

• **inputs**: *[Input](_servertypes_index_.input.md)[]*

*Defined in [packages/spectral/src/serverTypes/index.ts:152](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L152)*

___

### `Optional` isCommonTrigger

• **isCommonTrigger**? : *undefined | false | true*

*Defined in [packages/spectral/src/serverTypes/index.ts:166](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L166)*

___

###  key

• **key**: *string*

*Defined in [packages/spectral/src/serverTypes/index.ts:150](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L150)*

___

### `Optional` onInstanceDelete

• **onInstanceDelete**? : *[TriggerEventFunction](../modules/_servertypes_index_.md#triggereventfunction)*

*Defined in [packages/spectral/src/serverTypes/index.ts:161](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L161)*

___

### `Optional` onInstanceDeploy

• **onInstanceDeploy**? : *[TriggerEventFunction](../modules/_servertypes_index_.md#triggereventfunction)*

*Defined in [packages/spectral/src/serverTypes/index.ts:159](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L159)*

___

###  perform

• **perform**: *[TriggerPerformFunction](../modules/_servertypes_index_.md#triggerperformfunction)*

*Defined in [packages/spectral/src/serverTypes/index.ts:158](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L158)*

___

###  scheduleSupport

• **scheduleSupport**: *[TriggerOptionChoice](../modules/_servertypes_index_.md#triggeroptionchoice)*

*Defined in [packages/spectral/src/serverTypes/index.ts:163](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L163)*

___

### `Optional` staticBranchNames

• **staticBranchNames**? : *string[]*

*Defined in [packages/spectral/src/serverTypes/index.ts:156](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L156)*

___

###  synchronousResponseSupport

• **synchronousResponseSupport**: *[TriggerOptionChoice](../modules/_servertypes_index_.md#triggeroptionchoice)*

*Defined in [packages/spectral/src/serverTypes/index.ts:164](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L164)*

___

### `Optional` terminateExecution

• **terminateExecution**? : *undefined | false | true*

*Defined in [packages/spectral/src/serverTypes/index.ts:153](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/index.ts#L153)*
