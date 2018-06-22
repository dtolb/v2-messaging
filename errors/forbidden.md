{% method %}
# Forbidden Error - 403

### Parameters
| Parameter   | Type     | Description           |
|:------------|:---------|:----------------------|
| type        | `string` | Error type            |
| description | `string` | Error description     |

{% common %}

### Forbidden
{% sample lang='http' %}


```http
Status: 403 Forbidden
Content-Type: application/json; charset=utf-8

{
    "type": "unauthorized",
    "description": "Access is denied."
}
```

{% endmethod %}
