# Bandwidth Messaging 2.0 Beta

The Messaging 2.0 API is an all new way to send and receive SMS, MMS, and Group Messages on the Bandwidth network. It works with your numbers you already have in the Number Management section of the Bandwidth Phone Number Dashboard.

⚠️ Messaging 2.0 Does not store **ANY** messages or records for fetching later. If you need message history you need to implement a storage solution that meets your needs. ⚠️

<h3> 👉 <a href="https://go.bandwidth.com/messaging-v2-api.html">Sign up for Beta</a> 👈</h3>

## 1.0 VS. 2.0 Messaging APIs

|                                                                  | 1.0                                 | 2.0 |
|:-----------------------------------------------------------------|:------------------------------------|:----|
| SMS                                                              | √                                   | √   |
| MMS                                                              | √                                   | √   |
| Pin codes, notifications, and long message support               | √                                   | √   |
| Redundant network                                                | √                                   | √   |
| Global reach                                                     | √                                   | √   |
| Toll-free texting                                                | √                                   | √   |
| Unlimited concurrent messaging                                   | Limited to 1,000 msg/sec            | √   |
| Full-featured group messaging API                                | Can send and receive group messages | √   |
| Hosted Messaging                                                 | Only Bandwidth numbers are allowed  | √   |
| Advanced number management like porting and bulk number ordering | Basic capabilities available        | √   |
| Instant text-enabled toll-free numbers                           | Takes average 1-4 days              | √   |
| Built-in deliverability receipts                                 | Can be manually added               | √   |


#### API Credentials
* API Credentials work the same way they do in the V1 Messaging API. Use your API Token and Secret with Basic Auth when making API requests to send messages. [See here for more details](http://dev.bandwidth.com/security.html).