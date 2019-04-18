# Bandwidth Messaging v2

**PLEASE READ**: This is the home for customers using Bandwidth's Messaging v2. If you don't know which version of the messaging API to use, or if you are using our free trial, you're probably on our Messaging v1 API [(see docs)](https://dev.bandwidth.com/ap-docs/methods/restApi.html). Interested in our Messaging v2 API? Request access [here](https://go.bandwidth.com/messaging-v2-api.html).

<div class="alert alert--general"><p>The base URL for the Messaging API changed on April 15th, 2019. The new base URL is <code>https://messaging.bandwidth.com/api/v2</code> and replaced the deprecated URL of <code>https://api.catapult.inetwork.com/v2</code>. The deprecated URL will be taken offline June 13th, 2019. Please update your system to use the new URL as soon as possible.</p></div>

<div class="alert general medium"><p>Take note that Bandwidth's Messaging v2 does not store message content or records for fetching later. You may access MDR records using our Dashboard Portal, described <a href="https://support.bandwidth.com/hc/en-us/articles/226661127-How-to-Download-Billing-Detail-Records-BDRs-and-Message-Detail-Records-MDRs-">here</a>. If you need message history you need to implement a storage solution that meets your needs.</p></div>

## Account Configuration and Overview

| Guide                                               | Description                                                                                                                     |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Account Credentials](accountCredentials.md)        | Learn about how to authenticate to both Bandwidth's Phone Number API and Messaging API                                          |
| [Messaging Concepts](concepts.md)                   | Learn about the core concepts that power the Messaging API                                                                      |
| [v1 → v2 Migration Guide](messaging2Migration.md)   | Learn about the differences between the `v1` and `v2` Messaging API                                                             |
| [Account Setup using the UI](uisetup.md#top)        | Walks through the **UI** on how to setup your Bandwidth Phone Number account for use with the Messaging API.                    |
| [Account Setup using the API](apisetup.md#top)      | Walks through the **API** on how to setup your Bandwidth Phone Number account for use with the Messaging API.                   |
| [Applications API Overview](applications/about.md)  | Learn how to configure your account to send HTTP Callbacks to your server                                                       |
| [Messaging API Overview](methods/sendMessages.md)   | Learn how to format and send messages                                                                                           |
| [Message Events/Callbacks](events/messageEvents.md) | Learn about the different HTTP Callbacks Bandwidth will send to the URL configured in your [application](applications/about.md) |

## Messaging Overview

| Guide                                               | Description                                                                                                                     |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Messaging API Overview](methods/sendMessages.md)   | Learn how to format and send messages                                                                                           |
| [Message Events/Callbacks](events/messageEvents.md) | Learn about the different HTTP Callbacks Bandwidth will send to the URL configured in your [application](applications/about.md) |
| [Message Error Codes](codes.md)                     | Learn about the different error codes associated with a [message failure event](events/messageFailed.md)                        |

## Media Overview

| Guide                                               | Description                                                                                                                     |
|:----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| [Media API Overview](media/about.md)   | Learn how to upload, retrieve, delete and list media 

## Phone Number Management Overview

| Guide                                                               | Description                                                                                              |
|:--------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| [Search and order Phone numbers](concepts/numberOrderingSummary.md) | Learn the basics for searching and ordering phone numbers using Bandwidth's Phone Number Dashboard & API |
