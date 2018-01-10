# Message Events

These events are specific to Bandwidth Messaging 2.0.

## Callbacks and Delivery Receipts
* Callbacks will be sent to the Callback URL for the Application associated with the `from` number on the outgoing message.
* You will get a callback for any event related to that message. For example, you will get an HTTP callback if your message was sent, delivered, or blocked. In addition, you will get an event for any kind of Delivery Receipt that the destination carrier sends back, regarding the delivery of your message.
* For incoming messages sent to your numbers, a callback will also be received, notifying your Application of the incoming message. For group messages where you own multiple recipient phone numbers, you will receive a distinct event and `messageId` for each individual recipient.

| Event                                      | Description                                                                                                            |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| [Incoming Group Message](incomingGroup.md) | Bandwidth sends this event for each incoming group mesasge                                                             |
| [Incoming Text Message](incomingSingle.md)  | Bandwidth sends this event for each incoming text message                                                              |
| [Message Delivered](msgDelivered.md)       | Bandwidth sends this event when the text is _delivered_ to the downstream carrier. **ONLY FOR MESSAGES WITHOUT MEDIA** |
| [Outbound Messaging Sent](outSent.md)      | Bandwidth sends this event when the outbound message has been sent to the downstream carrier                           |
| [Group Message Rejected](groupReject.md)   | Bandwidth sends this event when the message contains was unable to be delivered                                        |
