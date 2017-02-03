{% method %}
# Unauthorized Error - 401

### Parameters
| Parameter | Type     | Description             |
|:----------|:---------|:------------------------|
| timestamp | `string` | The time of the error   |
| status    | `int`    | The http status code    |
| error     | `string` | Error Type              |
| message   | `string` | Error Message           |
| path      | `string` | Relative path for error |

{% common %}

### Unauthorized
{% sample lang='http' %}


```http
Status: 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
  "timestamp": "2017-01-11T18:15:23.348+0000",
  "status": 401,
  "error": "Unauthorized",
  "message": "Unauthorized",
  "path": "/v2/users/u-abc123/messages"
}
```

{% endmethod %}