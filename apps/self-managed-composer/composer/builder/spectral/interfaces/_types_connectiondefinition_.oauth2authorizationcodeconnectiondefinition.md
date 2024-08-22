---
id: "_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition"
title: "OAuth2AuthorizationCodeConnectionDefinition"
sidebar_label: "OAuth2AuthorizationCodeConnectionDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/ConnectionDefinition"](../modules/_types_connectiondefinition_.md) › [OAuth2AuthorizationCodeConnectionDefinition](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md)

## Hierarchy

* [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md)

  ↳ **OAuth2AuthorizationCodeConnectionDefinition**

## Index

### Properties

* [comments](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#optional-comments)
* [iconPath](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#optional-iconpath)
* [inputs](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#inputs)
* [key](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#key)
* [label](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#label)
* [oauth2PkceMethod](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#optional-oauth2pkcemethod)
* [oauth2Type](_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md#oauth2type)

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

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:43](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L43)*

#### Type declaration:

* \[ **key**: *string*\]: [ConnectionInput](../modules/_types_inputs_.md#connectioninput)

* **authorizeUrl**: *[ConnectionInput](../modules/_types_inputs_.md#connectioninput)*

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

### `Optional` oauth2PkceMethod

• **oauth2PkceMethod**? : *[OAuth2PkceMethod](../enums/_types_connectiondefinition_.oauth2pkcemethod.md)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:42](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L42)*

The PKCE method (S256 or plain) that this OAuth 2.0 connection uses (if any)

___

###  oauth2Type

• **oauth2Type**: *[AuthorizationCode](../enums/_types_connectiondefinition_.oauth2type.md#authorizationcode)*

*Overrides [BaseConnectionDefinition](_types_connectiondefinition_.baseconnectiondefinition.md).[oauth2Type](_types_connectiondefinition_.baseconnectiondefinition.md#optional-oauth2type)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:40](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L40)*
