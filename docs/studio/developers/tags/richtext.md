# Richtext

The RichText tag is a very powerful tool for adding fully content-editable text areas to your sections, which can also be augmented with embedding tools for even richer media content.

```jsx
<RichText dataRef={content.text} startTag="div" .../>
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the Richtext tag's configuration
* **startTag**: string (optional) - the initial tag to start the richtext block with (default "p")
* **className**: string (optional) - a hard-coded class name to add to the rendered element
* **maxWords**: number (optional) - the maximum number of words allowed in this field
* **placeholder**: string (optional) - placeholder text to display in the editor when empty
* **enableAlignment**: boolean (optional) - when true, allows content authors to align individual areas of the text within the rich text block (Default: True)
* **enableHtml**: boolean (optional) - when True, allows content authors to create HTML conetnt (Default: True)
* **enableEmbeds**: boolean (optional) - when true, allows content to embed media, forms, or 3rd-party content (e.g. embedded videos from other platforms) into the content (Default: False)
