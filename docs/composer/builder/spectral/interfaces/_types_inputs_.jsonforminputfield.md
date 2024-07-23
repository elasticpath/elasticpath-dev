---
id: "_types_inputs_.jsonforminputfield"
title: "JSONFormInputField"
sidebar_label: "JSONFormInputField"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](../modules/_types_inputs_.md) › [JSONFormInputField](_types_inputs_.jsonforminputfield.md)

Defines attributes of a JSONFormInputField.

## Hierarchy

* [BaseInputField](_types_inputs_.baseinputfield.md)

  ↳ **JSONFormInputField**

## Index

### Properties

* [clean](_types_inputs_.jsonforminputfield.md#optional-clean)
* [collection](_types_inputs_.jsonforminputfield.md#optional-collection)
* [comments](_types_inputs_.jsonforminputfield.md#optional-comments)
* [default](_types_inputs_.jsonforminputfield.md#optional-default)
* [example](_types_inputs_.jsonforminputfield.md#optional-example)
* [label](_types_inputs_.jsonforminputfield.md#label)
* [placeholder](_types_inputs_.jsonforminputfield.md#optional-placeholder)
* [required](_types_inputs_.jsonforminputfield.md#optional-required)
* [type](_types_inputs_.jsonforminputfield.md#type)

## Properties

### `Optional` clean

• **clean**? : *[InputCleanFunction](../modules/_types_inputs_.md#inputcleanfunction)‹this["default"]›*

*Defined in [packages/spectral/src/types/Inputs.ts:305](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L305)*

Clean function

___

### `Optional` collection

• **collection**? : *[InputFieldCollection](../modules/_types_inputs_.md#inputfieldcollection)*

*Defined in [packages/spectral/src/types/Inputs.ts:301](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L301)*

Collection type of the InputField

___

### `Optional` comments

• **comments**? : *undefined | string*

*Inherited from [BaseInputField](_types_inputs_.baseinputfield.md).[comments](_types_inputs_.baseinputfield.md#optional-comments)*

*Defined in [packages/spectral/src/types/Inputs.ts:125](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L125)*

Additional text to give guidance to the user configuring the InputField.

___

### `Optional` default

• **default**? : *[JSONForm](../modules/_types_inputs_.md#jsonform)*

*Defined in [packages/spectral/src/types/Inputs.ts:303](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L303)*

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

• **type**: *"jsonForm"*

*Defined in [packages/spectral/src/types/Inputs.ts:299](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L299)*

Data type the InputField will collect.
