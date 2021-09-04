# OutlineApi.UsersApi

All URIs are relative to *https://app.getoutline.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersActivatePost**](UsersApi.md#usersActivatePost) | **POST** /users.activate | Activate a user
[**usersDeletePost**](UsersApi.md#usersDeletePost) | **POST** /users.delete | Delete a user
[**usersDemotePost**](UsersApi.md#usersDemotePost) | **POST** /users.demote | Demote a user
[**usersInfoPost**](UsersApi.md#usersInfoPost) | **POST** /users.info | Retrieve a user
[**usersListPost**](UsersApi.md#usersListPost) | **POST** /users.list | List all users
[**usersPromotePost**](UsersApi.md#usersPromotePost) | **POST** /users.promote | Promote a user
[**usersSuspendPost**](UsersApi.md#usersSuspendPost) | **POST** /users.suspend | Suspend a user
[**usersUpdatePost**](UsersApi.md#usersUpdatePost) | **POST** /users.update | Update a user

<a name="usersActivatePost"></a>
# **usersActivatePost**
> InlineResponse20032 usersActivatePost(opts)

Activate a user

Activating a previously suspended user allows them to signin again. Users that are activated will cause billing totals to be re-calculated in the hosted version.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersActivateBody() // UsersActivateBody | 
};
apiInstance.usersActivatePost(opts, (error, data, response) => {
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
 **body** | [**UsersActivateBody**](UsersActivateBody.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersDeletePost"></a>
# **usersDeletePost**
> InlineResponse2001 usersDeletePost(opts)

Delete a user

Deleting a user removes the object entirely. In almost every circumstance it is preferable to suspend a user, as a deleted user can be recreated by signing in with SSO again.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersDeleteBody() // UsersDeleteBody | 
};
apiInstance.usersDeletePost(opts, (error, data, response) => {
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
 **body** | [**UsersDeleteBody**](UsersDeleteBody.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersDemotePost"></a>
# **usersDemotePost**
> InlineResponse20032 usersDemotePost(opts)

Demote a user

Demote a team admin to regular user permissions. This endpoint is only available for admin users.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersDemoteBody() // UsersDemoteBody | 
};
apiInstance.usersDemotePost(opts, (error, data, response) => {
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
 **body** | [**UsersDemoteBody**](UsersDemoteBody.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersInfoPost"></a>
# **usersInfoPost**
> InlineResponse20032 usersInfoPost(opts)

Retrieve a user

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersInfoBody() // UsersInfoBody | 
};
apiInstance.usersInfoPost(opts, (error, data, response) => {
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
 **body** | [**UsersInfoBody**](UsersInfoBody.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersListPost"></a>
# **usersListPost**
> InlineResponse20033 usersListPost(opts)

List all users

List and filter all the users in the team

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersListBody() // UsersListBody | 
};
apiInstance.usersListPost(opts, (error, data, response) => {
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
 **body** | [**UsersListBody**](UsersListBody.md)|  | [optional] 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPromotePost"></a>
# **usersPromotePost**
> InlineResponse20032 usersPromotePost(opts)

Promote a user

Promote a user to be a team admin. This endpoint is only available for admin users.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersPromoteBody() // UsersPromoteBody | 
};
apiInstance.usersPromotePost(opts, (error, data, response) => {
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
 **body** | [**UsersPromoteBody**](UsersPromoteBody.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersSuspendPost"></a>
# **usersSuspendPost**
> InlineResponse20032 usersSuspendPost(opts)

Suspend a user

Suspending a user prevents the user from signing in. Users that are suspended are also not counted against billing totals in the hosted version.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersSuspendBody() // UsersSuspendBody | 
};
apiInstance.usersSuspendPost(opts, (error, data, response) => {
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
 **body** | [**UsersSuspendBody**](UsersSuspendBody.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersUpdatePost"></a>
# **usersUpdatePost**
> InlineResponse20032 usersUpdatePost(opts)

Update a user

Update a users name or avatar. No &#x60;id&#x60; is required as it is only possible to update the current user at this time.

### Example
```javascript
import {OutlineApi} from 'outline_api';
let defaultClient = OutlineApi.ApiClient.instance;


let apiInstance = new OutlineApi.UsersApi();
let opts = { 
  'body': new OutlineApi.UsersUpdateBody() // UsersUpdateBody | 
};
apiInstance.usersUpdatePost(opts, (error, data, response) => {
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
 **body** | [**UsersUpdateBody**](UsersUpdateBody.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[http](../README.md#http)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

