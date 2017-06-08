"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/ShowRecipe.js";


var ShowRecipe = function (_Component) {
  (0, _inherits3.default)(ShowRecipe, _Component);

  function ShowRecipe() {
    (0, _classCallCheck3.default)(this, ShowRecipe);

    return (0, _possibleConstructorReturn3.default)(this, (ShowRecipe.__proto__ || (0, _getPrototypeOf2.default)(ShowRecipe)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowRecipe, [{
    key: "render",
    value: function render() {
      var _props$recipe = this.props.recipe,
          ingredients = _props$recipe.ingredients,
          description = _props$recipe.description;

      return _react2.default.createElement("div", { className: "panel panel-default", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement("div", { className: "panel-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, ingredients.length > 0 ? _react2.default.createElement("ul", { className: "ingredient-list", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, ingredients.map(function (ingredient, index) {
        return _react2.default.createElement("li", { key: index, className: "ingredient", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, ingredient);
      })) : _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "no ingredients added \uD83D\uDE41"), _react2.default.createElement("p", { className: "recipe-description", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, !!description ? description : 'no description yet 🙁')), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "\n            .panel-default {\n              margin-top: 20px;\n            }\n\n            .panel-body {\n              color: #999;\n              font-size: 0.8em;\n              padding-top: 10px;\n            }\n\n            .recipe-description {\n              color: #999;\n            }\n\n            .ingredient-list {\n              padding-left: 0;\n            }\n            .ingredient { \n              display: inline-block;\n              background-color: #77a9c4;\n              color: white;\n              margin: 5px;\n              padding: 2px 8px;\n              font-size: 0.8em;\n              letter-spacing: 0.076em;\n              text-transform: uppercase;\n            }\n          "));
    }
  }]);

  return ShowRecipe;
}(_react.Component);

exports.default = ShowRecipe;