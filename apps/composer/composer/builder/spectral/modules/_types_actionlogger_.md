---
id: "_types_actionlogger_"
title: "types/ActionLogger"
sidebar_label: "types/ActionLogger"
---

[@prismatic-io/spectral](../index.md) › ["types/ActionLogger"](_types_actionlogger_.md)

Actions' perform functions receive a logger object as part of their first parameter.
Types in this file define the shape of the logger that is passed to an action.
For information on the logger object, see:
https://prismatic.io/docs/custom-components/writing-custom-components/#contextlogger

## Index

### Interfaces

* [ActionLogger](../interfaces/_types_actionlogger_.actionlogger.md)

### Type aliases

* [ActionLoggerFunction](_types_actionlogger_.md#actionloggerfunction)

## Type aliases

###  ActionLoggerFunction

Ƭ **ActionLoggerFunction**: *function*

*Defined in [packages/spectral/src/types/ActionLogger.ts:11](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/ActionLogger.ts#L11)*

A logger function, similar to `console.log()` or `console.error()`.

#### Type declaration:

▸ (...`args`: unknown[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |
