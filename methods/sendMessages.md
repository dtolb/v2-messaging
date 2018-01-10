# Bandwidth Messaging 2.0

The Messages resource lets you send both single SMS/MMS messages as well as Group SMS/MMS Messages.

### Base URL

`https://api.catapult.inetwork.com/v2/users/{userId}/messages`

### Capabilities

| Verb                           | Path                                             | about                                  |
|:-------------------------------|:-------------------------------------------------|:---------------------------------------|
| <code class="post">POST</code> | [`/v2/users/{userId}/messages`](createSingle.md) | Send a text message to a single number |
| <code class="post">POST</code> | [`/v2/users/{userId}/messages`](createGroup.md)  | Send a text message to a group MMS     |


### Receive Incoming Messages
To recieve [events/callbacks](../events/messageEvents.md) for incoming and outgoing text messages (both SMS and MMS). You need to have:

* A [Bandwidth Application](../getStarted.md) configured to send callbacks to your server.

