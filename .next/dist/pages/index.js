'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _animateComponents = require('animate-components');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _NewRecipeForm = require('../components/NewRecipeForm');

var _NewRecipeForm2 = _interopRequireDefault(_NewRecipeForm);

var _RecipeList = require('../components/RecipeList');

var _RecipeList2 = _interopRequireDefault(_RecipeList);

var _recipeHelpers = require('../lib/recipeHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/pages/index.js?entry';


var RecipeApp = function (_Component) {
  (0, _inherits3.default)(RecipeApp, _Component);

  function RecipeApp() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RecipeApp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeApp.__proto__ || (0, _getPrototypeOf2.default)(RecipeApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = { recipes: (0, _recipeHelpers.loadRecipes)() }, _this.saveRecipes = function (updatedRecipe) {
      var updatedRecipes = (0, _recipeHelpers.updateRecipe)(_this.state.recipes, updatedRecipe);
      _this.setState({ recipes: updatedRecipes });
    }, _this.createRecipe = function (recipeName) {
      var newRecipe = { recipeName: recipeName, ingredients: [], description: "" };
      var updatedRecipes = (0, _recipeHelpers.addRecipe)(_this.state.recipes, newRecipe);
      _this.setState({ recipes: updatedRecipes });
    }, _this.deleteRecipe = function (recipeName) {
      var updatedRecipes = (0, _recipeHelpers.removeRecipe)(_this.state.recipes, recipeName);
      _this.setState({ recipes: updatedRecipes });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_animateComponents.Zoom, { duration: '0.5s', timingFunction: 'ease-in-out', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_Layout2.default, { title: 'React CRUD Recipe App', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('h2', { className: 'app-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'Cook Bhook'), _react2.default.createElement('div', { className: 'app col-md-6 col-md-offset-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_NewRecipeForm2.default, { createRecipe: this.createRecipe, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_RecipeList2.default, (0, _extends3.default)({}, this.state, { deleteRecipe: this.deleteRecipe, saveRecipes: this.saveRecipes, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })))));
    }
  }]);

  return RecipeApp;
}(_react.Component);

exports.default = RecipeApp;