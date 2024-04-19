---
title: Reminding Users of Coupon Code Usage
nav_label: Reminding Users of Coupon Code Usage
sidebar_position: 60
---

In the below guide we'll use [Conditional Content](/docs/studio/content/advanced-page-editing/Using-Conditional-Content) to
remind users who claimed a coupon code but haven't yet converted, that they have an unused discount available to them.

1. First, as this is a continuation of our other guide, 
   [Offering users a coupon code after form submission](/docs/studio/developers/eCommerce/Offering-users-a-coupon-code-after-form-submission), 
   make sure you've taken a moment to review the material covered thus far.
2. Next you'll need to find a good place for this reminder to live on your landing page. Below you'll see that a banner
   component has been added above the product component on our landing page.

   ![Coupon Code Reminder](/assets/studio/screely-1656539922839.png)

   As you can see in this screenshot, we're using the placeholder {{contact.first\_name}} in our banner make the
   reminder more personal. For more information on placeholders, check out
   our [Dynamic Text Content](/docs/studio/content/advanced-page-editing/Using-Dynamic-Text-Content).

3. Now that we've got our banner created, we need to add three conditions to ensure that only users who have filled out
   our "Email Signup -> Discount Code" form and who have not yet made a purchase, can see this section. These conditions
   are as follows:

    * **Submitted a form...** = *Email Signup -> Discount Code*
    * **Contact exists?** =*yes*
    * **Purchased any** **product**? =*no*

   ![Coupon Code Provision Conditions](/assets/studio/screely-1656540614504.png)

By setting the conditions for the section in this way, you're effectively hiding the section from users who haven't
claimed their coupon code via your email signup form.
