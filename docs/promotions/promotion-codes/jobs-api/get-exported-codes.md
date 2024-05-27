---
title: Get Promotion Code Exported File
nav_label: Get Promotion Code Exported File
sidebar_position: 2
---

## `GET` GET Promotion Code Exported File

```http
https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs/:jobID/file
```

Retrieves exported codes in a CSV format.

## Parameters

### Path parameters

| Name            | Required | Type     | Description                          |
|:----------------|:---------|:---------|:-------------------------------------|
| `promotionID` | Required | `string` | The unique identifier of a promotion. |
| `jobID` |  Required | `string` | The unique identifier of a job associated with the file. |

### Headers

| Name            | Required | Type     | Description                                         |
| --------------- | -------- | -------- | --------------------------------------------------- |
| `Authorization` | Required | `string` | The Bearer token required to get access to the API. |

## Request Example - Curl

```bash
curl -X GET https://useast.api.elasticpath.com/v2/promotions/:promotionID/jobs/:jobID/file \
     -H "Authorization: Bearer XXXX" \
     -H "content-type: application/json" \
```

## Response Example

`200 OK`

```json
{
    "href": "https://d1devz1tpljobd.cloudfront.net/85ea6cac-589a-4141-80d0-42b91aae73a7/8ece110d-e5d5-40b8-9f6d-bed7fc722faa/194be255-538e-4afe-b387-4f886e59e708_20230911_182858_codes.csv?Expires=1694476263&Signature=tVkhUNH~2wNHJYugPFVi9DlBygCu21GpFvJGZc3zJVOJBSolAPw2~tyvVihA9XMunsZ~hzqZjCs1OvX2t3NRuIrAFxG1E9SmBv~3zyfAOibro0OMgnkcf1pRD2HZmzS-Li7mhH-htWJxkdHv0eY1SojjPVJ2Gh~eoA6T-1sVHZO~krx6V2pTmb2BpXN3ZImuO0OdUsvQ~D4JSbK1gXpQ3vOuoE~9~FClbCRnCJubM5uIlIB84~dzZ~lXDUmrS2QTIN9jPQB5F6kzfS8TzpdplRqSPhrzMDeDscvoxrmO5oz4As6-fhTfpczPKf~pNEGCmzWjwGyq6ghCCuT1cl-QnA__&Key-Pair-Id=K30ZMBZPDF8NWA"
}
```

## Errors

The following error is returned when you export a file while its associated job is still processing:

```json
{
    "errors": [
        {
            "status": "422",
            "title": "Unprocessable Entity",
            "detail": "Job has no file to download. Job status: processing"
        }
    ]
}
```
