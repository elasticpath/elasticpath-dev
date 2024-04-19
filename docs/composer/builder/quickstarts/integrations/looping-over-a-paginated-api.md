---
title: Looping Over a Paginated API
nav_label: Looping Over a Paginated API
sidebar_position: 30
---

When the number of records that an API stores is large, it's not economical to return all possible records at one time.
Instead, many APIs implement **pagination**.
That means that the API returns a small number of records at a time.
You as the consumer of the API can "page" through the records, and ask for more records by requesting the next "page".

In an integration it's often helpful to be able to loop over a paginated API.
In this tutorial, we'll look at how to use the loop component to loop over a paginated API.

## JSON Placeholder API

For illustration purposes, we'll use Typicode's [JSON Placeholder](https://jsonplaceholder.typicode.com/).
You can request all 100 "posts" in JSON Placeholder by making a request to https://jsonplaceholder.typicode.com/posts, and you can request fewer posts by making the same request with a `_limit` parameter.
You can also choose an offset by passing in a `_start` parameter.

For example, if you want just 10 posts, but you want to start at the 25th post, you can make a request to https://jsonplaceholder.typicode.com/posts?_limit=10&_start=25.

In this exercise we're going to page through all 100 posts, 10 at a time, so we'll be making a request to `/posts?_limit=10&_start=0`, then `/posts?_limit=10&_start=10`, `/posts?_limit=10&_start=20`, etc. until there are no more posts left to process.

{% callout  %}

With paginated APIs you often don't know how many total results exist. We happen to know that we're going to fetch 100 total "posts", but the looping strategy we cover here will accommodate any unknown number of posts. We'll simply loop until there are no more records left to loop over.
{% /callout  %}

## Our paginated integration

Our integration will follow this flow to process all posts in the paginated API:

- Start a loop
  - Fetch a page of up to 10 posts
  - Are we out of posts to process?
    - If so, break out of the loop
    - If not, loop over each post
      - Do something with the post (we'll just log out the post's title here)
      - Is this the last post?
        - If so, make a note of what `_start` we should use for the next loop iteration
  - Go back to the start of the loop

Let's get building!

### Our main loop

First, we'll create a Loop N Times loop step to loop over pages.
Under "Number of Iterations" we'll put in some high number, like 20, even though we'll break out of the loop before 20 iterations.

Having a maximum number of iterations in a loop helps guard against an infinite loop - we don't want to introduce unintended load on the vendor's API from an infinite loop.
If you know that you're going to loop over thousands of pages, you can choose a higher number of maximum iterations.

### Fetching a page of data

Next, we'll add two steps:

1. A Persist Data - Get Execution Value step will help to track the `_start` value in our API request.
   This action references a variable that is scoped to the current execution.
   That variable's value will be set by another step in the loop later.
   We'll provide a variable name, `Latest Post ID`, and default value `0` (since it's not been set yet):

     ![Persist Data - Get Execution Value](/assets/get-execution-value.png)

2. Next, we'll use the value from the previous step to make a call to JSON Placeholder.
   We'll add an HTTP - GET Request step and fetch `https://jsonplaceholder.typicode.com/posts?_limit=10&_start={{ THE VALUE WE GOT }}`:

    ![HTTP Get Request](/assets/get-posts.png)

### Are we done?

Next, we'll determine if we're done fetching posts.
We'll do this by adding a Branch on Expression step, and we'll check to see if the "Get Posts" step we invoked returned an empty array:

 ![Branch on Expression to Check Empty](/assets/branch-on-empty.png)

If the array returned was empty, we know there are no more results to page through.
In that case we'll add a Break Loop step to get out of our main loop:

 ![Break Loop](/assets/break-loop.png)

### Process posts

Assuming there are posts to process, we'll create an interior loop to loop over each post.

1. Add a Loop Over Items action that takes the results from the "Get Posts" step in order to loop over the results:

    ![Loop Over Items in integration designer](/assets/loop-over-posts.png)

1. We'll "process" each post.
   For illustration purposes we'll just log out the post's **id** and **title**.
   We can access each post's title by referencing the interior loop's `currentItem` property:

    ![Log Write Message](/assets/log-out-post.png)

### Store the last item's ID

Finally, we'll figure out the ID of the last post in the page we loaded, so we can adjust our `_start` parameter for the next loop.

1. We'll use a Branch on Expression action to determine if the `currentItem` has `isLast=true` (which indicates if we're looping over the last post):

    ![Branch on Expression to check for last post](/assets/is-last-post.png)

2. If we are on the last post, we'll use a Persist Data - Save Execution Value to save the ID of the last post.
   We'll use the same variable name - `Latest Post ID` - that we used before, and we'll save out the loop's `currentItem.id`.
   The "Get Execution Value" step we added at the beginning of the integration will pick up this value when the loop runs again:

    ![Perist Data - Save Execution Value](/assets/save-execution-value.png)

If we run our integration and look at logs, we can see that IDs and titles of the posts we loaded were logged out.
After every 10 posts (after post ID 60, 70, etc.) we can also see that that our main loop ran again and an additional page of posts was loaded.

## Pagination implementations

Different APIs implement their pagination differently.
Some page payloads contain a value indicating if you're on the last page or not.
Others contain a value to let you know what value to ask for with your next API call.
Your pagination loop implementation may look slightly different than this one, but hopefully this gave you a general idea of how to implement pagination in an integration.
