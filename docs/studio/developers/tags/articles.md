---
title: Article Collection
nav_label: Article Collection
sidebar_position: 20
---

The ArticleCollection generator allows you to create components powered by dynamic blog content. Users can optionally filter, sort, and pin articles to a given section using this component, giving them the flexibility to selectively display editorial content throughout your site.

```jsx
<ArticleCollection 
  dataRef={content.articles}
  tagName="div"
  item={(article)=>
    <div class="article">
      <div class="title">
        <a href={`/${article.slug}`}>{article.content.header}</a>
      </div>
    </div>
  )}
/>
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the ArticleCollection's configuration
* **item**: anonymous [arrow function](https://www.w3schools.com/js/js\_arrow\_function.asp) - used to render an article
* **tagName**: string (optional) - a hard-coded tag name for the rendered element
* **className**: string (optional) - a hard-coded class name to add to the rendered element
* **minItems**: number (optional) - the minumum # of items allowed in this collection (Default: 1)
* **maxItems**: number (optional) - the maximum # of items allowed in this collection (Default: 10)
* **defaultItems**: number (optional) - the starting # of items in this collection on creation
* **enablePinning**: boolean (optional) - when True, allows content authors to pin specific articles to this list semi-permanently, until unpinned (Default: True)
* **enableFiltering**: boolean (optional) - when True, allows content authors to select the blog, category, or tags by which to filter articles for this list (Default: True)
* **enableSorting**: boolean (optional) - when True, allows content authors to select the sorting order by which to filter articles for this list (Default: True)
