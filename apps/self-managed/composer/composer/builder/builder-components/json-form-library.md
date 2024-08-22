---
title: JSON Form Library Component
nav_label: JSON Form Library
sidebar_position: 90
---

This component provides pre-built configuration forms using [JSON Forms](https://jsonforms.io/). These forms provide sophisticated configuration elements that you can leverage when creating the configuration section for your Commerce integrations. The following pre-built forms are available in the component:

* Catalog Webhook Selector Multi-Select
* Order Webhook Selector Multi-Select
* Order Webhook Selector Single
* Catalog Webhook Selector Single-Select
* Customer Webhook Selector Multi-Select
* Customer Webhook Selector Single-Select
* Catalog And Storefront Mapper
* Catalog Include And Exclude Config
* Single Catalog Selection
* Hierarchy Selector
* Pricebook Selector

The following steps describe how to find JSON Form Library component in Commerce Manager while configuring your integration.

1. Go to **COMPOSER > Builder**.
1. Select **+Add Integration**. The **Configure new integration** page is displayed.
1. Choose the required option from the **Configure new integration** page to create a new integration.
1. To add JSON Form Library component, go to **Configuration Wizard**.
1. Select **+Config variable** to add a config variable.
1. In the **Data Type** field, select **JSON Form** from the list.

   In the **Data Source** field, you can now see the JSON Form Library Component. 

## Actions

This component has the following actions.

### Catalog Webhook Selector (Multi-select)

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Catalog Event List**  | `string` | A list of catalog events. | 

### Catalog Webhook Selector (Single-select)

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Catalog Event List**  | `string` | A list of catalog events. | 

### Order Webhook Selector (Multi-select)

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Order Event List**  | `string` | A list of order events. | 

### Order Webhook Selector (Single-select)

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Order Event List**  | `string` | A list of order events. | 

### Customer Webhook Selector (Multi-select)

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Customer Event List**  | `string` | A list of customer events. | 

### Customer Webhook Selector (Single-select)

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Customer Event List**  | `string` | A list of customer events. | 

### Catalog and Storefront Mapper 

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 

### Catalog Include/Exclude Config

| Input | Type | Description |
|:--- |:--- | :--- | 
| **Connection**  | `connection` | Commerce connection. | 
