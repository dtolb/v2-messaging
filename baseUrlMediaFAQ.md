# V2 Messaging Base URL Migration And Media Endpoint Addition FAQ

<br>

##  When do I need to update to the new Base URL and migrate my outbound traffic?
After we go live, we are asking customers to migrate their outbound traffic to our new Base URL, as soon as possible, but no later than 60 days after the new Base URL is launched.  

##  What is the new Base URL?
The new Base URL is:  https://messaging.bandwidth.com/api/v2  

## When will the new Base URL environment be ready?
The new environment will be ready in April 2019, but we will keep you posted on the exact date.

## Is there a way I can test in advance of migrating my outbound SMS/MMS?
Yes! After we deploy our new V2 infrastructure, you can test outbound traffic with a subset of your phone numbers, sending only outbound test traffic to the new Base URL. You should be able to complete a full test of functionality before you migrate all your traffic. Keep an eye out in the coming weeks for a follow-up communication with more details on our go-live date. 


## Will my current tokens work on the new Base URL? 
Yes, all existing tokens will automatically work on both the old and new infrastructure, however, tokens modifications after the launch planned for April will not be backward compatible to work on the old V2 infrastructure at https://api.catapult.inetwork.com/v2. If you are not able to migrate your outbound messaging to the new Base URL soon after we launch, you may want to create two sets of tokens in your code in the case you end up having to make token changes and will need to manage different tokens for the different Base URLs.  

## Will my current accounts, applications, and inbound traffic be impacted by this change?
Your existing accounts, applications, and inbound and outbound traffic will work exactly as they do today. Your inbound SMS/MMS messages will automatically be migrated to our new Base URL for you. 

## What do I need to do after the new V2 infrastructure go-live date?
You must migrate your outbound SMS/MMS messages to our new V2 base URL. The outbound messages you send to Bandwidth will not be automatically migrated for you. You will be responsible for moving your outbound traffic to new Base URL.  

The new Base URL is:  https://messaging.bandwidth.com/api/v2  
The old Base URL is: https://api.catapult.inetwork.com/v2

See our new [Messages Overview developer documentation](methods/sendMessages.md) that outlines the change to a new Base URL  that will need to be implemented after the go-live date in April.

## What do I need to do if I use Bandwidth SDKs that support V2 Messaging?
You will need to update your SDK when Bandwidth releases updated version of these SDKs. These updates will be major version updates, and the old versions of the SDKs will be deprecated alongside the deprecation of the new Base URL.  

## I am using Bandwidth’s v1/media resource - what do I need to do? 
As a reminder it is recommended that you use your own media servers, but if you are using V1/media, you will need to migrate to the new or start using your own media server for outbound media storage.  Click [here](media/about.md) for our new media resource that will have all the same functionality as v1/media. 

You will perform a HTTP GET to download attachments as you do today and then a HTTP DELETE to remove them from Bandwidth servers immediately. It is a best practice to delete files immediately upon successfully receiving a copy of media content. 

## What is new for V2/media?
There is a new max 48 hour retention policy for customers who have not already performed a HTTP DELETE themselves. Bandwidth will automatically delete all media from our servers 48 hours after it is created. Uploaded media is now limited to 3.75MB, down from 65MB.

<br>
<br>
