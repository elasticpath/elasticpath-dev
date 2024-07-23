---
id: "_types_displaydefinition_"
title: "types/DisplayDefinition"
sidebar_label: "types/DisplayDefinition"
---

[@prismatic-io/spectral](../index.md) › ["types/DisplayDefinition"](_types_displaydefinition_.md)

Types in this file describe how an action or component should appear in the Builder web app.

## Index

### Interfaces

* [ActionDisplayDefinition](../interfaces/_types_displaydefinition_.actiondisplaydefinition.md)
* [DisplayDefinition](../interfaces/_types_displaydefinition_.displaydefinition.md)
* [ExtraDisplayDefinitionFields](../interfaces/_types_displaydefinition_.extradisplaydefinitionfields.md)

### Type aliases

* [ComponentDisplayDefinition](_types_displaydefinition_.md#componentdisplaydefinition)
* [PublicComponentCategory](_types_displaydefinition_.md#publiccomponentcategory)

## Type aliases

###  ComponentDisplayDefinition

Ƭ **ComponentDisplayDefinition**: *TPublic extends true ? DisplayDefinition & Required‹ExtraDisplayDefinitionFields‹TPublic›› : DisplayDefinition & ExtraDisplayDefinitionFields‹TPublic›*

*Defined in [packages/spectral/src/types/DisplayDefinition.ts:28](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DisplayDefinition.ts#L28)*

Component extensions for display properties.

___

###  PublicComponentCategory

Ƭ **PublicComponentCategory**: *"Application Connectors" | "Data Platforms" | "Helpers" | "Logic" | "Triggers"*

*Defined in [packages/spectral/src/types/DisplayDefinition.ts:13](https://github.com/prismatic-io/spectral/blob/v8.1.0/packages/spectral/src/types/DisplayDefinition.ts#L13)*
