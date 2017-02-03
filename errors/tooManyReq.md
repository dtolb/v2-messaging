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

{
  "type": "rate-limit-exceeded",
  "description": "You can send 1 messages per 1 seconds, calculated as the average over 10 seconds. Your rate is: 1.1"
}
```

{% endmethod %}