---
title: Setting Up Custom Domain
nav_label: Setting Up  Custom Domain
sidebar_position: 150
---

## Subscription Note:

If you're not on a paying plan you will not see the CNAME record for adding an SSL or the A record for redirecting the
root domain. Due to this, you'll only see one DNS record.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zPvurjMLqDI" title="Setting Up Custom Domain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

To add a custom domain to your Studio account, the first thing you need to do is to **purchase the domain** that you
want to use. There are plenty of marketplaces out there where you can do this; for
example  [Google Domains](https://domains.google.com), GoDaddy, or Namecheap

Once you own the domain that you want to set up, you'll need to decide whether you want to host it on the www-version of
your domain, or an alternate subdomain (it's not possible to set up both). Once you've made that decision, use the below
table to walk you through the remainder of the steps:

[subdomain].example.com www.example.com

Follow the below steps to add your domain to Studio with a custom **subdomain**:

1. Open **Studio > Settings,** scroll down to **Domain** and select ****Custom domain****

   ![Custom Domain](/assets/studio/1-dm.png)

2. From here, you'll be prompted to enter a **Domain name**. This is where you specify that you want to use a Subdomain.

   For the purposes of this demonstration ***about.unstacksupport.com***, was used, but the "about" portion could
   technically be replaced with any string.

   ![Domain Name](/assets/studio/2A.png)

3. Once you've entered your domain name, the slide-in menu will update and several new options will be available;
   including **Add SSL**.

   Clicking this button prompts our system to generate an SSL certificate for you, which in-turn allows you to host your
   domain at ***https*** rather than ***http***. It does take a couple seconds to generate the certificate, so please
   don't
   refresh or navigate away from that page once you initiate this process.

   :::note
   This option is only available on our paying plans, so if you're on our free plan this won't be an option.
   :::

   ![Adding SSL](/assets/studio/3A.png)

4. At this point all that's left is to update your DNS provider with the records that were generated via the previous
   steps.

    If the non-subdomain version of your domain is used to host another site or application, **DO NOT set up the A record with your DNS provider.** Doing so could inadvertently break the configuration for the site or application *not* built on Studio.

   ![Required Action](/assets/studio/4A.png)

5. Once the records have been added to your DNS provider properly:

    - The domain you added should be visible in the top-left of your Studio account.
    - In **Studio > Settings** your custom domain should show as **ACTIVE** and the individual DNS records should show as "properly configured"

   ![Active Custom Domain](/assets/studio/6A.png)
