---
title: Using Anchor Links
nav_label: Using Anchor Links
sidebar_position: 140
---

## Overview

Anchor tags are IDs that are assigned to sections, which are used to link users to a specific part of a page. In
Studio, these can be assigned to sections and are used when linking users via buttons or text.

## To set this up in your account

1. Identify which section you want scrolling into view when a link is clicked.
2. Once identified, click the ***CSS Selector*** option from the section toolbar and define an ID. This ID should be a
   text string. *Do not enter a "**#**" in this field.*
3. Find the button you want to use, or the text you want to hyperlink and enter the ID you defined in the previous step
   as the URL, prefaced by a "**#**". Therefore if the ID you defined above was ***heroSection***, the button's link
   would be ***#****heroSection.***

## Some considerations

* Anchor links are case-sensitive, so what you enter into the text field must be used following the pound sign in the
  exact same case format.
* It's possible to use anchor links to link to a section on another page. To do this you'd just need to add the full URL
  before the # when adding the linking the button. If this is your homepage, you'll need to add a forward slash before
  adding the pound sign and section name.

```
https://example.com/#anchor_link
```
