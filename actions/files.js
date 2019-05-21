"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilesForPost = getFilesForPost;
exports.getMissingFilesForPost = getMissingFilesForPost;
exports.uploadFile = uploadFile;
exports.getFilePublicLink = getFilePublicLink;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _reduxBatchedActions = require("redux-batched-actions");

var _client = require("../client");

var _action_types = require("../action_types");

var _errors = require("./errors");

var _helpers = require("./helpers");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getFilesForPost(postId
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var files;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _client.Client4.getFileInfosForPost(postId);

              case 3:
                files = _context.sent;
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                (0, _helpers.forceLogoutIfNecessary)(_context.t0, dispatch, getState);
                dispatch((0, _errors.logError)(_context.t0));
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 11:
                dispatch({
                  type: _action_types.FileTypes.RECEIVED_FILES_FOR_POST,
                  data: files,
                  postId: postId
                });
                return _context.abrupt("return", {
                  data: true
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

function getMissingFilesForPost(postId
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var fileIdsByPostId, posts;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fileIdsByPostId = getState().entities.files.fileIdsByPostId;
                posts = [];

                if (fileIdsByPostId[postId]) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return getFilesForPost(postId)(dispatch, getState);

              case 5:
                posts = _context2.sent;

              case 6:
                return _context2.abrupt("return", {
                  data: posts
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function uploadFile(channelId
/*: string*/
, rootId
/*: string*/
, clientIds
/*: Array<String>*/
, fileFormData
/*: File*/
, formBoundary
/*: string*/
) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch
      /*: DispatchFunc*/
      , getState
      /*: GetStateFunc*/
      ) {
        var files, failure, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: _action_types.FileTypes.UPLOAD_FILES_REQUEST,
                  data: {}
                }, getState);
                _context3.prev = 1;
                _context3.next = 4;
                return _client.Client4.uploadFile(fileFormData, formBoundary);

              case 4:
                files = _context3.sent;
                _context3.next = 13;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                (0, _helpers.forceLogoutIfNecessary)(_context3.t0, dispatch, getState);
                failure = {
                  type: _action_types.FileTypes.UPLOAD_FILES_FAILURE,
                  clientIds: clientIds,
                  channelId: channelId,
                  rootId: rootId,
                  error: _context3.t0
                };
                dispatch((0, _reduxBatchedActions.batchActions)([failure, (0, _errors.logError)(_context3.t0)]), getState);
                return _context3.abrupt("return", {
                  error: _context3.t0
                });

              case 13:
                data = files.file_infos.map(function (file, index) {
                  return _objectSpread({}, file, {
                    clientId: files.client_ids[index]
                  });
                });
                dispatch((0, _reduxBatchedActions.batchActions)([{
                  type: _action_types.FileTypes.RECEIVED_UPLOAD_FILES,
                  data: data,
                  channelId: channelId,
                  rootId: rootId
                }, {
                  type: _action_types.FileTypes.UPLOAD_FILES_SUCCESS
                }]), getState);
                return _context3.abrupt("return", {
                  data: files
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

function getFilePublicLink(fileId
/*: string*/
) {
  return (0, _helpers.bindClientFunc)({
    clientFunc: _client.Client4.getFilePublicLink,
    onSuccess: _action_types.FileTypes.RECEIVED_FILE_PUBLIC_LINK,
    params: [fileId]
  });
}