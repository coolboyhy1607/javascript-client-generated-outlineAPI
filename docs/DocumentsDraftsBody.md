# OutlineApi.DocumentsDraftsBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sort** | **String** |  | [optional] 
**direction** | **String** |  | [optional] 
**collectionId** | **String** | A collection to search within | [optional] 
**dateFilter** | **String** | Any documents that have not been updated within the specified period will be filtered out | [optional] 

<a name="DirectionEnum"></a>
## Enum: DirectionEnum

* `ASC` (value: `"ASC"`)
* `DESC` (value: `"DESC"`)


<a name="DateFilterEnum"></a>
## Enum: DateFilterEnum

* `day` (value: `"day"`)
* `week` (value: `"week"`)
* `month` (value: `"month"`)
* `year` (value: `"year"`)

