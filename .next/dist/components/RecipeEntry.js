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

var _ShowRecipe = require('./ShowRecipe');

var _ShowRecipe2 = _interopRequireDefault(_ShowRecipe);

var _EditRecipe = require('./EditRecipe');

var _EditRecipe2 = _interopRequireDefault(_EditRecipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecipeEntry = function (_Component) {
  (0, _inherits3.default)(RecipeEntry, _Component);

  function RecipeEntry() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RecipeEntry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeEntry.__proto__ || (0, _getPrototypeOf2.default)(RecipeEntry)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isEditing: false, showEntry: false }, _this.toggleEntry = function (e) {
      _this.setState({ showEntry: !_this.state.showEntry });
    }, _this.toggleEditing = function (e) {
      _this.setState({ isEditing: !_this.state.isEditing });
    }, _this.handleRemoveRecipe = function (ev) {
      ev.preventDefault();
      _this.props.deleteRecipe(_this.props.recipe.recipeName);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeEntry, [{
    key: 'render',
    value: function render() {
      var _props$recipe = this.props.recipe,
          recipeName = _props$recipe.recipeName,
          description = _props$recipe.description,
          ingredients = _props$recipe.ingredients;

      return _react2.default.createElement('div', { className: 'list-group-item recipe-item' }, _react2.default.createElement('h4', { className: 'list-group-item-heading recipeHeading' }, _react2.default.createElement('i', { onClick: this.toggleEntry,
        className: 'glyphicon ' + (this.state.showEntry ? "glyphicon-minus" : "glyphicon-plus") }), '\xA0\xA0', recipeName, _react2.default.createElement('a', { onClick: this.handleRemoveRecipe, href: '#' }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove' })), _react2.default.createElement('a', { onClick: this.toggleEditing, href: '#' }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil' }))), this.state.showEntry && _react2.default.createElement(_ShowRecipe2.default, (0, _extends3.default)({}, this.props, this.state)), this.state.isEditing && _react2.default.createElement(_EditRecipe2.default, (0, _extends3.default)({}, this.props, this.state, { toggleEditing: this.toggleEditing })));
    }
  }]);

  return RecipeEntry;
}(_react.Component);

exports.default = RecipeEntry;