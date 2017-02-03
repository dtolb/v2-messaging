{% method %}
# Forbidden Error - 403

### Parameters
| Parameter | Type     | Description             |
|:----------|:---------|:------------------------|
| timestamp | `string` | The time of the error   |
| status    | `int`    | The http status code    |
| error     | `string` | Error Type              |
| message   | `string` | Error Message           |
| path      | `string` | Relative path for error |

{% common %}

### Forbidden
{% sample lang='http' %}


```http
Status: 403 Forbidden
Content-Type: application/json; charset=utf-8

{
  "timestamp": "2017-01-11T18:25:27.047+0000",
  "status": 403,
  "error": "Forbidden",
  "message": "Access is denied",
  "path": "/v2/users/u-abc123/messages"
}
```

{% endmethod %}