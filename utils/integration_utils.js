/*:: import type {DialogElement} from 'types/integrations';*/

/*:: type DialogError = {|
    id: string,
    defaultMessage: string,
    values?: Object,
|};*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDialogElementForError = checkDialogElementForError;
exports.checkIfErrorsMatchElements = checkIfErrorsMatchElements;

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow
function checkDialogElementForError(elem
/*: DialogElement*/
, value
/*: Object*/
)
/*: ?DialogError*/
{
  if (!value && !elem.optional) {
    return {
      id: 'interactive_dialog.error.required',
      defaultMessage: 'This field is required.'
    };
  }

  var type = elem.type;

  if (type === 'text' || type === 'textarea') {
    if (value && value.length < elem.min_length) {
      return {
        id: 'interactive_dialog.error.too_short',
        defaultMessage: 'Minimum input length is {minLength}.',
        values: {
          minLength: elem.min_length
        }
      };
    }

    if (elem.subtype === 'email') {
      if (value && !value.includes('@')) {
        return {
          id: 'interactive_dialog.error.bad_email',
          defaultMessage: 'Must be a valid email address.'
        };
      }
    }

    if (elem.subtype === 'number') {
      if (value && isNaN(value)) {
        return {
          id: 'interactive_dialog.error.bad_number',
          defaultMessage: 'Must be a number.'
        };
      }
    }

    if (elem.subtype === 'url') {
      if (value && !value.includes('http://') && !value.includes('https://')) {
        return {
          id: 'interactive_dialog.error.bad_url',
          defaultMessage: 'URL must include http:// or https://.'
        };
      }
    }
  }

  return null;
} // If we're returned errors that don't match any of the elements we have,
// ignore them and complete the dialog


function checkIfErrorsMatchElements() {
  var errors
  /*: {[string]: DialogError}*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var elements
  /*: Array<DialogElement>*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var name in errors) {
    if (!errors.hasOwnProperty(name)) {
      continue;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;

        if (elem.name === name) {
          return true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return false;
}