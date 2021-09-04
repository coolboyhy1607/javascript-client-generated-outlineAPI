# OutlineApi.FileOperationsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileOperationsInfoPost**](FileOperationsApi.md#fileOperationsInfoPost) | **POST** /fileOperations.info | Retrieve a file operation
[**fileOperationsListPost**](FileOperationsApi.md#fileOperationsListPost) | **POST** /fileOperations.list | List all file operations
[**fileOperationsRedirectPost**](FileOperationsApi.md#fileOperationsRedirectPost) | **POST** /fileOperations.redirect | Retrieve the file

<a name="fileOperationsInfoPost"></a>
# **fileOperationsInfoPost**
> InlineResponse20020 fileOperationsInfoPost(opts)

Retrieve a file operation

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.FileOperationsApi();
let opts = { 
  'body': new OutlineApi.FileOperationsInfoBody() // FileOperationsInfoBody | 
};
apiInstance.fileOperationsInfoPost(opts, (error, data, response) => {
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
 **body** | [**FileOperationsInfoBody**](FileOperationsInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileOperationsListPost"></a>
# **fileOperationsListPost**
> InlineResponse20021 fileOperationsListPost(opts)

List all file operations

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.FileOperationsApi();
let opts = { 
  'body': new OutlineApi.FileOperationsListBody() // FileOperationsListBody | 
};
apiInstance.fileOperationsListPost(opts, (error, data, response) => {
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
 **body** | [**FileOperationsListBody**](FileOperationsListBody.md)|  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fileOperationsRedirectPost"></a>
# **fileOperationsRedirectPost**
> &#x27;Blob&#x27; fileOperationsRedirectPost(opts)

Retrieve the file

Load the resulting file from where it is stored based on the id. A temporary, signed url with embedded credentials is generated on demand.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.FileOperationsApi();
let opts = { 
  'body': new OutlineApi.FileOperationsRedirectBody() // FileOperationsRedirectBody | 
};
apiInstance.fileOperationsRedirectPost(opts, (error, data, response) => {
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
 **body** | [**FileOperationsRedirectBody**](FileOperationsRedirectBody.md)|  | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream, application/json

