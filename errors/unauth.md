{% method %}
# Unauthorized Error - 401

### Parameters
| Parameter   | Type     | Description             |
|:------------|:---------|:------------------------|
| type        | `string` | Error type              |
| description | `string` | Error description       |

{% common %}

### Unauthorized
{% sample lang='http' %}


```http
Status: 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "type": "authentication-error",
    "description": "Invalid or missing credentials."
}
```

{% endmethod %}
