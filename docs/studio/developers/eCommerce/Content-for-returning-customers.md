---
title: Content for Returning Customers
nav_label: Content for Returning Customers
sidebar_position: 20
---

By utilizing the power of [Conditional Content](/docs/studio/content/advanced-page-editing/Using-Conditional-Content) you're able
to customize your pages to show (or hide) specific parts of the page to users who meet your pre-defined criteria.

In this guide, we'll be showing you how to use this to your advantage, but teaching you how to create conditions for
users based off of how much they've spent with your store.

## Referenced conditions

Purchased any product? Total Value of All Purchases

![Product Purchased](/assets/studio/4167e24c-fe22-462c-b89f-8bb23603c03d.jpg)

This true or false condition can be used to show a section to users based on their purchase history. There are two
options for this condition:

- **Yes** --> The user has purchased a product before.
- **No** --> The user has not purchased a product before.

   ![Total Purchase Value](/assets/studio/47f04869-b039-427f-aee2-533e894c44a9.jpg)

This free text condition is used to show a section based on the total value of the purchases that a user has made on
your site. As an example, to show this section to users who have spent at least $100.00 USD you should set this
condition as:

* Operator --> Greater Than or Equal
- Value --> 100

## Fields

The following table describes the fields for this condition.

| Field | Description                                                                                                                                                                                                                                  |
| --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operator | This field is where you'd define the operator for this condition. The available options are *Exists, Equals, Greater Than, Less Than, Greater Than or Equal, Less Than or Equal, Is Between\*, Not Exists, Not Equals, Not Greater Than, Not Less Than, Not Greater Than or Equal, Not Less Than or Equal, Is Not Between\*.* |
| Value | This is the free text field where you'd define the values of the previously selected operators. Those marked with an asterisk above have an additional value field that you'll need to define.                                               |

## Using the conditions

There are a number of different ways that you can leverage these conditions to improve the conversion rate of your page.

For demo purposes, let's use the example of offering any customer who views your landing page a discount code for their
next purchase via a **banner** component. However, we need to make sure that *all* of our visitors aren't seeing this
discount code, so we'll use conditions to ensure that only returning customers see it.

At it's simplest, there are two ways to achieve this using the above-mentioned condition(s) but ultimately both
configurations result in the same thing: ***a returning customer is shown the discount banner***.

*Purchased any product? = yes*

![Purchased Product](/assets/studio/screely-1648662131614.png)

*Total value of all purchases > 0*

![Total Purchase Value](/assets/studio/screely-1648661990970.png)
