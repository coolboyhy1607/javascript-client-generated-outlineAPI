# OutlineApi.FileOperation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**type** | **String** | The type of file operation. | [optional] 
**state** | **String** | The state of the file operation. | [optional] 
**collection** | **AllOfFileOperationCollection** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**size** | **Number** | The size of the resulting file in bytes | [optional] 
**createdAt** | **Date** | The date and time that this object was created | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `_import` (value: `"import"`)
* `_export` (value: `"export"`)


<a name="StateEnum"></a>
## Enum: StateEnum

* `creating` (value: `"creating"`)
* `uploading` (value: `"uploading"`)
* `complete` (value: `"complete"`)
* `error` (value: `"error"`)
* `expired` (value: `"expired"`)

