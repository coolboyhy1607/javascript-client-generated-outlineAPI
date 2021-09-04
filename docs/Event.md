# OutlineApi.Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**name** | **String** |  | [optional] 
**modelId** | **String** | Identifier for the object this event is associated with when it is not one of document or collection | [optional] 
**actorId** | **String** | The user that performed the action. | [optional] 
**actorIpAddress** | **String** | The ip address the action was performed from. This field is only returned when the &#x60;auditLog&#x60; boolean is true. | [optional] 
**collectionId** | **String** | Identifier for the associated collection, if any | [optional] 
**documentId** | **String** | Identifier for the associated document, if any | [optional] 
**createdAt** | **Date** | The date and time that this event was created | [optional] 
**data** | **Object** | Additional unstructured data associated with the event | [optional] 
**actor** | [**User**](User.md) |  | [optional] 
