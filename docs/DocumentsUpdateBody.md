# OutlineApi.DocumentsUpdateBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the document. Either the UUID or the urlId is acceptable. | 
**title** | **String** | The title of the document. | [optional] 
**text** | **String** | The body of the document, may contain markdown formatting. | [optional] 
**append** | **Boolean** | If true the text field will be appended to the end of the existing document, rather than the default behavior of replacing it. This is potentially useful for things like logging into a document. | [optional] 
**publish** | **Boolean** | Whether this document should be published and made visible to other team members, if a draft | [optional] 
**done** | **Boolean** | Whether the editing session has finished, this will trigger any notifications. This property will soon be deprecated. | [optional] 
