/*
 * Outline API
 * # Introduction  The Outline API is structured in an RPC style. It enables you to programatically interact with all aspects of Outline’s data – in fact, the main application is built on exactly the same API.  The API structure is available as an  [openapi specification](https://github.com/outline/openapi) if that’s your  jam – it can be used to generate clients for most programming languages.  # Making requests  Outline’s API follows simple RPC style conventions where each API endpoint is a method on `https://app.getoutline.com/api/method`. Both `GET` and `POST`  methods are supported but it’s recommended that you make all call using POST. Only HTTPS is supported and all response payloads are JSON.  When making `POST` requests, request parameters are parsed depending on Content-Type header. To make a call using JSON payload, you must pass Content-Type: application/json header, here’s an example using CURL:  ``` curl https://app.getoutline.com/api/documents.info -X POST -H 'authorization: Bearer MY_API_KEY' -H 'content-type: application/json' -H 'accept: application/json' -d '{\"id\": \"outline-api-NTpezNwhUP\"}' ```  Or, with JavaScript:  ```javascript const response = await fetch(\"https://app.getoutline.com/api/documents.info\", {   method: \"POST\",   headers: {     Accept: \"application/json\",     \"Content-Type\": \"application/json\",     Authorization: 'Bearer MY_API_KEY'   } })  const body = await response.json(); const document = body.data; ```  # Authentication  To access API endpoints, you must provide a valid API key. You can create new API keys in your [account settings](https://app.getoutline.com/settings). Be careful when handling your keys as they give access to all of your documents, you should treat them like passwords and they should never be committed to source control.  To authenticate with API, you can supply the API key as a header (`Authorization: Bearer YOUR_API_KEY`) or as part of the payload using `token`  parameter. Header based authentication is highly recommended so that your keys don’t accidentally leak into logs.  Some API endpoints allow unauthenticated requests for public resources and they can be called without an API key.  # Errors  All successful API requests will be returned with a 200 or 201 status code and `ok: true` in the response payload. If there’s an error while making the request, the appropriate status code is returned with the error message:  ``` {   \"ok\": false,   \"error: \"Not Found\" } ```  # Pagination  Most top-level API resources have support for \"list\" API methods. For instance, you can list users, documents, and collections. These list methods share common parameters, taking both `limit` and `offset`.  Responses will echo these parameters in the root `pagination` key, and also include a `nextPath` key which can be used as a handy shortcut to fetch the next page of results. For example:  ``` {   ok: true,   status: 200,   data: […],   pagination: {     limit: 25,     offset: 0,     nextPath: \"/api/documents.list?limit=25&offset=25\"   } } ```  # Policies  Many API resources have associated \"policies\", these objects describe the current API keys authorized actions related to an individual resource. It should be noted that the policy \"id\" is identical to the resource it is related to, policies themselves do not have unique identifiers.  For most usecases of the API, policies can be safely ignored. Calling unauthorized methods will result in the appropriate response code – these are used in the main Outline UI to adjust which elements are visible. 
 *
 * OpenAPI spec version: 0.1.0
 * Contact: hello@getoutline.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.27
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Error} from '../model/Error';
import {GroupsAddUserBody} from '../model/GroupsAddUserBody';
import {GroupsCreateBody} from '../model/GroupsCreateBody';
import {GroupsDeleteBody} from '../model/GroupsDeleteBody';
import {GroupsInfoBody} from '../model/GroupsInfoBody';
import {GroupsListBody} from '../model/GroupsListBody';
import {GroupsMembershipsBody} from '../model/GroupsMembershipsBody';
import {GroupsRemoveUserBody} from '../model/GroupsRemoveUserBody';
import {GroupsUpdateBody} from '../model/GroupsUpdateBody';
import {InlineResponse2001} from '../model/InlineResponse2001';
import {InlineResponse20022} from '../model/InlineResponse20022';
import {InlineResponse20023} from '../model/InlineResponse20023';
import {InlineResponse20024} from '../model/InlineResponse20024';
import {InlineResponse20025} from '../model/InlineResponse20025';
import {InlineResponse20026} from '../model/InlineResponse20026';
import {InlineResponse20027} from '../model/InlineResponse20027';

/**
* Groups service.
* @module api/GroupsApi
* @version 0.1.0
*/
export class GroupsApi {

    /**
    * Constructs a new GroupsApi. 
    * @alias module:api/GroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the groupsAddUserPost operation.
     * @callback moduleapi/GroupsApi~groupsAddUserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a group member
     * This method allows you to add a user to the specified group.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsAddUserBody} opts.body 
     * @param {module:api/GroupsApi~groupsAddUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsAddUserPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20026;

      return this.apiClient.callApi(
        '/groups.add_user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsCreatePost operation.
     * @callback moduleapi/GroupsApi~groupsCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsCreateBody} opts.body 
     * @param {module:api/GroupsApi~groupsCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsCreatePost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20024;

      return this.apiClient.callApi(
        '/groups.create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsDeletePost operation.
     * @callback moduleapi/GroupsApi~groupsDeletePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group
     * Deleting a group will cause all of its members to lose access to any collections the group has previously been added to. This action can’t be undone so please be careful.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsDeleteBody} opts.body 
     * @param {module:api/GroupsApi~groupsDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsDeletePost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/groups.delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsInfoPost operation.
     * @callback moduleapi/GroupsApi~groupsInfoPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsInfoBody} opts.body 
     * @param {module:api/GroupsApi~groupsInfoPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsInfoPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20022;

      return this.apiClient.callApi(
        '/groups.info', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsListPost operation.
     * @callback moduleapi/GroupsApi~groupsListPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all groups
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsListBody} opts.body 
     * @param {module:api/GroupsApi~groupsListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsListPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20023;

      return this.apiClient.callApi(
        '/groups.list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsMembershipsPost operation.
     * @callback moduleapi/GroupsApi~groupsMembershipsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20025{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all group members
     * List and filter all the members in a group.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsMembershipsBody} opts.body 
     * @param {module:api/GroupsApi~groupsMembershipsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsMembershipsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20025;

      return this.apiClient.callApi(
        '/groups.memberships', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsRemoveUserPost operation.
     * @callback moduleapi/GroupsApi~groupsRemoveUserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20027{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a group member
     * This method allows you to remove a user from the group.
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsRemoveUserBody} opts.body 
     * @param {module:api/GroupsApi~groupsRemoveUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsRemoveUserPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20027;

      return this.apiClient.callApi(
        '/groups.remove_user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the groupsUpdatePost operation.
     * @callback moduleapi/GroupsApi~groupsUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupsUpdateBody} opts.body 
     * @param {module:api/GroupsApi~groupsUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    groupsUpdatePost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['http'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20024;

      return this.apiClient.callApi(
        '/groups.update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}