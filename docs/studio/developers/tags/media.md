# Media

The Media Tag enables your content authors to add media to pages, augmented with full editor controls for linking, resizing, and media library management, and can be programmed to constrain the media output to specific dimensions, quality, etc.

```jsx
<Media dataRef={content.media} />
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the Media's configuration
* **className**: string (optional) - a hard-coded class name to add to the rendered element
* **category**: string (optional) - a string ("image" or "icon") indicating the category in which to store the attached media. Note: "video" and "pdf" media will be segregated by their mime types.
* **aspectRatio**: number (optional) - an expression indicating the desired proportions of the resized media on output, e.g. "1x1", "4x3" or "16x9". (Default: `none`)
* **crop**: string (optional) -an expression indicating the desired cropping of the resized media on output, e.g. "topleft", "topcenter', or "middlecenter" (Default: `none`)
* **quality**: number (optional) - a number from 1-100 indicating the compression quality of the media for output formats that support it (Default: `80`)
* **layout**: string (optional) - how the media should be layed out. Set to `"responsive"` to apply smart responsive layout rules. Set to `"normal"` to not apply any styles. (Default: `"responsive"`)&#x20;
* **readOnly**: boolean (optional) - When `true` doesn't allow the user to change the media by clicking on the image in the editor. This is useful if iterating over a collection that supplies images. For instance, a Product collection. (Default: `false`)
* **enableLinking**: boolean (optional) - when True, allows the media to be embedded in a link using the Smart URL input UI (Default: `true`)
* **enableVideos**: boolean (optional) - when `true`, allows video media to be uploaded into this area (Default: `false`)
