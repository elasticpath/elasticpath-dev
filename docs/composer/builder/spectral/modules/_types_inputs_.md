---
id: "_types_inputs_"
title: "types/Inputs"
sidebar_label: "types/Inputs"
---

[@prismatic-io/spectral](../index.md) › ["types/Inputs"](_types_inputs_.md)

## Index

### Interfaces

* [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md)
* [ConditionalInputField](../interfaces/_types_inputs_.conditionalinputfield.md)
* [Connection](../interfaces/_types_inputs_.connection.md)
* [ConnectionInputField](../interfaces/_types_inputs_.connectioninputfield.md)
* [DynamicFieldSelectionInputField](../interfaces/_types_inputs_.dynamicfieldselectioninputfield.md)
* [DynamicObjectSelectionInputField](../interfaces/_types_inputs_.dynamicobjectselectioninputfield.md)
* [InputFieldChoice](../interfaces/_types_inputs_.inputfieldchoice.md)
* [JSONFormInputField](../interfaces/_types_inputs_.jsonforminputfield.md)
* [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)
* [KeyValuePair](../interfaces/_types_inputs_.keyvaluepair.md)
* [ObjectFieldMapInputField](../interfaces/_types_inputs_.objectfieldmapinputfield.md)
* [ObjectSelectionInputField](../interfaces/_types_inputs_.objectselectioninputfield.md)
* [SingleValue](../interfaces/_types_inputs_.singlevalue.md)
* [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)

### Type aliases

* [BooleanInputField](_types_inputs_.md#booleaninputfield)
* [CodeInputField](_types_inputs_.md#codeinputfield)
* [CollectionOptions](_types_inputs_.md#collectionoptions)
* [ConfigVarResultCollection](_types_inputs_.md#configvarresultcollection)
* [ConnectionInput](_types_inputs_.md#connectioninput)
* [DataInputField](_types_inputs_.md#datainputfield)
* [DynamicFieldSelection](_types_inputs_.md#dynamicfieldselection)
* [DynamicObjectSelection](_types_inputs_.md#dynamicobjectselection)
* [Element](_types_inputs_.md#element)
* [InputCleanFunction](_types_inputs_.md#inputcleanfunction)
* [InputFieldCollection](_types_inputs_.md#inputfieldcollection)
* [InputFieldDefinition](_types_inputs_.md#inputfielddefinition)
* [InputFieldType](_types_inputs_.md#inputfieldtype)
* [Inputs](_types_inputs_.md#inputs)
* [JSONForm](_types_inputs_.md#jsonform)
* [ObjectFieldMap](_types_inputs_.md#objectfieldmap)
* [ObjectSelection](_types_inputs_.md#objectselection)
* [PasswordInputField](_types_inputs_.md#passwordinputfield)
* [Schedule](_types_inputs_.md#schedule)
* [StringInputField](_types_inputs_.md#stringinputfield)
* [TextInputField](_types_inputs_.md#textinputfield)

### Object literals

* [InputFieldDefaultMap](_types_inputs_.md#const-inputfielddefaultmap)

## Type aliases

###  BooleanInputField

Ƭ **BooleanInputField**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [CollectionOptions](_types_inputs_.md#collectionoptions)‹string› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:198](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L198)*

___

###  CodeInputField

Ƭ **CodeInputField**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [CollectionOptions](_types_inputs_.md#collectionoptions)‹string› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:209](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L209)*

Defines attributes of a CodeInputField.

___

###  CollectionOptions

Ƭ **CollectionOptions**: *[SingleValue](../interfaces/_types_inputs_.singlevalue.md)‹T› | [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)‹T› | [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)‹T›*

*Defined in [packages/spectral/src/types/Inputs.ts:132](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L132)*

___

###  ConfigVarResultCollection

Ƭ **ConfigVarResultCollection**: *Record‹string, string | [Schedule](_types_inputs_.md#schedule) | [Connection](../interfaces/_types_inputs_.connection.md) | [JSONForm](_types_inputs_.md#jsonform) | [ObjectSelection](_types_inputs_.md#objectselection) | [ObjectFieldMap](_types_inputs_.md#objectfieldmap)›*

*Defined in [packages/spectral/src/types/Inputs.ts:344](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L344)*

Config variable result collection

___

###  ConnectionInput

Ƭ **ConnectionInput**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [SingleValue](../interfaces/_types_inputs_.singlevalue.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [SingleValue](../interfaces/_types_inputs_.singlevalue.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [SingleValue](../interfaces/_types_inputs_.singlevalue.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [SingleValue](../interfaces/_types_inputs_.singlevalue.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [SingleValue](../interfaces/_types_inputs_.singlevalue.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [ValueListCollection](../interfaces/_types_inputs_.valuelistcollection.md)‹string› & object | [BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [KeyValueListCollection](../interfaces/_types_inputs_.keyvaluelistcollection.md)‹string› & object & object*

*Defined in [packages/spectral/src/types/Inputs.ts:92](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L92)*

___

###  DataInputField

Ƭ **DataInputField**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [CollectionOptions](_types_inputs_.md#collectionoptions)‹string› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:168](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L168)*

___

###  DynamicFieldSelection

Ƭ **DynamicFieldSelection**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:70](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L70)*

___

###  DynamicObjectSelection

Ƭ **DynamicObjectSelection**: *string*

*Defined in [packages/spectral/src/types/Inputs.ts:68](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L68)*

___

###  Element

Ƭ **Element**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:18](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L18)*

#### Type declaration:

* **key**: *string*

* **label**? : *undefined | string*

___

###  InputCleanFunction

Ƭ **InputCleanFunction**: *function*

*Defined in [packages/spectral/src/types/Inputs.ts:115](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L115)*

#### Type declaration:

▸ (`value`: TValue): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TValue |

___

###  InputFieldCollection

Ƭ **InputFieldCollection**: *"valuelist" | "keyvaluelist"*

*Defined in [packages/spectral/src/types/Inputs.ts:341](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L341)*

InputField collection enumeration

___

###  InputFieldDefinition

Ƭ **InputFieldDefinition**: *[StringInputField](_types_inputs_.md#stringinputfield) | [DataInputField](_types_inputs_.md#datainputfield) | [TextInputField](_types_inputs_.md#textinputfield) | [PasswordInputField](_types_inputs_.md#passwordinputfield) | [BooleanInputField](_types_inputs_.md#booleaninputfield) | [CodeInputField](_types_inputs_.md#codeinputfield) | [ConditionalInputField](../interfaces/_types_inputs_.conditionalinputfield.md) | [ConnectionInputField](../interfaces/_types_inputs_.connectioninputfield.md) | [ObjectSelectionInputField](../interfaces/_types_inputs_.objectselectioninputfield.md) | [ObjectFieldMapInputField](../interfaces/_types_inputs_.objectfieldmapinputfield.md) | [JSONFormInputField](../interfaces/_types_inputs_.jsonforminputfield.md) | [DynamicObjectSelectionInputField](../interfaces/_types_inputs_.dynamicobjectselectioninputfield.md) | [DynamicFieldSelectionInputField](../interfaces/_types_inputs_.dynamicfieldselectioninputfield.md)*

*Defined in [packages/spectral/src/types/Inputs.ts:100](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L100)*

___

###  InputFieldType

Ƭ **InputFieldType**: *InputFieldDefinition["type"]*

*Defined in [packages/spectral/src/types/Inputs.ts:73](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L73)*

InputField type enumeration.

___

###  Inputs

Ƭ **Inputs**: *Record‹string, [InputFieldDefinition](_types_inputs_.md#inputfielddefinition)›*

*Defined in [packages/spectral/src/types/Inputs.ts:91](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L91)*

___

###  JSONForm

Ƭ **JSONForm**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:49](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L49)*

#### Type declaration:

* **data**? : *Record‹string, unknown›*

* **schema**: *JsonSchema*

* **uiSchema**: *UISchemaElement*

___

###  ObjectFieldMap

Ƭ **ObjectFieldMap**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:29](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L29)*

#### Type declaration:

* **fields**: *object[]*

* **options**? : *object[]*

___

###  ObjectSelection

Ƭ **ObjectSelection**: *object[]*

*Defined in [packages/spectral/src/types/Inputs.ts:23](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L23)*

___

###  PasswordInputField

Ƭ **PasswordInputField**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [CollectionOptions](_types_inputs_.md#collectionoptions)‹string› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:188](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L188)*

___

###  Schedule

Ƭ **Schedule**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:43](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L43)*

#### Type declaration:

* **schedule_type**: *string*

* **time_zone**: *string*

* **value**: *string*

___

###  StringInputField

Ƭ **StringInputField**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [CollectionOptions](_types_inputs_.md#collectionoptions)‹string› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:158](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L158)*

___

###  TextInputField

Ƭ **TextInputField**: *[BaseInputField](../interfaces/_types_inputs_.baseinputfield.md) & [CollectionOptions](_types_inputs_.md#collectionoptions)‹string› & object*

*Defined in [packages/spectral/src/types/Inputs.ts:178](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L178)*

## Object literals

### `Const` InputFieldDefaultMap

### ▪ **InputFieldDefaultMap**: *object*

*Defined in [packages/spectral/src/types/Inputs.ts:74](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L74)*

###  boolean

• **boolean**: *string* = "false"

*Defined in [packages/spectral/src/types/Inputs.ts:80](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L80)*

###  code

• **code**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:81](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L81)*

###  conditional

• **conditional**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:82](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L82)*

###  connection

• **connection**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:83](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L83)*

###  data

• **data**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:77](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L77)*

###  dynamicFieldSelection

• **dynamicFieldSelection**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:88](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L88)*

###  dynamicObjectSelection

• **dynamicObjectSelection**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:87](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L87)*

###  jsonForm

• **jsonForm**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:86](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L86)*

###  objectFieldMap

• **objectFieldMap**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:85](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L85)*

###  objectSelection

• **objectSelection**: *undefined* = undefined

*Defined in [packages/spectral/src/types/Inputs.ts:84](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L84)*

###  password

• **password**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:79](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L79)*

###  string

• **string**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:76](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L76)*

###  text

• **text**: *string* = ""

*Defined in [packages/spectral/src/types/Inputs.ts:78](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/Inputs.ts#L78)*
