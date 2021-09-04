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
import {ApiClient} from './ApiClient';
import {AllOfFileOperationCollection} from './model/AllOfFileOperationCollection';
import {Attachment} from './model/Attachment';
import {AttachmentsCreateBody} from './model/AttachmentsCreateBody';
import {AttachmentsDeleteBody} from './model/AttachmentsDeleteBody';
import {AttachmentsRedirectBody} from './model/AttachmentsRedirectBody';
import {Auth} from './model/Auth';
import {Collection} from './model/Collection';
import {CollectionGroupMembership} from './model/CollectionGroupMembership';
import {CollectionsAddGroupBody} from './model/CollectionsAddGroupBody';
import {CollectionsAddUserBody} from './model/CollectionsAddUserBody';
import {CollectionsCreateBody} from './model/CollectionsCreateBody';
import {CollectionsDeleteBody} from './model/CollectionsDeleteBody';
import {CollectionsExportBody} from './model/CollectionsExportBody';
import {CollectionsGroupMembershipsBody} from './model/CollectionsGroupMembershipsBody';
import {CollectionsInfoBody} from './model/CollectionsInfoBody';
import {CollectionsMembershipsBody} from './model/CollectionsMembershipsBody';
import {CollectionsRemoveGroupBody} from './model/CollectionsRemoveGroupBody';
import {CollectionsRemoveUserBody} from './model/CollectionsRemoveUserBody';
import {CollectionsUpdateBody} from './model/CollectionsUpdateBody';
import {Document} from './model/Document';
import {DocumentsArchiveBody} from './model/DocumentsArchiveBody';
import {DocumentsCreateBody} from './model/DocumentsCreateBody';
import {DocumentsDeleteBody} from './model/DocumentsDeleteBody';
import {DocumentsDraftsBody} from './model/DocumentsDraftsBody';
import {DocumentsExportBody} from './model/DocumentsExportBody';
import {DocumentsImportBody} from './model/DocumentsImportBody';
import {DocumentsInfoBody} from './model/DocumentsInfoBody';
import {DocumentsListBody} from './model/DocumentsListBody';
import {DocumentsMoveBody} from './model/DocumentsMoveBody';
import {DocumentsPinBody} from './model/DocumentsPinBody';
import {DocumentsPinnedBody} from './model/DocumentsPinnedBody';
import {DocumentsRestoreBody} from './model/DocumentsRestoreBody';
import {DocumentsSearchBody} from './model/DocumentsSearchBody';
import {DocumentsStarBody} from './model/DocumentsStarBody';
import {DocumentsStarredBody} from './model/DocumentsStarredBody';
import {DocumentsTemplatizeBody} from './model/DocumentsTemplatizeBody';
import {DocumentsUnpinBody} from './model/DocumentsUnpinBody';
import {DocumentsUnpublishBody} from './model/DocumentsUnpublishBody';
import {DocumentsUnstarBody} from './model/DocumentsUnstarBody';
import {DocumentsUpdateBody} from './model/DocumentsUpdateBody';
import {DocumentsViewedBody} from './model/DocumentsViewedBody';
import {Error} from './model/Error';
import {Event} from './model/Event';
import {EventsListBody} from './model/EventsListBody';
import {FileOperation} from './model/FileOperation';
import {FileOperationsInfoBody} from './model/FileOperationsInfoBody';
import {FileOperationsListBody} from './model/FileOperationsListBody';
import {FileOperationsRedirectBody} from './model/FileOperationsRedirectBody';
import {Group} from './model/Group';
import {GroupMembership} from './model/GroupMembership';
import {GroupsAddUserBody} from './model/GroupsAddUserBody';
import {GroupsCreateBody} from './model/GroupsCreateBody';
import {GroupsDeleteBody} from './model/GroupsDeleteBody';
import {GroupsInfoBody} from './model/GroupsInfoBody';
import {GroupsListBody} from './model/GroupsListBody';
import {GroupsMembershipsBody} from './model/GroupsMembershipsBody';
import {GroupsRemoveUserBody} from './model/GroupsRemoveUserBody';
import {GroupsUpdateBody} from './model/GroupsUpdateBody';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse20010} from './model/InlineResponse20010';
import {InlineResponse20010Data} from './model/InlineResponse20010Data';
import {InlineResponse20011} from './model/InlineResponse20011';
import {InlineResponse20011Data} from './model/InlineResponse20011Data';
import {InlineResponse20012} from './model/InlineResponse20012';
import {InlineResponse20013} from './model/InlineResponse20013';
import {InlineResponse20014} from './model/InlineResponse20014';
import {InlineResponse20015} from './model/InlineResponse20015';
import {InlineResponse20015Data} from './model/InlineResponse20015Data';
import {InlineResponse20016} from './model/InlineResponse20016';
import {InlineResponse20017} from './model/InlineResponse20017';
import {InlineResponse20018} from './model/InlineResponse20018';
import {InlineResponse20018Data} from './model/InlineResponse20018Data';
import {InlineResponse20019} from './model/InlineResponse20019';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse20020} from './model/InlineResponse20020';
import {InlineResponse20021} from './model/InlineResponse20021';
import {InlineResponse20022} from './model/InlineResponse20022';
import {InlineResponse20023} from './model/InlineResponse20023';
import {InlineResponse20024} from './model/InlineResponse20024';
import {InlineResponse20025} from './model/InlineResponse20025';
import {InlineResponse20025Data} from './model/InlineResponse20025Data';
import {InlineResponse20026} from './model/InlineResponse20026';
import {InlineResponse20026Data} from './model/InlineResponse20026Data';
import {InlineResponse20027} from './model/InlineResponse20027';
import {InlineResponse20027Data} from './model/InlineResponse20027Data';
import {InlineResponse20028} from './model/InlineResponse20028';
import {InlineResponse20029} from './model/InlineResponse20029';
import {InlineResponse2003} from './model/InlineResponse2003';
import {InlineResponse20030} from './model/InlineResponse20030';
import {InlineResponse20031} from './model/InlineResponse20031';
import {InlineResponse20032} from './model/InlineResponse20032';
import {InlineResponse20033} from './model/InlineResponse20033';
import {InlineResponse20034} from './model/InlineResponse20034';
import {InlineResponse20035} from './model/InlineResponse20035';
import {InlineResponse2003Data} from './model/InlineResponse2003Data';
import {InlineResponse2003DataServices} from './model/InlineResponse2003DataServices';
import {InlineResponse2004} from './model/InlineResponse2004';
import {InlineResponse2005} from './model/InlineResponse2005';
import {InlineResponse2006} from './model/InlineResponse2006';
import {InlineResponse2007} from './model/InlineResponse2007';
import {InlineResponse2007Data} from './model/InlineResponse2007Data';
import {InlineResponse2008} from './model/InlineResponse2008';
import {InlineResponse2009} from './model/InlineResponse2009';
import {InlineResponse2009Data} from './model/InlineResponse2009Data';
import {InlineResponse200Data} from './model/InlineResponse200Data';
import {Membership} from './model/Membership';
import {NavigationNode} from './model/NavigationNode';
import {Pagination} from './model/Pagination';
import {Policy} from './model/Policy';
import {PolicyAbilities} from './model/PolicyAbilities';
import {Revision} from './model/Revision';
import {RevisionsInfoBody} from './model/RevisionsInfoBody';
import {RevisionsListBody} from './model/RevisionsListBody';
import {Share} from './model/Share';
import {SharesCreateBody} from './model/SharesCreateBody';
import {SharesInfoBody} from './model/SharesInfoBody';
import {SharesListBody} from './model/SharesListBody';
import {SharesRevokeBody} from './model/SharesRevokeBody';
import {SharesUpdateBody} from './model/SharesUpdateBody';
import {Sorting} from './model/Sorting';
import {Team} from './model/Team';
import {User} from './model/User';
import {UsersActivateBody} from './model/UsersActivateBody';
import {UsersDeleteBody} from './model/UsersDeleteBody';
import {UsersDemoteBody} from './model/UsersDemoteBody';
import {UsersInfoBody} from './model/UsersInfoBody';
import {UsersListBody} from './model/UsersListBody';
import {UsersPromoteBody} from './model/UsersPromoteBody';
import {UsersSuspendBody} from './model/UsersSuspendBody';
import {UsersUpdateBody} from './model/UsersUpdateBody';
import {View} from './model/View';
import {ViewsCreateBody} from './model/ViewsCreateBody';
import {ViewsListBody} from './model/ViewsListBody';
import {AttachmentsApi} from './api/AttachmentsApi';
import {AuthApi} from './api/AuthApi';
import {CollectionsApi} from './api/CollectionsApi';
import {DocumentsApi} from './api/DocumentsApi';
import {EventsApi} from './api/EventsApi';
import {FileOperationsApi} from './api/FileOperationsApi';
import {GroupsApi} from './api/GroupsApi';
import {RevisionsApi} from './api/RevisionsApi';
import {SharesApi} from './api/SharesApi';
import {UsersApi} from './api/UsersApi';
import {ViewsApi} from './api/ViewsApi';

/**
* _IntroductionThe_Outline_API_is_structured_in_an_RPC_style__It_enables_you_toprogramatically_interact_with_all_aspects_of_Outlines_data__in_fact_themain_application_is_built_on_exactly_the_same_API_The_API_structure_is_available_as_an__openapi_specification_httpsgithub_comoutlineopenapi_if_thats_your_jam__it_can_be_used_to_generate_clients_for_most_programming_languages__Making_requestsOutlines_API_follows_simple_RPC_style_conventions_where_each_API_endpoint_isa_method_on_httpsapp_getoutline_comapimethod__Both_GET_and_POST_methods_are_supported_but_its_recommended_that_you_make_all_call_using_POST_Only_HTTPS_is_supported_and_all_response_payloads_are_JSON_When_making_POST_requests_request_parameters_are_parsed_depending_onContent_Type_header__To_make_a_call_using_JSON_payload_you_must_passContent_Type_applicationjson_header_heres_an_example_using_CURLcurl_httpsapp_getoutline_comapidocuments_info_X_POST_H_authorization_Bearer_MY_API_KEY_H_content_type_applicationjson_H_accept_applicationjson_d_id_outline_api_NTpezNwhUPOr_with_JavaScriptjavascriptconst_response__await_fetch_httpsapp_getoutline_comapidocuments_info___method_POST__headers_____Accept_applicationjson____Content_Type_applicationjson____Authorization_Bearer_MY_API_KEY__const_body__await_response_json_const_document__body_data_AuthenticationTo_access_API_endpoints_you_must_provide_a_valid_API_key__You_can_create_newAPI_keys_in_your__account_settings_httpsapp_getoutline_comsettings__Becareful_when_handling_your_keys_as_they_give_access_to_all_of_your_documentsyou_should_treat_them_like_passwords_and_they_should_never_be_committed_tosource_control_To_authenticate_with_API_you_can_supply_the_API_key_as_a_header_Authorization_Bearer_YOUR_API_KEY_or_as_part_of_the_payload_using_token_parameter__Header_based_authentication_is_highly_recommended_so_that_your_keysdont_accidentally_leak_into_logs_Some_API_endpoints_allow_unauthenticated_requests_for_public_resources_andthey_can_be_called_without_an_API_key__ErrorsAll_successful_API_requests_will_be_returned_with_a_200_or_201_status_codeand_ok_true_in_the_response_payload__If_theres_an_error_while_making_therequest_the_appropriate_status_code_is_returned_with_the_error_message__ok_false__error_Not_Found_PaginationMost_top_level_API_resources_have_support_for_list_API_methods__For_instanceyou_can_list_users_documents_and_collections__These_list_methods_sharecommon_parameters_taking_both_limit_and_offset_Responses_will_echo_these_parameters_in_the_root_pagination_key_and_alsoinclude_a_nextPath_key_which_can_be_used_as_a_handy_shortcut_to_fetch_thenext_page_of_results__For_example__ok_true__status_200__data____pagination_____limit_25____offset_0____nextPath_apidocuments_listlimit25offset25___PoliciesMany_API_resources_have_associated_policies_these_objects_describe_thecurrent_API_keys_authorized_actions_related_to_an_individual_resource__Itshould_be_noted_that_the_policy_id_is_identical_to_the_resource_it_isrelated_to_policies_themselves_do_not_have_unique_identifiers_For_most_usecases_of_the_API_policies_can_be_safely_ignored__Callingunauthorized_methods_will_result_in_the_appropriate_response_code__these_areused_in_the_main_Outline_UI_to_adjust_which_elements_are_visible_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OutlineApi = require('index'); // See note below*.
* var xxxSvc = new OutlineApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OutlineApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OutlineApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OutlineApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AllOfFileOperationCollection model constructor.
     * @property {module:model/AllOfFileOperationCollection}
     */
    AllOfFileOperationCollection,

    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment,

    /**
     * The AttachmentsCreateBody model constructor.
     * @property {module:model/AttachmentsCreateBody}
     */
    AttachmentsCreateBody,

    /**
     * The AttachmentsDeleteBody model constructor.
     * @property {module:model/AttachmentsDeleteBody}
     */
    AttachmentsDeleteBody,

    /**
     * The AttachmentsRedirectBody model constructor.
     * @property {module:model/AttachmentsRedirectBody}
     */
    AttachmentsRedirectBody,

    /**
     * The Auth model constructor.
     * @property {module:model/Auth}
     */
    Auth,

    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection,

    /**
     * The CollectionGroupMembership model constructor.
     * @property {module:model/CollectionGroupMembership}
     */
    CollectionGroupMembership,

    /**
     * The CollectionsAddGroupBody model constructor.
     * @property {module:model/CollectionsAddGroupBody}
     */
    CollectionsAddGroupBody,

    /**
     * The CollectionsAddUserBody model constructor.
     * @property {module:model/CollectionsAddUserBody}
     */
    CollectionsAddUserBody,

    /**
     * The CollectionsCreateBody model constructor.
     * @property {module:model/CollectionsCreateBody}
     */
    CollectionsCreateBody,

    /**
     * The CollectionsDeleteBody model constructor.
     * @property {module:model/CollectionsDeleteBody}
     */
    CollectionsDeleteBody,

    /**
     * The CollectionsExportBody model constructor.
     * @property {module:model/CollectionsExportBody}
     */
    CollectionsExportBody,

    /**
     * The CollectionsGroupMembershipsBody model constructor.
     * @property {module:model/CollectionsGroupMembershipsBody}
     */
    CollectionsGroupMembershipsBody,

    /**
     * The CollectionsInfoBody model constructor.
     * @property {module:model/CollectionsInfoBody}
     */
    CollectionsInfoBody,

    /**
     * The CollectionsMembershipsBody model constructor.
     * @property {module:model/CollectionsMembershipsBody}
     */
    CollectionsMembershipsBody,

    /**
     * The CollectionsRemoveGroupBody model constructor.
     * @property {module:model/CollectionsRemoveGroupBody}
     */
    CollectionsRemoveGroupBody,

    /**
     * The CollectionsRemoveUserBody model constructor.
     * @property {module:model/CollectionsRemoveUserBody}
     */
    CollectionsRemoveUserBody,

    /**
     * The CollectionsUpdateBody model constructor.
     * @property {module:model/CollectionsUpdateBody}
     */
    CollectionsUpdateBody,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The DocumentsArchiveBody model constructor.
     * @property {module:model/DocumentsArchiveBody}
     */
    DocumentsArchiveBody,

    /**
     * The DocumentsCreateBody model constructor.
     * @property {module:model/DocumentsCreateBody}
     */
    DocumentsCreateBody,

    /**
     * The DocumentsDeleteBody model constructor.
     * @property {module:model/DocumentsDeleteBody}
     */
    DocumentsDeleteBody,

    /**
     * The DocumentsDraftsBody model constructor.
     * @property {module:model/DocumentsDraftsBody}
     */
    DocumentsDraftsBody,

    /**
     * The DocumentsExportBody model constructor.
     * @property {module:model/DocumentsExportBody}
     */
    DocumentsExportBody,

    /**
     * The DocumentsImportBody model constructor.
     * @property {module:model/DocumentsImportBody}
     */
    DocumentsImportBody,

    /**
     * The DocumentsInfoBody model constructor.
     * @property {module:model/DocumentsInfoBody}
     */
    DocumentsInfoBody,

    /**
     * The DocumentsListBody model constructor.
     * @property {module:model/DocumentsListBody}
     */
    DocumentsListBody,

    /**
     * The DocumentsMoveBody model constructor.
     * @property {module:model/DocumentsMoveBody}
     */
    DocumentsMoveBody,

    /**
     * The DocumentsPinBody model constructor.
     * @property {module:model/DocumentsPinBody}
     */
    DocumentsPinBody,

    /**
     * The DocumentsPinnedBody model constructor.
     * @property {module:model/DocumentsPinnedBody}
     */
    DocumentsPinnedBody,

    /**
     * The DocumentsRestoreBody model constructor.
     * @property {module:model/DocumentsRestoreBody}
     */
    DocumentsRestoreBody,

    /**
     * The DocumentsSearchBody model constructor.
     * @property {module:model/DocumentsSearchBody}
     */
    DocumentsSearchBody,

    /**
     * The DocumentsStarBody model constructor.
     * @property {module:model/DocumentsStarBody}
     */
    DocumentsStarBody,

    /**
     * The DocumentsStarredBody model constructor.
     * @property {module:model/DocumentsStarredBody}
     */
    DocumentsStarredBody,

    /**
     * The DocumentsTemplatizeBody model constructor.
     * @property {module:model/DocumentsTemplatizeBody}
     */
    DocumentsTemplatizeBody,

    /**
     * The DocumentsUnpinBody model constructor.
     * @property {module:model/DocumentsUnpinBody}
     */
    DocumentsUnpinBody,

    /**
     * The DocumentsUnpublishBody model constructor.
     * @property {module:model/DocumentsUnpublishBody}
     */
    DocumentsUnpublishBody,

    /**
     * The DocumentsUnstarBody model constructor.
     * @property {module:model/DocumentsUnstarBody}
     */
    DocumentsUnstarBody,

    /**
     * The DocumentsUpdateBody model constructor.
     * @property {module:model/DocumentsUpdateBody}
     */
    DocumentsUpdateBody,

    /**
     * The DocumentsViewedBody model constructor.
     * @property {module:model/DocumentsViewedBody}
     */
    DocumentsViewedBody,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventsListBody model constructor.
     * @property {module:model/EventsListBody}
     */
    EventsListBody,

    /**
     * The FileOperation model constructor.
     * @property {module:model/FileOperation}
     */
    FileOperation,

    /**
     * The FileOperationsInfoBody model constructor.
     * @property {module:model/FileOperationsInfoBody}
     */
    FileOperationsInfoBody,

    /**
     * The FileOperationsListBody model constructor.
     * @property {module:model/FileOperationsListBody}
     */
    FileOperationsListBody,

    /**
     * The FileOperationsRedirectBody model constructor.
     * @property {module:model/FileOperationsRedirectBody}
     */
    FileOperationsRedirectBody,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The GroupMembership model constructor.
     * @property {module:model/GroupMembership}
     */
    GroupMembership,

    /**
     * The GroupsAddUserBody model constructor.
     * @property {module:model/GroupsAddUserBody}
     */
    GroupsAddUserBody,

    /**
     * The GroupsCreateBody model constructor.
     * @property {module:model/GroupsCreateBody}
     */
    GroupsCreateBody,

    /**
     * The GroupsDeleteBody model constructor.
     * @property {module:model/GroupsDeleteBody}
     */
    GroupsDeleteBody,

    /**
     * The GroupsInfoBody model constructor.
     * @property {module:model/GroupsInfoBody}
     */
    GroupsInfoBody,

    /**
     * The GroupsListBody model constructor.
     * @property {module:model/GroupsListBody}
     */
    GroupsListBody,

    /**
     * The GroupsMembershipsBody model constructor.
     * @property {module:model/GroupsMembershipsBody}
     */
    GroupsMembershipsBody,

    /**
     * The GroupsRemoveUserBody model constructor.
     * @property {module:model/GroupsRemoveUserBody}
     */
    GroupsRemoveUserBody,

    /**
     * The GroupsUpdateBody model constructor.
     * @property {module:model/GroupsUpdateBody}
     */
    GroupsUpdateBody,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010,

    /**
     * The InlineResponse20010Data model constructor.
     * @property {module:model/InlineResponse20010Data}
     */
    InlineResponse20010Data,

    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011,

    /**
     * The InlineResponse20011Data model constructor.
     * @property {module:model/InlineResponse20011Data}
     */
    InlineResponse20011Data,

    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012,

    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013,

    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014,

    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015,

    /**
     * The InlineResponse20015Data model constructor.
     * @property {module:model/InlineResponse20015Data}
     */
    InlineResponse20015Data,

    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016,

    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017,

    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018,

    /**
     * The InlineResponse20018Data model constructor.
     * @property {module:model/InlineResponse20018Data}
     */
    InlineResponse20018Data,

    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020,

    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021,

    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022,

    /**
     * The InlineResponse20023 model constructor.
     * @property {module:model/InlineResponse20023}
     */
    InlineResponse20023,

    /**
     * The InlineResponse20024 model constructor.
     * @property {module:model/InlineResponse20024}
     */
    InlineResponse20024,

    /**
     * The InlineResponse20025 model constructor.
     * @property {module:model/InlineResponse20025}
     */
    InlineResponse20025,

    /**
     * The InlineResponse20025Data model constructor.
     * @property {module:model/InlineResponse20025Data}
     */
    InlineResponse20025Data,

    /**
     * The InlineResponse20026 model constructor.
     * @property {module:model/InlineResponse20026}
     */
    InlineResponse20026,

    /**
     * The InlineResponse20026Data model constructor.
     * @property {module:model/InlineResponse20026Data}
     */
    InlineResponse20026Data,

    /**
     * The InlineResponse20027 model constructor.
     * @property {module:model/InlineResponse20027}
     */
    InlineResponse20027,

    /**
     * The InlineResponse20027Data model constructor.
     * @property {module:model/InlineResponse20027Data}
     */
    InlineResponse20027Data,

    /**
     * The InlineResponse20028 model constructor.
     * @property {module:model/InlineResponse20028}
     */
    InlineResponse20028,

    /**
     * The InlineResponse20029 model constructor.
     * @property {module:model/InlineResponse20029}
     */
    InlineResponse20029,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse20030 model constructor.
     * @property {module:model/InlineResponse20030}
     */
    InlineResponse20030,

    /**
     * The InlineResponse20031 model constructor.
     * @property {module:model/InlineResponse20031}
     */
    InlineResponse20031,

    /**
     * The InlineResponse20032 model constructor.
     * @property {module:model/InlineResponse20032}
     */
    InlineResponse20032,

    /**
     * The InlineResponse20033 model constructor.
     * @property {module:model/InlineResponse20033}
     */
    InlineResponse20033,

    /**
     * The InlineResponse20034 model constructor.
     * @property {module:model/InlineResponse20034}
     */
    InlineResponse20034,

    /**
     * The InlineResponse20035 model constructor.
     * @property {module:model/InlineResponse20035}
     */
    InlineResponse20035,

    /**
     * The InlineResponse2003Data model constructor.
     * @property {module:model/InlineResponse2003Data}
     */
    InlineResponse2003Data,

    /**
     * The InlineResponse2003DataServices model constructor.
     * @property {module:model/InlineResponse2003DataServices}
     */
    InlineResponse2003DataServices,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006,

    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007,

    /**
     * The InlineResponse2007Data model constructor.
     * @property {module:model/InlineResponse2007Data}
     */
    InlineResponse2007Data,

    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008,

    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009,

    /**
     * The InlineResponse2009Data model constructor.
     * @property {module:model/InlineResponse2009Data}
     */
    InlineResponse2009Data,

    /**
     * The InlineResponse200Data model constructor.
     * @property {module:model/InlineResponse200Data}
     */
    InlineResponse200Data,

    /**
     * The Membership model constructor.
     * @property {module:model/Membership}
     */
    Membership,

    /**
     * The NavigationNode model constructor.
     * @property {module:model/NavigationNode}
     */
    NavigationNode,

    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination,

    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy,

    /**
     * The PolicyAbilities model constructor.
     * @property {module:model/PolicyAbilities}
     */
    PolicyAbilities,

    /**
     * The Revision model constructor.
     * @property {module:model/Revision}
     */
    Revision,

    /**
     * The RevisionsInfoBody model constructor.
     * @property {module:model/RevisionsInfoBody}
     */
    RevisionsInfoBody,

    /**
     * The RevisionsListBody model constructor.
     * @property {module:model/RevisionsListBody}
     */
    RevisionsListBody,

    /**
     * The Share model constructor.
     * @property {module:model/Share}
     */
    Share,

    /**
     * The SharesCreateBody model constructor.
     * @property {module:model/SharesCreateBody}
     */
    SharesCreateBody,

    /**
     * The SharesInfoBody model constructor.
     * @property {module:model/SharesInfoBody}
     */
    SharesInfoBody,

    /**
     * The SharesListBody model constructor.
     * @property {module:model/SharesListBody}
     */
    SharesListBody,

    /**
     * The SharesRevokeBody model constructor.
     * @property {module:model/SharesRevokeBody}
     */
    SharesRevokeBody,

    /**
     * The SharesUpdateBody model constructor.
     * @property {module:model/SharesUpdateBody}
     */
    SharesUpdateBody,

    /**
     * The Sorting model constructor.
     * @property {module:model/Sorting}
     */
    Sorting,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UsersActivateBody model constructor.
     * @property {module:model/UsersActivateBody}
     */
    UsersActivateBody,

    /**
     * The UsersDeleteBody model constructor.
     * @property {module:model/UsersDeleteBody}
     */
    UsersDeleteBody,

    /**
     * The UsersDemoteBody model constructor.
     * @property {module:model/UsersDemoteBody}
     */
    UsersDemoteBody,

    /**
     * The UsersInfoBody model constructor.
     * @property {module:model/UsersInfoBody}
     */
    UsersInfoBody,

    /**
     * The UsersListBody model constructor.
     * @property {module:model/UsersListBody}
     */
    UsersListBody,

    /**
     * The UsersPromoteBody model constructor.
     * @property {module:model/UsersPromoteBody}
     */
    UsersPromoteBody,

    /**
     * The UsersSuspendBody model constructor.
     * @property {module:model/UsersSuspendBody}
     */
    UsersSuspendBody,

    /**
     * The UsersUpdateBody model constructor.
     * @property {module:model/UsersUpdateBody}
     */
    UsersUpdateBody,

    /**
     * The View model constructor.
     * @property {module:model/View}
     */
    View,

    /**
     * The ViewsCreateBody model constructor.
     * @property {module:model/ViewsCreateBody}
     */
    ViewsCreateBody,

    /**
     * The ViewsListBody model constructor.
     * @property {module:model/ViewsListBody}
     */
    ViewsListBody,

    /**
    * The AttachmentsApi service constructor.
    * @property {module:api/AttachmentsApi}
    */
    AttachmentsApi,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The CollectionsApi service constructor.
    * @property {module:api/CollectionsApi}
    */
    CollectionsApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The FileOperationsApi service constructor.
    * @property {module:api/FileOperationsApi}
    */
    FileOperationsApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:api/GroupsApi}
    */
    GroupsApi,

    /**
    * The RevisionsApi service constructor.
    * @property {module:api/RevisionsApi}
    */
    RevisionsApi,

    /**
    * The SharesApi service constructor.
    * @property {module:api/SharesApi}
    */
    SharesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The ViewsApi service constructor.
    * @property {module:api/ViewsApi}
    */
    ViewsApi
};