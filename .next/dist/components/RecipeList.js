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

var _Recipe = require('./Recipe');

var _Recipe2 = _interopRequireDefault(_Recipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js';


var RecipeList = function (_Component) {
  (0, _inherits3.default)(RecipeList, _Component);

  function RecipeList() {
    (0, _classCallCheck3.default)(this, RecipeList);

    return (0, _possibleConstructorReturn3.default)(this, (RecipeList.__proto__ || (0, _getPrototypeOf2.default)(RecipeList)).apply(this, arguments));
  }

  (0, _createClass3.default)(RecipeList, [{
    key: 'render',
    value: function render() {

      var renderRecipe = function renderRecipe(recipe, index) {
        return _react2.default.createElement(_Recipe2.default, { recipe: recipe, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        });
      };

      return _react2.default.createElement('div', { className: 'recipe-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.recipes.map(renderRecipe), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, '\n          .recipe-list { \n            margin-top: 80px;\n          }\n        '));
    }
  }]);

  return RecipeList;
}(_react.Component);

exports.default = RecipeList;