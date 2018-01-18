# Summary

## Overview
* [About](README.md)
* [Migration Guide](messaging2Migration.md)
* [Concepts](concepts.md)

## Account Setup
* [via UI](uisetup.md)
* [via API](apisetup.md)
* [video walkthrough](videosetup.md)

## Application Setup
* [About Applications](applications/about.md)
* [Create Application](applications/postApplications.md)
* [List Applications](applications/getApplications.md)
* [Fetch Application info](applications/getApplicationsApplicationId.md)
* [Partial Update Application](applications/patchApplicationsApplicationId.md)
* [Completely Update Application](applications/putApplicationsApplicationId.md)
* [Remove Application](applications/deleteApplicationsApplicationId.md)
* [List Associated Sippeers](applications/getApplicationsApplicationIdSippeers.md)

## Send Messages
* [Send Messages](methods/sendMessages.md)
* [Single Message](methods/createSingle.md)
* [Group Message](methods/createGroup.md)

## Message Callbacks
* [About Message Events/Callbacks](events/messageEvents.md)
* [Incoming SMS/MMS Message](events/incomingSingle.md)
* [Incoming Group Message](events/incomingGroup.md)
* [Message Sent](events/outSent.md)
* [Message Delivered](events/msgDelivered.md)
* [Message Failed](events/messageFailed.md)

## Api Error Response
* [400 - Bad Request](errors/badRequest.md)
* [401 - Unauthorized](errors/unauth.md)
* [403 - Forbidden](errors/forbidden.md)
* [429 - Too Many Requests](errors/tooManyReq.md)

## Message Error Codes
* [Error Codes](codes.md)

## SDKs
* [NodeJS](https://github.com/bandwidthcom/node-bandwidth#using-messaging-v2-api)
* [C#](https://github.com/bandwidthcom/csharp-bandwidth#messaging-20)
* [Ruby](https://github.com/bandwidthcom/ruby-bandwidth#messaging-20)