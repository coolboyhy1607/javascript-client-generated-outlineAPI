# OutlineApi.EventsListBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sort** | **String** |  | [optional] 
**direction** | **String** |  | [optional] 
**name** | **String** | Filter to a specific event, e.g. \&quot;collections.create\&quot;. Event names are in the format \&quot;objects.verb\&quot; | [optional] 
**actorId** | **String** | Filter to events performed by the selected user | [optional] 
**documentId** | **String** | Filter to events performed in the selected document | [optional] 
**collectionId** | **String** | Filter to events performed in the selected collection | [optional] 
**auditLog** | **Boolean** | Whether to return detailed events suitable for an audit log. Without this flag less detailed event types will be returned. | [optional] 

<a name="DirectionEnum"></a>
## Enum: DirectionEnum

* `ASC` (value: `"ASC"`)
* `DESC` (value: `"DESC"`)

