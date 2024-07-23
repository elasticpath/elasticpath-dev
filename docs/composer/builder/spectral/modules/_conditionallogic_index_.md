---
id: "_conditionallogic_index_"
title: "conditionalLogic/index"
sidebar_label: "conditionalLogic/index"
---

[@prismatic-io/spectral](../index.md) › ["conditionalLogic/index"](_conditionallogic_index_.md)

## Index

### Type aliases

* [ValidationResult](_conditionallogic_index_.md#validationresult)

### Functions

* [contains](_conditionallogic_index_.md#const-contains)
* [evaluate](_conditionallogic_index_.md#const-evaluate)
* [isEqual](_conditionallogic_index_.md#const-isequal)
* [parseDate](_conditionallogic_index_.md#const-parsedate)
* [parseValue](_conditionallogic_index_.md#const-parsevalue)
* [validate](_conditionallogic_index_.md#const-validate)

## Type aliases

###  ValidationResult

Ƭ **ValidationResult**: *[] | []*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:20](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L20)*

## Functions

### `Const` contains

▸ **contains**(`container`: unknown, `containee`: unknown): *boolean*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:66](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`container` | unknown |
`containee` | unknown |

**Returns:** *boolean*

___

### `Const` evaluate

▸ **evaluate**(`expression`: [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression)): *boolean*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:126](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression) |

**Returns:** *boolean*

___

### `Const` isEqual

▸ **isEqual**(`left`: unknown, `right`: unknown): *boolean*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:112](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | unknown |
`right` | unknown |

**Returns:** *boolean*

___

### `Const` parseDate

▸ **parseDate**(`value`: unknown): *Date*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:85](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *Date*

___

### `Const` parseValue

▸ **parseValue**(`value`: unknown): *any*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:58](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L58)*

Convert stringified objects/values back to their native value, all other
 values just pass through unaltered.

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *any*

___

### `Const` validate

▸ **validate**(`expression`: [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression)): *[ValidationResult](_conditionallogic_index_.md#validationresult)*

*Defined in [packages/spectral/src/conditionalLogic/index.ts:22](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/index.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`expression` | [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression) |

**Returns:** *[ValidationResult](_conditionallogic_index_.md#validationresult)*
