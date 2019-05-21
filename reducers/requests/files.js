"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUploadFilesRequest = handleUploadFilesRequest;
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.to-string");

var _redux = require("redux");

var _action_types = require("../../action_types");

var _constants = require("../../constants");

var _helpers = require("./helpers");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function handleUploadFilesRequest(REQUEST
/*: string*/
, SUCCESS
/*: string*/
, FAILURE
/*: string*/
, CANCEL
/*: string*/
, state
/*: RequestStatusType*/
, action
/*: GenericAction*/
)
/*: RequestStatusType*/
{
  switch (action.type) {
    case REQUEST:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.STARTED
      });

    case SUCCESS:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.SUCCESS,
        error: null
      });

    case FAILURE:
      {
        var error = action.error;

        if (error instanceof Error) {
          error = error.hasOwnProperty('intl') ? _objectSpread({}, error) : error.toString();
        }

        return _objectSpread({}, state, {
          status: _constants.RequestStatus.FAILURE,
          error: error
        });
      }

    case CANCEL:
      return _objectSpread({}, state, {
        status: _constants.RequestStatus.CANCELLED,
        error: null
      });

    default:
      return state;
  }
}

function uploadFiles()
/*: RequestStatusType*/
{
  var state
  /*: RequestStatusType*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _helpers.initialRequestState)();
  var action
  /*: GenericAction*/
  = arguments.length > 1 ? arguments[1] : undefined;
  return handleUploadFilesRequest(_action_types.FileTypes.UPLOAD_FILES_REQUEST, _action_types.FileTypes.UPLOAD_FILES_SUCCESS, _action_types.FileTypes.UPLOAD_FILES_FAILURE, _action_types.FileTypes.UPLOAD_FILES_CANCEL, state, action);
}

var _default = ((0, _redux.combineReducers)({
  uploadFiles: uploadFiles
})
/*: (FilesRequestsStatuses, GenericAction) => FilesRequestsStatuses*/
);

exports.default = _default;