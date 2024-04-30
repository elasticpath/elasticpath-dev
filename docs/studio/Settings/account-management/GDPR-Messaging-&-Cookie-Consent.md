---
title: GDPR Messaging and Cookie Consent
nav_label: GDPR Messaging and Cookie Consent
sidebar_position: 50
---

Within your account's ***Settings*** is the ability to enable ***GDPR Messaging***. Enabling this feature will display a message to your users that reads "By using our website you consent to the use of cookies". Following this message is a button that your users can click to consent to the use of cookies.

![Cookie Usage Consent](/assets/studio/image__3.png) 

## When a user clicks the "Okay" button two things happen:

1. It creates a cookie named "gdpr" with a value of "true"
2. It prevents this message from showing up again

## Customizing this message

It's not currently possible to customize this message, but the below script (if added to the bottom of the body via the steps shown in [Adding HTML, CSS, or JavaScript to All Pages](/docs/studio/Integrations/Adding-HTML-CSS-or-JavaScript-to-all-your-pages)) can be used to append some text and a link to the end of the messaging.

```
<script>  
window.onload = function () {  
const gdpr = document.querySelector('#gdpr span');  
gdpr.insertAdjacentHTML('afterend', '. <a href="#">How we use cookies.</a>');  
}  
</script>

```

Just make sure you customize replace the "#" with the URL you want to send your users to


