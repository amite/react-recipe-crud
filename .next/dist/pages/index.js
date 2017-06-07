'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _NewRecipeForm = require('../components/NewRecipeForm');

var _NewRecipeForm2 = _interopRequireDefault(_NewRecipeForm);

var _RecipeList = require('../components/RecipeList');

var _RecipeList2 = _interopRequireDefault(_RecipeList);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeApp.__proto__ || (0, _getPrototypeOf2.default)(RecipeApp)).call.apply(_ref, [this].concat(args))), _this), _this.handleCreateRecipe = function (data) {
      console.log(data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'React CRUD Recipe App', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('div', { className: 'app col-md-6 col-md-offset-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_NewRecipeForm2.default, (0, _extends3.default)({}, this.props, { handleCreateRecipe: this.handleCreateRecipe, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement(_RecipeList2.default, (0, _extends3.default)({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        var recipes;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recipes = [{
                  "recipeName": "Pizza",
                  "ingredients": ["Bread", "Brocolli", "Tomato", "Onion", "Mushroom"],
                  "description": "Add toppings to dough base and place into oven for 35 minutes on a high heat.\n\nBellissimo!"
                }, {
                  "recipeName": "Spaghetti",
                  "ingredients": ["Spaghetti", "Sauce", "Tomatoes", "Bacon", "Garlic"],
                  "description": "Try not to get it all over your shirt."
                }, {
                  "recipeName": "Meatballs",
                  "ingredients": ["Minced Beef/Pork", "Onions", "Flour", "Chili Peppers", "Tomatoes", "Seasoning"],
                  "description": "Roughly chop onions and mix with minced meat. Add flour for firmness until they hold their own shape. Place into pan on high heat with a brushing of oil until browned. Reduce heat until cooked through"
                }, {
                  "recipeName": "Boiled Cabbage",
                  "ingredients": ["Cabage", "Water"],
                  "description": "Add cabbage to boiling water. Wait. Eat. Delicious - Maybe..."
                }, {
                  "recipeName": "CheeseCake",
                  "ingredients": ["Cream Cheese", "Whipping Cream", "Strawberries", "Ginger Snap Biscuits", "Sugar", "Butter"],
                  "description": "Crumble the biscuits into a tin and mix with the butter. Heat for a few minutes to form a solid base. Mix the cream cheese and whipping cream until heavy, then apply to top of biscuit base.\n\nAdd strawberries for decoration and leave to rest in fridge for 12 hours."
                }];
                return _context.abrupt('return', { recipes: recipes });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RecipeApp;
}(_react.Component);

exports.default = RecipeApp;