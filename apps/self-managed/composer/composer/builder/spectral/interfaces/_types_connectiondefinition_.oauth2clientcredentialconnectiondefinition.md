---
id: "_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition"
title: "OAuth2ClientCredentialConnectionDefinition"
sidebar_label: "OAuth2ClientCredentialConnectionDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/ConnectionDefinition"](../modules/_types_connectiondefinition_.md) › [OAuth2ClientCredentialConnectionDefinition](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md)

## Hierarchy

* [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md)

  ↳ **OAuth2ClientCredentialConnectionDefinition**

## Index

### Properties

* [comments](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md#optional-comments)
* [iconPath](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md#optional-iconpath)
* [inputs](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md#inputs)
* [key](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md#key)
* [label](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md#label)
* [oauth2Type](_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md#oauth2type)

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

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:56](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L56)*

#### Type declaration:

* \[ **key**: *string*\]: [ConnectionInput](../modules/_types_inputs_.md#connectioninput)

* **clientId**: *[ConnectionInput](../modules/_types_inputs_.md#connectioninput)*

* **clientSecret**: *[ConnectionInput](../modules/_types_inputs_.md#connectioninput)*

* **scopes**: *[ConnectionInput](../modules/_types_inputs_.md#connectioninput)*

* **tokenUrl**: *[ConnectionInput](../modules/_types_inputs_.md#connectioninput)*

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

###  oauth2Type

• **oauth2Type**: *[ClientCredentials](../enums/_types_connectiondefinition_.oauth2type.md#clientcredentials)*

*Overrides [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[oauth2Type](_types_connectiondefinition_.baseconnectiondefinition.md#optional-oauth2type)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:55](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L55)*
