# OutlineApi.RevisionsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**revisionsInfoPost**](RevisionsApi.md#revisionsInfoPost) | **POST** /revisions.info | Retrieve a revision
[**revisionsListPost**](RevisionsApi.md#revisionsListPost) | **POST** /revisions.list | List all revisions

<a name="revisionsInfoPost"></a>
# **revisionsInfoPost**
> InlineResponse20028 revisionsInfoPost(opts)

Retrieve a revision

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.RevisionsApi();
let opts = { 
  'body': new OutlineApi.RevisionsInfoBody() // RevisionsInfoBody | 
};
apiInstance.revisionsInfoPost(opts, (error, data, response) => {
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
 **body** | [**RevisionsInfoBody**](RevisionsInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="revisionsListPost"></a>
# **revisionsListPost**
> InlineResponse20029 revisionsListPost(opts)

List all revisions

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.RevisionsApi();
let opts = { 
  'body': new OutlineApi.RevisionsListBody() // RevisionsListBody | 
};
apiInstance.revisionsListPost(opts, (error, data, response) => {
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
 **body** | [**RevisionsListBody**](RevisionsListBody.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

