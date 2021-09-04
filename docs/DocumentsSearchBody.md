# OutlineApi.DocumentsSearchBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **String** |  | [optional] 
**userId** | **String** | Any documents that have not been edited by the user identifier will be filtered out | [optional] 
**collectionId** | **String** | A collection to search within | [optional] 
**includeArchived** | **Boolean** |  | [optional] 
**includeDrafts** | **Boolean** |  | [optional] 
**dateFilter** | **String** | Any documents that have not been updated within the specified period will be filtered out | [optional] 

<a name="DateFilterEnum"></a>
## Enum: DateFilterEnum

* `day` (value: `"day"`)
* `week` (value: `"week"`)
* `month` (value: `"month"`)
* `year` (value: `"year"`)

