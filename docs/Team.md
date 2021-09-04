# OutlineApi.Team

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**name** | **String** | The name of this team, it is usually auto-generated when the first SSO connection is made but can be changed if neccessary. | [optional] 
**avatarUrl** | **String** | The URL for the image associated with this team, it will be displayed in the team switcher and in the top left of the knowledge base along with the name. | [optional] 
**slackConnected** | **Boolean** | Whether this team has authentication with Slack enabled. | [optional] 
**googleConnected** | **Boolean** | Whether this team has authentication with Google Workspace enabled. | [optional] 
**sharing** | **Boolean** | Whether this team has share links globally enabled. If this value is false then all sharing UI and APIs are disabled. | [optional] 
**documentEmbeds** | **Boolean** | Whether this team has embeds in documents globally enabled. It can be disabled to reduce potential data leakage to third parties. | [optional] 
**guestSignin** | **Boolean** | Whether this team has guest signin enabled. Guests can signin with an email address and are not required to have a Google Workspace/Slack SSO account once invited. | [optional] 
**subdomain** | **String** | Represents the subdomain at which this team&#x27;s knowledge base can be accessed. | [optional] 
**url** | **String** | The fully qualified URL at which this team&#x27;s knowledge base can be accessed. | [optional] 
