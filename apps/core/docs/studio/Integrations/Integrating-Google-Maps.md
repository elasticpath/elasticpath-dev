---
title: Integrating Google Maps
nav_label: Google Maps
sidebar_position: 130
---

With Studio's custom-code sections, embedding a Google Map is a breeze.

1. Firstly, pull up the location in Google Maps that you're looking to embed into a page. Once you've found the
   location, click "Share" and switch the share option from "Send a link" to "Embed a map". Here is where you determine
   the size of your embed and where you grab the embed code.

   ![Embedding Map](/assets/studio/screely-1645217251546.png)
   ![Share Google Map](/assets/studio/screely-1645217183355.png)

   **Example Embed Code**

    ```
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4740464302863!2d-87.62549794817465!3d41.88266117300439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca687332bf5%3A0x64d3fefce3a4a51!2sCloud%20Gate!5e0!3m2!1sen!2sus!4v1645217572958!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
   ```

2. Next, open the editor for the page you'd like to add the embed to and add a *custom-code* section. This can either be
   the standard **Custom Code** section, or any other section that has a custom code block.

   ![Custom code](/assets/studio/screely-1645218716524.png)

3. Paste the embed script you copied from Google Maps into that custom code block and preview the page; you should now see
the Google Maps embed appear on your page!

![Embedded Google Maps](/assets/studio/screely-1645218656707.png)
