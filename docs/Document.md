# OutlineApi.Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the object. | [optional] 
**collectionId** | **String** | Identifier for the associated collection. | [optional] 
**parentDocumentId** | **String** | Identifier for the document this is a child of, if any. | [optional] 
**title** | **String** | The title of the document. | [optional] 
**emoji** | **String** | An emoji associated with the document. | [optional] 
**text** | **String** | The text content of the document, contains markdown formatting | [optional] 
**urlId** | **String** | A short unique ID that can be used to identify the document as an alternative to the UUID | [optional] 
**collaborators** | [**[User]**](User.md) |  | [optional] 
**pinned** | **Boolean** | Whether this document is pinned in the collection | [optional] 
**template** | **Boolean** | Whether this document is a template | [optional] 
**templateId** | **String** | Unique identifier for the template this document was created from, if any | [optional] 
**starred** | **Boolean** | Whether this document is starred by the current user | [optional] 
**revision** | **Number** | A number that is auto incrementing with every revision of the document that is saved | [optional] 
**createdAt** | **Date** | The date and time that this object was created | [optional] 
**createdBy** | [**User**](User.md) |  | [optional] 
**updatedAt** | **Date** | The date and time that this object was last changed | [optional] 
**updatedBy** | [**User**](User.md) |  | [optional] 
**publishedAt** | **Date** | The date and time that this object was published | [optional] 
**archivedAt** | **Date** | The date and time that this object was archived | [optional] 
**deletedAt** | **Date** | The date and time that this object was deleted | [optional] 
