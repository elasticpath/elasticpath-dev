---
id: "_types_connectiondefinition_.onpremiseconnectiondefinition"
title: "OnPremiseConnectionDefinition"
sidebar_label: "OnPremiseConnectionDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/ConnectionDefinition"](../modules/_types_connectiondefinition_.md) › [OnPremiseConnectionDefinition](_types_connectiondefinition_.onpremiseconnectiondefinition.md)

## Hierarchy

* [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md)

  ↳ **OnPremiseConnectionDefinition**

## Index

### Properties

* [comments](_types_connectiondefinition_.onpremiseconnectiondefinition.md#optional-comments)
* [iconPath](_types_connectiondefinition_.onpremiseconnectiondefinition.md#optional-iconpath)
* [inputs](_types_connectiondefinition_.onpremiseconnectiondefinition.md#inputs)
* [key](_types_connectiondefinition_.onpremiseconnectiondefinition.md#key)
* [label](_types_connectiondefinition_.onpremiseconnectiondefinition.md#label)
* [oauth2Type](_types_connectiondefinition_.onpremiseconnectiondefinition.md#optional-oauth2type)

## Properties

### `Optional` comments

• **comments**? : *undefined | string*

*Inherited from [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[comments](_types_connectiondefinition_.baseconnectiondefinition.md#optional-comments)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:16](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L16)*

___

### `Optional` iconPath

• **iconPath**? : *undefined | string*

*Inherited from [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[iconPath](_types_connectiondefinition_.baseconnectiondefinition.md#optional-iconpath)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:17](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L17)*

___

###  inputs

• **inputs**: *object*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:31](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L31)*

#### Type declaration:

* \[ **key**: *string*\]: [ConnectionInput](../modules/_types_inputs_.md#connectioninput)

* **host**: *[OnPremiseConnectionInput](../modules/_types_connectiondefinition_.md#onpremiseconnectioninput)*

* **port**: *[OnPremiseConnectionInput](../modules/_types_connectiondefinition_.md#onpremiseconnectioninput)*

___

###  key

• **key**: *string*

*Inherited from [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[key](_types_connectiondefinition_.baseconnectiondefinition.md#key)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:14](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L14)*

___

###  label

• **label**: *string*

*Inherited from [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[label](_types_connectiondefinition_.baseconnectiondefinition.md#label)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L15)*

___

### `Optional` oauth2Type

• **oauth2Type**? : *[OAuth2Type](../enums/_types_connectiondefinition_.oauth2type.md)*

*Inherited from [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[oauth2Type](_types_connectiondefinition_.baseconnectiondefinition.md#optional-oauth2type)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:18](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L18)*
