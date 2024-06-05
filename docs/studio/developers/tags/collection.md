# Collection

The Collection generator allows your users to create lists or grids of repeatable blocks of code, each with powerful UI tools for adding, removing, and sorting. These are useful for creating complex multi-element section types like testimonials, FAQs, etc.

```jsx
<Collection dataRef={content.callouts} tagName="div" .../>
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the Collection's configuration
* **item**: anonymous [arrow function](https://www.w3schools.com/js/js\_arrow\_function.asp) - used to create a collection item
* **tagName**: string (optional) - a hard-coded tag name for the rendered element
* **className**: string (optional) - a hard-coded class name to add to the rendered element
* **minItems**: number (optional) - the minimum # of items allowed in this collection (Default: 1)
* **maxItems**: number (optional) - the maximum # of items allowed in this collection (Default: 10)
* **defaultItems**: number (optional) - the starting # of items in this collection on creation
* **enableSorting**: boolean (optional) - when True, allows content authors to drag-and-drop resort items in this collection
* **enableControls**: boolean (optional) - when True, will display collection-specific controls in the editor UI
