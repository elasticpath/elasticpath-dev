---
title: Links
nav_label: Links
sidebar_position: 70
---

Links are used to allow you as an API consumer to move between requests.
Single entities use a `self` parameter with a link to that specific resource:

```javascript
{
    "links": {
        "self": "https://useast.api.elasticpath.com/carts/1"
    }
}
```

Listing pages use `current`, `first`, `last`, `next`, `previous`:

```javascript
{
    "links": {
        "current": "https://useast.api.elasticpath.com/v2/products?page[limit]=100&page[offset]=0",
        "first": "https://useast.api.elasticpath.com/v2/products?page[limit]=100&page[offset]=0",
        "last": "https://useast.api.elasticpath.com/v2/products?page[limit]=100&page[offset]=600",
        "prev": null,
        "next": "https://useast.api.elasticpath.com/v2/products?page[limit]=100&page[offset]=100"
    }
}
```

Sometimes, there aren’t enough entities for a project to fill multiple pages. In this situation, we return some defaults, instead of expecting you as a consumer to check for these special cases.

| Property | ​Description |
| :--- | :--- |
| `current` | Always the current page. |
| `first` | Always the first page. |
| `last` | `null` if there is only one page. |
| `prev` | `null` if the user is on the first page. |
| `next` | `null` if there is only one page. |
