---
title: Create a blog resource
nav_label: Create a blog resource
sidebar_position: 5
---

Add custom data to create and manage a blog in your store or organization.

If you want to use a single platform for multiple solutions, Composable Commerce API gives you the ability to use custom data to create a blog. You can manage your content with some light configuration.

## Prerequisites

If you want to follow along, you need the following items:

- A Composable Commerce account and the Client ID and Client Secret of your store
- An [access token](https://beta.elasticpath.dev/guides/Getting-Started/your-first-api-request#get-an-access-token)
- A basic understanding of object-oriented programming or JavaScript

## Step-by-step walkthrough

Use the Flow API (custom data) to create a new resource: a blog object to store blog content you can surface on your website.

1. Create a new custom Flow that contains your blog object.
2. Create Fields to create the blog building blocks (date, title, blog post entry, fields, etc.).
3. Create Entries to store the actual content (blog posts).
4. Create relationships to organize data and manage the content.
5. Fetch blog content to display and render it according to your needs on your blog site.

### Create a new custom Flow

Create a custom (non-core) Flow. This Flow is going to power a blog website, and is used to store blog content objects.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $ {
      "data": {
        "type": "flow",
        "name": "Posts",
        "slug": "posts",
        "description": "Stores content that is used for a blog",
        "enabled": true
      }
    }
```

Make sure to take note of the Flow ID returned (the `id` field in the response). You need the generated Flow ID to create relationships between the Flow and its Fields.

### Create Fields

Fields are returned when you call the blog object. Repeat this for every blog feature youʼd like to include, such as blog title, blog date, and blog post content. The following example shows how to create fields to store basic blog detail: title.

Each Field must be passed separately.

Populate the `data.relationships.flow.id` field with the generated Flow ID.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/fields \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
        "data": {
          "type": "field",
          "name": "blogTitle",
          "slug": "blogTitle",
          "description": "This is going to return the blog title",
          "enabled": true,
          "field_type": "string",
          "required": true,
          "relationships": {
            "flow": {
              "data": {
                "type": "flow",
                "id": "FLOW-ID"
                }
            }
          }
        }
     }'
```

### Create Entries for a Blog

Entries represent the actual content each Field contains. Create an Entry for every Field added. In this example, the Title, Date and Content Fields are a part of the Entry created, as they were all flagged as required.

#### Using slugs

The slug forms the end part of the URL. Use it to create human-readable and search-engine-friendly URIs for your blog.

Note that the slug used in the URL is case sensitive.

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows/:flow-slug/entries \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json" \
     -d $'{
       "data": {
         "type": "entry",
         "blogTitle": "Creating a Blog",
         "blogDate": "8.24.2018",
         "blogContent": "Learn how to create blogs with the API"
       }
     }'
```

### Create relationships to organize your data

You can use the Composable Commerce API to manage your content. You would use custom Flows for that. If you have a more robust Content Management System (CMS) in mind, we recommend plugging in a third-party CMS tool, such as Contentful.

Create Fields related to a Flow to adapt a data model to how you want to present it on the frontend, such as posts per author and posts per category.

To create a relationship, take the Flow you want to relate your Fields to, and use its slug in the URL of the request. Then, specify which Field you want to relate to in the request body, and repeat it for every Field you want to relate to this Flow.

When fetching the Flow, it lists all Fields that are related to it.

#### Create a Flow

```sh
curl -X POST https://useast.api.elasticpath.com/v2/flows \
     -H "Authorization:XXXX" \
     -H "Content-Type:application/json" \
     -d $'{
        "data":{
          "type":"flow",
          "name":"Joannas blog post",
          "slug":"blog-joanna",
          "description":"Stored Joannas blog posts",
          "enabled":true
   }
}'
```

#### Create Related Field

```sh
curl -X POST https://useast.api.elasticpath.com/v2/fields \
     -H "Authorization:XXXX" \
     -H "Content-Type:application/json" \
     -d $'{
        "data":{
          "type":"field",
          "name":"blog_title_3",
          "slug":"blog_title_3",
          "field_type":"string",
          "description":"Joannas third blog post",
          "required":true,
          "default":0,
          "enabled":true,
          "order":1,
          "relationships":{
            "flow":{
              "data":{
                "type":"flow",
                "id":"FLOW-ID"
            }
         }
      }
   }
}'
```

#### Fetch the Flow with all related Fields

```sh
curl -X GET https://useast.api.elasticpath.com/v2/flows/:flow-id \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json"
```

### Fetch Blog content to display

Using the Composable Commerce API, fetch the blog Flow which now contains the blog post created previously.

```sh
curl -X GET "https://useast.api.elasticpath.com/v2/flows/posts/entries" \
     -H "Authorization: XXXX" \
     -H "Content-Type: application/json"

```

### Expected outcome

Your blog is now surfaced on your website. The data youʼve fetched is in JSON format, and you can render it according to your needs directly on your blog site. You can now expand it by adding photo galleries, comments, reviews, etc.
