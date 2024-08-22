---
id: "_types_connectiondefinition_"
title: "types/ConnectionDefinition"
sidebar_label: "types/ConnectionDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/ConnectionDefinition"](_types_connectiondefinition_.md)

## Index

### Enumerations

* [OAuth2PkceMethod](../enums/_types_connectiondefinition_.oauth2pkcemethod.md)
* [OAuth2Type](../enums/_types_connectiondefinition_.oauth2type.md)

### Interfaces

* [BaseConnectionDefinition](../interfaces/_types_connectiondefinition_.baseconnectiondefinition.md)
* [DefaultConnectionDefinition](../interfaces/_types_connectiondefinition_.defaultconnectiondefinition.md)
* [OAuth2AuthorizationCodeConnectionDefinition](../interfaces/_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md)
* [OAuth2ClientCredentialConnectionDefinition](../interfaces/_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md)
* [OnPremiseConnectionDefinition](../interfaces/_types_connectiondefinition_.onpremiseconnectiondefinition.md)

### Type aliases

* [ConnectionDefinition](_types_connectiondefinition_.md#connectiondefinition)
* [OAuth2ConnectionDefinition](_types_connectiondefinition_.md#oauth2connectiondefinition)
* [OnPremiseConnectionInput](_types_connectiondefinition_.md#onpremiseconnectioninput)

## Type aliases

###  ConnectionDefinition

Ƭ **ConnectionDefinition**: *[DefaultConnectionDefinition](../interfaces/_types_connectiondefinition_.defaultconnectiondefinition.md) | [OnPremiseConnectionDefinition](../interfaces/_types_connectiondefinition_.onpremiseconnectiondefinition.md) | [OAuth2ConnectionDefinition](_types_connectiondefinition_.md#oauth2connectiondefinition)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:69](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L69)*

___

###  OAuth2ConnectionDefinition

Ƭ **OAuth2ConnectionDefinition**: *[OAuth2AuthorizationCodeConnectionDefinition](../interfaces/_types_connectiondefinition_.oauth2authorizationcodeconnectiondefinition.md) | [OAuth2ClientCredentialConnectionDefinition](../interfaces/_types_connectiondefinition_.oauth2clientcredentialconnectiondefinition.md)*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:65](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L65)*

___

###  OnPremiseConnectionInput

Ƭ **OnPremiseConnectionInput**: *[ConnectionInput](_types_inputs_.md#connectioninput) & object*

*Defined in [packages/spectral/src/types/ConnectionDefinition.ts:27](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ConnectionDefinition.ts#L27)*
