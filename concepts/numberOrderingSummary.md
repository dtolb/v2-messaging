{% multimethod %}
{% endmultimethod %}

# Number Ordering Summary {#top}

Here is a first pass end-to-end “happy path” flow for provisioning, searching, reserving, activating and deactivating a number.

## Assumptions
* You have a [Phone Number Dashboard](https://dashboard.bandwidth.com) account

## Overview
* [Searching for new Phone Numbers](#search-for-phone-numbers)
* Reserving Numbers
* [Ordering Phone Numbers](#order-phone-numbers)
* Deactivating a Number

## Searching For Phone Numbers {#search-for-phone-numbers}
Finding numbers can be achieved by searching the Bandwidth inventory.

This step is optional – the telephone numbers can be ordered directly using search criteria, but if there is need to examine the numbers before activating them on the account, the search can be used to return a list of available numbers.

There are a number of search approaches that can be used; the NPA NXX search is used for this example.  Please see the [API documentation](https://test.dashboard.bandwidth.com/apidocs/) for the other applicable search types.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers`

{% extendmethod %}

### Query Parameters

| Parameters                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `areaCode`                | The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits.                                                                                                                                                                                                                                                                                                                                                                  |
| `npaNxx or npaNxxx`       | NPA NXX combination to be searched. <br> - Valid npa values:[2-9] for the first digit, and [0-9] for both the second and third digits. <br> - Valid Nxx values:[2-9] for the first digit, and [0-9] for both the second and third digits. <br> - Valid x values [0-9].                                                                                                                                                                                                   |
| `rateCenter`              | The abbreviation for the Rate Center                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `state`                   | The two-letter abbreviation of the state the RateCenter is in.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `city`                    | The name of the city.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `zip`                     | A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) zip-code value.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `lata`                    | A maximum five digit (XXXXX) numeric format.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `localVanity`             | Requested vanity number. Valid range is from 4 to 7 alphanumeric characters                                                                                                                                                                                                                                                                                                                                                                                              |
| `tollFreeVanity`          | The Toll Free requested vanity number. Valid range is from 4 to 7 alphanumeric characters                                                                                                                                                                                                                                                                                                                                                                                |
| `tollFreeWildCardPattern` | The requested Toll Free 3 digit wild card pattern. Examples: 8**, 80*, 87*, etc.                                                                                                                                                                                                                                                                                                                                                                                         |
| `quantity`                | The desired quantity of requested numbers. Values range from 1-5000. If no quantity is specified, the default of 5000 is returned.                                                                                                                                                                                                                                                                                                                                       |
| `enableTNDetail`          | If set to true, a list of details associated with the telephone number (rate center abbreviation, rate center host city, state, and LATA) will be displayed along with the telephone number. This value is set to false by default.                                                                                                                                                                                                                                      |
| `LCA`                     | Local Calling Area. If this parameter is specified then Telephone Numbers that are likely in the Local Calling Area of the stated Rate Center, NPANXX or NPANNXX will be returned, in addition to those that *exactly* match the query will be returned. Since LCA logic is not always symmetric and not always inclusive of RC and NPANXX search criteria, this result reflects somewhat of an approximation. The parameter value is true or false. The default is true |
| `endsIn`                  | Intended to use with localVanity only. The parameter value is true or false. If set to true, the search will look for only numbers which end in specified localVanity, otherwise localVanity sequence can be met anywhere in last 7 number digits. The default is false.                                                                                                                                                                                                 |
| `orderBy`                 | The field by which the returned numbers will be sorted. Only supported if at least one of the following search criteria is specified: npaNxx or npaNxxx, rateCenter, city, zip, tollFreeVanity, tollFreeWildCardPattern. Allowed values are fullNumber, npaNxxx, npaNxx, and areaCode>                                                                                                                                                                                   |
| `protected`               | A query parameter, that governs, how the Protected status of numbers impacts the search results: <br> - `None` : The numbers returned in the payload will not contain any numbers that are tagged as Protected <br> - `ONLY` :The numbers returned in the payload will all be tagged as Protected. No "unProtected" numbers will be returned <br> - `MIXED` : The protected status of the numbers will be ignored in the search - all types of numbers will be returned  |

{% common %}

### Example: Search by NPA NXX

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers?npaNxx=540551&quantity=10 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {user:password}
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>7</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>5405514342</TelephoneNumber>
        <TelephoneNumber>5405515330</TelephoneNumber>
        <TelephoneNumber>5405515329</TelephoneNumber>
        <TelephoneNumber>5402278098</TelephoneNumber>
        <TelephoneNumber>5402270905</TelephoneNumber>
        <TelephoneNumber>5402278089</TelephoneNumber>
        <TelephoneNumber>5402278090</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

>  ℹ️  Notice that only 7 of 10 were returned = that is all that were currently available in that npanxx combination.  Any of these numbers can be reserved or immediately ordered

{% endextendmethod %}

## Order Numbers {#order-phone-numbers}

### Query Parameters

| Parameter            | Description                                                                                                                                                                                                                                                                                                                                                      |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Quantity`           | The desired quantity of requested numbers. values range from 1-5000. If no quantity is specified, the default of 5000 is returned.                                                                                                                                                                                                                               |
| `name`               | The name of the order. Max length restricted to 50 characters.                                                                                                                                                                                                                                                                                                   |
| `CustomerOrderId`    | Optional value for Id set by customer                                                                                                                                                                                                                                                                                                                            |
| `SiteId`             | The ID of the Site that the SIP Peer is to be associated with.                                                                                                                                                                                                                                                                                                   |
| `PeerId`             | The ID of the SIP Peer that the telephone numbers are to be assigned to.                                                                                                                                                                                                                                                                                         |
| `PartialAllowed`     | By default all order submissions are fulfilled partially. Setting the PartialAllowed to false would trigger the entire order to be fulfilled (any error ecnountered such as 1 TN not being available would fail all TNs in the order) By default, this value is set to false                                                                                     |
| `BackOrderRequested` | BackOrderRequested will indicate to the system that if the entire quantity of numbers is not available on the first attempt to fill the new number order, the request will be repeated periodically until the request is successful or cancelled. Setting the parameter to true indeicated a desire to backorder numbers if the entire quantity is not available |