{% method %}

## Send Group MMS

Send a group text message or picture message

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v2/users/{userId}/messages`

### Supported Parameters
| Parameter     | Type     | Description                                                                                                  | Mandatory |
|:--------------|:---------|:-------------------------------------------------------------------------------------------------------------|:----------|
| from          | `string` | One of your telephone numbers the message should come from (must be in E.164 format, like +19195551212).     | Yes       |
| to            | `array`  | The phone number the message should be sent to (must be in E.164 format, like +19195551212).                 | Yes       |
| text          | `string` | The contents of the text message (must be 2048 characters or less).                                          | Yes       |
| applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.     | Yes       |
| media         | `array`  | A list of URLs to include as media attachments as part of the message.                                       | No        |
| tag           | `string` | Any string which will be included in the callback events of the message.                                     | No        |

{% common %}
### Example: Send a group message

{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic dc123

{
    "to"  :[
      "+12345678902",
      "+12345678903"
    ],
    "from":"+12345678901",
    "text":"Hey, check this out!",
    "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
    "tag" :"test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://api.catapult.inetwork.com/v2/users/{{userId}}/messages \
    --user {token}:{secret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"  :[
          "+12345678902",
          "+12345678903"
        ],
        "from":"+12345678901",
        "text":"Hey, check this out!",
        "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
        "tag" :"test message"
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
    user: '{{token}}',
    pass: '{{secret}}'
  },
  body:
   { to: [ '+12345678902', '+12345678903'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     applicationId: '93de2206-9669-4e07-948d-329f4b722ee2',
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
  "id": "14762070468292kw2fuqty55yp2b2",
  "time": "2016-09-14T18:20:16Z",
  "to": [
    "+12345678902",
    "+12345678903"
  ],
  "from": "+12345678901",
  "text": "Hey, check this out!",
  "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag": "test message",
  "owner": "+12345678901",
  "direction": "out"
}
```

### Example: Send Picture to a group message thread
{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic dc123

{
    "to"  :[
      "+12345678902",
      "+12345678903"
    ],
    "from":"+12345678901",
    "text":"Hey, check this out!",
    "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
    "media": [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
    ],
    "tag" :"test message"
}

```

{% sample lang='bash' %}

```bash
curl --request POST \
    --url https://api.catapult.inetwork.com/v2/users/{{userId}}/messages \
    --user {token}:{secret} \
    --header 'content-type: application/json' \
    --data '
    {
        "to"  :[
          "+12345678902",
          "+12345678903"
        ],
        "from":"+12345678901",
        "text":"Hey, check this out!",
        "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
        "media": [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
          ],
        "tag" :"test message"
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
    user: '{{token}}',
    pass: '{{secret}}'
  },
  body:
   { to: [ '+12345678902', '+12345678903'],
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
  "id": "14762070468292kw2fuqty55yp2b2",
  "time": "2016-09-14T18:20:16Z",
  "to": [
    "+12345678902",
    "+12345678903"
  ],
  "from": "+12345678901",
  "text": "Hey, check this out!",
  "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
  "tag": "test message",
  "owner": "+12345678901",
  "media": [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
  ],
  "direction": "out"
}
```
{% endmethod %}
