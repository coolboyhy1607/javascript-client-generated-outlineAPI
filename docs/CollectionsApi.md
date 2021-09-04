# OutlineApi.CollectionsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsAddGroupPost**](CollectionsApi.md#collectionsAddGroupPost) | **POST** /collections.add_group | Add a group to a collection
[**collectionsAddUserPost**](CollectionsApi.md#collectionsAddUserPost) | **POST** /collections.add_user | Add a collection user
[**collectionsCreatePost**](CollectionsApi.md#collectionsCreatePost) | **POST** /collections.create | Create a collection
[**collectionsDeletePost**](CollectionsApi.md#collectionsDeletePost) | **POST** /collections.delete | Delete a collection
[**collectionsExportAllPost**](CollectionsApi.md#collectionsExportAllPost) | **POST** /collections.export_all | Export all collections
[**collectionsExportPost**](CollectionsApi.md#collectionsExportPost) | **POST** /collections.export | Export a collection
[**collectionsGroupMembershipsPost**](CollectionsApi.md#collectionsGroupMembershipsPost) | **POST** /collections.group_memberships | List all collection group members
[**collectionsInfoPost**](CollectionsApi.md#collectionsInfoPost) | **POST** /collections.info | Retrieve a collection
[**collectionsListPost**](CollectionsApi.md#collectionsListPost) | **POST** /collections.list | List all collections
[**collectionsMembershipsPost**](CollectionsApi.md#collectionsMembershipsPost) | **POST** /collections.memberships | List all collection memberships
[**collectionsRemoveGroupPost**](CollectionsApi.md#collectionsRemoveGroupPost) | **POST** /collections.remove_group | Remove a collection group
[**collectionsRemoveUserPost**](CollectionsApi.md#collectionsRemoveUserPost) | **POST** /collections.remove_user | Remove a collection user
[**collectionsUpdatePost**](CollectionsApi.md#collectionsUpdatePost) | **POST** /collections.update | Update a collection

<a name="collectionsAddGroupPost"></a>
# **collectionsAddGroupPost**
> InlineResponse2009 collectionsAddGroupPost(opts)

Add a group to a collection

This method allows you to give all members in a group access to a collection.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsAddGroupBody() // CollectionsAddGroupBody | 
};
apiInstance.collectionsAddGroupPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsAddGroupBody**](CollectionsAddGroupBody.md)|  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsAddUserPost"></a>
# **collectionsAddUserPost**
> InlineResponse2007 collectionsAddUserPost(opts)

Add a collection user

This method allows you to add a user membership to the specified collection.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsAddUserBody() // CollectionsAddUserBody | 
};
apiInstance.collectionsAddUserPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsAddUserBody**](CollectionsAddUserBody.md)|  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsCreatePost"></a>
# **collectionsCreatePost**
> InlineResponse2006 collectionsCreatePost(opts)

Create a collection

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsCreateBody() // CollectionsCreateBody | 
};
apiInstance.collectionsCreatePost(opts, (error, data, response) => {
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
 **body** | [**CollectionsCreateBody**](CollectionsCreateBody.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsDeletePost"></a>
# **collectionsDeletePost**
> InlineResponse2001 collectionsDeletePost(opts)

Delete a collection

Delete a collection and all of its documents. This action can’t be undone so please be careful.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsDeleteBody() // CollectionsDeleteBody | 
};
apiInstance.collectionsDeletePost(opts, (error, data, response) => {
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
 **body** | [**CollectionsDeleteBody**](CollectionsDeleteBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsExportAllPost"></a>
# **collectionsExportAllPost**
> InlineResponse20011 collectionsExportAllPost()

Export all collections

Triggers a bulk export of all documents in markdown format and their attachments. If documents are nested then they will be nested in folders inside the zip file. The endpoint returns a &#x60;FileOperation&#x60; that can be queried to track the progress of the export and get the url for the final file.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
apiInstance.collectionsExportAllPost((error, data, response) => {
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsExportPost"></a>
# **collectionsExportPost**
> InlineResponse20011 collectionsExportPost(opts)

Export a collection

Triggers a bulk export of the collection in markdown format and their attachments. If documents are nested then they will be nested in folders inside the zip file. The endpoint returns a &#x60;FileOperation&#x60; that can be queried to track the progress of the export and get the url for the final file.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsExportBody() // CollectionsExportBody | 
};
apiInstance.collectionsExportPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsExportBody**](CollectionsExportBody.md)|  | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsGroupMembershipsPost"></a>
# **collectionsGroupMembershipsPost**
> InlineResponse20010 collectionsGroupMembershipsPost(opts)

List all collection group members

This method allows you to list a collections group memberships. This is the list of groups that have been given access to the collection.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsGroupMembershipsBody() // CollectionsGroupMembershipsBody | 
};
apiInstance.collectionsGroupMembershipsPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsGroupMembershipsBody**](CollectionsGroupMembershipsBody.md)|  | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsInfoPost"></a>
# **collectionsInfoPost**
> InlineResponse2004 collectionsInfoPost(opts)

Retrieve a collection

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsInfoBody() // CollectionsInfoBody | 
};
apiInstance.collectionsInfoPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsInfoBody**](CollectionsInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsListPost"></a>
# **collectionsListPost**
> InlineResponse2005 collectionsListPost(opts)

List all collections

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.Pagination() // Pagination | 
};
apiInstance.collectionsListPost(opts, (error, data, response) => {
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
 **body** | [**Pagination**](Pagination.md)|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsMembershipsPost"></a>
# **collectionsMembershipsPost**
> InlineResponse2008 collectionsMembershipsPost(opts)

List all collection memberships

This method allows you to list a collections individual memberships. It&#x27;s important to note that memberships returned from this endpoint do not include group memberships.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsMembershipsBody() // CollectionsMembershipsBody | 
};
apiInstance.collectionsMembershipsPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsMembershipsBody**](CollectionsMembershipsBody.md)|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsRemoveGroupPost"></a>
# **collectionsRemoveGroupPost**
> InlineResponse2001 collectionsRemoveGroupPost(opts)

Remove a collection group

This method allows you to revoke all members in a group access to a collection. Note that members of the group may still retain access through other groups or individual memberships.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsRemoveGroupBody() // CollectionsRemoveGroupBody | 
};
apiInstance.collectionsRemoveGroupPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsRemoveGroupBody**](CollectionsRemoveGroupBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsRemoveUserPost"></a>
# **collectionsRemoveUserPost**
> InlineResponse2001 collectionsRemoveUserPost(opts)

Remove a collection user

This method allows you to remove a user from the specified collection.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsRemoveUserBody() // CollectionsRemoveUserBody | 
};
apiInstance.collectionsRemoveUserPost(opts, (error, data, response) => {
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
 **body** | [**CollectionsRemoveUserBody**](CollectionsRemoveUserBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsUpdatePost"></a>
# **collectionsUpdatePost**
> InlineResponse2006 collectionsUpdatePost(opts)

Update a collection

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.CollectionsApi();
let opts = { 
  'body': new OutlineApi.CollectionsUpdateBody() // CollectionsUpdateBody | 
};
apiInstance.collectionsUpdatePost(opts, (error, data, response) => {
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
 **body** | [**CollectionsUpdateBody**](CollectionsUpdateBody.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

