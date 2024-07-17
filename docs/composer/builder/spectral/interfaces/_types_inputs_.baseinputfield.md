---
id: "_types_inputs_.baseinputfield"
title: "BaseInputField"
sidebar_label: "BaseInputField"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [BaseInputField](_types_inputs_.baseinputfield.md)

## Hierarchy

* **BaseInputField**

  ↳ [ConditionalInputField](_types_inputs_.conditionalinputfield.md)

  ↳ [ConnectionInputField](_types_inputs_.connectioninputfield.md)

  ↳ [ObjectSelectionInputField](_types_inputs_.objectselectioninputfield.md)

  ↳ [ObjectFieldMapInputField](_types_inputs_.objectfieldmapinputfield.md)

  ↳ [JSONFormInputField](_types_inputs_.jsonforminputfield.md)

  ↳ [DynamicObjectSelectionInputField](_types_inputs_.dynamicobjectselectioninputfield.md)

  ↳ [DynamicFieldSelectionInputField](_types_inputs_.dynamicfieldselectioninputfield.md)

## Index

### Properties

* [comments](_types_inputs_.baseinputfield.md#optional-comments)
* [example](_types_inputs_.baseinputfield.md#optional-example)
* [label](_types_inputs_.baseinputfield.md#label)
* [placeholder](_types_inputs_.baseinputfield.md#optional-placeholder)
* [required](_types_inputs_.baseinputfield.md#optional-required)

## Properties

### `Optional` comments

• **comments**? : *undefined | string*

*Defined in [packages/spectral/src/types/Inputs.ts:125](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L125)*

Additional text to give guidance to the user configuring the InputField.

___

### `Optional` example

• **example**? : *undefined | string*

*Defined in [packages/spectral/src/types/Inputs.ts:127](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L127)*

Example valid input for this InputField.

___

###  label

• **label**: *object | string*

*Defined in [packages/spectral/src/types/Inputs.ts:121](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L121)*

Interface label of the InputField.

___

### `Optional` placeholder

• **placeholder**? : *undefined | string*

*Defined in [packages/spectral/src/types/Inputs.ts:123](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L123)*

Text to show as the InputField placeholder.

___

### `Optional` required

• **required**? : *undefined | false | true*

*Defined in [packages/spectral/src/types/Inputs.ts:129](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L129)*

Indicate if this InputField is required.
