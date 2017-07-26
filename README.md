# Bandwidth V2 Messaging API

### About
The Bandwidth V2 Messaging API is an all new way to send and receive SMS, MMS, and Group Messages on the Bandwidth network. It works with your numbers you already have in the Number Management section of the Bandwidth Phone Number Dashboard.

### Getting Started

#### Set up your Application
* To get started, you'll want to head over to the [Bandwidth Phone Number Dashboard](https://dashboard.bandwidth.com/portal/report/) and set up an Application on your Location (SipPeer) that you want to use for HTTP Messaging. Specific documentation on this process is still in progress. You'll get an `applicationId` for the Application you created, which will be used when sending messages.

#### Sending Messages
* To send a message, `POST` to the [`/messages` endpoint](methods/createSingle.md)
* In the V2 Messaging API, messages are sent asynchronously. Message validation will happen after the server returns `202`. API clients should listen for HTTP callback events if they need to track message state after the initial `POST` request.

#### Callbacks and Delivery Receipts
* Callbacks will be sent to the Callback URL for the Application associated with the `from` number on the outgoing message.
* You will get a callback for any event related to that message. For example, you will get an HTTP callback if your message was sent, delivered, or blocked. In addition, you will get an event for any kind of Delivery Receipt that the destination carrier sends back, regarding the delivery of your message.
* For incoming messages sent to your numbers, a callback will also be received, notifying your Application of the incoming message. For group messages where you own multiple recipient phone numbers, you will receive a distinct event and `messageId` for each individual recipient.

#### Tags
* If there is a need to identify individual outbound messages, or correlate them with an ID in your own application, the `tag` field can be set to any string. The custom `tag` will be included in all callbacks for an outbound message.

#### API Credentials
* API Credentials work the same way they do in the V1 Messaging API. Use your API Token and Secret with Basic Auth when making API requests to send messages. [See here for more details](http://dev.bandwidth.com/security.html).
