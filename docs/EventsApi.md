# OutlineApi.EventsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsListPost**](EventsApi.md#eventsListPost) | **POST** /events.list | List all events

<a name="eventsListPost"></a>
# **eventsListPost**
> InlineResponse20019 eventsListPost(opts)

List all events

Events are an audit trail of important events that happen in the knowledge base.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.EventsApi();
let opts = { 
  'body': new OutlineApi.EventsListBody() // EventsListBody | 
};
apiInstance.eventsListPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EventsListBody**](EventsListBody.md)|  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

