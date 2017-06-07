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

var _jsxFileName = "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Recipe.js";


var Recipe = function (_Component) {
  (0, _inherits3.default)(Recipe, _Component);

  function Recipe() {
    (0, _classCallCheck3.default)(this, Recipe);

    return (0, _possibleConstructorReturn3.default)(this, (Recipe.__proto__ || (0, _getPrototypeOf2.default)(Recipe)).apply(this, arguments));
  }

  (0, _createClass3.default)(Recipe, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "list-group-item recipe-item", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("h4", { className: "list-group-item-heading recipeHeading", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement("i", { className: "glyphicon glyphicon-plus", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }), "\xA0\xA0", this.props.recipe.recipeName, _react2.default.createElement("a", { href: "#", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement("i", { className: "glyphicon glyphicon-pencil", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }))));
    }
  }]);

  return Recipe;
}(_react.Component);

exports.default = Recipe;