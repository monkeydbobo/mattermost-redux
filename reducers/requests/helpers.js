"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialRequestState = initialRequestState;
exports.handleRequest = handleRequest;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _constants = require("../../constants");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initialRequestState()
/*: RequestStatusType*/
{
  return {
    status: _constants.RequestStatus.NOT_STARTED,
    error: null
  };
}

function handleRequest(REQUEST
/*: string*/
, SUCCESS
/*: string*/
, FAILURE
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
        return _objectSpread({}, state, {
          status: _constants.RequestStatus.FAILURE,
          error: action.error
        });
      }

    default:
      return state;
  }
}