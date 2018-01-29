# Messaging 2.0 Concepts

There are a few concepts that are important to understand how Bandwidth's new messaging API functions:

1. [Message Storage](#manage-storage)
2. [Message Callbacks](#message-callbacks)
3. [Message Creation](#message-creation)

## Message Storage IE `GET /messages` {#manage-storage}

Messaging 2.0 does not keep _any_ records to fetch later.  If you need to keep track of delivered, error-ed, received messages after you receive the corresponding [callback event](events/messageEvents.md), you **MUST** store the events in the data-store of your choice.

Once we have successfully delivered the [callback event](events/messageEvents.md) and receive an `HTTP 2xx` response, Bandwidth can no longer provide any detail about that message.

## Message Callbacks {#message-callbacks}

As the messaging 2.0 API **does not** offer message storage or detailed messaging records, Bandwidth will attempt to deliver _every_ callback until your server replies with a `HTTP 2xx` status code.  If the callback request times out, or your server returns a code less than `HTTP 2xx` or greater than `HTTP 3xx` Bandwidth will try to deliver the callback multiple times over the next 24 hours.

After 24 hours, if your server has not returned a `HTTP 2xx` code, Bandwidth will no longer try to send the callback.

## Message Creation/Acceptance (`HTTP 201` vs `HTTP 202`) {#message-creation}

The messaging 2.0 API works off of an internal queuing system.  As such, when you <code class="post">POST</code> to the `v2/.../messages` to [create a new message](methods/sendMessages.md), Bandwidth will reply with an `HTTP 202 - Accepted`.  This indicates that the message has been placed on the queue

As the message progresses through the internal system you will receive a  a [Message Delivered](events/.md) callback when the message has been handed off to the downstream carrier.

If at any-point through the process the message fails, you will receive a detailed [Message Failed](events/messageFailed.md) callback with an [error code](codes.md) describing the reason for failure.

### Important note about MMS and Group Messages

MMS and Group messages **don’t** currently support delivery receipts. However, you will still receive a message delivered event when the message is sent. For _only MMS and Group Messages_ this means that your message has been handed off to the Bandwidth core network, but has not been confirmed at the downstream carrier. We are actively working to support true delivery receipts for the v2 Messaging API.