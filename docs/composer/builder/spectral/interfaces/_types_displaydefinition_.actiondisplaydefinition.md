---
id: "_types_displaydefinition_.actiondisplaydefinition"
title: "ActionDisplayDefinition"
sidebar_label: "ActionDisplayDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/DisplayDefinition"](../modules/_types_displaydefinition_.md) › [ActionDisplayDefinition](_types_displaydefinition_.actiondisplaydefinition.md)

Action-specific Display attributes.

## Hierarchy

* [DisplayDefinition](_types_displaydefinition_.displaydefinition.md)

  ↳ **ActionDisplayDefinition**

## Index

### Properties

* [description](_types_displaydefinition_.actiondisplaydefinition.md#description)
* [directions](_types_displaydefinition_.actiondisplaydefinition.md#optional-directions)
* [important](_types_displaydefinition_.actiondisplaydefinition.md#optional-important)
* [label](_types_displaydefinition_.actiondisplaydefinition.md#label)

## Properties

###  description

• **description**: *string*

*Inherited from [DisplayDefinition](_types_displaydefinition_.displaydefinition.md).[description](_types_displaydefinition_.displaydefinition.md#description)*

*Defined in [packages/spectral/src/types/DisplayDefinition.ts:10](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DisplayDefinition.ts#L10)*

Description to display to the user.

___

### `Optional` directions

• **directions**? : *undefined | string*

*Defined in [packages/spectral/src/types/DisplayDefinition.ts:36](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DisplayDefinition.ts#L36)*

Directions to help guide the user if additional configuration is required for this Action.

___

### `Optional` important

• **important**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/DisplayDefinition.ts:38](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DisplayDefinition.ts#L38)*

Indicate that this Action is important and/or commonly used from the parent Component. Should be enabled sparingly.

___

###  label

• **label**: *string*

*Inherited from [DisplayDefinition](_types_displaydefinition_.displaydefinition.md).[label](_types_displaydefinition_.displaydefinition.md#label)*

*Defined in [packages/spectral/src/types/DisplayDefinition.ts:8](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DisplayDefinition.ts#L8)*

Label/name to display.
