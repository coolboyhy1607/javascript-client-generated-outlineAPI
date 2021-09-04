# OutlineApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**name** | **String** | The name of this user, it is migrated from Slack or Google Workspace when the SSO connection is made but can be changed if neccessary. | [optional] 
**avatarUrl** | **String** | The URL for the image associated with this user, it will be displayed in the application UI and email notifications. | [optional] 
**email** | **String** | The email associated with this user, it is migrated from Slack or Google Workspace when the SSO connection is made but can be changed if neccessary. | [optional] 
**isAdmin** | **Boolean** | Whether this user has admin permissions. | [optional] 
**isSuspended** | **Boolean** | Whether this user has been suspended. | [optional] 
**lastActiveAt** | **Date** | The last time this user made an API request, this value is updated at most every 5 minutes. | [optional] 
**createdAt** | **Date** | The date and time that this user first signed in or was invited as a guest. | [optional] 
