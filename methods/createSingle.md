{% method %}

## Send SMS or MMS Text Message to Single Phone Number

Send at least one text message or picture message.

### Request URL

<code class="post">POST</code>`https://api.catapult.inetwork.com/v2/users/{userId}/messages`

### Supported Parameters
| Parameter | Type     | Description                                                                                              | Mandatory |
|:----------|:---------|:---------------------------------------------------------------------------------------------------------|:----------|
| from      | `string` | One of your telephone numbers the message should come from (must be in E.164 format, like +19195551212). | Yes       |
| to        | `array`  | The phone number the message should be sent to (must be in E.164 format, like +19195551212).             | Yes       |
| text      | `string` | The contents of the text message (must be 2048 characters or less).                                      | Yes       |
| media     | `array`  | A list of URLs to include as media attachments as part of the message.                                   | No        |
| tag       | `string` | Any string, it will be included in the callback events of the message.                                   | No        |

{% common %}
### Example: Send A Single Text Message

{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic dc123

{
    "to"  :["+12345678902"],
    "from":"+12345678901",
    "text":"Hey, check this out!",
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
        "to"  :["+12345678902"],
        "from":"+12345678901",
        "text":"Hey, check this out!",
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
   { to: [ '+12345678902'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     tag: 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  // { id: '1486146872688aih2vr2rpxi7n2ll',
  // owner: '+12345678901',
  // time: '2017-02-03T18:34:32.688Z',
  // direction: 'out',
  // to: [ '+12345678902' ],
  // from: '+12345678901',
  // text: 'Hey, check this out!',
  // tag: 'test message' }
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
  ],
  "from": "+12345678901",
  "text": "Hey, check this out!",
  "tag": "test message",
  "owner": "+12345678901",
  "direction": "out"
}
```

### Example: Send Picture Message
{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic dc123

{
    "to"  :["+12345678902"],
    "from":"+12345678901",
    "text":"Hey, check this out!",
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
        "to"  :["+12345678902"],
        "from":"+12345678901",
        "text":"Hey, check this out!",
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
   { to: [ '+12345678902'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     media: [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
      ],
     tag: 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  // { id: '1486146872688aih2vr2rpxi7n2ll',
  // owner: '+12345678901',
  // time: '2017-02-03T18:34:32.688Z',
  // direction: 'out',
  // to: [ '+12345678902' ],
  // from: '+12345678901',
  // text: 'Hey, check this out!',
  // media: ['https://s3.amazonaws.com/bw-v2-api/demo.jpg'],
  // tag: 'test message' }
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
  ],
  "from": "+12345678901",
  "text": "Hey, check this out!",
  "tag": "test message",
  "owner": "+12345678901",
  "media": [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
  ],
  "direction": "out"
}
```

### Example: Send Multiple Pictures in a Message
{% sample lang='http' %}

```http
POST https://api.catapult.inetwork.com/v2/users/{userId}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic dc123

{
    "to"  :["+12345678902"],
    "from":"+12345678901",
    "text":"Hey, check this out!",
    "media": [
      "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
      "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
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
        "to"  :["+12345678902"],
        "from":"+12345678901",
        "text":"Hey, check this out!",
        "media": [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
          "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
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
   { to: [ '+12345678902'],
     from: '+12345678901',
     text: 'Hey, check this out!',
     media: [
      'https://s3.amazonaws.com/bw-v2-api/demo.jpg',
      'https://s3.amazonaws.com/bw-v2-api/demo2.jpg'
      ],
     tag: 'test message' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  // { id: '1486146872688aih2vr2rpxi7n2ll',
  // owner: '+12345678901',
  // time: '2017-02-03T18:34:32.688Z',
  // direction: 'out',
  // to: [ '+12345678902' ],
  // from: '+12345678901',
  // text: 'Hey, check this out!',
  // media: [
  //   'https://s3.amazonaws.com/bw-v2-api/demo.jpg',
  //   'https://s3.amazonaws.com/bw-v2-api/demo2.jpg'
  // ],
  // tag: 'test message' }
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
  ],
  "from": "+12345678901",
  "text": "Hey, check this out!",
  "tag": "test message",
  "owner": "+12345678901",
  "media": [
    "https://s3.amazonaws.com/bw-v2-api/demo.jpg",
    "https://s3.amazonaws.com/bw-v2-api/demo2.jpg"
  ],
  "direction": "out"
}
```

{% endmethod %}