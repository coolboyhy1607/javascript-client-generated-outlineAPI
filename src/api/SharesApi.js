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
import {InlineResponse2001} from '../model/InlineResponse2001';
import {InlineResponse20030} from '../model/InlineResponse20030';
import {InlineResponse20031} from '../model/InlineResponse20031';
import {SharesCreateBody} from '../model/SharesCreateBody';
import {SharesInfoBody} from '../model/SharesInfoBody';
import {SharesListBody} from '../model/SharesListBody';
import {SharesRevokeBody} from '../model/SharesRevokeBody';
import {SharesUpdateBody} from '../model/SharesUpdateBody';

/**
* Shares service.
* @module api/SharesApi
* @version 0.1.0
*/
export class SharesApi {

    /**
    * Constructs a new SharesApi. 
    * @alias module:api/SharesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the sharesCreatePost operation.
     * @callback moduleapi/SharesApi~sharesCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a share
     * Creates a new share link that can be used by to access a document. If you request multiple shares for the same the ocument with the same API key the same share object will be returned. By default all shares are unpublished.
     * @param {Object} opts Optional parameters
     * @param {module:model/SharesCreateBody} opts.body 
     * @param {module:api/SharesApi~sharesCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sharesCreatePost(opts, callback) {
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
      let returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/shares.create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sharesInfoPost operation.
     * @callback moduleapi/SharesApi~sharesInfoPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a share object
     * @param {Object} opts Optional parameters
     * @param {module:model/SharesInfoBody} opts.body 
     * @param {module:api/SharesApi~sharesInfoPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sharesInfoPost(opts, callback) {
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
      let returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/shares.info', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sharesListPost operation.
     * @callback moduleapi/SharesApi~sharesListPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20031{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all shares
     * @param {Object} opts Optional parameters
     * @param {module:model/SharesListBody} opts.body 
     * @param {module:api/SharesApi~sharesListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sharesListPost(opts, callback) {
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
      let returnType = InlineResponse20031;

      return this.apiClient.callApi(
        '/shares.list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sharesRevokePost operation.
     * @callback moduleapi/SharesApi~sharesRevokePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke a share
     * Makes the share link inactive so that it can no longer be used to access the document.
     * @param {Object} opts Optional parameters
     * @param {module:model/SharesRevokeBody} opts.body 
     * @param {module:api/SharesApi~sharesRevokePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sharesRevokePost(opts, callback) {
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
        '/shares.revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the sharesUpdatePost operation.
     * @callback moduleapi/SharesApi~sharesUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a share
     * Allows changing an existing shares published status, which removes authentication and makes it available to anyone with the link.
     * @param {Object} opts Optional parameters
     * @param {module:model/SharesUpdateBody} opts.body 
     * @param {module:api/SharesApi~sharesUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    sharesUpdatePost(opts, callback) {
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
      let returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/shares.update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}