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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipeForm.js';


var NewRecipeForm = function (_Component) {
  (0, _inherits3.default)(NewRecipeForm, _Component);

  function NewRecipeForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewRecipeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRecipeForm.__proto__ || (0, _getPrototypeOf2.default)(NewRecipeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: "" }, _this.handleChange = function (e) {
      _this.setState({ value: e.target.value });
    }, _this.handleFormSubmit = function (ev) {
      ev.preventDefault();
      _this.state.value ? _this.props.createRecipe(_this.state.value) : console.log('empty');
      _this.setState({ value: "" });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewRecipeForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('form', { id: 'add-recipe',
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'input-group add-on', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('input', {
        placeholder: 'Add New Recipe',
        type: 'text',
        value: this.state.value,
        onChange: this.handleChange,
        className: 'form-control',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('div', { className: 'input-group-btn', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('input', {
        type: 'submit',
        value: '+ Add',
        onClick: this.handleFormSubmit,
        className: 'form-control btn btn-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }))), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, '\n          #add-recipe {\n            background: rgba(76, 149, 187, 0.74);\n            padding: 10px;\n            text-align: center;\n            min-width: 100%;\n            position: absolute;\n            left: 0;\n            top: 0px;\n          }\n          #add-recipe input {\n            padding: 0 10px;\n          }\n        '));
    }
  }]);

  return NewRecipeForm;
}(_react.Component);

exports.default = NewRecipeForm;