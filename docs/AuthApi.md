# OutlineApi.AuthApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authConfigPost**](AuthApi.md#authConfigPost) | **POST** /auth.config | Retrieve auth config
[**authInfoPost**](AuthApi.md#authInfoPost) | **POST** /auth.info | Retrieve auth

<a name="authConfigPost"></a>
# **authConfigPost**
> InlineResponse2003 authConfigPost()

Retrieve auth config

Retrieve authentication options

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.AuthApi();
apiInstance.authConfigPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="authInfoPost"></a>
# **authInfoPost**
> InlineResponse2002 authInfoPost()

Retrieve auth

Retrieve authentication details for the current API key

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.AuthApi();
apiInstance.authInfoPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

