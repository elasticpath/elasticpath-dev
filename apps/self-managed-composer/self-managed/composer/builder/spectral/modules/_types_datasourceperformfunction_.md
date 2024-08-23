---
id: "_types_datasourceperformfunction_"
title: "types/DataSourcePerformFunction"
sidebar_label: "types/DataSourcePerformFunction"
---

[@prismatic-io/spectral](../index.md) › ["types/DataSourcePerformFunction"](_types_datasourceperformfunction_.md)

## Index

### Type aliases

* [DataSourceContext](_types_datasourceperformfunction_.md#datasourcecontext)
* [DataSourcePerformFunction](_types_datasourceperformfunction_.md#datasourceperformfunction)

## Type aliases

###  DataSourceContext

Ƭ **DataSourceContext**: *Pick‹[ActionContext](_types_actionperformfunction_.md#actioncontext)‹TConfigVars›, "logger" | "customer" | "instance" | "user" | "configVars"›*

*Defined in [packages/spectral/src/types/DataSourcePerformFunction.ts:11](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourcePerformFunction.ts#L11)*

Context provided to perform method containing helpers and contextual data

___

###  DataSourcePerformFunction

Ƭ **DataSourcePerformFunction**: *function*

*Defined in [packages/spectral/src/types/DataSourcePerformFunction.ts:18](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourcePerformFunction.ts#L18)*

Definition of the function to perform when a Data Source is invoked.

#### Type declaration:

▸ (`context`: [DataSourceContext](_types_datasourceperformfunction_.md#datasourcecontext)‹TConfigVars›, `params`: [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs›): *Promise‹[DataSourceResult](_types_datasourceresult_.md#datasourceresult)‹TDataSourceType››*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [DataSourceContext](_types_datasourceperformfunction_.md#datasourcecontext)‹TConfigVars› |
`params` | [ActionInputParameters](_types_actioninputparameters_.md#actioninputparameters)‹TInputs› |
