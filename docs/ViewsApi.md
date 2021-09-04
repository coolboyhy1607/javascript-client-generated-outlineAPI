# OutlineApi.ViewsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewsCreatePost**](ViewsApi.md#viewsCreatePost) | **POST** /views.create | Create a view
[**viewsListPost**](ViewsApi.md#viewsListPost) | **POST** /views.list | List all views

<a name="viewsCreatePost"></a>
# **viewsCreatePost**
> InlineResponse20035 viewsCreatePost(opts)

Create a view

Creates a new view for a document. This is documented in the interests of thoroughness however it is recommended that views are not created from outside of the Outline UI.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.ViewsApi();
let opts = { 
  'body': new OutlineApi.ViewsCreateBody() // ViewsCreateBody | 
};
apiInstance.viewsCreatePost(opts, (error, data, response) => {
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
 **body** | [**ViewsCreateBody**](ViewsCreateBody.md)|  | [optional] 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="viewsListPost"></a>
# **viewsListPost**
> InlineResponse20034 viewsListPost(opts)

List all views

List all users that have viewed a document and the overall view count.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.ViewsApi();
let opts = { 
  'body': new OutlineApi.ViewsListBody() // ViewsListBody | 
};
apiInstance.viewsListPost(opts, (error, data, response) => {
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
 **body** | [**ViewsListBody**](ViewsListBody.md)|  | [optional] 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

