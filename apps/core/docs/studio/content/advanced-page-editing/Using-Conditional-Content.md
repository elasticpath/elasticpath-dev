---
title: Using Conditional Content
nav_label: Using Conditional Content
sidebar_position: 110
---

Want to control the visibility of individual sections on your page from a certain user, group of users, or user's who
have completed a specific action? With Studio's Conditional Content you're able to do just that.

To enable Conditional Content on your section, just select the **{...}** icon from the section toolbar.

![Conditional Content Icon](/assets/studio/ConContent1.png)

Now you need to decide on the conditions for this section to appear. Do you want it to show for all new users? Only
users who have been to this page before? What about users from Google Ads, Klaviyo, or HubSpot?

By combining conditions, you're able to create rules for just about anything. Below is the full list of supported
conditions that you can use individually, or combine into **IF** statements or **AND** statements:

## URL Query Parameters

![URL Query Parameters](/assets/studio/78cf4689-6faa-4c88-9a12-8894152c8b05.jpg)

This condition is used to show a section when a certain query parameter is true. You can use this condition to:

* [Show content to users in a specific location](/docs/studio/developers/eCommerce/Showing-content-to-users-in-a-specific-location)
* [Display search term in your landing pages](/docs/studio/developers/eCommerce/Displaying-search-term-in-your-landing-pages)

### Example

As an example, if you define your **URL query params...** condition as:

* **Param** --> **show**
* **Operator** --> **equals**
* **Value** --> **true**

then your section would only be visible to users who have **show=true** following the **?** in their URL.

```
URL Example: <https://www.unstack.com/example-page?show=true>
```

### Fields

The following table describes the fields that make up a URL query parameter.

| Field | Description                                                                                                                                                                                                                                                             |
| --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Param | This is the free text field where you define the name of your URL parameter. (In the above example, this is the word **show**.)                                                                                                                                         |
| Operator | This drop down is where you'd select the operator for this condition. The available options are **Exists**, **Equals**, **Contains**, **Starts With**, **Ends With**, **Not Exists**, **Not Equal**, **Doesn't Contain**, **Doesn't Start With**, **Doesn't End With**. |
| Value | This is the free text field where you define the value of your URL parameter. (In the above example, this is the word **true**.)                                                                                                                                        |

## Visited from

![Visting Source](/assets/studio/02d8cd6d-90bc-4333-98aa-98717afa0abc.jpg)

This condition is used to show a section when a UTM parameter has a specific value. You can use this condition to [display a search term in your landing pages](/docs/studio/developers/eCommerce/Displaying-search-term-in-your-landing-pages).

### Example

As an example, to show this section to users visiting from Google, you would set this condition as:

* **UTM Parameter** --> **source**
* **Operator** --> **current**
* **Value** --> **google**

### Fields

The following table describes the fields that make up a **Visited from...** condition.

| Field | Description                                                                                                                                                                                                                               |
| --- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UTM Parameter | This drop down allows you to select on of the five standard UTM parameters to reference in this condition. These parameters are source (utm_source), medium (utm_medium), campaign (utm_campaign), term (utm_term), content (utm_content). |
| Operator | This drop down is where you'd select the operator for this condition. The available options are **Any**, **First**, **Previous**, **Current**.                                                                                                           |
| Value | This is the free text field where you'd define the value of the previously selected UTM parameter.                                                                                                                                        |

## Visited a Page

![Previously Visited Pages](/assets/studio/6fc0fc9f-60c5-4be0-a7e3-01548e97cc1b.jpg)

This condition is used to show a section to users who have previously visited another of your pages. The only field
available here is to select from a list of your published pages. For the user to see this section, they will have
to have previously visited the selected page. You can use this condition for [content for a user who visits a popular product page, but doesn’t convert](/docs/studio/developers/eCommerce/Content-for-a-non-converting-user-who-visits-a-popular-product-page).

## Visited Previously

![Previously Visited Section](/assets/studio/a786469b-6a15-442a-bd58-ae8c0105c8c3.jpg)

This true or false condition can be used to show a section to users based on their visit history. There are two options
for this condition:

* **Yes** - They have visited the site previously.
* **No** - They haven't visited the site previously.

You can use this condition to [provide a coupon code to users who visited your site multiple times but haven't converted](/docs/studio/developers/eCommerce/Provide-a-coupon-code-to-users-who-visited-your-site-multiple-times-without-converting).

## First Visit

![First Visit](/assets/studio/a8e9b979-f6ee-4848-8b56-fb5effecd13d.jpg)

This true or false condition can be used to show a section to users based on their visit history. There are two options
for this condition:

* **Yes** - This is the first time the user has been to the site.
* **No** - This is not the first time the user has been to the site.

You can use this condition to [provide a coupon code to users who visited your site multiple times but haven't converted](/docs/studio/developers/eCommerce/Provide-a-coupon-code-to-users-who-visited-your-site-multiple-times-without-converting)

## Total Visits

![Total Number of Visits](/assets/studio/1d5b5504-f98c-452f-82bd-7cdaa58f4d36.jpg)

This free text condition is used to show a section based on the total number of times that a user has been to a site. You can use this condition to [provide a coupon code to users who visited your site multiple times but haven't converted](/docs/studio/developers/eCommerce/Provide-a-coupon-code-to-users-who-visited-your-site-multiple-times-without-converting).

### Example

As an example, to show this section to users who have visited the site **at least twice** you should set this condition as:

* **Operator** --> **Greater Than or Equal**
* **Value** --> **2**

### Fields

The following table describes the fields that make up the **Total Visits** condition.

| Field | Description                                                                                                                                                                                                                                                                                                                |
| --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operator | This field is where you'd define the operator for this condition. The available options are **Exists**, **Equals**, **Greater Than**, **Less Than**, **Greater Than or Equal**, **Less Than or Equal**, **Is Between\***, **Not Exists**, **Not Equals**, **Not Greater Than**, **Not Less Than**, **Not Greater Than or Equal**, **Not Less Than or Equal**, **Is Not Between\***. |
| Value | This is the free text field where you'd define the values of the previously selected operators. Those marked with an asterisk (*) above have an additional value field that you'll need to define.                                                                                                                         |

## Submitted a Form

![Form Submission](/assets/studio/19118993-2a82-4034-8678-0bf619b52982.jpg)

This condition is used to show a section to a user who has submitted a specific form. The options available through the
drop down are any of the Studio forms you've created. You can use this condition to [remind users to use a coupon code](/docs/studio/developers/eCommerce/Reminding-users-to-use-a-coupon-code).

## Submitted any Form

![Form Submission History](/assets/studio/1c9a4ad4-1e70-47ca-afab-3ede0412c5c8.jpg)

This true or false condition can be used to show a section to users based on their form submission history. You can use this condition to [show content to users to users who previously interacted with a form](/docs/studio/developers/eCommerce/Show-content-to-users-to-users-who-previously-interacted-with-a-form).

There are two options for this condition:

* **Yes** - The user has submitted an Studio form.
* **No** - The user has not submitted an Studio form.

## Contact Exists

![Contacts in Studio Accounts](/assets/studio/c09d6d4d-4411-4438-83c6-9fce3fcfb3d1.jpg)

This true or false condition is used to show a section to users who are, or are not already contacts in your Studio
account. You can use this condition to:

* [Offer users a coupon code after form submission](/docs/studio/developers/eCommerce/Offering-users-a-coupon-code-after-form-submission)
* [Remind users to use a coupon code](/docs/studio/developers/eCommerce/Reminding-users-to-use-a-coupon-code).

There are two options for this condition:

* **Yes** - The user exists as a contact in Studio.
* **No** - The user does not exist as a contact in Studio.

## Contact

At the bottom of the conditions list there are a number of conditions that follow the contact.[data] format. These
conditions pull from property values stored on contact records in Studio.

Therefore, keep in mind that if a user hasn't previously submitted a form that collected this information, then it's
unlikely that the condition you set here will work as you intended. 

You can use this condition to [offer users a coupon code after form submission](/docs/studio/developers/eCommerce/Offering-users-a-coupon-code-after-form-submission)

The following table describes the available formats.

| Condition                                                                 | Description                                                                    |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| contact.id                                                                | The internal ID that was assigned to the user when the contact was created.    |
| first\_name                                                               | The first name that was provided when the contact was created.                 | 
| last\_name                                                                | The last name that was provided when the contact was created.                  | 
| full\_name |  The full name that was provided when the contact was created.                 |
| contact.title                                                             | The title that was provided when the contact was created.                      |
| contact.email                                                             | The email that was provided when the contact was created.                      |
| contact.phone                                                             | The phone number that was provided when the contact was created.               |
| contact.organization                                                      | The organization that was provided when the contact was created.               |
| contact.website                                                           | The website that was provided when the contact was created.                    |
| contact.address1                                                          | The address that was provided when the contact was created.                    |
| contact.address2                                                          | Additional address information that was provided when the contact was created. |
| contact.city                                                              | The city that was provided when the contact was created.                       |
| state                                                                     | The state that was provided when the contact was created.                      |
| zip                                                                       | The zip code that was provided when the contact was created.                   |
| country                                                                   | The country that was provided when the contact was created.                    |

### Fields

The following table describes the fields for contact.[data].

| Field | Description                                                                                                                                                                                                                     |
| --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operator | This drop down is where you'd select the operator for this condition. The available options are **Exists**, **Equals**, **Contains**, **Starts With**, **Ends With**, **Not Exists**, **Not Equal**, **Doesn't Contain**, **Doesn't Start With**, **Doesn't End With**. |
| Value | This is the free text field where you define the value of the contact data.                                                                                                                                                     |



