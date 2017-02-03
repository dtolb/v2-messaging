# Bandwidth v2 Messaging Preview

## Quick Start
1. [Setup Application](application.md)
2. [Send Text Message](methods/createSingle.md)
3. Receive [Sent Event](events/outSent.md) then [Delivered Event](events/msgDelivered.md)

### About
In the V2 version of the Messaging API, messages are sent asynchronously. Message validation will happen after the server returns `202`. API clients should listen for HTTP callback events if they need to track message state after the inital `POST` request.

The request body for HTTP callbacks regarding message state changes will follow the same format as the response body for a `POST` or `GET` on a message.

Callbacks will be sent to the Callback URL for the Application associated with the `from` number on the outgoing message.

If there is a need to identify individual messages, or correlate them with an ID in your application, the `tag` field can be set to any string. The custom `tag` will be included in all callbacks for this message.
