---
id: "_types_datasourcedefinition_.datasourcedefinition"
title: "DataSourceDefinition"
sidebar_label: "DataSourceDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/DataSourceDefinition"](../modules/_types_datasourcedefinition_.md) › [DataSourceDefinition](_types_datasourcedefinition_.datasourcedefinition.md)

DataSourceDefinition is the type of the object that is passed in to `dataSource` function to
define a component Data Source.

## Type parameters

▪ **TInputs**: *[Inputs](../modules/_types_inputs_.md#inputs)*

▪ **TConfigVars**: *[ConfigVarResultCollection](../modules/_types_inputs_.md#configvarresultcollection)*

▪ **TDataSourceType**: *[DataSourceType](../modules/_types_datasourceresult_.md#datasourcetype)*

## Hierarchy

* **DataSourceDefinition**

## Index

### Properties

* [dataSourceType](_types_datasourcedefinition_.datasourcedefinition.md#datasourcetype)
* [detailDataSource](_types_datasourcedefinition_.datasourcedefinition.md#optional-detaildatasource)
* [display](_types_datasourcedefinition_.datasourcedefinition.md#display)
* [examplePayload](_types_datasourcedefinition_.datasourcedefinition.md#optional-examplepayload)
* [inputs](_types_datasourcedefinition_.datasourcedefinition.md#inputs)
* [perform](_types_datasourcedefinition_.datasourcedefinition.md#perform)

## Properties

###  dataSourceType

• **dataSourceType**: *TDataSourceType*

*Defined in [packages/spectral/src/types/DataSourceDefinition.ts:23](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourceDefinition.ts#L23)*

The type of data that this Data Source represents.

___

### `Optional` detailDataSource

• **detailDataSource**? : *undefined | string*

*Defined in [packages/spectral/src/types/DataSourceDefinition.ts:29](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourceDefinition.ts#L29)*

Specifies the name of a Data Source in this Component which can provide additional details about the content for this Data Source, such as example values when selecting particular API object fields.

___

###  display

• **display**: *[ActionDisplayDefinition](_types_displaydefinition_.actiondisplaydefinition.md)*

*Defined in [packages/spectral/src/types/DataSourceDefinition.ts:19](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourceDefinition.ts#L19)*

Defines how the Data Source is displayed in the Builder interface.

___

### `Optional` examplePayload

• **examplePayload**? : *Awaited‹ReturnType‹this["perform"]››*

*Defined in [packages/spectral/src/types/DataSourceDefinition.ts:27](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourceDefinition.ts#L27)*

An example of the payload outputted by this Data Source.

___

###  inputs

• **inputs**: *TInputs*

*Defined in [packages/spectral/src/types/DataSourceDefinition.ts:25](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourceDefinition.ts#L25)*

InputFields to present in the Builder interface for configuration of this Data Source.

___

###  perform

• **perform**: *[DataSourcePerformFunction](../modules/_types_datasourceperformfunction_.md#datasourceperformfunction)‹TInputs, TConfigVars, TDataSourceType›*

*Defined in [packages/spectral/src/types/DataSourceDefinition.ts:21](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DataSourceDefinition.ts#L21)*

Function to perform when this Data Source is invoked; fetches data from the data source.
