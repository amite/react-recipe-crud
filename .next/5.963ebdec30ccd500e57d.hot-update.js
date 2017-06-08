webpackHotUpdate(5,{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(541);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(546);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditRecipe.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditRecipe.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45NjNlYmRlYzMwY2NkNTAwZTU3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UmVjaXBlLmpzPzYxZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcblxuY2xhc3MgRWRpdFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IHNob3dNb2RhbDogdHJ1ZSwgaW5ncmVkaWVudHM6IHRoaXMucHJvcHMucmVjaXBlLmluZ3JlZGllbnRzLmpvaW4oXCIsIFwiKSwgZGVzY3JpcHRpb246IHRoaXMucHJvcHMucmVjaXBlLmRlc2NyaXB0aW9uIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXYpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldi50YXJnZXQubmFtZV06IGV2LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVGb3JtU2F2ZSA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdXBkYXRlZFJlY2lwZSA9IHsgXG4gICAgICByZWNpcGVOYW1lOiB0aGlzLnByb3BzLnJlY2lwZS5yZWNpcGVOYW1lLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXG4gICAgICBpbmdyZWRpZW50czogdGhpcy5zdGF0ZS5pbmdyZWRpZW50cy5sZW5ndGggPiAwID8gdGhpcy5zdGF0ZS5pbmdyZWRpZW50cy5zcGxpdCgnLCAnKSA6IFwiXCJcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nLi4nLCB1cGRhdGVkUmVjaXBlKVxuICAgIHRoaXMucHJvcHMuc2F2ZVJlY2lwZXModXBkYXRlZFJlY2lwZSlcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUVkaXRpbmcoKVxuICAgIHRoaXMuaGFuZGxlTW9kYWwoKVxuICB9XG5cbiAgaGFuZGxlTW9kYWwgPSAoZXYpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY2lwZU5hbWUsIGluZ3JlZGllbnRzLCBkZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wcy5yZWNpcGVcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLnNob3dNb2RhbCAmJiA8TW9kYWw+XG4gICAgICAgIDxoMj57cmVjaXBlTmFtZX08L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU2F2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBtZC10ZXh0ZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVndWxhcjFcIiBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+XG4gICAgICAgICAgICAgIEluZ3JlZGllbnRzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbmdyZWRpZW50c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGluZ3JlZGllbnRzXCIgaWQ9XCJyZWd1bGFyMVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5pbmdyZWRpZW50c30gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHNtYWxsLXRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwbWQtdGV4dGZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ3VsYXIxXCIgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBpZD1cInJlZ3VsYXIxXCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBuaWNlIGRlc2NyaXB0aW9uXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbGFyZ2UtdGFcIj5cbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idG4gYnRuIGJ0bi13YXJuaW5nIGJ0bi1sZ1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9ybVNhdmV9PnNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRSZWNpcGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0VkaXRSZWNpcGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUVBO0FBRUE7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQWNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9