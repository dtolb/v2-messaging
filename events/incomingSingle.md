{% method %}
# Incoming Text Message Event
In order to receive text messages events, you need to ensure you have set up your application to send callbacks to your server's URL.

### Parameters
| Parameter             | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:----------------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string` | The Event type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| time                  | `array`  | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| description           | `string` | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| to                    | `array`  | The destination number for an outbound group message receipt                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| message               | `string` | Any string, it will be included in the callback events of the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| message.id            | `string` | The unique ID of this message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| message.owner         | `string` | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to.                                                                                                                                                           |
| message.time          | `string` | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| message.direction     | `string` | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| message.to            | `array`  | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                                                                                                                                                                            |
| message.from          | `string` | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| message.text          | `string` | The text content of the message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| message.applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| message.media         | `array`  | A list of URLs to include as media attachments as part of the message. <br> Using the [v1 media api](../../methods/media/getMediaMediaName.md) you can download the media **WITHIN 30 DAYS** <br><br> The URL will look something like: <br> `https://api.catapult.inetwork.com/v1/users/{userId}/media/{messageId}/{index}/{filename}` <br><br> Where `messageId` is the ID of the incoming message that had the media, `index` is the index of that media in the message (starting from `0`) and `filename` is the original filename |
| message.tag           | `string` | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

{% common %}
### Example 1 of 2: Incoming text message with single media

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"        : "message-received",
    "time"        : "2016-09-14T18:20:16Z",
    "description" : "Incoming message received",
    "to"          : "+12345678902",
    "message"     : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : ["+12345678902"],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "media"         : [
        "https://api.catapult.inetwork.com/v1/users/{userId}/media/14762070468292kw2fuqty55yp2b2/0/bw.png"
        ],
      "owner"         : "+12345678902",
      "direction"     : "in"
    }
  }
]
```

{% common %}
### Example 2 of 2: Incoming text message with multiple media

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"        : "message-received",
    "time"        : "2016-09-14T18:20:16Z",
    "description" : "Incoming message received",
    "to"          : "+12345678902",
    "message"     : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : ["+12345678902"],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "media"         : [
        "https://api.catapult.inetwork.com/v1/users/{userId}/media/14762070468292kw2fuqty55yp2b2/0/bw.png",
        "https://api.catapult.inetwork.com/v1/users/{userId}/media/14762070468292kw2fuqty55yp2b2/1/bandwidth_logo.png",
        "https://api.catapult.inetwork.com/v1/users/{userId}/media/14762070468292kw2fuqty55yp2b2/2/Bandwidth_Contact.png"
      ],
      "owner"         : "+12345678902",
      "direction"     : "in"
    }
  }
]
```

{% endmethod %}
