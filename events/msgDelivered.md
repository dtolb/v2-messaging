{% method %}
# Message Delivered Event
In order to receive message events, you need to ensure you have set up your application to send callbacks to your server's URL.

{% raw %}

<aside class="alert general">
<p><b>
IMPORTANT NOTE ABOUT MMS AND GROUP MESSAGES!
</p></b>
MMS and Group messages <b>don’t</b> currently support delivery receipts. However, you will still receive a message delivered event when the message is sent. For only MMS and Group Messages this means that your message has been handed off to the Bandwidth core network, but has not been confirmed at the downstream carrier. We are actively working to support true delivery receipts for the v2 Messaging API.
</aside>

{% endraw %}

### Parameters
| Parameter             | Type     | Description                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string` | The Event type                                                                                                                                                                                                                                                                                                                                                      |
| time                  | `array`  | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                      |
| description           | `string` | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                        |
| to                    | `string`  | The destination number for an outbound message receipt                                                                                                                                                                                                                                                                                                        |
| message               | `string` | Any string, it will be included in the callback events of the message.                                                                                                                                                                                                                                                                                              |
| message.id            | `string` | The unique ID of this message                                                                                                                                                                                                                                                                                                                                       |
| message.owner         | `string` | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to. |
| message.time          | `string` | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                          |
| message.direction     | `string` | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                      |
| message.to            | `array`  | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                  |
| message.from          | `string` | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                          |
| message.text          | `string` | The text content of the message                                                                                                                                                                                                                                                                                                                                     |
| message.applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                            |
| message.media         | `array`  | A list of URLs to include as media attachments as part of the message                                                                                                                                                                                                                                                                                               |
| message.tag           | `string` | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                  |
| message.segmentCount  | `int`    | This indicates the number of segments the original message from the user is broken into before sending over to career networks                                                                                                                                                                                                                                      |

{% common %}
### Message delivered to carrier

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: bandwidth-api

[
  {
    "type"          : "message-delivered",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "Message delivered to carrier",
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
          "+12345678903"
        ],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "owner"         : "+12345678902",
      "direction"     : "in",
      "segmentCount"  : 1
    }
  }
]
```

{% endmethod %}
