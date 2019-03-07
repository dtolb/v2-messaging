{% method %}

## List Media
Gets a list of your media files. No query parameters are supported.

### Request URL

<code class="get">GET</code>`https://messaging.bandwidth.com/api/v2/users/{userId}/media`

**Notice: This URL will be active in April 2019. Current customers will be notified once this URL is ready.**

---

### Properties
| Property      | Description                                   |
|:--------------|:----------------------------------------------|
| mediaName     | The mediaName is the unique name of the media |
| contentLength | Size of the media in Bytes `B`                |
| content       | URL to use to GET the specific media file.    |

{% common %}

### Example 1 of 1: List Your Media Files


{% sample lang="bash" %}

```bash
curl -v -X GET https://messaging.bandwidth.com/api/v2/users/{userId}/media \
  -u {token}:{secret} \
```

{% common %}


> The above command returns JSON structured like this:

```json
[
  {
    "contentLength": 561276,
    "mediaName": "{mediaName1}",
    "content": "https://messaging.bandwidth.com/.../media/{mediaName1}"
  },
  {
    "contentLength": 2703360,
    "mediaName": "{mediaName2}",
    "content": "https://messaging.bandwidth.com/.../media/{mediaName2}"
  },
  {
    "contentLength": 2257901,
    "mediaName": "{mediaName3}",
        "content": "https://messaging.bandwidth.com/.../media/{mediaName3}"
  }
]
```
{% endmethod %}
