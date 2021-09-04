# OutlineApi.Collection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**name** | **String** | The name of the collection. | [optional] 
**description** | **String** | A description of the collection, may contain markdown formatting | [optional] 
**documents** | [**[NavigationNode]**](NavigationNode.md) |  | [optional] 
**color** | **String** | A color representing the collection, this is used to help make collections more identifiable in the UI. It should be in HEX format including the # | [optional] 
**_private** | **Boolean** | Whether this collection is considered to be private. Private collections are only visible to those with a user or group membership. | [optional] 
**createdAt** | **Date** | The date and time that this object was created | [optional] 
**updatedAt** | **Date** | The date and time that this object was last changed | [optional] 
**deletedAt** | **Date** | The date and time that this object was deleted | [optional] 
