---
title: JSON File Streamer Component
nav_label: JSON File Streamer
sidebar_position: 110
---

This component allows you to take Commerce data and stream the data to a JSON file. The JSON file can be broken smaller batches for easier processing.

## Actions

This component has the following action.

### JSON File Streamer

| Input | Type | Description |
|:--- |:--- | :--- | 
| **JSON File URL**  | `string` | A URL to a JSON file. | 
| **Batch Consumer API URL**  | `string` | An API URl for batch consumer. | 
| **Batch Consumer API Key**  | `string` | An API key for batch consumer. | 
| **Batch Size**  | `string` | The number of pages to group into a single batch. Default is **250**. | 
| **Batch Consumer Concurrency**  | `string` | The default is **10**. | 
| **Taxonomy**  | `string` | The taxonomy. | 
| **Mapping**  | `string` | The mapping. | 
| **Catalog Attributes**  | `string` | The catalog attributes. | 
| **Meta**  | `string` | The meta data. | 
| **Offset**  | `string` | Use the page offset to get additional pages for your content. | 
| **Log Level**  | `string` | The level of logging. | 
| **Enabled Downstream Response**  | `boolean` | `true` if you want to enable downstream response. | 
