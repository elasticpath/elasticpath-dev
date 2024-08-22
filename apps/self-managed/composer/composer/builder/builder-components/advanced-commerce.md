---
title: Advanced Commerce Component
nav_label: Advanced Commerce
sidebar_position: 10
---

You can integrate Commerce with Advanced Commerce (GrapheneHC) using the Advanced Commmerce component. This means you can synchronize Commerce data such as products, prices, images, categories, custom attributes, and variations with your Advanced Commerce (GrapheneHC) storefront, giving you advanced searching and merchandising capabilities. The component allows you to create, delete and update products in Advanced Commerce.

## Connections

You need the following to interact with Advanced Commerce (GrapheneHC).

| Option            | Description                                   |
|:------------------|:----------------------------------------------|
| **API Base URL**  | Your Advanced Commerce API Base URL, for example, `https//{{domainKey}}.api-{{location}}.advancedcommerce.services`. Contact your Advanced Commerce team. |
| **API Key** | Your Advanced Commerce API Key.  |
| **API Secret** | Your Advanced Commerce Secret.  |

## Actions

The component has the following actions.

### Process Upload

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Advanced Commerce Connection. | 
| **Receipt Id** | `string` | A unique identifier of a receipt. | 
| **Delete On Completion** | `boolean` | Specifies whether to delete on completion. | 

### Upload File

| Input | Type | Description | 
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Advanced Commerce Connection. | 
| **Zip File Path** | `string` | The path to a zip file. | 
| **Type** | `string` | The file type. | 

### Write File

| Input | Type | Description | 
|:--- |:--- | :--- | 
| **File Path** | `string` | A file path. | 
| **Content** | `dynamicfieldselection` | The file contents. | 

### Zip File

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Files to be zipped Inputs** | `string` | A list of files to be zipped. |
| **Zip File Path** | `string` | A file path. |  
