---
id: "_errors_.connectionerror"
title: "ConnectionError"
sidebar_label: "ConnectionError"
---

[@prismatic-io/spectral](../index.md) › ["errors"](../modules/_errors_.md) › [ConnectionError](_errors_.connectionerror.md)

## Hierarchy

  ↳ [SpectralError](_errors_.spectralerror.md)

  ↳ **ConnectionError**

## Index

### Constructors

* [constructor](_errors_.connectionerror.md#constructor)

### Properties

* [connection](_errors_.connectionerror.md#connection)
* [isSpectralError](_errors_.connectionerror.md#isspectralerror)
* [message](_errors_.connectionerror.md#message)
* [name](_errors_.connectionerror.md#name)
* [stack](_errors_.connectionerror.md#optional-stack)

## Constructors

###  constructor

\+ **new ConnectionError**(`connection`: [Connection](../interfaces/_types_inputs_.connection.md), `message`: string): *[ConnectionError](_errors_.connectionerror.md)*

*Overrides [SpectralError](_errors_.spectralerror.md).[constructor](_errors_.spectralerror.md#constructor)*

*Defined in [packages/spectral/src/errors.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/errors.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`connection` | [Connection](../interfaces/_types_inputs_.connection.md) |
`message` | string |

**Returns:** *[ConnectionError](_errors_.connectionerror.md)*

## Properties

###  connection

• **connection**: *[Connection](../interfaces/_types_inputs_.connection.md)*

*Defined in [packages/spectral/src/errors.ts:15](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/errors.ts#L15)*

___

###  isSpectralError

• **isSpectralError**: *boolean*

*Inherited from [SpectralError](_errors_.spectralerror.md).[isSpectralError](_errors_.spectralerror.md#isspectralerror)*

*Defined in [packages/spectral/src/errors.ts:4](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/errors.ts#L4)*

___

###  message

• **message**: *string*

*Inherited from [SpectralError](_errors_.spectralerror.md).[message](_errors_.spectralerror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1023

___

###  name

• **name**: *string*

*Inherited from [SpectralError](_errors_.spectralerror.md).[name](_errors_.spectralerror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1022

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [SpectralError](_errors_.spectralerror.md).[stack](_errors_.spectralerror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1024
