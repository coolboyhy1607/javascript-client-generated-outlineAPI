# OutlineApi.DocumentsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentsArchivePost**](DocumentsApi.md#documentsArchivePost) | **POST** /documents.archive | Archive a document
[**documentsCreatePost**](DocumentsApi.md#documentsCreatePost) | **POST** /documents.create | Create a document
[**documentsDeletePost**](DocumentsApi.md#documentsDeletePost) | **POST** /documents.delete | Delete a document
[**documentsDraftsPost**](DocumentsApi.md#documentsDraftsPost) | **POST** /documents.drafts | List all draft documents
[**documentsExportPost**](DocumentsApi.md#documentsExportPost) | **POST** /documents.export | Export a document as markdown
[**documentsImportPost**](DocumentsApi.md#documentsImportPost) | **POST** /documents.import | Import a file as a document
[**documentsInfoPost**](DocumentsApi.md#documentsInfoPost) | **POST** /documents.info | Retrieve a document
[**documentsListPost**](DocumentsApi.md#documentsListPost) | **POST** /documents.list | List all documents
[**documentsMovePost**](DocumentsApi.md#documentsMovePost) | **POST** /documents.move | Move a document
[**documentsPinPost**](DocumentsApi.md#documentsPinPost) | **POST** /documents.pin | Pin a document
[**documentsPinnedPost**](DocumentsApi.md#documentsPinnedPost) | **POST** /documents.pinned | List all pinned documents
[**documentsRestorePost**](DocumentsApi.md#documentsRestorePost) | **POST** /documents.restore | Restore a document
[**documentsSearchPost**](DocumentsApi.md#documentsSearchPost) | **POST** /documents.search | Search all documents
[**documentsStarPost**](DocumentsApi.md#documentsStarPost) | **POST** /documents.star | Star a document
[**documentsStarredPost**](DocumentsApi.md#documentsStarredPost) | **POST** /documents.starred | List all starred documents
[**documentsTemplatizePost**](DocumentsApi.md#documentsTemplatizePost) | **POST** /documents.templatize | Create a template from a document
[**documentsUnpinPost**](DocumentsApi.md#documentsUnpinPost) | **POST** /documents.unpin | Unpin a document
[**documentsUnpublishPost**](DocumentsApi.md#documentsUnpublishPost) | **POST** /documents.unpublish | Unpublish a document
[**documentsUnstarPost**](DocumentsApi.md#documentsUnstarPost) | **POST** /documents.unstar | Unstar a document
[**documentsUpdatePost**](DocumentsApi.md#documentsUpdatePost) | **POST** /documents.update | Update a document
[**documentsViewedPost**](DocumentsApi.md#documentsViewedPost) | **POST** /documents.viewed | List all recently viewed documents

<a name="documentsArchivePost"></a>
# **documentsArchivePost**
> InlineResponse20016 documentsArchivePost(opts)

Archive a document

Archiving a document allows outdated information to be moved out of sight whilst retaining the ability to optionally search and restore it later.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsArchiveBody() // DocumentsArchiveBody | 
};
apiInstance.documentsArchivePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsArchiveBody**](DocumentsArchiveBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsCreatePost"></a>
# **documentsCreatePost**
> InlineResponse20016 documentsCreatePost(opts)

Create a document

This method allows you to create or publish a new document. By default a document is set to the collection root. If you want to create a nested/child document, you should pass parentDocumentId to set the parent document.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsCreateBody() // DocumentsCreateBody | 
};
apiInstance.documentsCreatePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsCreateBody**](DocumentsCreateBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsDeletePost"></a>
# **documentsDeletePost**
> InlineResponse2001 documentsDeletePost(opts)

Delete a document

Deleting a document moves it to the trash. If not restored within 30 days it is permenantly deleted.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsDeleteBody() // DocumentsDeleteBody | 
};
apiInstance.documentsDeletePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsDeleteBody**](DocumentsDeleteBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsDraftsPost"></a>
# **documentsDraftsPost**
> InlineResponse20014 documentsDraftsPost(opts)

List all draft documents

This method will list all draft documents belonging to the current user.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsDraftsBody() // DocumentsDraftsBody | 
};
apiInstance.documentsDraftsPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsDraftsBody**](DocumentsDraftsBody.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsExportPost"></a>
# **documentsExportPost**
> InlineResponse20013 documentsExportPost(opts)

Export a document as markdown

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsExportBody() // DocumentsExportBody | 
};
apiInstance.documentsExportPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsExportBody**](DocumentsExportBody.md)|  | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsImportPost"></a>
# **documentsImportPost**
> InlineResponse20012 documentsImportPost(opts)

Import a file as a document

This method allows you to create a new document by importing an existing file. By default a document is set to the collection root. If you want to create a nested/child document, you should pass parentDocumentId to set the parent document.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'file': null, // Object | 
  'collectionId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'parentDocumentId': "38400000-8cf0-11bd-b23e-10b96e4ef00d", // String | 
  'template': true, // Boolean | 
  'publish': true // Boolean | 
};
apiInstance.documentsImportPost(opts, (error, data, response) => {
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
 **file** | [**Object**](.md)|  | [optional] 
 **collectionId** | [**String**](.md)|  | [optional] 
 **parentDocumentId** | [**String**](.md)|  | [optional] 
 **template** | **Boolean**|  | [optional] 
 **publish** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="documentsInfoPost"></a>
# **documentsInfoPost**
> InlineResponse20012 documentsInfoPost(opts)

Retrieve a document

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsInfoBody() // DocumentsInfoBody | 
};
apiInstance.documentsInfoPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsInfoBody**](DocumentsInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsListPost"></a>
# **documentsListPost**
> InlineResponse20014 documentsListPost(opts)

List all documents

This method will list all published documents and draft documents belonging to the current user.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsListBody() // DocumentsListBody | 
};
apiInstance.documentsListPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsListBody**](DocumentsListBody.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsMovePost"></a>
# **documentsMovePost**
> InlineResponse20018 documentsMovePost(opts)

Move a document

Move a document to a new location or collection. If no parent document is provided, the document will be moved to the collection root.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsMoveBody() // DocumentsMoveBody | 
};
apiInstance.documentsMovePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsMoveBody**](DocumentsMoveBody.md)|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsPinPost"></a>
# **documentsPinPost**
> InlineResponse20016 documentsPinPost(opts)

Pin a document

Pinning a document highlights it on the collection page for everyone on the team.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsPinBody() // DocumentsPinBody | 
};
apiInstance.documentsPinPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsPinBody**](DocumentsPinBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsPinnedPost"></a>
# **documentsPinnedPost**
> InlineResponse20014 documentsPinnedPost(opts)

List all pinned documents

This method will list all documents pinned in a collection.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsPinnedBody() // DocumentsPinnedBody | 
};
apiInstance.documentsPinnedPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsPinnedBody**](DocumentsPinnedBody.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsRestorePost"></a>
# **documentsRestorePost**
> InlineResponse20016 documentsRestorePost(opts)

Restore a document

If a document has been archived or deleted, it can be restored. Optionally a revision can be passed to restore the document to a previous point in time.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsRestoreBody() // DocumentsRestoreBody | 
};
apiInstance.documentsRestorePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsRestoreBody**](DocumentsRestoreBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsSearchPost"></a>
# **documentsSearchPost**
> InlineResponse20015 documentsSearchPost(opts)

Search all documents

This methods allows you to search your teams documents with keywords. Note that search results will be restricted to those accessible by the current access token.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsSearchBody() // DocumentsSearchBody | 
};
apiInstance.documentsSearchPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsSearchBody**](DocumentsSearchBody.md)|  | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsStarPost"></a>
# **documentsStarPost**
> InlineResponse20017 documentsStarPost(opts)

Star a document

Starring a document gives it extra priority in the UI and makes it easier to find important information later.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsStarBody() // DocumentsStarBody | 
};
apiInstance.documentsStarPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsStarBody**](DocumentsStarBody.md)|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsStarredPost"></a>
# **documentsStarredPost**
> InlineResponse20014 documentsStarredPost(opts)

List all starred documents

This method will list all documents starred by the current user.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsStarredBody() // DocumentsStarredBody | 
};
apiInstance.documentsStarredPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsStarredBody**](DocumentsStarredBody.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsTemplatizePost"></a>
# **documentsTemplatizePost**
> InlineResponse20016 documentsTemplatizePost(opts)

Create a template from a document

This method allows you to createa new template using an existing document as the basis

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsTemplatizeBody() // DocumentsTemplatizeBody | 
};
apiInstance.documentsTemplatizePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsTemplatizeBody**](DocumentsTemplatizeBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsUnpinPost"></a>
# **documentsUnpinPost**
> InlineResponse20016 documentsUnpinPost(opts)

Unpin a document

Pinning a document highlights it on the collection page for everyone on the team.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsUnpinBody() // DocumentsUnpinBody | 
};
apiInstance.documentsUnpinPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsUnpinBody**](DocumentsUnpinBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsUnpublishPost"></a>
# **documentsUnpublishPost**
> InlineResponse20016 documentsUnpublishPost(opts)

Unpublish a document

Unpublishing a document moves it back to a draft status and out of the collection.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsUnpublishBody() // DocumentsUnpublishBody | 
};
apiInstance.documentsUnpublishPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsUnpublishBody**](DocumentsUnpublishBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsUnstarPost"></a>
# **documentsUnstarPost**
> InlineResponse20017 documentsUnstarPost(opts)

Unstar a document

Starring a document gives it extra priority in the UI and makes it easier to find important information later.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsUnstarBody() // DocumentsUnstarBody | 
};
apiInstance.documentsUnstarPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsUnstarBody**](DocumentsUnstarBody.md)|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsUpdatePost"></a>
# **documentsUpdatePost**
> InlineResponse20016 documentsUpdatePost(opts)

Update a document

This method allows you to modify an already created document

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsUpdateBody() // DocumentsUpdateBody | 
};
apiInstance.documentsUpdatePost(opts, (error, data, response) => {
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
 **body** | [**DocumentsUpdateBody**](DocumentsUpdateBody.md)|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentsViewedPost"></a>
# **documentsViewedPost**
> InlineResponse20014 documentsViewedPost(opts)

List all recently viewed documents

This method will list all documents recently viewed by the current user.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.DocumentsApi();
let opts = { 
  'body': new OutlineApi.DocumentsViewedBody() // DocumentsViewedBody | 
};
apiInstance.documentsViewedPost(opts, (error, data, response) => {
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
 **body** | [**DocumentsViewedBody**](DocumentsViewedBody.md)|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

