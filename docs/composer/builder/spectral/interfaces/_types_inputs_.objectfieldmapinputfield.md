---
id: "_types_inputs_.objectfieldmapinputfield"
title: "ObjectFieldMapInputField"
sidebar_label: "ObjectFieldMapInputField"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [ObjectFieldMapInputField](_types_inputs_.objectfieldmapinputfield.md)

Defines attributes of an ObjectFieldMapInputField.

## Hierarchy

* [BaseInputField](_types_inputs_.baseinputfield.md)

  ↳ **ObjectFieldMapInputField**

## Index

### Properties

* [clean](_types_inputs_.objectfieldmapinputfield.md#optional-clean)
* [collection](_types_inputs_.objectfieldmapinputfield.md#optional-collection)
* [comments](_types_inputs_.objectfieldmapinputfield.md#optional-comments)
* [default](_types_inputs_.objectfieldmapinputfield.md#optional-default)
* [example](_types_inputs_.objectfieldmapinputfield.md#optional-example)
* [label](_types_inputs_.objectfieldmapinputfield.md#label)
* [placeholder](_types_inputs_.objectfieldmapinputfield.md#optional-placeholder)
* [required](_types_inputs_.objectfieldmapinputfield.md#optional-required)
* [type](_types_inputs_.objectfieldmapinputfield.md#type)

## Properties

### `Optional` clean

• **clean**? : *[InputCleanFunction](../modules/_types_inputs_.md#inputcleanfunction)‹this["default"]›*

*Defined in [packages/spectral/src/types/Inputs.ts:293](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L293)*

Clean function

___

### `Optional` collection

• **collection**? : *[InputFieldCollection](../modules/_types_inputs_.md#inputfieldcollection)*

*Defined in [packages/spectral/src/types/Inputs.ts:289](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L289)*

Collection type of the InputField

___

### `Optional` comments

• **comments**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[comments](_types_inputs_.baseinputfield.md#optional-comments)*

*Defined in [packages/spectral/src/types/Inputs.ts:125](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L125)*

Additional text to give guidance to the user configuring the InputField.

___

### `Optional` default

• **default**? : *[ObjectFieldMap](../modules/_types_inputs_.md#objectfieldmap)*

*Defined in [packages/spectral/src/types/Inputs.ts:291](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L291)*

Default value for this field.

___

### `Optional` example

• **example**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[example](_types_inputs_.baseinputfield.md#optional-example)*

*Defined in [packages/spectral/src/types/Inputs.ts:127](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L127)*

Example valid input for this InputField.

___

###  label

• **label**: *object | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[label](_types_inputs_.baseinputfield.md#label)*

*Defined in [packages/spectral/src/types/Inputs.ts:121](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L121)*

Interface label of the InputField.

___

### `Optional` placeholder

• **placeholder**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[placeholder](_types_inputs_.baseinputfield.md#optional-placeholder)*

*Defined in [packages/spectral/src/types/Inputs.ts:123](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L123)*

Text to show as the InputField placeholder.

___

### `Optional` required

• **required**? : *undefined | false | true*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[required](_types_inputs_.baseinputfield.md#optional-required)*

*Defined in [packages/spectral/src/types/Inputs.ts:129](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L129)*

Indicate if this InputField is required.

___

###  type

• **type**: *"objectFieldMap"*

*Defined in [packages/spectral/src/types/Inputs.ts:287](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L287)*

Data type the InputField will collect.
