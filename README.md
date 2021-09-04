# outline_api

OutlineApi - JavaScript client for outline_api
# Introduction  The Outline API is structured in an RPC style. It enables you to programatically interact with all aspects of Outline’s data – in fact, the main application is built on exactly the same API.  The API structure is available as an  [openapi specification](https://github.com/outline/openapi) if that’s your  jam – it can be used to generate clients for most programming languages.  # Making requests  Outline’s API follows simple RPC style conventions where each API endpoint is a method on `https://app.getoutline.com/api/method`. Both `GET` and `POST`  methods are supported but it’s recommended that you make all call using POST. Only HTTPS is supported and all response payloads are JSON.  When making `POST` requests, request parameters are parsed depending on Content-Type header. To make a call using JSON payload, you must pass Content-Type: application/json header, here’s an example using CURL:  ``` curl https://app.getoutline.com/api/documents.info -X POST -H 'authorization: Bearer MY_API_KEY' -H 'content-type: application/json' -H 'accept: application/json' -d '{\"id\": \"outline-api-NTpezNwhUP\"}' ```  Or, with JavaScript:  ```javascript const response = await fetch(\"https://app.getoutline.com/api/documents.info\", {   method: \"POST\",   headers: {     Accept: \"application/json\",     \"Content-Type\": \"application/json\",     Authorization: 'Bearer MY_API_KEY'   } })  const body = await response.json(); const document = body.data; ```  # Authentication  To access API endpoints, you must provide a valid API key. You can create new API keys in your [account settings](https://app.getoutline.com/settings). Be careful when handling your keys as they give access to all of your documents, you should treat them like passwords and they should never be committed to source control.  To authenticate with API, you can supply the API key as a header (`Authorization: Bearer YOUR_API_KEY`) or as part of the payload using `token`  parameter. Header based authentication is highly recommended so that your keys don’t accidentally leak into logs.  Some API endpoints allow unauthenticated requests for public resources and they can be called without an API key.  # Errors  All successful API requests will be returned with a 200 or 201 status code and `ok: true` in the response payload. If there’s an error while making the request, the appropriate status code is returned with the error message:  ``` {   \"ok\": false,   \"error: \"Not Found\" } ```  # Pagination  Most top-level API resources have support for \"list\" API methods. For instance, you can list users, documents, and collections. These list methods share common parameters, taking both `limit` and `offset`.  Responses will echo these parameters in the root `pagination` key, and also include a `nextPath` key which can be used as a handy shortcut to fetch the next page of results. For example:  ``` {   ok: true,   status: 200,   data: […],   pagination: {     limit: 25,     offset: 0,     nextPath: \"/api/documents.list?limit=25&offset=25\"   } } ```  # Policies  Many API resources have associated \"policies\", these objects describe the current API keys authorized actions related to an individual resource. It should be noted that the policy \"id\" is identical to the resource it is related to, policies themselves do not have unique identifiers.  For most usecases of the API, policies can be safely ignored. Calling unauthorized methods will result in the appropriate response code – these are used in the main Outline UI to adjust which elements are visible. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install outline_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OutlineApi = require('outline_api');
var defaultClient = OutlineApi.ApiClient.instance;


var api = new OutlineApi.AttachmentsApi()
var opts = { 
  'body': new OutlineApi.AttachmentsCreateBody() // {AttachmentsCreateBody} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.attachmentsCreatePost(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://app.getoutline.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OutlineApi.AttachmentsApi* | [**attachmentsCreatePost**](docs/AttachmentsApi.md#attachmentsCreatePost) | **POST** /attachments.create | Create an attachment
*OutlineApi.AttachmentsApi* | [**attachmentsDeletePost**](docs/AttachmentsApi.md#attachmentsDeletePost) | **POST** /attachments.delete | Delete an attachment
*OutlineApi.AttachmentsApi* | [**attachmentsRedirectPost**](docs/AttachmentsApi.md#attachmentsRedirectPost) | **POST** /attachments.redirect | Retrieve an attachment
*OutlineApi.AuthApi* | [**authConfigPost**](docs/AuthApi.md#authConfigPost) | **POST** /auth.config | Retrieve auth config
*OutlineApi.AuthApi* | [**authInfoPost**](docs/AuthApi.md#authInfoPost) | **POST** /auth.info | Retrieve auth
*OutlineApi.CollectionsApi* | [**collectionsAddGroupPost**](docs/CollectionsApi.md#collectionsAddGroupPost) | **POST** /collections.add_group | Add a group to a collection
*OutlineApi.CollectionsApi* | [**collectionsAddUserPost**](docs/CollectionsApi.md#collectionsAddUserPost) | **POST** /collections.add_user | Add a collection user
*OutlineApi.CollectionsApi* | [**collectionsCreatePost**](docs/CollectionsApi.md#collectionsCreatePost) | **POST** /collections.create | Create a collection
*OutlineApi.CollectionsApi* | [**collectionsDeletePost**](docs/CollectionsApi.md#collectionsDeletePost) | **POST** /collections.delete | Delete a collection
*OutlineApi.CollectionsApi* | [**collectionsExportAllPost**](docs/CollectionsApi.md#collectionsExportAllPost) | **POST** /collections.export_all | Export all collections
*OutlineApi.CollectionsApi* | [**collectionsExportPost**](docs/CollectionsApi.md#collectionsExportPost) | **POST** /collections.export | Export a collection
*OutlineApi.CollectionsApi* | [**collectionsGroupMembershipsPost**](docs/CollectionsApi.md#collectionsGroupMembershipsPost) | **POST** /collections.group_memberships | List all collection group members
*OutlineApi.CollectionsApi* | [**collectionsInfoPost**](docs/CollectionsApi.md#collectionsInfoPost) | **POST** /collections.info | Retrieve a collection
*OutlineApi.CollectionsApi* | [**collectionsListPost**](docs/CollectionsApi.md#collectionsListPost) | **POST** /collections.list | List all collections
*OutlineApi.CollectionsApi* | [**collectionsMembershipsPost**](docs/CollectionsApi.md#collectionsMembershipsPost) | **POST** /collections.memberships | List all collection memberships
*OutlineApi.CollectionsApi* | [**collectionsRemoveGroupPost**](docs/CollectionsApi.md#collectionsRemoveGroupPost) | **POST** /collections.remove_group | Remove a collection group
*OutlineApi.CollectionsApi* | [**collectionsRemoveUserPost**](docs/CollectionsApi.md#collectionsRemoveUserPost) | **POST** /collections.remove_user | Remove a collection user
*OutlineApi.CollectionsApi* | [**collectionsUpdatePost**](docs/CollectionsApi.md#collectionsUpdatePost) | **POST** /collections.update | Update a collection
*OutlineApi.DocumentsApi* | [**documentsArchivePost**](docs/DocumentsApi.md#documentsArchivePost) | **POST** /documents.archive | Archive a document
*OutlineApi.DocumentsApi* | [**documentsCreatePost**](docs/DocumentsApi.md#documentsCreatePost) | **POST** /documents.create | Create a document
*OutlineApi.DocumentsApi* | [**documentsDeletePost**](docs/DocumentsApi.md#documentsDeletePost) | **POST** /documents.delete | Delete a document
*OutlineApi.DocumentsApi* | [**documentsDraftsPost**](docs/DocumentsApi.md#documentsDraftsPost) | **POST** /documents.drafts | List all draft documents
*OutlineApi.DocumentsApi* | [**documentsExportPost**](docs/DocumentsApi.md#documentsExportPost) | **POST** /documents.export | Export a document as markdown
*OutlineApi.DocumentsApi* | [**documentsImportPost**](docs/DocumentsApi.md#documentsImportPost) | **POST** /documents.import | Import a file as a document
*OutlineApi.DocumentsApi* | [**documentsInfoPost**](docs/DocumentsApi.md#documentsInfoPost) | **POST** /documents.info | Retrieve a document
*OutlineApi.DocumentsApi* | [**documentsListPost**](docs/DocumentsApi.md#documentsListPost) | **POST** /documents.list | List all documents
*OutlineApi.DocumentsApi* | [**documentsMovePost**](docs/DocumentsApi.md#documentsMovePost) | **POST** /documents.move | Move a document
*OutlineApi.DocumentsApi* | [**documentsPinPost**](docs/DocumentsApi.md#documentsPinPost) | **POST** /documents.pin | Pin a document
*OutlineApi.DocumentsApi* | [**documentsPinnedPost**](docs/DocumentsApi.md#documentsPinnedPost) | **POST** /documents.pinned | List all pinned documents
*OutlineApi.DocumentsApi* | [**documentsRestorePost**](docs/DocumentsApi.md#documentsRestorePost) | **POST** /documents.restore | Restore a document
*OutlineApi.DocumentsApi* | [**documentsSearchPost**](docs/DocumentsApi.md#documentsSearchPost) | **POST** /documents.search | Search all documents
*OutlineApi.DocumentsApi* | [**documentsStarPost**](docs/DocumentsApi.md#documentsStarPost) | **POST** /documents.star | Star a document
*OutlineApi.DocumentsApi* | [**documentsStarredPost**](docs/DocumentsApi.md#documentsStarredPost) | **POST** /documents.starred | List all starred documents
*OutlineApi.DocumentsApi* | [**documentsTemplatizePost**](docs/DocumentsApi.md#documentsTemplatizePost) | **POST** /documents.templatize | Create a template from a document
*OutlineApi.DocumentsApi* | [**documentsUnpinPost**](docs/DocumentsApi.md#documentsUnpinPost) | **POST** /documents.unpin | Unpin a document
*OutlineApi.DocumentsApi* | [**documentsUnpublishPost**](docs/DocumentsApi.md#documentsUnpublishPost) | **POST** /documents.unpublish | Unpublish a document
*OutlineApi.DocumentsApi* | [**documentsUnstarPost**](docs/DocumentsApi.md#documentsUnstarPost) | **POST** /documents.unstar | Unstar a document
*OutlineApi.DocumentsApi* | [**documentsUpdatePost**](docs/DocumentsApi.md#documentsUpdatePost) | **POST** /documents.update | Update a document
*OutlineApi.DocumentsApi* | [**documentsViewedPost**](docs/DocumentsApi.md#documentsViewedPost) | **POST** /documents.viewed | List all recently viewed documents
*OutlineApi.EventsApi* | [**eventsListPost**](docs/EventsApi.md#eventsListPost) | **POST** /events.list | List all events
*OutlineApi.FileOperationsApi* | [**fileOperationsInfoPost**](docs/FileOperationsApi.md#fileOperationsInfoPost) | **POST** /fileOperations.info | Retrieve a file operation
*OutlineApi.FileOperationsApi* | [**fileOperationsListPost**](docs/FileOperationsApi.md#fileOperationsListPost) | **POST** /fileOperations.list | List all file operations
*OutlineApi.FileOperationsApi* | [**fileOperationsRedirectPost**](docs/FileOperationsApi.md#fileOperationsRedirectPost) | **POST** /fileOperations.redirect | Retrieve the file
*OutlineApi.GroupsApi* | [**groupsAddUserPost**](docs/GroupsApi.md#groupsAddUserPost) | **POST** /groups.add_user | Add a group member
*OutlineApi.GroupsApi* | [**groupsCreatePost**](docs/GroupsApi.md#groupsCreatePost) | **POST** /groups.create | Create a group
*OutlineApi.GroupsApi* | [**groupsDeletePost**](docs/GroupsApi.md#groupsDeletePost) | **POST** /groups.delete | Delete a group
*OutlineApi.GroupsApi* | [**groupsInfoPost**](docs/GroupsApi.md#groupsInfoPost) | **POST** /groups.info | Retrieve a group
*OutlineApi.GroupsApi* | [**groupsListPost**](docs/GroupsApi.md#groupsListPost) | **POST** /groups.list | List all groups
*OutlineApi.GroupsApi* | [**groupsMembershipsPost**](docs/GroupsApi.md#groupsMembershipsPost) | **POST** /groups.memberships | List all group members
*OutlineApi.GroupsApi* | [**groupsRemoveUserPost**](docs/GroupsApi.md#groupsRemoveUserPost) | **POST** /groups.remove_user | Remove a group member
*OutlineApi.GroupsApi* | [**groupsUpdatePost**](docs/GroupsApi.md#groupsUpdatePost) | **POST** /groups.update | Update a group
*OutlineApi.RevisionsApi* | [**revisionsInfoPost**](docs/RevisionsApi.md#revisionsInfoPost) | **POST** /revisions.info | Retrieve a revision
*OutlineApi.RevisionsApi* | [**revisionsListPost**](docs/RevisionsApi.md#revisionsListPost) | **POST** /revisions.list | List all revisions
*OutlineApi.SharesApi* | [**sharesCreatePost**](docs/SharesApi.md#sharesCreatePost) | **POST** /shares.create | Create a share
*OutlineApi.SharesApi* | [**sharesInfoPost**](docs/SharesApi.md#sharesInfoPost) | **POST** /shares.info | Retrieve a share object
*OutlineApi.SharesApi* | [**sharesListPost**](docs/SharesApi.md#sharesListPost) | **POST** /shares.list | List all shares
*OutlineApi.SharesApi* | [**sharesRevokePost**](docs/SharesApi.md#sharesRevokePost) | **POST** /shares.revoke | Revoke a share
*OutlineApi.SharesApi* | [**sharesUpdatePost**](docs/SharesApi.md#sharesUpdatePost) | **POST** /shares.update | Update a share
*OutlineApi.UsersApi* | [**usersActivatePost**](docs/UsersApi.md#usersActivatePost) | **POST** /users.activate | Activate a user
*OutlineApi.UsersApi* | [**usersDeletePost**](docs/UsersApi.md#usersDeletePost) | **POST** /users.delete | Delete a user
*OutlineApi.UsersApi* | [**usersDemotePost**](docs/UsersApi.md#usersDemotePost) | **POST** /users.demote | Demote a user
*OutlineApi.UsersApi* | [**usersInfoPost**](docs/UsersApi.md#usersInfoPost) | **POST** /users.info | Retrieve a user
*OutlineApi.UsersApi* | [**usersListPost**](docs/UsersApi.md#usersListPost) | **POST** /users.list | List all users
*OutlineApi.UsersApi* | [**usersPromotePost**](docs/UsersApi.md#usersPromotePost) | **POST** /users.promote | Promote a user
*OutlineApi.UsersApi* | [**usersSuspendPost**](docs/UsersApi.md#usersSuspendPost) | **POST** /users.suspend | Suspend a user
*OutlineApi.UsersApi* | [**usersUpdatePost**](docs/UsersApi.md#usersUpdatePost) | **POST** /users.update | Update a user
*OutlineApi.ViewsApi* | [**viewsCreatePost**](docs/ViewsApi.md#viewsCreatePost) | **POST** /views.create | Create a view
*OutlineApi.ViewsApi* | [**viewsListPost**](docs/ViewsApi.md#viewsListPost) | **POST** /views.list | List all views

## Documentation for Models

 - [OutlineApi.AllOfFileOperationCollection](docs/AllOfFileOperationCollection.md)
 - [OutlineApi.Attachment](docs/Attachment.md)
 - [OutlineApi.AttachmentsCreateBody](docs/AttachmentsCreateBody.md)
 - [OutlineApi.AttachmentsDeleteBody](docs/AttachmentsDeleteBody.md)
 - [OutlineApi.AttachmentsRedirectBody](docs/AttachmentsRedirectBody.md)
 - [OutlineApi.Auth](docs/Auth.md)
 - [OutlineApi.Collection](docs/Collection.md)
 - [OutlineApi.CollectionGroupMembership](docs/CollectionGroupMembership.md)
 - [OutlineApi.CollectionsAddGroupBody](docs/CollectionsAddGroupBody.md)
 - [OutlineApi.CollectionsAddUserBody](docs/CollectionsAddUserBody.md)
 - [OutlineApi.CollectionsCreateBody](docs/CollectionsCreateBody.md)
 - [OutlineApi.CollectionsDeleteBody](docs/CollectionsDeleteBody.md)
 - [OutlineApi.CollectionsExportBody](docs/CollectionsExportBody.md)
 - [OutlineApi.CollectionsGroupMembershipsBody](docs/CollectionsGroupMembershipsBody.md)
 - [OutlineApi.CollectionsInfoBody](docs/CollectionsInfoBody.md)
 - [OutlineApi.CollectionsMembershipsBody](docs/CollectionsMembershipsBody.md)
 - [OutlineApi.CollectionsRemoveGroupBody](docs/CollectionsRemoveGroupBody.md)
 - [OutlineApi.CollectionsRemoveUserBody](docs/CollectionsRemoveUserBody.md)
 - [OutlineApi.CollectionsUpdateBody](docs/CollectionsUpdateBody.md)
 - [OutlineApi.Document](docs/Document.md)
 - [OutlineApi.DocumentsArchiveBody](docs/DocumentsArchiveBody.md)
 - [OutlineApi.DocumentsCreateBody](docs/DocumentsCreateBody.md)
 - [OutlineApi.DocumentsDeleteBody](docs/DocumentsDeleteBody.md)
 - [OutlineApi.DocumentsDraftsBody](docs/DocumentsDraftsBody.md)
 - [OutlineApi.DocumentsExportBody](docs/DocumentsExportBody.md)
 - [OutlineApi.DocumentsImportBody](docs/DocumentsImportBody.md)
 - [OutlineApi.DocumentsInfoBody](docs/DocumentsInfoBody.md)
 - [OutlineApi.DocumentsListBody](docs/DocumentsListBody.md)
 - [OutlineApi.DocumentsMoveBody](docs/DocumentsMoveBody.md)
 - [OutlineApi.DocumentsPinBody](docs/DocumentsPinBody.md)
 - [OutlineApi.DocumentsPinnedBody](docs/DocumentsPinnedBody.md)
 - [OutlineApi.DocumentsRestoreBody](docs/DocumentsRestoreBody.md)
 - [OutlineApi.DocumentsSearchBody](docs/DocumentsSearchBody.md)
 - [OutlineApi.DocumentsStarBody](docs/DocumentsStarBody.md)
 - [OutlineApi.DocumentsStarredBody](docs/DocumentsStarredBody.md)
 - [OutlineApi.DocumentsTemplatizeBody](docs/DocumentsTemplatizeBody.md)
 - [OutlineApi.DocumentsUnpinBody](docs/DocumentsUnpinBody.md)
 - [OutlineApi.DocumentsUnpublishBody](docs/DocumentsUnpublishBody.md)
 - [OutlineApi.DocumentsUnstarBody](docs/DocumentsUnstarBody.md)
 - [OutlineApi.DocumentsUpdateBody](docs/DocumentsUpdateBody.md)
 - [OutlineApi.DocumentsViewedBody](docs/DocumentsViewedBody.md)
 - [OutlineApi.Error](docs/Error.md)
 - [OutlineApi.Event](docs/Event.md)
 - [OutlineApi.EventsListBody](docs/EventsListBody.md)
 - [OutlineApi.FileOperation](docs/FileOperation.md)
 - [OutlineApi.FileOperationsInfoBody](docs/FileOperationsInfoBody.md)
 - [OutlineApi.FileOperationsListBody](docs/FileOperationsListBody.md)
 - [OutlineApi.FileOperationsRedirectBody](docs/FileOperationsRedirectBody.md)
 - [OutlineApi.Group](docs/Group.md)
 - [OutlineApi.GroupMembership](docs/GroupMembership.md)
 - [OutlineApi.GroupsAddUserBody](docs/GroupsAddUserBody.md)
 - [OutlineApi.GroupsCreateBody](docs/GroupsCreateBody.md)
 - [OutlineApi.GroupsDeleteBody](docs/GroupsDeleteBody.md)
 - [OutlineApi.GroupsInfoBody](docs/GroupsInfoBody.md)
 - [OutlineApi.GroupsListBody](docs/GroupsListBody.md)
 - [OutlineApi.GroupsMembershipsBody](docs/GroupsMembershipsBody.md)
 - [OutlineApi.GroupsRemoveUserBody](docs/GroupsRemoveUserBody.md)
 - [OutlineApi.GroupsUpdateBody](docs/GroupsUpdateBody.md)
 - [OutlineApi.InlineResponse200](docs/InlineResponse200.md)
 - [OutlineApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [OutlineApi.InlineResponse20010](docs/InlineResponse20010.md)
 - [OutlineApi.InlineResponse20010Data](docs/InlineResponse20010Data.md)
 - [OutlineApi.InlineResponse20011](docs/InlineResponse20011.md)
 - [OutlineApi.InlineResponse20011Data](docs/InlineResponse20011Data.md)
 - [OutlineApi.InlineResponse20012](docs/InlineResponse20012.md)
 - [OutlineApi.InlineResponse20013](docs/InlineResponse20013.md)
 - [OutlineApi.InlineResponse20014](docs/InlineResponse20014.md)
 - [OutlineApi.InlineResponse20015](docs/InlineResponse20015.md)
 - [OutlineApi.InlineResponse20015Data](docs/InlineResponse20015Data.md)
 - [OutlineApi.InlineResponse20016](docs/InlineResponse20016.md)
 - [OutlineApi.InlineResponse20017](docs/InlineResponse20017.md)
 - [OutlineApi.InlineResponse20018](docs/InlineResponse20018.md)
 - [OutlineApi.InlineResponse20018Data](docs/InlineResponse20018Data.md)
 - [OutlineApi.InlineResponse20019](docs/InlineResponse20019.md)
 - [OutlineApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [OutlineApi.InlineResponse20020](docs/InlineResponse20020.md)
 - [OutlineApi.InlineResponse20021](docs/InlineResponse20021.md)
 - [OutlineApi.InlineResponse20022](docs/InlineResponse20022.md)
 - [OutlineApi.InlineResponse20023](docs/InlineResponse20023.md)
 - [OutlineApi.InlineResponse20024](docs/InlineResponse20024.md)
 - [OutlineApi.InlineResponse20025](docs/InlineResponse20025.md)
 - [OutlineApi.InlineResponse20025Data](docs/InlineResponse20025Data.md)
 - [OutlineApi.InlineResponse20026](docs/InlineResponse20026.md)
 - [OutlineApi.InlineResponse20026Data](docs/InlineResponse20026Data.md)
 - [OutlineApi.InlineResponse20027](docs/InlineResponse20027.md)
 - [OutlineApi.InlineResponse20027Data](docs/InlineResponse20027Data.md)
 - [OutlineApi.InlineResponse20028](docs/InlineResponse20028.md)
 - [OutlineApi.InlineResponse20029](docs/InlineResponse20029.md)
 - [OutlineApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [OutlineApi.InlineResponse20030](docs/InlineResponse20030.md)
 - [OutlineApi.InlineResponse20031](docs/InlineResponse20031.md)
 - [OutlineApi.InlineResponse20032](docs/InlineResponse20032.md)
 - [OutlineApi.InlineResponse20033](docs/InlineResponse20033.md)
 - [OutlineApi.InlineResponse20034](docs/InlineResponse20034.md)
 - [OutlineApi.InlineResponse20035](docs/InlineResponse20035.md)
 - [OutlineApi.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [OutlineApi.InlineResponse2003DataServices](docs/InlineResponse2003DataServices.md)
 - [OutlineApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [OutlineApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [OutlineApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [OutlineApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [OutlineApi.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [OutlineApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [OutlineApi.InlineResponse2009](docs/InlineResponse2009.md)
 - [OutlineApi.InlineResponse2009Data](docs/InlineResponse2009Data.md)
 - [OutlineApi.InlineResponse200Data](docs/InlineResponse200Data.md)
 - [OutlineApi.Membership](docs/Membership.md)
 - [OutlineApi.NavigationNode](docs/NavigationNode.md)
 - [OutlineApi.Pagination](docs/Pagination.md)
 - [OutlineApi.Policy](docs/Policy.md)
 - [OutlineApi.PolicyAbilities](docs/PolicyAbilities.md)
 - [OutlineApi.Revision](docs/Revision.md)
 - [OutlineApi.RevisionsInfoBody](docs/RevisionsInfoBody.md)
 - [OutlineApi.RevisionsListBody](docs/RevisionsListBody.md)
 - [OutlineApi.Share](docs/Share.md)
 - [OutlineApi.SharesCreateBody](docs/SharesCreateBody.md)
 - [OutlineApi.SharesInfoBody](docs/SharesInfoBody.md)
 - [OutlineApi.SharesListBody](docs/SharesListBody.md)
 - [OutlineApi.SharesRevokeBody](docs/SharesRevokeBody.md)
 - [OutlineApi.SharesUpdateBody](docs/SharesUpdateBody.md)
 - [OutlineApi.Sorting](docs/Sorting.md)
 - [OutlineApi.Team](docs/Team.md)
 - [OutlineApi.User](docs/User.md)
 - [OutlineApi.UsersActivateBody](docs/UsersActivateBody.md)
 - [OutlineApi.UsersDeleteBody](docs/UsersDeleteBody.md)
 - [OutlineApi.UsersDemoteBody](docs/UsersDemoteBody.md)
 - [OutlineApi.UsersInfoBody](docs/UsersInfoBody.md)
 - [OutlineApi.UsersListBody](docs/UsersListBody.md)
 - [OutlineApi.UsersPromoteBody](docs/UsersPromoteBody.md)
 - [OutlineApi.UsersSuspendBody](docs/UsersSuspendBody.md)
 - [OutlineApi.UsersUpdateBody](docs/UsersUpdateBody.md)
 - [OutlineApi.View](docs/View.md)
 - [OutlineApi.ViewsCreateBody](docs/ViewsCreateBody.md)
 - [OutlineApi.ViewsListBody](docs/ViewsListBody.md)

## Documentation for Authorization


### http

