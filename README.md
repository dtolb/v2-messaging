# Bandwidth Messaging 2.0 Beta

<h3> 👉 <a href="https://go.bandwidth.com/messaging-v2-api.html">Request Access to Beta</a> 👈</h3>

The Messaging 2.0 API is an all new way to send and receive SMS, MMS, and Group Messages on the Bandwidth network. It works with your numbers you already have in the Number Management section of the Bandwidth Phone Number Dashboard.

<div class="alert alert--general"><p>Messaging 2.0 Does not store <b>ANY</b> messages or records for fetching later. If you need message history you need to implement a storage solution that meets your needs.</p></div>

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

## Phone Number Management Overview

| Guide                                                               | Description                                                                                              |
|:--------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| [Search and order Phone numbers](concepts/numberOrderingSummary.md) | Learn the basics for searching and ordering phone numbers using Bandwidth's Phone Number Dashboard & API |