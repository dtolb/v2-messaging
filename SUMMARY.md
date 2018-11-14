# Summary

## Overview
* [About](README.md)
* [Account Credentials](accountCredentials.md)
* [Postman Collection](postman.md)
* [Messaging API Concepts](concepts.md)
* [v1 → v2 Migration Guide](messaging2Migration.md)
* [Billing and MPS Guidelines](billingAndMpsGuidelines.md)

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
    * [2. Create subaccount (_site_)](apisetup.md#create-subaccount-site)
	* [3. Create location (_sippeer_)](apisetup.md#create-location)
	* [4. Enable SMS on Location (_sippeer_)](apisetup.md#enable-sms-on-location)
	* [5. Enable MMS on Location (_sippeer_)](apisetup.md#enable-mms-on-location)
	* [6. Assign Application to Location (_sippeer_)](apisetup.md#assign-application-to-location)
	* [7. Order Available Numbers](apisetup.md#order-numbers)
	* [8. Check Order Status](apisetup.md#check-order-status)
	* [9. Send Text Message](apisetup.md#sending-messages)
* [Video walkthrough](videosetup.md)

## Phone Number Management
* [Ordering Phone Numbers Overview](concepts/numberOrderingSummary.md)
* [GET Search For Phone Numbers](concepts/numberOrderingSummary.md#search-for-phone-numbers)
* [POST Order Phone Numbers](concepts/numberOrderingSummary.md#order-phone-numbers)
* [GET Fetch Order Info](concepts/numberOrderingSummary.md#get-order-info)
* [POST Disconnect a Phone Number](concepts/numberOrderingSummary.md#disconnect-phone-number)
* [GET Fetch Disconnect Info](concepts/numberOrderingSummary.md#get-disconnect-info)

## Application API & Setup
* [Applications Overview](applications/about.md)
* [POST Create Application](applications/postApplications.md)
* [GET List Applications](applications/getApplications.md)
* [GET Fetch Application info](applications/getApplicationsApplicationId.md)
* [PATCH Partial Update Application](applications/patchApplicationsApplicationId.md)
* [PUT Completely Update Application](applications/putApplicationsApplicationId.md)
* [DELETE Remove Application](applications/deleteApplicationsApplicationId.md)
* [GET List Associated Sippeers](applications/getApplicationsApplicationIdSippeers.md)

## Messaging API
* [Messages Overview](methods/sendMessages.md)
* [POST Send Message](methods/createSingle.md)
* [POST Send Group Message](methods/createGroup.md)

## Message Callbacks
* [About Message Events/Callbacks](events/messageEvents.md)
* [Incoming SMS/MMS Message](events/incomingSingle.md)
* [Incoming Group Message](events/incomingGroup.md)
* [Message Delivered](events/msgDelivered.md)
* [Message Failed](events/messageFailed.md)

## Error Codes & Responses
* [Message Error Codes](codes.md)
	* [Message Error Reporting](codes.md#error-reporting)
	* [Error Code Schema](codes.md#error-code-schema)
	* [Error Code Table](codes.md#error-codes)
		* [Bandwidth Detected Client Errors](codes.md#client-errors)
		* [Carrier Reported Client Errors](codes.md#carrier-client)
		* [Bandwidth Service Failures](codes.md#service-errors)
		* [Carrier Reported Service Failures](codes.md#carrier-service-errors)
		* [Carrier Errors with Ambiguous Cause](codes.md#carrier-ambiguous-errors)
* [400 - Bad Request](errors/badRequest.md)
* [401 - Unauthorized](errors/unauth.md)
* [403 - Forbidden](errors/forbidden.md)  
* [415 - Unsupported Content Type](errors/unsupportedContentType.md)
* [429 - Too Many Requests](errors/tooManyReq.md)

## SDKs
* [NodeJS](https://github.com/bandwidthcom/node-bandwidth#using-messaging-v2-api)
* [C#](https://github.com/bandwidthcom/csharp-bandwidth#messaging-20)
* [Ruby](https://github.com/bandwidthcom/ruby-bandwidth#messaging-20)
