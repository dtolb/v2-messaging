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

### SDK Preview Branches

#### C#

[Github](https://github.com/bandwidthcom/csharp-bandwidth/pull/63)

```csharp
// using v2 api
var message = await client.V2.Message.SendAsync(new MessageData{From="+1234567890", To=new[]{"+1234567891"}, Text="Hello"});

// using v1 api
var messageId = await client.Message.SendAsync(new MessageData{From="+1234567890", To="+1234567891", Text="Hello"});
```

#### Ruby

[Github](https://github.com/bandwidthcom/ruby-bandwidth/pull/13)

```ruby
message = Bandwidth::V2::Message.create({:from => "+19195551212", :to => ["+191955512142"], :text => "Test"})
```
