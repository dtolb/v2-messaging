{% method %}
# Too Many Requests Error - 429

Concatenated messages are segmented into several individual SMS messages based on required character encoding and the SMPP protocol. Each of these SMS messages are sent individually to wireless carriers who then reassemble the individual messages for delivery to handsets. The per account rate limit calculations include each message segment as an individual message being sent to carriers.
The number of segments a concatenated message will be broken up into can be found in the [message.segmentCount](https://dev.bandwidth.com/v2-messaging/events/incomingSingle.html) parameter in the callback for SMS.

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| type                    | `string` | The Type of error.                               |
| description             | `string` | A detailed description of why the error occurred |
| fieldErrors             | `array`  | List of errors in fields                         |
| fieldErrors.fieldName   | `string` | Name of field with error                         |
| fieldErrors.description | `string` | Description of the error                         |

{% common %}

### Too Many Requests
{% sample lang='http' %}

```http
Status: 429 Too Many Requests
Content-Type: application/json; charset=utf-8
```

```json
{
  "type": "max-message-queue-size-exceeded",
  "description": "The SMS queue for your account is full and cannot accept more messages right now. Your allowed rate is 60 messages per minute. The capacity of this queue is 900 messages (15 minutes). Reduce your message sending rate, or contact support to increase your allowed rate."
}
```

{% endmethod %}
