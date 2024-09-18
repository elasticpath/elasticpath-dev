---
title: Custom Components
nav_label: Custom Components
sidebar_position: 20
---
How to customize existing components or add your own.

## Getting started

To add or edit components you'll need to have the Developer or Administrator role within Studio. Then, click on **Design** -> **Sections** in the navigation to begin editing components:

![Add, edit, and delete components within the section editor](/assets/unstack-components.png)

### The component editor

Components are written in HTML, CSS, and JavaScript and use special tags we call **NoML** to make parts of the components editable within the page editor:

![Components are just HTML, CSS, and Javascript!](/assets/BA6C1C46-F1CC-4B60-9509-7F7968553378_1_201_a.jpeg)

### A NoML example

NoML is Studio's proprietary markup language that makes it possible to build components that can be edited within the page editor. It is quite similar to [JSX](https://reactjs.org/docs/introducing-jsx.html). Using NoML you can define exactly what parts of a component should be editable by page authors. You can use any HTML you want within a component, but you'll need to use NoML to make bits editable.

Here's the markup from the _3D Icon Callouts_ component pictured above:

```jsx
<Section  
  dataRef={content.section} enableHeader={true}
  properties={[{
    "name": "layout", 
    "label": "Alignment", 
    "attribute": "class", 
    "type": "select", 
    "options": {"Center": "center", "Left": "left"}, 
    "default": "center", 
    "required": true}]}>
  <Collection
    dataRef={content.callouts}
    minItems={1} maxItems={9}
    defaultItems={3}
    enableSorting={true}
    tagName="div"
    className="callouts"
    item={(callout, i)=>
      <Item tagName="div" className="callout">
        <Media dataRef={callout.media} className="media" category="icon" aspectRatio="1"/>
        <RichText dataRef={callout.text} startTag="h3"/>
        <Actions dataRef={callout.actions}/>
      </Item>
    }/>
</Section>
```

At first glance this might look a little scary, but once you understand what's going on it's actually quite simple. NoML adds additional "tags" like Section, Media, RichText to HTML for controlling the dynamic bits.

Several tags appear in the example above:

1. Wrapping the entire component are `Section` tags. In this example, you can see that there are attributes to control whether this component should allow a header and the classes for aligning the component.
2. There's then a `Collection` tag that generates multiple `Item` based on user input. These are rendered with the `callout` class which is used by the CSS to make them look like cards.
3. Finally, the `Media`, `RichText`, and `Action` tags provide the icon, text, and editable actions (buttons) for the user of the component.

## Available tags

There are an array of tags within Studio that provide dynamic functionality for page authors. If you're building your own components, you'll want to familiarize yourself with each of them.

### Component types

Block tags are the editor-enabled containers for your Studio sections, allowing you to add toolbars and controls to areas of your content. They include:

* [Section](/docs/studio/developers/components/section)
* [Box](/docs/studio/developers/tags/box)

### Inline tags

Inline tags allow you to add smart components to your content, which bring editor-enabled controls for managing the specific types of content. Inline tags available in Unstack are:

* [Media](/docs/studio/developers/tags/media)
* [Media Instance](/docs/studio/content/Media-Management/Media-Overview)
* [Code](/docs/studio/developers/tags/code)
* [RichText](/docs/studio/developers/tags/richtext)
* [PlainText](/docs/studio/developers/tags/plaintext)
* [Actions](/docs/studio/developers/tags/actions)

### Basic tags

Basic tags allow you to print values and literals to your HTML templates.

* [Values](/docs/studio/developers/features/values)
* [Literals](/docs/studio/developers/features/literals)

### Generators

Generators are a special type of tag that can be used to generate arrays of items and be rendered in your HTML as a list, table, flexbox, or grid.

* [Collection](/docs/studio/developers/tags/collection)
* [ArticleCollection](/docs/studio/developers/tags/articles)
