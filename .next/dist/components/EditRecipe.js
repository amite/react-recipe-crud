'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EditModal = require('./EditModal');

var _EditModal2 = _interopRequireDefault(_EditModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditRecipe.js';


var EditRecipe = function (_Component) {
  (0, _inherits3.default)(EditRecipe, _Component);

  function EditRecipe() {
    (0, _classCallCheck3.default)(this, EditRecipe);

    return (0, _possibleConstructorReturn3.default)(this, (EditRecipe.__proto__ || (0, _getPrototypeOf2.default)(EditRecipe)).apply(this, arguments));
  }

  (0, _createClass3.default)(EditRecipe, [{
    key: 'render',
    value: function render() {
      var _props$recipe = this.props.recipe,
          recipeName = _props$recipe.recipeName,
          ingredients = _props$recipe.ingredients,
          description = _props$recipe.description;

      return _react2.default.createElement(_EditModal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, recipeName), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'Ingredients'), _react2.default.createElement('input', { type: 'text', placeholder: 'Add a comma separated list of ingredients', id: 'regular1', defaultValue: ingredients.join(", "), className: 'form-control small-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Description'), _react2.default.createElement('textarea', { type: 'text', id: 'regular1', placeholder: 'Add a nice description', defaultValue: description, className: 'form-control large-ta', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement('button', { className: 'close-btn btn btn-warning btn-lg', onClick: this.props.handleModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'close'), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, '\n          .close-btn {\n            position: absolute;\n            right: 20px;\n            bottom: 15px;\n            padding: 5px 45px;\n          }\n            '));
    }
  }]);

  return EditRecipe;
}(_react.Component);

exports.default = EditRecipe;