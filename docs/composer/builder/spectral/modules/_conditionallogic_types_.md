---
id: "_conditionallogic_types_"
title: "conditionalLogic/types"
sidebar_label: "conditionalLogic/types"
---

[@prismatic-io/spectral](../index.md) › ["conditionalLogic/types"](_conditionallogic_types_.md)

## Index

### Enumerations

* [BinaryOperator](../enums/_conditionallogic_types_.binaryoperator.md)
* [BooleanOperator](../enums/_conditionallogic_types_.booleanoperator.md)
* [UnaryOperator](../enums/_conditionallogic_types_.unaryoperator.md)

### Type aliases

* [BooleanExpression](_conditionallogic_types_.md#booleanexpression)
* [ConditionalExpression](_conditionallogic_types_.md#conditionalexpression)
* [Term](_conditionallogic_types_.md#term)
* [TermExpression](_conditionallogic_types_.md#termexpression)
* [TermOperator](_conditionallogic_types_.md#termoperator)

### Variables

* [BooleanOperatorPhrase](_conditionallogic_types_.md#const-booleanoperatorphrase)

### Object literals

* [BinaryOperatorPhrase](_conditionallogic_types_.md#const-binaryoperatorphrase)
* [TermOperatorPhrase](_conditionallogic_types_.md#const-termoperatorphrase)
* [UnaryOperatorPhrase](_conditionallogic_types_.md#const-unaryoperatorphrase)

## Type aliases

###  BooleanExpression

Ƭ **BooleanExpression**: *[]*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:76](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L76)*

___

###  ConditionalExpression

Ƭ **ConditionalExpression**: *[TermExpression](_conditionallogic_types_.md#termexpression) | [BooleanExpression](_conditionallogic_types_.md#booleanexpression)*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:81](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L81)*

___

###  Term

Ƭ **Term**: *unknown*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:73](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L73)*

___

###  TermExpression

Ƭ **TermExpression**: *[]*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:74](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L74)*

___

###  TermOperator

Ƭ **TermOperator**: *[UnaryOperator](../enums/_conditionallogic_types_.unaryoperator.md) | [BinaryOperator](../enums/_conditionallogic_types_.binaryoperator.md)*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:68](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L68)*

## Variables

### `Const` BooleanOperatorPhrase

• **BooleanOperatorPhrase**: *string[]* = Object.keys(BooleanOperator)

*Defined in [packages/spectral/src/conditionalLogic/types.ts:8](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L8)*

## Object literals

### `Const` BinaryOperatorPhrase

### ▪ **BinaryOperatorPhrase**: *object*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:48](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L48)*

###  [BinaryOperator.dateTimeAfter]

• **[BinaryOperator.dateTimeAfter]**: *string* = "is after (date/time)"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:63](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L63)*

###  [BinaryOperator.dateTimeBefore]

• **[BinaryOperator.dateTimeBefore]**: *string* = "is before (date/time)"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:64](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L64)*

###  [BinaryOperator.dateTimeSame]

• **[BinaryOperator.dateTimeSame]**: *string* = "is the same (date/time)"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:65](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L65)*

###  [BinaryOperator.doesNotEndWith]

• **[BinaryOperator.doesNotEndWith]**: *string* = "does not end the string"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:62](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L62)*

###  [BinaryOperator.doesNotExactlyMatch]

• **[BinaryOperator.doesNotExactlyMatch]**: *string* = "does not exactly match"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:52](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L52)*

###  [BinaryOperator.doesNotStartWith]

• **[BinaryOperator.doesNotStartWith]**: *string* = "does not start the string"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:60](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L60)*

###  [BinaryOperator.endsWith]

• **[BinaryOperator.endsWith]**: *string* = "ends the string"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:61](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L61)*

###  [BinaryOperator.equal]

• **[BinaryOperator.equal]**: *string* = "equals"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:49](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L49)*

###  [BinaryOperator.exactlyMatches]

• **[BinaryOperator.exactlyMatches]**: *string* = "exactly matches"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:50](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L50)*

###  [BinaryOperator.greaterThanOrEqual]

• **[BinaryOperator.greaterThanOrEqual]**: *string* = "is greater than or equal to"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:54](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L54)*

###  [BinaryOperator.greaterThan]

• **[BinaryOperator.greaterThan]**: *string* = "is greater than"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:53](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L53)*

###  [BinaryOperator.in]

• **[BinaryOperator.in]**: *string* = "contained in"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:57](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L57)*

###  [BinaryOperator.lessThanOrEqual]

• **[BinaryOperator.lessThanOrEqual]**: *string* = "is less than or equal to"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:56](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L56)*

###  [BinaryOperator.lessThan]

• **[BinaryOperator.lessThan]**: *string* = "is less than"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:55](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L55)*

###  [BinaryOperator.notEqual]

• **[BinaryOperator.notEqual]**: *string* = "does not equal"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:51](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L51)*

###  [BinaryOperator.notIn]

• **[BinaryOperator.notIn]**: *string* = "not contained in"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:58](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L58)*

###  [BinaryOperator.startsWith]

• **[BinaryOperator.startsWith]**: *string* = "starts the string"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:59](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L59)*

___

### `Const` TermOperatorPhrase

### ▪ **TermOperatorPhrase**: *object*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:69](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L69)*

___

### `Const` UnaryOperatorPhrase

### ▪ **UnaryOperatorPhrase**: *object*

*Defined in [packages/spectral/src/conditionalLogic/types.ts:19](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L19)*

###  [UnaryOperator.doesNotExist]

• **[UnaryOperator.doesNotExist]**: *string* = "does not exist"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:22](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L22)*

###  [UnaryOperator.exists]

• **[UnaryOperator.exists]**: *string* = "exists"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:23](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L23)*

###  [UnaryOperator.isEmpty]

• **[UnaryOperator.isEmpty]**: *string* = "is empty"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:24](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L24)*

###  [UnaryOperator.isFalse]

• **[UnaryOperator.isFalse]**: *string* = "is false"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:21](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L21)*

###  [UnaryOperator.isNotEmpty]

• **[UnaryOperator.isNotEmpty]**: *string* = "is not empty"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:25](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L25)*

###  [UnaryOperator.isTrue]

• **[UnaryOperator.isTrue]**: *string* = "is true"

*Defined in [packages/spectral/src/conditionalLogic/types.ts:20](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/conditionalLogic/types.ts#L20)*
