---
title: Providing Coupon Code to Visiting Users
nav_label: Providing Coupon Code to Visiting Users
sidebar_position: 50
---

In this guide you'll learn how to leverage [Conditions](/docs/studio/content/advanced-page-editing/Using-Conditional-Content) to
show a coupon code to users who have visited your site multiple times without converting.

1. First, you'll need to identify where on your landing page you want to make this offer. In this example, we're using a
   banner component that sits above our product component.
2. Next a decision needs to be made on how you want to present the coupon code. Is there any information that you want
   to collect from the user before they get the coupon code? Below are examples of two different ways that you can
   approach this:

    * **Option #1** - Give users the coupon code without any strings attached.

  ![Coupon Code Provision Conditions](/assets/studio/screely-1656543688380.png)

    * **Option #2** - Send users to a page with a dedicated form for collecting user information, and exchanging it for
      a coupon code. See [Offering users a coupon code after form submission](/docs/studio/developers/eCommerce/Offering-users-a-coupon-code-after-form-submission)
      for more details on how to set this up in your account.

  ![Coupon Code Provision Post Form Submission ](/assets/studio/screely-1656543582229.png)

3. Now that you've made a decision about how you want to present the coupon code, it's time to use conditions to ensure
   that only non-converting users who have previously visited can use this coupon.

   However, just like there are multiple ways to present the coupon code; there are also multiple ways to configure
   conditions to achieve the same result. Below are a couple examples of how to achieve the same result using different
   condition combinations:

   **"Purchased any product?" & "Total visits"**

   ![Coupon Code Provision Conditions](/assets/studio/screely-1656541607128.png)

   **Purchased any product?** = *no*
   **Total visits** > *1*

   **"Purchased any product?" & "First visit"**

   ![Coupon Code Provision Conditions](/assets/studio/screely-1656541574205.png)

    - **Purchased any product?** = *no*
    - **First visit** = *no*

   **"Purchased any product?" & "Visited previously?"**

   ![Coupon Code Provision](/assets/studio/screely-1656546022847.png)

    - **Purchased any product?** = *no*
    - **Visited previously?** = *yes*

## Alternatives to "Purchased any product?"

In any of the above examples, the "Purchased any product?" condition could be substituted with the "**Total value of all
purchases**" condition configured two different ways:

![Coupon Code Provision Conditions](/assets/studio/screely-1656547191437.png)

    *not exists*

![Coupon Code Provision Conditions](/assets/studio/screely-1656547175802.png)

    > *0*

Regardless of the configuration option that you choose or the way you want users to claim the coupon code, the end
result should be the same; users who have visited your site multiple times but have not converted will be given the
opportunity to claim a discount to use with their first transaction.
