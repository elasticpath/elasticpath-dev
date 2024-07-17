---
id: "_servertypes_perform_"
title: "serverTypes/perform"
sidebar_label: "serverTypes/perform"
---

[@prismatic-io/spectral](../index.md) › ["serverTypes/perform"](_servertypes_perform_.md)

## Index

### Interfaces

* [CreatePerformProps](../interfaces/_servertypes_perform_.createperformprops.md)

### Type aliases

* [CleanFn](_servertypes_perform_.md#cleanfn)
* [InputCleaners](_servertypes_perform_.md#inputcleaners)
* [PerformFn](_servertypes_perform_.md#performfn)

### Functions

* [cleanParams](_servertypes_perform_.md#const-cleanparams)
* [createPerform](_servertypes_perform_.md#const-createperform)

## Type aliases

###  CleanFn

Ƭ **CleanFn**: *function*

*Defined in [packages/spectral/src/serverTypes/perform.ts:4](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/perform.ts#L4)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  InputCleaners

Ƭ **InputCleaners**: *Record‹string, [CleanFn](_servertypes_perform_.md#cleanfn) | undefined›*

*Defined in [packages/spectral/src/serverTypes/perform.ts:6](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/perform.ts#L6)*

___

###  PerformFn

Ƭ **PerformFn**: *function*

*Defined in [packages/spectral/src/serverTypes/perform.ts:3](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/perform.ts#L3)*

#### Type declaration:

▸ (...`args`: any[]): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

## Functions

### `Const` cleanParams

▸ **cleanParams**(`params`: Record‹string, unknown›, `cleaners`: [InputCleaners](_servertypes_perform_.md#inputcleaners)): *Record‹string, any›*

*Defined in [packages/spectral/src/serverTypes/perform.ts:13](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/perform.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | Record‹string, unknown› |
`cleaners` | [InputCleaners](_servertypes_perform_.md#inputcleaners) |

**Returns:** *Record‹string, any›*

___

### `Const` createPerform

▸ **createPerform**(`performFn`: [PerformFn](_servertypes_perform_.md#performfn), `__namedParameters`: object): *[PerformFn](_servertypes_perform_.md#performfn)*

*Defined in [packages/spectral/src/serverTypes/perform.ts:22](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/serverTypes/perform.ts#L22)*

**Parameters:**

▪ **performFn**: *[PerformFn](_servertypes_perform_.md#performfn)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`errorHandler` | undefined &#124; function |
`inputCleaners` | object |

**Returns:** *[PerformFn](_servertypes_perform_.md#performfn)*
