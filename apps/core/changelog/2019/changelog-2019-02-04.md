---
title: 'Changelog 2019-02-04'
date: '2019-02-04'
tags:
  - Carts & Orders
---
**Major** The architecture now incorporates Kubernetes.
- Successful request to orders/:ID/payments endpoint now returns information about the transaction which was created.
- Validation on files endpoint now checks the file parameter is passed, that it is an actual file and returns a 422 if it is not.
