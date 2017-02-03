# Setup The Bandwidth Application

In order to recieve delivery notifications and message state, each phone number needs to be assigned to a [Bandwidth Application](http://dev.bandwidth.com/ap-docs/methods/applications/applications.html).

> Follow the [tutorial](http://dev.bandwidth.com/howto/incomingCallandMessaging.html) on how to create an application and order phone numbers

## Validate callback Url
Make sure that the callback url is configured correctly for your application.

### Using the UI
Log into the Bandwidth service and navigate to the `My Apps` Tab.

Either find or create the application and validate the `Messaging Callback` value is configured correctly.

![Visual](images/visual_app_url.png)

### Using the API

Check your application status by making a <code class="get">GET</code> request to your application id.

<code class="get">GET</code>`https://api.catapult.inetwork.com/v1/users/{userId}/applications/{applicationId}`

Incoming messages and outbound message states updates are sent to the url specified as the `incomingMessageUrl`

```bash
curl -v -X GET  https://api.catapult.inetwork.com/v1/users/{user-id}/applications/{applicationId}
  -u {token}:{secret} \
  -H "Content-type: application/json" \
 ```

```http
Status: 200 OK
Content-Type: application/json

 {
  "id": "{applicationId}",
  "name": "MyFirstApp",
  "incomingCallUrl": "http://example.com/calls.php",
  "incomingMessageUrl": "http://example.com/messages.php",
  "autoAnswer": true,
  "messageApiVersion": "V2"
}
```
