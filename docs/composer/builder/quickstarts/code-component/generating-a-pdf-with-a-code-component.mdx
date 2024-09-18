---
title: Generating a PDF with a Code Component
nav_label: Generating a PDF with a Code Component
sidebar_position: 20
---

In this quickstart we'll write a short code component snippet that references some JSON data, and outputs a rendered PDF file.
We'll cover how to import external libraries in a code component, and how to output binary data (like a PDF file) from a code component.

For this example, assume that our integration receives a list of rocket launches that have occurred recently in JSON format:

```json
[
  {
    "rocketName": "Deep Space 9",
    "launchTime": "2020-10-27T20:29:46.139Z",
    "launchSupervisor": "Robert Smith",
    "launchNotes": "Rocket was launched into orbit where it will remain for several months."
  },
  {
    "rocketName": "Voyager",
    "launchTime": "2020-10-27T21:34:15.229Z",
    "launchSupervisor": "Sally Smith",
    "launchNotes": "Rocket launched without a hitch. Thrusters were retrieved 30 minutes after launch."
  }
]
```

We would like to generate PDF files from this data with launch information, one launch per page, for managers to print and read through.

## Importing external libraries

Today we'll use the [PDF-LIB](https://www.npmjs.com/package/pdf-lib) library to render our PDF.
To do that, let's add the following to the top of a new code component in our integration:

```javascript
const {
  PDFDocument,
  StandardFonts,
} = require("pdf-lib@1.11.2/dist/pdf-lib.js");
```

It's wise to pin requirements to known working versions.
Since we're testing our integration with PDF-LIB version 1.11.2, we'll select that specific version.
If we omitted the version, our integration would import whatever latest version is available.

Adding this `require()` line to the top of our code component will cause the code component to [dynamically import](/docs/composer/builder/components/code-component-usage#adding-dependencies-to-a-code-component) the PDF-LIB library as a dependency.

## Writing our code component snippet

Next, we'll write the code that generates a PDF.
Let's first test that we can generate a blank PDF file:

```javascript
const { PDFDocument } = require("pdf-lib@1.17.1/dist/pdf-lib.js");

module.exports = async (context, stepResults) => {
  const doc = await PDFDocument.create();
  const pdfBytes = await doc.save();
  return { data: pdfBytes, contentType: "application/pdf" };
};
```

If we run this code component and look at step outputs, we see that our code component generated a 583 byte binary file.
By adding a **Save File** step after the code component to GCP Storage, and we can write that blank file out to GCP storage to verify that it looks like we'd expect.
You can choose to write the file out to Amazon S3, Azure, an SFTP share, DropBox, etc... your choice.

We now have a blank PDF written out.
What's left to do is add some text to the PDF based on the data that was presented to our integration's webhook:

```javascript
const {
  PDFDocument,
  StandardFonts,
} = require("pdf-lib@1.17.1/dist/pdf-lib.js");

module.exports = async (context, stepResults) => {
  // Pull in data from the webhook trigger payload
  const rocketLaunches = stepResults.integrationTrigger.results.body.data;

  // Generate a PDF Document
  const doc = await PDFDocument.create();

  // Embed the Times Roman font
  const timesRomanFont = await doc.embedFont(StandardFonts.TimesRoman);

  // Loop over each rocket launch, adding a page to our document for each one
  rocketLaunches.forEach((rocketLaunch) => {
    const {
      rocketName,
      launchTime,
      launchSupervisor,
      launchNotes,
    } = rocketLaunch;

    // Create a new page for each launch
    const page = doc.addPage();
    const { width, height } = page.getSize();
    const _launchTime = new Date(launchTime).toLocaleString();

    // Print information about the launch
    page.drawText(`Rocket: ${rocketName}`, {
      x: 30,
      y: height - 120,
      size: 30,
      font: timesRomanFont,
    });

    page.drawText(`Launch Time: ${_launchTime}`, {
      x: 30,
      y: height - 150,
      size: 12,
      font: timesRomanFont,
    });

    page.drawText(`${launchSupervisor}: ${launchNotes}`, {
      x: 30,
      y: height - 166,
      size: 12,
      font: timesRomanFont,
    });
  });

  // Get PDF file as a file Buffer
  const pdfBytes = await doc.save();

  // Return a PDF file with proper MIME type
  return { data: pdfBytes, contentType: "application/pdf" };
};
```

Note the format of the object that is returned from this code component:

```javascript
return { data: pdfBytes, contentType: "application/pdf" };
```

The return object specifies both a `data` property that is a file `Buffer`, and a `contentType` specifying the MIME type of the file being returned.

If we run a test again, we can see that a two-page PDF is being generated with formatted content from the webhook payload:

![Sample PDF output file from webhook payload](/assets/final-product.png)

## Further reading

That's it!
With just about 40 lines of code (if you omit comments and blank lines) we have a code component that renders PDFs.

For more information on code components checkout the [code component usage](/docs/composer/builder/components/code-component-usage) page.
