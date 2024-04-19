# Element

The `<Element>` tag is similar to the Box tag, but it doesn't provide any layout or style controls within the page editor. It exists to make it easy to attach [custom properties](/docs/studio/developers/features/properties) to a `div` or other HTML element.

```jsx
<Element dataRef={content.block} className="block">
...
</Element>
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the Box's configuration
* **className**: string (optional) - a hard-coded class name to add to the rendered element
* **properties**: Array<\[object]> (optional) - defines properties that content authors can configure within the page editor. For details see [custom properties](/docs/studio/developers/features/properties).
