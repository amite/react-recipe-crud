'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditRecipe.js';


var EditRecipe = function (_Component) {
  (0, _inherits3.default)(EditRecipe, _Component);

  function EditRecipe() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditRecipe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditRecipe.__proto__ || (0, _getPrototypeOf2.default)(EditRecipe)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showModal: true, ingredients: _this.props.recipe.ingredients.join(", "), description: _this.props.recipe.description }, _this.handleChange = function (ev) {
      _this.setState((0, _defineProperty3.default)({}, ev.target.name, ev.target.value));
    }, _this.handleFormSave = function (ev) {
      ev.preventDefault();
      var updatedRecipe = {
        recipeName: _this.props.recipe.recipeName,
        description: _this.state.description,
        ingredients: _this.state.ingredients.length > 0 ? _this.state.ingredients.split(', ') : ""
        // console.log('updating..', updatedRecipe)
      };_this.props.saveRecipes(updatedRecipe);
      _this.props.toggleEditing();
      _this.handleModal();
    }, _this.handleModal = function (ev) {
      _this.setState({ showModal: !_this.state.showModal });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EditRecipe, [{
    key: 'render',
    value: function render() {
      var _props$recipe = this.props.recipe,
          recipeName = _props$recipe.recipeName,
          ingredients = _props$recipe.ingredients,
          description = _props$recipe.description;

      return this.state.showModal && _react2.default.createElement(_Modal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, recipeName), _react2.default.createElement('form', { onSubmit: this.handleFormSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Ingredients'), _react2.default.createElement('input', { name: 'ingredients', onChange: this.handleChange, type: 'text', placeholder: 'Add a comma separated list of ingredients', id: 'regular1', defaultValue: this.state.ingredients, className: 'form-control small-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Description'), _react2.default.createElement('textarea', { name: 'description', onChange: this.handleChange, type: 'text', id: 'regular1', placeholder: 'Add a nice description', defaultValue: this.state.description, className: 'form-control large-ta', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement('button', { className: 'close-btn btn btn-warning btn-lg', onClick: this.handleFormSave, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'save')), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, '\n          .close-btn {\n            position: absolute;\n            right: 20px;\n            bottom: 15px;\n            padding: 5px 45px;\n          }\n            '));
    }
  }]);

  return EditRecipe;
}(_react.Component);

exports.default = EditRecipe;