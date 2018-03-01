{% method %}

## Send SMS or MMS Message to Single Phone Number

Send a text message or picture message.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v2/users/{userId}/messages`

### Tags
* If there is a need to identify individual outbound messages, or correlate them with an ID in your own application, the `tag` field can be set to any string. The custom `tag` will be included in all callbacks for an outbound message.

### Supported Parameters
| Parameter     | Type                                                                  | Description                                                                                                                                                                                                                              | Mandatory |
|:--------------|:----------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| from          | `string`                                                              | One of your telephone numbers the message should come from (must be in E.164 format, like +19195551212).                                                                                                                                 | Yes       |
| to            | `string`<br>**-OR-**<br>`array` of `1` (one) `string`                 | The phone number the message should be sent to (must be in E.164 format, like `+19195551212`). <br><br> Example: <br> `"+19195551212"` <br> **-OR-**<br> `["+19195551212"]` <br><br> **If you supply more than one number, it will be sent as a group message.** | Yes       |
| text          | `string`                                                              | The contents of the text message (must be 2048 characters or less).                                                                                                                                                                      | Yes       |
| applicationId | `string`                                                              | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                 | Yes       |
| media         | `array`                                                               | A list of URLs to include as media attachments as part of the message.                                                                                                                                                                   | No        |
| tag           | `string`                                                              | Any string which will be included in the callback events of the message.                                                                                                                                                                 | No        |

{% common %}

### Example 1 of 3: Send A Single Text Message

{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://api.catapult.inetwork.com/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.catapult.inetwork.com/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body:
   {
     to            : [ '+12345678902'],
     from          : '+12345678901',
     text          : 'Hey, check this out!',
     applicationId : '93de2206-9669-4e07-948d-329f4b722ee2',
     tag           : 'test message'
   },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"            : "14762070468292kw2fuqty55yp2b2",
  "time"          : "2016-09-14T18:20:16Z",
  "to"            : [ "+12345678902" ],
  "from"          : "+12345678901",
  "text"          : "Hey, check this out!",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag"           : "test message",
  "owner"         : "+12345678901",
  "direction"     : "out",
  "segmentCount"  : 1
}
```


### Example 2 of 3: Send Picture Message
{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "media"         : [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
    ],
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://api.catapult.inetwork.com/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
          ],
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.catapult.inetwork.com/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body:
   { to: [ '+12345678902'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     applicationId: '93de2206-9669-4e07-948d-329f4b722ee2',
     media: [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
      ],
     tag: 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"            : "14762070468292kw2fuqty55yp2b2",
  "time"          : "2016-09-14T18:20:16Z",
  "to"            : [
    "+12345678902",
  ],
  "from"          : "+12345678901",
  "text"          : "Hey, check this out!",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag"           : "test message",
  "owner"         : "+12345678901",
  "media"         : [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
  ],
  "direction"     : "out",
  "segmentCount"  : 1
}
```

### Example 3 of 3: Send Multiple Pictures in a Message
{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: {apiToken:apiSecret}

{
    "to"            : ["+12345678902"],
    "from"          : "+12345678901",
    "text"          : "Hey, check this out!",
    "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
    "media"         : [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
      "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
    ],
    "tag"           : "test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://api.catapult.inetwork.com/v2/users/{{userId}}/messages \
    --user {apiToken}:{apiSecret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"            : ["+12345678902"],
        "from"          : "+12345678901",
        "text"          : "Hey, check this out!",
        "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
        "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
          "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
        ],
        "tag"           : "test message"
    }
  '
```

{% sample lang='js' %}

```js
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.catapult.inetwork.com/v2/users/{{userId}}/messages',
  headers: { 'content-type': 'application/json' },
  auth: {
    user: '{{apiToken}}',
    pass: '{{apiSecret}}'
  },
  body: {
   to            : [ '+12345678902'],
   from          : '+12345678901',
   text          : 'Hey, check this out!',
   applicationId : '93de2206-9669-4e07-948d-329f4b722ee2',
   media         : [
    'https://s3.amazonaws.com/bw-v2-api/demo.jpg',
    'https://s3.amazonaws.com/bw-v2-api/demo2.jpg'
   ],
   tag           : 'test message'},
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

{% common %}

> The above command returns a JSON Response structured like this:

```http
Status: 202 Accepted
Content-Type: application/json; charset=utf-8

{
  "id"           : "14762070468292kw2fuqty55yp2b2",
  "time"         : "2016-09-14T18:20:16Z",
  "to"           : [
    "+12345678902",
  ],
  "from"         : "+12345678901",
  "text"         : "Hey, check this out!",
  "tag"          : "test message",
  "owner"        : "+12345678901",
  "media"        : [
   "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
   "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
  ],
  "direction"    : "out",
  "segmentCount" : 1
}
```

{% endmethod %}
