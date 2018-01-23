# Summary

## Overview
* [About](README.md)
* [Account Credentials](accountCredentials.md)
* [Migration Guide](messaging2Migration.md)
* [Postman Collection](postman.md)

## Concepts
* [Messaging 2.0 Specifics](concepts.md)
* [Order Phone Numbers](concepts/numberOrderingSummary.md)
	* [Search For Phone Numbers](concepts/numberOrderingSummary.md#search-for-phone-numbers)
	* [Reserve Phone Numbers](concepts/numberOrderingSummary.md#reserving-phone-numbers))
	* [Order Phone Numbers](concepts/numberOrderingSummary.md#order-phone-numbers)


## Initial Account Setup
* [via UI](uisetup.md)
	* [1. Get your account ID](uisetup.md#get-your-account-id)
	* [2. Setup your Application](uisetup.md#setup-your-application)
	* [3. Create subaccount (_site_)](uisetup.md#create-subaccount-site)
	* [4. Create location (_sippeer_) and assign the application](uisetup.md#create-location-sippeer-and-assign-the-application)
	* [5. Order Phone numbers to location (_sippeer_)](uisetup.md#order-numbers-to-location)
	* [6. Sending Messages](uisetup.md#sending-messages)
* [via API](apisetup.md)
	* [1. Create application](apisetup.md#create-application)
	* [2. Create location (_sippeer_)](apisetup.md#create-location)
	* [3. Enable SMS on Location (_sippeer_)](apisetup.md#enable-sms-on-location)
	* [4. Enable MMS on Location (_sippeer_)](apisetup.md#enable-mms-on-location)
	* [5. Assign Application to Location (_sippeer_)](apisetup.md#assign-application-to-location)
	* [6. Order Available Numbers](apisetup.md#order-numbers)
	* [7. Check Order Status](apisetup.md#check-order-status)
	* [8. Send Text Message](apisetup.md#sending-messages)
* [Video walkthrough](videosetup.md)

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
* [About Messages](methods/sendMessages.md)
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