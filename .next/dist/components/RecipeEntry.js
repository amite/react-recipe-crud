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

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js';


var RecipeEntry = function (_Component) {
  (0, _inherits3.default)(RecipeEntry, _Component);

  function RecipeEntry() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RecipeEntry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeEntry.__proto__ || (0, _getPrototypeOf2.default)(RecipeEntry)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showEntry: false, showModal: false }, _this.handleModal = function (ev) {
      ev.preventDefault();
      _this.setState({ showModal: !_this.state.showModal });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeEntry, [{
    key: 'render',
    value: function render() {
      var _props$recipe = this.props.recipe,
          recipeName = _props$recipe.recipeName,
          description = _props$recipe.description,
          ingredients = _props$recipe.ingredients;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'list-group-item recipe-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('h4', { className: 'list-group-item-heading recipeHeading', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), '\xA0\xA0', recipeName, _react2.default.createElement('a', { onClick: this.handleModal, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }))), this.state.showModal && _react2.default.createElement(_EditModal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, recipeName), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Ingredients'), _react2.default.createElement('input', { type: 'text', id: 'regular1', defaultValue: ingredients.join(", "), className: 'form-control small-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Description'), _react2.default.createElement('textarea', { type: 'text', id: 'regular1', defaultValue: description, className: 'form-control large-ta', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement('button', { className: 'close-btn btn btn-warning btn-lg', onClick: this.handleModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'close')), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, '\n\n            .recipe-item {\n              margin-bottom: 15px !important;\n              min-height: 30px;\n              background: rgb(255, 193, 7);\n              color: white;\n              border-radius: 0 !important;\n              box-shadow: 0px 3px 0px 1px #dba915;\n              border: none;\n            }\n\n            .recipe-item:active {\n              position: relative;\n              top: 2px;\n            }\n\n            .glyphicon-pencil {\n              float: right;\n            }\n            .recipeHeading {\n              font-size: 1em;\n            }\n            .large-ta {\n              height: 110px !important;\n            }\n            .small-text {\n              padding-top: 8px !important;\n              font-size: 12px !important;\n              letter-spacing: 0.05em;\n              color: #f0ad4e;\n              text-transform: uppercase;\n            }\n            .close-btn {\n              position: absolute;\n              right: 20px;\n              bottom: 15px;\n              padding: 5px 45px;\n            }\n          ')));
    }
  }]);

  return RecipeEntry;
}(_react.Component);

exports.default = RecipeEntry;