{% method %}
# Too Many Requests Error - 429

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
