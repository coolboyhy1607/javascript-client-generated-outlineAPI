# OutlineApi.GroupsApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsAddUserPost**](GroupsApi.md#groupsAddUserPost) | **POST** /groups.add_user | Add a group member
[**groupsCreatePost**](GroupsApi.md#groupsCreatePost) | **POST** /groups.create | Create a group
[**groupsDeletePost**](GroupsApi.md#groupsDeletePost) | **POST** /groups.delete | Delete a group
[**groupsInfoPost**](GroupsApi.md#groupsInfoPost) | **POST** /groups.info | Retrieve a group
[**groupsListPost**](GroupsApi.md#groupsListPost) | **POST** /groups.list | List all groups
[**groupsMembershipsPost**](GroupsApi.md#groupsMembershipsPost) | **POST** /groups.memberships | List all group members
[**groupsRemoveUserPost**](GroupsApi.md#groupsRemoveUserPost) | **POST** /groups.remove_user | Remove a group member
[**groupsUpdatePost**](GroupsApi.md#groupsUpdatePost) | **POST** /groups.update | Update a group

<a name="groupsAddUserPost"></a>
# **groupsAddUserPost**
> InlineResponse20026 groupsAddUserPost(opts)

Add a group member

This method allows you to add a user to the specified group.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsAddUserBody() // GroupsAddUserBody | 
};
apiInstance.groupsAddUserPost(opts, (error, data, response) => {
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
 **body** | [**GroupsAddUserBody**](GroupsAddUserBody.md)|  | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsCreatePost"></a>
# **groupsCreatePost**
> InlineResponse20024 groupsCreatePost(opts)

Create a group

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsCreateBody() // GroupsCreateBody | 
};
apiInstance.groupsCreatePost(opts, (error, data, response) => {
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
 **body** | [**GroupsCreateBody**](GroupsCreateBody.md)|  | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsDeletePost"></a>
# **groupsDeletePost**
> InlineResponse2001 groupsDeletePost(opts)

Delete a group

Deleting a group will cause all of its members to lose access to any collections the group has previously been added to. This action can’t be undone so please be careful.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsDeleteBody() // GroupsDeleteBody | 
};
apiInstance.groupsDeletePost(opts, (error, data, response) => {
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
 **body** | [**GroupsDeleteBody**](GroupsDeleteBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsInfoPost"></a>
# **groupsInfoPost**
> InlineResponse20022 groupsInfoPost(opts)

Retrieve a group

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsInfoBody() // GroupsInfoBody | 
};
apiInstance.groupsInfoPost(opts, (error, data, response) => {
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
 **body** | [**GroupsInfoBody**](GroupsInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsListPost"></a>
# **groupsListPost**
> InlineResponse20023 groupsListPost(opts)

List all groups

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsListBody() // GroupsListBody | 
};
apiInstance.groupsListPost(opts, (error, data, response) => {
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
 **body** | [**GroupsListBody**](GroupsListBody.md)|  | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsMembershipsPost"></a>
# **groupsMembershipsPost**
> InlineResponse20025 groupsMembershipsPost(opts)

List all group members

List and filter all the members in a group.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsMembershipsBody() // GroupsMembershipsBody | 
};
apiInstance.groupsMembershipsPost(opts, (error, data, response) => {
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
 **body** | [**GroupsMembershipsBody**](GroupsMembershipsBody.md)|  | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsRemoveUserPost"></a>
# **groupsRemoveUserPost**
> InlineResponse20027 groupsRemoveUserPost(opts)

Remove a group member

This method allows you to remove a user from the group.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsRemoveUserBody() // GroupsRemoveUserBody | 
};
apiInstance.groupsRemoveUserPost(opts, (error, data, response) => {
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
 **body** | [**GroupsRemoveUserBody**](GroupsRemoveUserBody.md)|  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsUpdatePost"></a>
# **groupsUpdatePost**
> InlineResponse20024 groupsUpdatePost(opts)

Update a group

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.GroupsApi();
let opts = { 
  'body': new OutlineApi.GroupsUpdateBody() // GroupsUpdateBody | 
};
apiInstance.groupsUpdatePost(opts, (error, data, response) => {
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
 **body** | [**GroupsUpdateBody**](GroupsUpdateBody.md)|  | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

