"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _action_types = require("../../action_types");

var _helpers = require("./helpers");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function getLogs()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_LOGS_REQUEST, _action_types.AdminTypes.GET_LOGS_SUCCESS, _action_types.AdminTypes.GET_LOGS_FAILURE, state, action);
}

function getAudits()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_AUDITS_REQUEST, _action_types.AdminTypes.GET_AUDITS_SUCCESS, _action_types.AdminTypes.GET_AUDITS_FAILURE, state, action);
}

function getConfig()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_CONFIG_REQUEST, _action_types.AdminTypes.GET_CONFIG_SUCCESS, _action_types.AdminTypes.GET_CONFIG_FAILURE, state, action);
}

function updateConfig()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPDATE_CONFIG_REQUEST, _action_types.AdminTypes.UPDATE_CONFIG_SUCCESS, _action_types.AdminTypes.UPDATE_CONFIG_FAILURE, state, action);
}

function reloadConfig()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.RELOAD_CONFIG_REQUEST, _action_types.AdminTypes.RELOAD_CONFIG_SUCCESS, _action_types.AdminTypes.RELOAD_CONFIG_FAILURE, state, action);
}

function getEnvironmentConfig()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_ENVIRONMENT_CONFIG_REQUEST, _action_types.AdminTypes.GET_ENVIRONMENT_CONFIG_SUCCESS, _action_types.AdminTypes.GET_ENVIRONMENT_CONFIG_FAILURE, state, action);
}

function testEmail()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.TEST_EMAIL_REQUEST, _action_types.AdminTypes.TEST_EMAIL_SUCCESS, _action_types.AdminTypes.TEST_EMAIL_FAILURE, state, action);
}

function testS3Connection()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.TEST_S3_REQUEST, _action_types.AdminTypes.TEST_S3_SUCCESS, _action_types.AdminTypes.TEST_S3_FAILURE, state, action);
}

function invalidateCaches()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.INVALIDATE_CACHES_REQUEST, _action_types.AdminTypes.INVALIDATE_CACHES_SUCCESS, _action_types.AdminTypes.INVALIDATE_CACHES_FAILURE, state, action);
}

function recycleDatabase()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.RECYCLE_DATABASE_REQUEST, _action_types.AdminTypes.RECYCLE_DATABASE_SUCCESS, _action_types.AdminTypes.RECYCLE_DATABASE_FAILURE, state, action);
}

function createCompliance()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.CREATE_COMPLIANCE_REQUEST, _action_types.AdminTypes.CREATE_COMPLIANCE_SUCCESS, _action_types.AdminTypes.CREATE_COMPLIANCE_FAILURE, state, action);
}

function getCompliance()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_COMPLIANCE_REQUEST, _action_types.AdminTypes.GET_COMPLIANCE_SUCCESS, _action_types.AdminTypes.GET_COMPLIANCE_FAILURE, state, action);
}

function uploadBrandImage()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPLOAD_BRAND_IMAGE_REQUEST, _action_types.AdminTypes.UPLOAD_BRAND_IMAGE_SUCCESS, _action_types.AdminTypes.UPLOAD_BRAND_IMAGE_FAILURE, state, action);
}

function deleteBrandImage()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.DELETE_BRAND_IMAGE_REQUEST, _action_types.AdminTypes.DELETE_BRAND_IMAGE_SUCCESS, _action_types.AdminTypes.DELETE_BRAND_IMAGE_FAILURE, state, action);
}

function getClusterStatus()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_CLUSTER_STATUS_REQUEST, _action_types.AdminTypes.GET_CLUSTER_STATUS_SUCCESS, _action_types.AdminTypes.GET_CLUSTER_STATUS_FAILURE, state, action);
}

function testLdap()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.TEST_LDAP_REQUEST, _action_types.AdminTypes.TEST_LDAP_SUCCESS, _action_types.AdminTypes.TEST_LDAP_FAILURE, state, action);
}

function syncLdap()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.SYNC_LDAP_REQUEST, _action_types.AdminTypes.SYNC_LDAP_SUCCESS, _action_types.AdminTypes.SYNC_LDAP_FAILURE, state, action);
}

function getLdapGroups()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_LDAP_GROUPS_REQUEST, _action_types.AdminTypes.GET_LDAP_GROUPS_SUCCESS, _action_types.AdminTypes.GET_LDAP_GROUPS_FAILURE, state, action);
}

function linkLdapGroup()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.LINK_LDAP_GROUP_REQUEST, _action_types.AdminTypes.LINK_LDAP_GROUP_SUCCESS, _action_types.AdminTypes.LINK_LDAP_GROUP_FAILURE, state, action);
}

function unlinkLdapGroup()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UNLINK_LDAP_GROUP_REQUEST, _action_types.AdminTypes.UNLINK_LDAP_GROUP_SUCCESS, _action_types.AdminTypes.UNLINK_LDAP_GROUP_FAILURE, state, action);
}

function getSamlCertificateStatus()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.SAML_CERT_STATUS_REQUEST, _action_types.AdminTypes.SAML_CERT_STATUS_SUCCESS, _action_types.AdminTypes.SAML_CERT_STATUS_FAILURE, state, action);
}

function uploadPublicSamlCertificate()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPLOAD_SAML_PUBLIC_REQUEST, _action_types.AdminTypes.UPLOAD_SAML_PUBLIC_SUCCESS, _action_types.AdminTypes.UPLOAD_SAML_PUBLIC_FAILURE, state, action);
}

function uploadPrivateSamlCertificate()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPLOAD_SAML_PRIVATE_REQUEST, _action_types.AdminTypes.UPLOAD_SAML_PRIVATE_SUCCESS, _action_types.AdminTypes.UPLOAD_SAML_PRIVATE_FAILURE, state, action);
}

function uploadIdpSamlCertificate()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPLOAD_SAML_IDP_REQUEST, _action_types.AdminTypes.UPLOAD_SAML_IDP_SUCCESS, _action_types.AdminTypes.UPLOAD_SAML_IDP_FAILURE, state, action);
}

function removePublicSamlCertificate()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.DELETE_SAML_PUBLIC_REQUEST, _action_types.AdminTypes.DELETE_SAML_PUBLIC_SUCCESS, _action_types.AdminTypes.DELETE_SAML_PUBLIC_FAILURE, state, action);
}

function removePrivateSamlCertificate()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.DELETE_SAML_PRIVATE_REQUEST, _action_types.AdminTypes.DELETE_SAML_PRIVATE_SUCCESS, _action_types.AdminTypes.DELETE_SAML_PRIVATE_FAILURE, state, action);
}

function removeIdpSamlCertificate()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.DELETE_SAML_IDP_REQUEST, _action_types.AdminTypes.DELETE_SAML_IDP_SUCCESS, _action_types.AdminTypes.DELETE_SAML_IDP_FAILURE, state, action);
}

function testElasticsearch()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.TEST_ELASTICSEARCH_REQUEST, _action_types.AdminTypes.TEST_ELASTICSEARCH_SUCCESS, _action_types.AdminTypes.TEST_ELASTICSEARCH_FAILURE, state, action);
}

function purgeElasticsearchIndexes()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.PURGE_ELASTICSEARCH_INDEXES_REQUEST, _action_types.AdminTypes.PURGE_ELASTICSEARCH_INDEXES_SUCCESS, _action_types.AdminTypes.PURGE_ELASTICSEARCH_INDEXES_FAILURE, state, action);
}

function uploadLicense()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPLOAD_LICENSE_REQUEST, _action_types.AdminTypes.UPLOAD_LICENSE_SUCCESS, _action_types.AdminTypes.UPLOAD_LICENSE_FAILURE, state, action);
}

function removeLicense()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.REMOVE_LICENSE_REQUEST, _action_types.AdminTypes.REMOVE_LICENSE_SUCCESS, _action_types.AdminTypes.REMOVE_LICENSE_FAILURE, state, action);
}

function getAnalytics()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_ANALYTICS_REQUEST, _action_types.AdminTypes.GET_ANALYTICS_SUCCESS, _action_types.AdminTypes.GET_ANALYTICS_FAILURE, state, action);
}

function uploadPlugin()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.UPLOAD_PLUGIN_REQUEST, _action_types.AdminTypes.UPLOAD_PLUGIN_SUCCESS, _action_types.AdminTypes.UPLOAD_PLUGIN_FAILURE, state, action);
}

function getPlugins()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_PLUGIN_REQUEST, _action_types.AdminTypes.GET_PLUGIN_SUCCESS, _action_types.AdminTypes.GET_PLUGIN_FAILURE, state, action);
}

function getPluginStatuses()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.GET_PLUGIN_STATUSES_REQUEST, _action_types.AdminTypes.GET_PLUGIN_STATUSES_SUCCESS, _action_types.AdminTypes.GET_PLUGIN_STATUSES_FAILURE, state, action);
}

function removePlugin()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.REMOVE_PLUGIN_REQUEST, _action_types.AdminTypes.REMOVE_PLUGIN_SUCCESS, _action_types.AdminTypes.REMOVE_PLUGIN_FAILURE, state, action);
}

function enablePlugin()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.ENABLE_PLUGIN_REQUEST, _action_types.AdminTypes.ENABLE_PLUGIN_SUCCESS, _action_types.AdminTypes.ENABLE_PLUGIN_FAILURE, state, action);
}

function disablePlugin()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _helpers.handleRequest)(_action_types.AdminTypes.DISABLE_PLUGIN_REQUEST, _action_types.AdminTypes.DISABLE_PLUGIN_SUCCESS, _action_types.AdminTypes.DISABLE_PLUGIN_FAILURE, state, action);
}

var _default = ((0, _redux.combineReducers)({
  getLogs: getLogs,
  getAudits: getAudits,
  getConfig: getConfig,
  updateConfig: updateConfig,
  reloadConfig: reloadConfig,
  getEnvironmentConfig: getEnvironmentConfig,
  testEmail: testEmail,
  testS3Connection: testS3Connection,
  invalidateCaches: invalidateCaches,
  recycleDatabase: recycleDatabase,
  createCompliance: createCompliance,
  getCompliance: getCompliance,
  uploadBrandImage: uploadBrandImage,
  deleteBrandImage: deleteBrandImage,
  getClusterStatus: getClusterStatus,
  testLdap: testLdap,
  syncLdap: syncLdap,
  getLdapGroups: getLdapGroups,
  linkLdapGroup: linkLdapGroup,
  unlinkLdapGroup: unlinkLdapGroup,
  getSamlCertificateStatus: getSamlCertificateStatus,
  uploadPublicSamlCertificate: uploadPublicSamlCertificate,
  uploadPrivateSamlCertificate: uploadPrivateSamlCertificate,
  uploadIdpSamlCertificate: uploadIdpSamlCertificate,
  removePublicSamlCertificate: removePublicSamlCertificate,
  removePrivateSamlCertificate: removePrivateSamlCertificate,
  removeIdpSamlCertificate: removeIdpSamlCertificate,
  testElasticsearch: testElasticsearch,
  purgeElasticsearchIndexes: purgeElasticsearchIndexes,
  uploadLicense: uploadLicense,
  removeLicense: removeLicense,
  getAnalytics: getAnalytics,
  uploadPlugin: uploadPlugin,
  getPlugins: getPlugins,
  getPluginStatuses: getPluginStatuses,
  removePlugin: removePlugin,
  enablePlugin: enablePlugin,
  disablePlugin: disablePlugin
})
/*: (AdminRequestsStatuses, GenericAction) => AdminRequestsStatuses*/
);

exports.default = _default;