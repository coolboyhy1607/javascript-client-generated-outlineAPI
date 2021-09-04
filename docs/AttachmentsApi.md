# OutlineApi.AttachmentsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachmentsCreatePost**](AttachmentsApi.md#attachmentsCreatePost) | **POST** /attachments.create | Create an attachment
[**attachmentsDeletePost**](AttachmentsApi.md#attachmentsDeletePost) | **POST** /attachments.delete | Delete an attachment
[**attachmentsRedirectPost**](AttachmentsApi.md#attachmentsRedirectPost) | **POST** /attachments.redirect | Retrieve an attachment

<a name="attachmentsCreatePost"></a>
# **attachmentsCreatePost**
> InlineResponse200 attachmentsCreatePost(opts)

Create an attachment

Creating an attachment object creates a database record and returns the inputs needed to generate a signed url and upload the file from the client to cloud storage.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.AttachmentsApi();
let opts = { 
  'body': new OutlineApi.AttachmentsCreateBody() // AttachmentsCreateBody | 
};
apiInstance.attachmentsCreatePost(opts, (error, data, response) => {
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
 **body** | [**AttachmentsCreateBody**](AttachmentsCreateBody.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachmentsDeletePost"></a>
# **attachmentsDeletePost**
> InlineResponse2001 attachmentsDeletePost(opts)

Delete an attachment

Deleting an attachment is permanant. It will not delete references or links to the attachment that may exist in your documents.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.AttachmentsApi();
let opts = { 
  'body': new OutlineApi.AttachmentsDeleteBody() // AttachmentsDeleteBody | 
};
apiInstance.attachmentsDeletePost(opts, (error, data, response) => {
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
 **body** | [**AttachmentsDeleteBody**](AttachmentsDeleteBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachmentsRedirectPost"></a>
# **attachmentsRedirectPost**
> attachmentsRedirectPost(opts)

Retrieve an attachment

Load an attachment from where it is stored based on the id. If the attachment is private then a temporary, signed url with embedded credentials is generated on demand.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.AttachmentsApi();
let opts = { 
  'body': new OutlineApi.AttachmentsRedirectBody() // AttachmentsRedirectBody | 
};
apiInstance.attachmentsRedirectPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AttachmentsRedirectBody**](AttachmentsRedirectBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

