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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OutlineApi);
  }
}(this, function(expect, OutlineApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OutlineApi.DocumentsApi();
  });

  describe('(package)', function() {
    describe('DocumentsApi', function() {
      describe('documentsArchivePost', function() {
        it('should call documentsArchivePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsArchivePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsArchivePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsCreatePost', function() {
        it('should call documentsCreatePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsCreatePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsCreatePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsDeletePost', function() {
        it('should call documentsDeletePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsDeletePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsDeletePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsDraftsPost', function() {
        it('should call documentsDraftsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsDraftsPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsDraftsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20014);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsExportPost', function() {
        it('should call documentsExportPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsExportPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsExportPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20013);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsImportPost', function() {
        it('should call documentsImportPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsImportPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsImportPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20012);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsInfoPost', function() {
        it('should call documentsInfoPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsInfoPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsInfoPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20012);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsListPost', function() {
        it('should call documentsListPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsListPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsListPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20014);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsMovePost', function() {
        it('should call documentsMovePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsMovePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsMovePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20018);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsPinPost', function() {
        it('should call documentsPinPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsPinPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsPinPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsPinnedPost', function() {
        it('should call documentsPinnedPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsPinnedPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsPinnedPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20014);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsRestorePost', function() {
        it('should call documentsRestorePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsRestorePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsRestorePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsSearchPost', function() {
        it('should call documentsSearchPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsSearchPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsSearchPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20015);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsStarPost', function() {
        it('should call documentsStarPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsStarPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsStarPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20017);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsStarredPost', function() {
        it('should call documentsStarredPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsStarredPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsStarredPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20014);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsTemplatizePost', function() {
        it('should call documentsTemplatizePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsTemplatizePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsTemplatizePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsUnpinPost', function() {
        it('should call documentsUnpinPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsUnpinPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsUnpinPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsUnpublishPost', function() {
        it('should call documentsUnpublishPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsUnpublishPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsUnpublishPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsUnstarPost', function() {
        it('should call documentsUnstarPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsUnstarPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsUnstarPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20017);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsUpdatePost', function() {
        it('should call documentsUpdatePost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsUpdatePost call and complete the assertions
          /*
          var opts = {};

          instance.documentsUpdatePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20016);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('documentsViewedPost', function() {
        it('should call documentsViewedPost successfully', function(done) {
          // TODO: uncomment, update parameter values for documentsViewedPost call and complete the assertions
          /*
          var opts = {};

          instance.documentsViewedPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OutlineApi.InlineResponse20014);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));