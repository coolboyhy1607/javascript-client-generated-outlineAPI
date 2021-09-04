# OutlineApi.SharesApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sharesCreatePost**](SharesApi.md#sharesCreatePost) | **POST** /shares.create | Create a share
[**sharesInfoPost**](SharesApi.md#sharesInfoPost) | **POST** /shares.info | Retrieve a share object
[**sharesListPost**](SharesApi.md#sharesListPost) | **POST** /shares.list | List all shares
[**sharesRevokePost**](SharesApi.md#sharesRevokePost) | **POST** /shares.revoke | Revoke a share
[**sharesUpdatePost**](SharesApi.md#sharesUpdatePost) | **POST** /shares.update | Update a share

<a name="sharesCreatePost"></a>
# **sharesCreatePost**
> InlineResponse20030 sharesCreatePost(opts)

Create a share

Creates a new share link that can be used by to access a document. If you request multiple shares for the same the ocument with the same API key the same share object will be returned. By default all shares are unpublished.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.SharesApi();
let opts = { 
  'body': new OutlineApi.SharesCreateBody() // SharesCreateBody | 
};
apiInstance.sharesCreatePost(opts, (error, data, response) => {
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
 **body** | [**SharesCreateBody**](SharesCreateBody.md)|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sharesInfoPost"></a>
# **sharesInfoPost**
> InlineResponse20030 sharesInfoPost(opts)

Retrieve a share object

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.SharesApi();
let opts = { 
  'body': new OutlineApi.SharesInfoBody() // SharesInfoBody | 
};
apiInstance.sharesInfoPost(opts, (error, data, response) => {
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
 **body** | [**SharesInfoBody**](SharesInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sharesListPost"></a>
# **sharesListPost**
> InlineResponse20031 sharesListPost(opts)

List all shares

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.SharesApi();
let opts = { 
  'body': new OutlineApi.SharesListBody() // SharesListBody | 
};
apiInstance.sharesListPost(opts, (error, data, response) => {
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
 **body** | [**SharesListBody**](SharesListBody.md)|  | [optional] 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sharesRevokePost"></a>
# **sharesRevokePost**
> InlineResponse2001 sharesRevokePost(opts)

Revoke a share

Makes the share link inactive so that it can no longer be used to access the document.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.SharesApi();
let opts = { 
  'body': new OutlineApi.SharesRevokeBody() // SharesRevokeBody | 
};
apiInstance.sharesRevokePost(opts, (error, data, response) => {
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
 **body** | [**SharesRevokeBody**](SharesRevokeBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sharesUpdatePost"></a>
# **sharesUpdatePost**
> InlineResponse20030 sharesUpdatePost(opts)

Update a share

Allows changing an existing shares published status, which removes authentication and makes it available to anyone with the link.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.SharesApi();
let opts = { 
  'body': new OutlineApi.SharesUpdateBody() // SharesUpdateBody | 
};
apiInstance.sharesUpdatePost(opts, (error, data, response) => {
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
 **body** | [**SharesUpdateBody**](SharesUpdateBody.md)|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

