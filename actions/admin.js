"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogs = getLogs;
exports.getAudits = getAudits;
exports.getConfig = getConfig;
exports.updateConfig = updateConfig;
exports.reloadConfig = reloadConfig;
exports.getEnvironmentConfig = getEnvironmentConfig;
exports.testEmail = testEmail;
exports.testS3Connection = testS3Connection;
exports.invalidateCaches = invalidateCaches;
exports.recycleDatabase = recycleDatabase;
exports.createComplianceReport = createComplianceReport;
exports.getComplianceReport = getComplianceReport;
exports.getComplianceReports = getComplianceReports;
exports.uploadBrandImage = uploadBrandImage;
exports.deleteBrandImage = deleteBrandImage;
exports.getClusterStatus = getClusterStatus;
exports.testLdap = testLdap;
exports.syncLdap = syncLdap;
exports.getLdapGroups = getLdapGroups;
exports.linkLdapGroup = linkLdapGroup;
exports.unlinkLdapGroup = unlinkLdapGroup;
exports.getSamlCertificateStatus = getSamlCertificateStatus;
exports.uploadPublicSamlCertificate = uploadPublicSamlCertificate;
exports.uploadPrivateSamlCertificate = uploadPrivateSamlCertificate;
exports.uploadIdpSamlCertificate = uploadIdpSamlCertificate;
exports.removePublicSamlCertificate = removePublicSamlCertificate;
exports.removePrivateSamlCertificate = removePrivateSamlCertificate;
exports.removeIdpSamlCertificate = removeIdpSamlCertificate;
exports.testElasticsearch = testElasticsearch;
exports.purgeElasticsearchIndexes = purgeElasticsearchIndexes;
exports.uploadLicense = uploadLicense;
exports.removeLicense = removeLicense;
exports.getAnalytics = getAnalytics;
exports.getStandardAnalytics = getStandardAnalytics;
exports.getAdvancedAnalytics = getAdvancedAnalytics;
exports.getPostsPerDayAnalytics = getPostsPerDayAnalytics;
exports.getUsersPerDayAnalytics = getUsersPerDayAnalytics;
exports.uploadPlugin = uploadPlugin;
exports.getPlugins = getPlugins;
exports.getPluginStatuses = getPluginStatuses;
exports.removePlugin = removePlugin;
exports.enablePlugin = enablePlugin;
exports.disablePlugin = disablePlugin;

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _action_types = require("../action_types");

var _constants = require("../constants");

var _client = require("../client");

var _errors = require("./errors");

var _helpers = require("./helpers");

var _reduxBatchedActions = require("redux-batched-actions");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getLogs()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.LOGS_PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getLogs,
    onRequest: _action_types.AdminTypes.GET_LOGS_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_LOGS, _action_types.AdminTypes.GET_LOGS_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_LOGS_FAILURE,
    params: [page, perPage]
  });
}

function getAudits()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getAudits,
    onRequest: _action_types.AdminTypes.GET_AUDITS_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_AUDITS, _action_types.AdminTypes.GET_AUDITS_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_AUDITS_FAILURE,
    params: [page, perPage]
  });
}

function getConfig()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getConfig,
    onRequest: _action_types.AdminTypes.GET_CONFIG_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_CONFIG, _action_types.AdminTypes.GET_CONFIG_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_CONFIG_FAILURE
  });
}

function updateConfig(config
/*: Object*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.updateConfig,
    onRequest: _action_types.AdminTypes.UPDATE_CONFIG_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_CONFIG, _action_types.AdminTypes.UPDATE_CONFIG_SUCCESS],
    onFailure: _action_types.AdminTypes.UPDATE_CONFIG_FAILURE,
    params: [config]
  });
}

function reloadConfig()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.reloadConfig,
    onRequest: _action_types.AdminTypes.RELOAD_CONFIG_REQUEST,
    onSuccess: _action_types.AdminTypes.RELOAD_CONFIG_SUCCESS,
    onFailure: _action_types.AdminTypes.RELOAD_CONFIG_FAILURE
  });
}

function getEnvironmentConfig()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getEnvironmentConfig,
    onRequest: _action_types.AdminTypes.GET_ENVIRONMENT_CONFIG_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_ENVIRONMENT_CONFIG, _action_types.AdminTypes.GET_ENVIRONMENT_CONFIG_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_ENVIRONMENT_CONFIG_FAILURE
  });
}

function testEmail(config
/*: Object*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.testEmail,
    onRequest: _action_types.AdminTypes.TEST_EMAIL_REQUEST,
    onSuccess: _action_types.AdminTypes.TEST_EMAIL_SUCCESS,
    onFailure: _action_types.AdminTypes.TEST_EMAIL_FAILURE,
    params: [config]
  });
}

function testS3Connection(config
/*: Object*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.testS3Connection,
    onRequest: _action_types.AdminTypes.TEST_S3_REQUEST,
    onSuccess: _action_types.AdminTypes.TEST_S3_SUCCESS,
    onFailure: _action_types.AdminTypes.TEST_S3_FAILURE,
    params: [config]
  });
}

function invalidateCaches()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.invalidateCaches,
    onRequest: _action_types.AdminTypes.INVALIDATE_CACHES_REQUEST,
    onSuccess: _action_types.AdminTypes.INVALIDATE_CACHES_SUCCESS,
    onFailure: _action_types.AdminTypes.INVALIDATE_CACHES_FAILURE
  });
}

function recycleDatabase()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.recycleDatabase,
    onRequest: _action_types.AdminTypes.RECYCLE_DATABASE_REQUEST,
    onSuccess: _action_types.AdminTypes.RECYCLE_DATABASE_SUCCESS,
    onFailure: _action_types.AdminTypes.RECYCLE_DATABASE_FAILURE
  });
}

function createComplianceReport(job
/*: Job*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.createComplianceReport,
    onRequest: _action_types.AdminTypes.CREATE_COMPLIANCE_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_COMPLIANCE_REPORT, _action_types.AdminTypes.CREATE_COMPLIANCE_SUCCESS],
    onFailure: _action_types.AdminTypes.CREATE_COMPLIANCE_FAILURE,
    params: [job]
  });
}

function getComplianceReport(reportId
/*: string*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getComplianceReport,
    onRequest: _action_types.AdminTypes.GET_COMPLIANCE_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_COMPLIANCE_REPORT, _action_types.AdminTypes.GET_COMPLIANCE_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_COMPLIANCE_FAILURE,
    params: [reportId]
  });
}

function getComplianceReports()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.PAGE_SIZE_DEFAULT;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getComplianceReports,
    onRequest: _action_types.AdminTypes.GET_COMPLIANCE_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_COMPLIANCE_REPORTS, _action_types.AdminTypes.GET_COMPLIANCE_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_COMPLIANCE_FAILURE,
    params: [page, perPage]
  });
}

function uploadBrandImage(imageData
/*: File*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.uploadBrandImage,
    onRequest: _action_types.AdminTypes.UPLOAD_BRAND_IMAGE_REQUEST,
    onSuccess: _action_types.AdminTypes.UPLOAD_BRAND_IMAGE_SUCCESS,
    onFailure: _action_types.AdminTypes.UPLOAD_BRAND_IMAGE_FAILURE,
    params: [imageData]
  });
}

function deleteBrandImage()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.deleteBrandImage,
    onRequest: _action_types.AdminTypes.DELETE_BRAND_IMAGE_REQUEST,
    onSuccess: _action_types.AdminTypes.DELETE_BRAND_IMAGE_SUCCESS,
    onFailure: _action_types.AdminTypes.DELETE_BRAND_IMAGE_FAILURE
  });
}

function getClusterStatus()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getClusterStatus,
    onRequest: _action_types.AdminTypes.GET_CLUSTER_STATUS_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_CLUSTER_STATUS, _action_types.AdminTypes.GET_CLUSTER_STATUS_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_CLUSTER_STATUS_FAILURE
  });
}

function testLdap()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.testLdap,
    onRequest: _action_types.AdminTypes.TEST_LDAP_REQUEST,
    onSuccess: _action_types.AdminTypes.TEST_LDAP_SUCCESS,
    onFailure: _action_types.AdminTypes.TEST_LDAP_FAILURE
  });
}

function syncLdap()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.syncLdap,
    onRequest: _action_types.AdminTypes.SYNC_LDAP_REQUEST,
    onSuccess: _action_types.AdminTypes.SYNC_LDAP_SUCCESS,
    onFailure: _action_types.AdminTypes.SYNC_LDAP_FAILURE
  });
}

function getLdapGroups()
/*: ActionFunc*/
{
  var page
  /*: number*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var perPage
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.General.PAGE_SIZE_MAXIMUM;
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getLdapGroups,
    onRequest: _action_types.AdminTypes.GET_LDAP_GROUPS_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_LDAP_GROUPS, _action_types.AdminTypes.GET_LDAP_GROUPS_SUCCESS],
    onFailure: _action_types.AdminTypes.GET_LDAP_GROUPS_FAILURE,
    params: [page, perPage]
  });
}

function linkLdapGroup(key
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.LINK_LDAP_GROUP_REQUEST,
                  data: key
                });
                _context.prev = 1;
                _context.next = 4;
                return _client.Client4.linkLdapGroup(key);

              case 4:
                data = _context.sent;
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.LINK_LDAP_GROUP_FAILURE,
                  error: _context.t0,
                  data: key
                }, (0, _errors.logError)(_context.t0)]));
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.LINK_LDAP_GROUP_SUCCESS,
                  data: null
                }, {
                  type: _action_types.AdminTypes.LINKED_LDAP_GROUP,
                  data: {
                    primary_key: key,
                    name: data.display_name,
                    mattermost_group_id: data.id,
                    has_syncables: false
                  }
                }]));
                return _context.abrupt("return", {
                  data: true
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function unlinkLdapGroup(key
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.UNLINK_LDAP_GROUP_REQUEST,
                  data: key
                });
                _context2.prev = 1;
                _context2.next = 4;
                return _client.Client4.unlinkLdapGroup(key);

              case 4:
                _context2.next = 11;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context2.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.UNLINK_LDAP_GROUP_FAILURE,
                  error: _context2.t0,
                  data: key
                }, (0, _errors.logError)(_context2.t0)]));
                return _context2.abrupt("return", {
                  error: _context2.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.UNLINK_LDAP_GROUP_SUCCESS,
                  data: null
                }, {
                  type: _action_types.AdminTypes.UNLINKED_LDAP_GROUP,
                  data: key
                }]));
                return _context2.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 6]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function getSamlCertificateStatus()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getSamlCertificateStatus,
    onRequest: _action_types.AdminTypes.SAML_CERT_STATUS_REQUEST,
    onSuccess: [_action_types.AdminTypes.RECEIVED_SAML_CERT_STATUS, _action_types.AdminTypes.SAML_CERT_STATUS_SUCCESS],
    onFailure: _action_types.AdminTypes.SAML_CERT_STATUS_FAILURE
  });
}

function uploadPublicSamlCertificate(fileData
/*: File*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.uploadPublicSamlCertificate,
    onRequest: _action_types.AdminTypes.UPLOAD_SAML_PUBLIC_REQUEST,
    onSuccess: _action_types.AdminTypes.UPLOAD_SAML_PUBLIC_SUCCESS,
    onFailure: _action_types.AdminTypes.UPLOAD_SAML_PUBLIC_FAILURE,
    params: [fileData]
  });
}

function uploadPrivateSamlCertificate(fileData
/*: File*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.uploadPrivateSamlCertificate,
    onRequest: _action_types.AdminTypes.UPLOAD_SAML_PRIVATE_REQUEST,
    onSuccess: _action_types.AdminTypes.UPLOAD_SAML_PRIVATE_SUCCESS,
    onFailure: _action_types.AdminTypes.UPLOAD_SAML_PRIVATE_FAILURE,
    params: [fileData]
  });
}

function uploadIdpSamlCertificate(fileData
/*: File*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.uploadIdpSamlCertificate,
    onRequest: _action_types.AdminTypes.UPLOAD_SAML_IDP_REQUEST,
    onSuccess: _action_types.AdminTypes.UPLOAD_SAML_IDP_SUCCESS,
    onFailure: _action_types.AdminTypes.UPLOAD_SAML_IDP_FAILURE,
    params: [fileData]
  });
}

function removePublicSamlCertificate()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.deletePublicSamlCertificate,
    onRequest: _action_types.AdminTypes.DELETE_SAML_PUBLIC_REQUEST,
    onSuccess: _action_types.AdminTypes.DELETE_SAML_PUBLIC_SUCCESS,
    onFailure: _action_types.AdminTypes.DELETE_SAML_PUBLIC_FAILURE
  });
}

function removePrivateSamlCertificate()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.deletePrivateSamlCertificate,
    onRequest: _action_types.AdminTypes.DELETE_SAML_PRIVATE_REQUEST,
    onSuccess: _action_types.AdminTypes.DELETE_SAML_PRIVATE_SUCCESS,
    onFailure: _action_types.AdminTypes.DELETE_SAML_PRIVATE_FAILURE
  });
}

function removeIdpSamlCertificate()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.deleteIdpSamlCertificate,
    onRequest: _action_types.AdminTypes.DELETE_SAML_IDP_REQUEST,
    onSuccess: _action_types.AdminTypes.DELETE_SAML_IDP_SUCCESS,
    onFailure: _action_types.AdminTypes.DELETE_SAML_IDP_FAILURE
  });
}

function testElasticsearch(config
/*: Object*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.testElasticsearch,
    onRequest: _action_types.AdminTypes.TEST_ELASTICSEARCH_REQUEST,
    onSuccess: _action_types.AdminTypes.TEST_ELASTICSEARCH_SUCCESS,
    onFailure: _action_types.AdminTypes.TEST_ELASTICSEARCH_FAILURE,
    params: [config]
  });
}

function purgeElasticsearchIndexes()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.purgeElasticsearchIndexes,
    onRequest: _action_types.AdminTypes.PURGE_ELASTICSEARCH_INDEXES_REQUEST,
    onSuccess: _action_types.AdminTypes.PURGE_ELASTICSEARCH_INDEXES_SUCCESS,
    onFailure: _action_types.AdminTypes.PURGE_ELASTICSEARCH_INDEXES_FAILURE
  });
}

function uploadLicense(fileData
/*: File*/
)
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.uploadLicense,
    onRequest: _action_types.AdminTypes.UPLOAD_LICENSE_REQUEST,
    onSuccess: _action_types.AdminTypes.UPLOAD_LICENSE_SUCCESS,
    onFailure: _action_types.AdminTypes.UPLOAD_LICENSE_FAILURE,
    params: [fileData]
  });
}

function removeLicense()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.removeLicense,
    onRequest: _action_types.AdminTypes.REMOVE_LICENSE_REQUEST,
    onSuccess: _action_types.AdminTypes.REMOVE_LICENSE_SUCCESS,
    onFailure: _action_types.AdminTypes.REMOVE_LICENSE_FAILURE
  });
}

function getAnalytics(name
/*: string*/
)
/*: ActionFunc*/
{
  var teamId
  /*: string*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        var data, actions;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.GET_ANALYTICS_REQUEST,
                  data: null
                }, getState);
                _context3.prev = 1;
                _context3.next = 4;
                return _client.Client4.getAnalytics(name, teamId);

              case 4:
                data = _context3.sent;
                _context3.next = 12;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.GET_ANALYTICS_FAILURE,
                  error: _context3.t0
                }, (0, _errors.logError)(_context3.t0)]), getState);
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 12:
                actions = [{
                  type: _action_types.AdminTypes.GET_ANALYTICS_SUCCESS,
                  data: null
                }];

                if (teamId === '') {
                  actions.push({
                    type: _action_types.AdminTypes.RECEIVED_SYSTEM_ANALYTICS,
                    data: data,
                    name: name
                  });
                } else {
                  actions.push({
                    type: _action_types.AdminTypes.RECEIVED_TEAM_ANALYTICS,
                    data: data,
                    name: name,
                    teamId: teamId
                  });
                }

                dispatch((0, _reduxBatchedActions.batchActions)(actions), getState);
                return _context3.abrupt("return", {
                  data: data
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 7]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

function getStandardAnalytics()
/*: ActionFunc*/
{
  var teamId
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return getAnalytics('standard', teamId);
}

function getAdvancedAnalytics()
/*: ActionFunc*/
{
  var teamId
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return getAnalytics('extra_counts', teamId);
}

function getPostsPerDayAnalytics()
/*: ActionFunc*/
{
  var teamId
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return getAnalytics('post_counts_day', teamId);
}

function getUsersPerDayAnalytics()
/*: ActionFunc*/
{
  var teamId
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return getAnalytics('user_counts_with_posts_day', teamId);
}

function uploadPlugin(fileData
/*: File*/
)
/*: ActionFunc*/
{
  var force
  /*: boolean*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch, getState) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.UPLOAD_PLUGIN_REQUEST,
                  data: null
                });
                _context4.prev = 1;
                _context4.next = 4;
                return _client.Client4.uploadPlugin(fileData, force);

              case 4:
                data = _context4.sent;
                _context4.next = 12;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context4.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.UPLOAD_PLUGIN_FAILURE,
                  error: _context4.t0
                }, (0, _errors.logError)(_context4.t0)]));
                return _context4.abrupt("return", {
                  error: _context4.t0
                });

              case 12:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.UPLOAD_PLUGIN_SUCCESS,
                  data: null
                }]));
                return _context4.abrupt("return", {
                  data: data
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function getPlugins()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getPlugins,
    onRequest: _action_types.AdminTypes.GET_PLUGIN_REQUEST,
    onSuccess: [_action_types.AdminTypes.GET_PLUGIN_SUCCESS, _action_types.AdminTypes.RECEIVED_PLUGINS],
    onFailure: _action_types.AdminTypes.GET_PLUGIN_FAILURE
  });
}

function getPluginStatuses()
/*: ActionFunc*/
{
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getPluginStatuses,
    onRequest: _action_types.AdminTypes.GET_PLUGIN_STATUSES_REQUEST,
    onSuccess: [_action_types.AdminTypes.GET_PLUGIN_STATUSES_SUCCESS, _action_types.AdminTypes.RECEIVED_PLUGIN_STATUSES],
    onFailure: _action_types.AdminTypes.GET_PLUGIN_STATUSES_FAILURE
  });
}

function removePlugin(pluginId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.REMOVE_PLUGIN_REQUEST,
                  data: pluginId
                });
                _context5.prev = 1;
                _context5.next = 4;
                return _client.Client4.removePlugin(pluginId);

              case 4:
                _context5.next = 11;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context5.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.REMOVE_PLUGIN_FAILURE,
                  error: _context5.t0,
                  data: pluginId
                }, (0, _errors.logError)(_context5.t0)]));
                return _context5.abrupt("return", {
                  error: _context5.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.REMOVE_PLUGIN_SUCCESS,
                  data: null
                }, {
                  type: _action_types.AdminTypes.REMOVED_PLUGIN,
                  data: pluginId
                }]));
                return _context5.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 6]]);
      }));

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}

function enablePlugin(pluginId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.ENABLE_PLUGIN_REQUEST,
                  data: pluginId
                });
                _context6.prev = 1;
                _context6.next = 4;
                return _client.Client4.enablePlugin(pluginId);

              case 4:
                _context6.next = 11;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context6.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.ENABLE_PLUGIN_FAILURE,
                  error: _context6.t0,
                  data: pluginId
                }, (0, _errors.logError)(_context6.t0)]));
                return _context6.abrupt("return", {
                  error: _context6.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.ENABLE_PLUGIN_SUCCESS,
                  data: null
                }, {
                  type: _action_types.AdminTypes.ENABLED_PLUGIN,
                  data: pluginId
                }]));
                return _context6.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 6]]);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}

function disablePlugin(pluginId
/*: string*/
)
/*: ActionFunc*/
{
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                dispatch({
                  type: _action_types.AdminTypes.DISABLE_PLUGIN_REQUEST,
                  data: pluginId
                });
                _context7.prev = 1;
                _context7.next = 4;
                return _client.Client4.disablePlugin(pluginId);

              case 4:
                _context7.next = 11;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context7.t0, dispatch, getState);
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.DISABLE_PLUGIN_FAILURE,
                  error: _context7.t0,
                  data: pluginId
                }, (0, _errors.logError)(_context7.t0)]));
                return _context7.abrupt("return", {
                  error: _context7.t0
                });

              case 11:
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.AdminTypes.DISABLE_PLUGIN_SUCCESS,
                  data: null
                }, {
                  type: _action_types.AdminTypes.DISABLED_PLUGIN,
                  data: pluginId
                }]));
                return _context7.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 6]]);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
}