# Message Events

These events are specific to Bandwidth Messaging 2.0.

## Callbacks and Delivery Receipts
* Callbacks will be sent to the Callback URL for the Application associated with the `from` number on the outgoing message.
* You will get a callback for any event related to that message. For example, you will get an HTTP callback if your message was sent, delivered, or blocked. In addition, you will get an event for any kind of Delivery Receipt that the destination carrier sends back, regarding the delivery of your message.
* For incoming messages sent to your numbers, a callback will also be received, notifying your Application of the incoming message. For group messages where you own multiple recipient phone numbers, you will receive a distinct event and `messageId` for each individual recipient.
* You **MUST** Reply with a `HTTP 2xx` status code for _every_ callback/delivery receipt.  Bandwidth will retry _every_ callback over the next 24 hours until a `HTTP 2xx` code is received for the callback.  After 24 hours, Bandwidth will no longer try to send the callback
* Because we guarantee "at least once delivery" of events, it is possible (but not common) to receive duplicate message events. Your server should be able to handle duplicates.

| Event                                      | Description                                                                                                            |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| [Incoming Group Message](incomingGroup.md) | Bandwidth sends this event for each incoming group mesasge                                                             |
| [Incoming Text Message](incomingSingle.md)  | Bandwidth sends this event for each incoming text message                                                              |
| [Message Delivered](msgDelivered.md)       | Bandwidth sends this event when the text is delivered to the downstream carrier. **ONLY FOR NON-MMS MESSAGES** |                       |
| [Message Failed](messageFailed.md)   | Bandwidth sends this event when the message contains was unable to be delivered                                        |
