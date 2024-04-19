---
title: Files API Overview
nav_label: Files API Overview
sidebar_position: 10
---

:::caution
The Files API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

You can upload image files or URLs by using `multipart/form-data` as the content type header. For example, `"Content-Type: multipart/form-data" \`. Commerce supports the following file types.

| File Extension | Description                                                 |
|:---------------|:------------------------------------------------------------|
| .gif           | Graphics Interchange Format (GIF)                           |
| .jpg/jpeg      | Joint Photographic Experts Group (JPEG) format              |
| .png           | Portable graphics format                                    |
| .webp          | Web picture format                                          |
| .mp4           | Moving Picture Experts Group (MPEG) format                  |
| .mov           | QuickTime Movie format                                      |
| .pdf           | Portable Document Format                                    |
| .svg           | Scalable Vector Graphics format                             |
| .usdz          | Universal Scene Description Format                          |
| .glb           | Global File format                                          |
| .jp2           | Compressed bitmap image saved in Joint Photographic Experts Group (JPEG) format |
| .jxr           | Extended range for Joint Photographic Experts Group (JPEG) format |
| .aac           | Advanced Audio Coding (AAC) format                          |
| .vrml          | Virtual Reality Modelling Language (VRML) format            |
| .doc(x)        | Microsoft Word Open XML format                              |
| .ppt(x)        | Microsoft PowerPoint Open XML format                        |
| .xls(x)        | Microsoft Excel Open XML format                             |

By default, the maximum file size is 8 MB. If you need to support larger file sizes, contact your Elastic Path representative. Alternatively, store files somewhere else and reference them.

## The File object

| Attribute             | Type                               | Description     |
|:----------------------|:-----------------------------------|:----------------|
| `id`                  | `string`                           | The unique identifier for this file. |
| `type`                | `string`                           | The type represents the object being returned. |
| `link`                | [`object`](#the-file-link-object)  | The file [link object](#the-file-link-object). |
| `file_name`           | `string`                           | The name of the file. |
| `mime_type`           | `string`                           | The mime type of the file. |
| `file_size`           | `integer`                          | The size of the file. Required when uploading files. |
| `DEPRECATED` `public` | `boolean`                          | Whether the file public or not. Required when uploading files. |
| `file_location`       | `string`                           | The URL that points to an image. Required when referencing files stored externally. |
| `meta`                | [`object`](#the-file-meta-object)  | The additional [meta object](#the-file-meta-object). |
| `links`               | [`object`](#the-file-links-object) | The file [links object](#the-file-links-object). |

## The file link object

| Attribute   | Type     | Description                               |
|:------------|:---------|:------------------------------------------|
| `link.href` | `string` | The publicly available URL for this file. |

## The file meta object

| Attribute                    | Type      | Description                    |
|:-----------------------------|:----------|:-------------------------------|
| `meta.dimensions.width`      | `integer` | The width of the file.         |
| `meta.dimensions.height`     | `integer` | The height of the file.        |
| `meta.timestamps.created_at` | `string`  | The creation date of the file. |

## The file links object

| Attribute    | Type     | Description                  |
|:-------------|:---------|:-----------------------------|
| `links.self` | `string` | The URL of this file object. |

## Response Example

```json
{
  "data": {
    "id": "272d3ff0-5034-4986-8786-0ff97450745d",
    "type": "file",
    "link": {
      "href": "https://files-eu.epusercontent.com/2a85964e-cb3d-482a-ab02-0f0e47ab5662/273d3ff0-5034-4986-8786-0ff97450745.jpg"
    },
    "file_name": "image.jpg",
    "mime_type": "image/jpeg",
    "file_size": 20953,
    "meta": {
      "dimensions": {
        "width": 1600,
        "height": 800
      },
      "timestamps": {
        "created_at": "2017-08-14T10:47:45.191Z"
      }
    },
    "links": {
      "self": "https://useast.api.elasticpath.com/v2/files/272d3ff0-5034-4986-8786-0ff97450745d"
    }
  }
}
```
