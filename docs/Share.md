# OutlineApi.Share

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**documentTitle** | **String** | Title of the shared document. | [optional] 
**documentUrl** | **String** | URL of the original document. | [optional] 
**url** | **String** | URL of the publicly shared document. | [optional] 
**published** | **Boolean** | If true the share can be loaded without a user account. | [optional] 
**includeChildDocuments** | **Boolean** | If to also give permission to view documents nested beneath this one. | [optional] 
**createdAt** | **Date** | Date and time when this share was created | [optional] 
**createdBy** | [**User**](User.md) |  | [optional] 
**updatedAt** | **Date** | Date and time when this share was edited | [optional] 
**lastAccessedAt** | **Date** | Date and time when this share was last viewed | [optional] 
