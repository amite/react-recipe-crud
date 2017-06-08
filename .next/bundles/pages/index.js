
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

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

var _animateComponents = __webpack_require__(540);

var _Layout = __webpack_require__(545);

var _Layout2 = _interopRequireDefault(_Layout);

var _NewRecipeForm = __webpack_require__(547);

var _NewRecipeForm2 = _interopRequireDefault(_NewRecipeForm);

var _RecipeList = __webpack_require__(549);

var _RecipeList2 = _interopRequireDefault(_RecipeList);

var _recipeHelpers = __webpack_require__(552);

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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_animateComponents.Zoom, { duration: '0.5s', timingFunction: 'ease-in-out', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_Layout2.default, { title: 'React CRUD Recipe App', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('h2', { className: 'app-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Recipe Book'), _react2.default.createElement('div', { className: 'app col-md-6 col-md-offset-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_NewRecipeForm2.default, { createRecipe: this.createRecipe, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_RecipeList2.default, (0, _extends3.default)({}, this.state, { saveRecipes: this.saveRecipes, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })))));
    }
  }]);

  return RecipeApp;
}(_react.Component);

exports.default = RecipeApp;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _SiteHead = __webpack_require__(551);

var _SiteHead2 = _interopRequireDefault(_SiteHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Layout.js';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_SiteHead2.default, { title: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.children)));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Layout.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Modal.js';


var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);

    return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'edit-modal';

      this.bkgEl = document.createElement('div');
      this.bkgEl.className = 'bkg';

      document.body.appendChild(this.bkgEl);
      document.body.appendChild(this.modalTarget);

      setTimeout(function () {
        _this2.modalTarget.className += ' expand';
      }, 5);

      this._render();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._render();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
      document.body.removeChild(this.bkgEl);
    }
  }, {
    key: '_render',
    value: function _render() {
      _reactDom2.default.render(_react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.children, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, '\n          .edit-modal {\n            background: white;\n            width: 50%;\n            top: 50%;\n            transform: translate(50%, -50%);\n            padding: 30px;\n            min-height: 350px;\n            border-radius: 5px;\n            position: fixed;\n            box-shadow: 0px 3px 6px 6px rgba(0, 0, 0, 0.23);\n            opacity: 0;            \n            transition: all 0.8s ease-in-out;\n            padding-bottom: 80px;\n          }\n\n          .edit-modal.expand {\n            opacity: 1;\n          }\n\n          .bkg {\n            background: rgba(0, 0, 0, 0.45);\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            top: 0;\n          }\n        ')), this.modalTarget);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('noscript', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      });
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Modal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Modal.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipeForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipeForm.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

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

var _ShowRecipe = __webpack_require__(550);

var _ShowRecipe2 = _interopRequireDefault(_ShowRecipe);

var _EditRecipe = __webpack_require__(544);

var _EditRecipe2 = _interopRequireDefault(_EditRecipe);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeEntry.__proto__ || (0, _getPrototypeOf2.default)(RecipeEntry)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isEditing: false, showEntry: false }, _this.toggleEntry = function (e) {
      _this.setState({ showEntry: !_this.state.showEntry });
    }, _this.toggleEditing = function (e) {
      _this.setState({ isEditing: !_this.state.isEditing });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeEntry, [{
    key: 'render',
    value: function render() {
      var _props$recipe = this.props.recipe,
          recipeName = _props$recipe.recipeName,
          description = _props$recipe.description,
          ingredients = _props$recipe.ingredients;

      return _react2.default.createElement('div', { className: 'list-group-item recipe-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('h4', { className: 'list-group-item-heading recipeHeading', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('i', { onClick: this.toggleEntry,
        className: 'glyphicon ' + (this.state.showEntry ? "glyphicon-minus" : "glyphicon-plus"), __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), '\xA0\xA0', recipeName, _react2.default.createElement('a', { onClick: this.toggleEditing, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }))), this.state.showEntry && _react2.default.createElement(_ShowRecipe2.default, (0, _extends3.default)({}, this.props, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), this.state.isEditing && _react2.default.createElement(_EditRecipe2.default, (0, _extends3.default)({}, this.props, this.state, { toggleEditing: this.toggleEditing, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })));
    }
  }]);

  return RecipeEntry;
}(_react.Component);

exports.default = RecipeEntry;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

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

var _RecipeEntry = __webpack_require__(548);

var _RecipeEntry2 = _interopRequireDefault(_RecipeEntry);

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
      var _this2 = this;

      var renderRecipe = function renderRecipe(recipe, index) {
        return _react2.default.createElement(_RecipeEntry2.default, (0, _extends3.default)({ key: index }, _this2.props, { recipe: recipe, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }));
      };

      return _react2.default.createElement('div', { className: 'recipe-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.recipes.map(renderRecipe), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, '\n            .recipe-item {\n              margin-bottom: 15px !important;\n              min-height: 30px;\n              background: rgb(255, 193, 7);\n              color: white;\n              border-radius: 2px !important;\n              box-shadow: 0px 3px 0px 1px #dba915;\n              border: none;\n            }\n\n            .glyphicon-pencil {\n              float: right;\n            }\n            .recipeHeading {\n              font-size: 1em;\n            }\n            .large-ta {\n              height: 110px !important;\n            }\n            .small-text {\n              padding-top: 8px !important;\n              font-size: 12px !important;\n              letter-spacing: 0.05em;\n              color: #f0ad4e;\n              text-transform: uppercase;\n            }\n\n          '));
    }
  }]);

  return RecipeList;
}(_react.Component);

exports.default = RecipeList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
          lineNumber: 15
        }
      }, !!description ? description : 'no description yet 🙁')), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "\n            .panel-default {\n              margin-top: 20px;\n            }\n\n            .panel-body {\n              color: #999;\n              font-size: 0.8em;\n              padding-top: 10px;\n            }\n\n            .recipe-description {\n              color: #999;\n            }\n\n            .ingredient-list {\n              padding-left: 0;\n            }\n            .ingredient { \n              display: inline-block;\n              background-color: #77a9c4;\n              color: white;\n              margin: 5px;\n              padding: 2px 8px;\n              font-size: 0.8em;\n              letter-spacing: 0.076em;\n              text-transform: uppercase;\n            }\n          "));
    }
  }]);

  return ShowRecipe;
}(_react.Component);

exports.default = ShowRecipe;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/ShowRecipe.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/ShowRecipe.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _head = __webpack_require__(195);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js';


var SiteHead = function (_Component) {
  (0, _inherits3.default)(SiteHead, _Component);

  function SiteHead() {
    (0, _classCallCheck3.default)(this, SiteHead);

    return (0, _possibleConstructorReturn3.default)(this, (SiteHead.__proto__ || (0, _getPrototypeOf2.default)(SiteHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(SiteHead, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, this.props.title || 'Default'), _react2.default.createElement('meta', { charset: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://propeller.in/components/textfield/css/textfield.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans:400,300,600,700,800', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('style', { global: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, '\n          body {\n            background: url(/static/img/recipe-bkg.jpg) no-repeat;\n            background-size: cover;\n            font-family: Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;\n            width: 100vw;\n            height: 100vh;                \n          }\n\n          body::before {\n            content: "";\n            background-color: #666;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            opacity: 0.65;\n          }\n\n          .app {\n            padding-top:80px;\n            transform: translateY(100px);\n            background: white;\n            min-height: 600px;\n            max-height: 600px;\n            opacity: 0.92;\n            box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);\n            overflow: hidden;\n            overflow-y: visible;\n          }\n\n          .app-title { \n            font-family: \'Amatic SC\', cursive;\n            color: white;\n            text-align: center;\n            position: relative;\n            top: 75px;\n            font-size: 13vw;\n            margin-bottom: 0;\n            text-shadow: 0px 5px 7px #575151;\n            letter-spacing: 0.03em;\n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n        '));
    }
  }]);

  return SiteHead;
}(_react.Component);

exports.default = SiteHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRecipes = exports.addRecipe = exports.updateRecipe = undefined;

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateRecipe = exports.updateRecipe = function updateRecipe(recipes, updatedRecipe) {
  var updatedIndex = recipes.findIndex(function (item) {
    return item.recipeName === updatedRecipe.recipeName;
  });
  return [].concat((0, _toConsumableArray3.default)(recipes.slice(0, updatedIndex)), [updatedRecipe], (0, _toConsumableArray3.default)(recipes.slice(updatedIndex + 1)));
};

var addRecipe = exports.addRecipe = function addRecipe(recipes, newRecipe) {
  return [newRecipe].concat((0, _toConsumableArray3.default)(recipes));
};

var loadRecipes = exports.loadRecipes = function loadRecipes() {
  return [{
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
    "recipeName": "🧀 CheeseCake",
    "ingredients": ["Cream Cheese", "Whipping Cream", "Strawberries", "Ginger Snap Biscuits", "Sugar", "Butter"],
    "description": "Crumble the biscuits into a tin and mix with the butter. Heat for a few minutes to form a solid base. Mix the cream cheese and whipping cream until heavy, then apply to top of biscuit base.\n\nAdd strawberries for decoration and leave to rest in fridge for 12 hours."
  }];
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/lib/recipeHelpers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/lib/recipeHelpers.js"); } } })();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(538);


/***/ })

},[554]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzg4ZGM1OWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UmVjaXBlLmpzPzg4ZGM1OWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ODhkYzU5YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLmpzPzg4ZGM1OWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdSZWNpcGVGb3JtLmpzPzg4ZGM1OWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVFbnRyeS5qcz84OGRjNTlhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz84OGRjNTlhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hvd1JlY2lwZS5qcz84OGRjNTlhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/ODhkYzU5YSIsIndlYnBhY2s6Ly8vLi9saWIvcmVjaXBlSGVscGVycy5qcz84OGRjNTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFpvb20gfSBmcm9tICdhbmltYXRlLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5ld1JlY2lwZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OZXdSZWNpcGVGb3JtJ1xuaW1wb3J0IFJlY2lwZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNpcGVMaXN0J1xuaW1wb3J0IHsgdXBkYXRlUmVjaXBlLCBhZGRSZWNpcGUsIGxvYWRSZWNpcGVzIH0gZnJvbSAnLi4vbGliL3JlY2lwZUhlbHBlcnMnXG5cbmNsYXNzIFJlY2lwZUFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IHJlY2lwZXM6IGxvYWRSZWNpcGVzKCkgfVxuXG4gIHNhdmVSZWNpcGVzID0gKHVwZGF0ZWRSZWNpcGUpID0+IHtcbiAgICBsZXQgdXBkYXRlZFJlY2lwZXMgPSB1cGRhdGVSZWNpcGUodGhpcy5zdGF0ZS5yZWNpcGVzLCB1cGRhdGVkUmVjaXBlKVxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGVzOiB1cGRhdGVkUmVjaXBlcyB9KVxuICB9XG5cbiAgY3JlYXRlUmVjaXBlID0gKHJlY2lwZU5hbWUpID0+IHtcbiAgICBsZXQgbmV3UmVjaXBlID0geyByZWNpcGVOYW1lLCBpbmdyZWRpZW50czogW10sIGRlc2NyaXB0aW9uOiBcIlwiIH1cbiAgICBsZXQgdXBkYXRlZFJlY2lwZXMgPSBhZGRSZWNpcGUodGhpcy5zdGF0ZS5yZWNpcGVzLCBuZXdSZWNpcGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlY2lwZXM6IHVwZGF0ZWRSZWNpcGVzIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxab29tIGR1cmF0aW9uPScwLjVzJyB0aW1pbmdGdW5jdGlvbj0nZWFzZS1pbi1vdXQnPlxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiUmVhY3QgQ1JVRCBSZWNpcGUgQXBwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPlJlY2lwZSBCb29rPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcCBjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cbiAgICAgICAgICAgIDxOZXdSZWNpcGVGb3JtIGNyZWF0ZVJlY2lwZT17dGhpcy5jcmVhdGVSZWNpcGV9ICAvPlxuICAgICAgICAgICAgPFJlY2lwZUxpc3Qgey4uLnRoaXMuc3RhdGV9IHNhdmVSZWNpcGVzPXt0aGlzLnNhdmVSZWNpcGVzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvWm9vbT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5cbmNsYXNzIEVkaXRSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0geyBzaG93TW9kYWw6IHRydWUsIGluZ3JlZGllbnRzOiB0aGlzLnByb3BzLnJlY2lwZS5pbmdyZWRpZW50cy5qb2luKFwiLCBcIiksIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLnJlY2lwZS5kZXNjcmlwdGlvbiB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXYudGFyZ2V0Lm5hbWVdOiBldi50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlRm9ybVNhdmUgPSAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHVwZGF0ZWRSZWNpcGUgPSB7IFxuICAgICAgcmVjaXBlTmFtZTogdGhpcy5wcm9wcy5yZWNpcGUucmVjaXBlTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxuICAgICAgaW5ncmVkaWVudHM6IHRoaXMuc3RhdGUuaW5ncmVkaWVudHMubGVuZ3RoID4gMCA/IHRoaXMuc3RhdGUuaW5ncmVkaWVudHMuc3BsaXQoJywgJykgOiBcIlwiXG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZy4uJywgdXBkYXRlZFJlY2lwZSlcbiAgICB0aGlzLnByb3BzLnNhdmVSZWNpcGVzKHVwZGF0ZWRSZWNpcGUpXG4gICAgdGhpcy5wcm9wcy50b2dnbGVFZGl0aW5nKClcbiAgICB0aGlzLmhhbmRsZU1vZGFsKClcbiAgfVxuXG4gIGhhbmRsZU1vZGFsID0gKGV2KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZWNpcGVOYW1lLCBpbmdyZWRpZW50cywgZGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHMucmVjaXBlXG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgPE1vZGFsPlxuICAgICAgICA8aDI+e3JlY2lwZU5hbWV9PC9oMj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVNhdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwbWQtdGV4dGZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ3VsYXIxXCIgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICBJbmdyZWRpZW50c1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW5ncmVkaWVudHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBpbmdyZWRpZW50c1wiIGlkPVwicmVndWxhcjFcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuaW5ncmVkaWVudHN9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBzbWFsbC10ZXh0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcG1kLXRleHRmaWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWd1bGFyMVwiIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cbiAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZWd1bGFyMVwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmljZSBkZXNjcmlwdGlvblwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGxhcmdlLXRhXCI+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnRuIGJ0biBidG4td2FybmluZyBidG4tbGdcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvcm1TYXZlfT5zYXZlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UmVjaXBlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9FZGl0UmVjaXBlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2l0ZUhlYWQgZnJvbSAnLi9TaXRlSGVhZCdcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpdGVIZWFkIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb2RhbFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5tb2RhbFRhcmdldC5jbGFzc05hbWUgPSAnZWRpdC1tb2RhbCc7XG5cbiAgICB0aGlzLmJrZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmJrZ0VsLmNsYXNzTmFtZSA9ICdia2cnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJrZ0VsKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbFRhcmdldClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLm1vZGFsVGFyZ2V0LmNsYXNzTmFtZSArPSAnIGV4cGFuZCcgfSwgNSlcbiAgICBcbiAgICB0aGlzLl9yZW5kZXIoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX3JlbmRlcigpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMubW9kYWxUYXJnZXQpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsVGFyZ2V0KSAgICBcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmtnRWwpICAgIFxuICB9XG5cbiAgX3JlbmRlcigpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgLmVkaXQtbW9kYWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwOyAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWRpdC1tb2RhbC5leHBhbmQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmtnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj4sXG4gICAgICB0aGlzLm1vZGFsVGFyZ2V0XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8bm9zY3JpcHQgLz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTW9kYWwuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1JlY2lwZUZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XG4gIFxuICBzdGF0ZSA9IHsgdmFsdWU6IFwiXCIgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIGhhbmRsZUZvcm1TdWJtaXQgPSAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMucHJvcHMuY3JlYXRlUmVjaXBlKHRoaXMuc3RhdGUudmFsdWUpIDogY29uc29sZS5sb2coJ2VtcHR5JylcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogXCJcIn0pXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBpZD1cImFkZC1yZWNpcGVcIlxuICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU3VibWl0fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGFkZC1vblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgTmV3IFJlY2lwZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIisgQWRkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYnRuIGJ0bi1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAjYWRkLXJlY2lwZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNDksIDE4NywgMC43NCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjYWRkLXJlY2lwZSBpbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Zvcm0+XG5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05ld1JlY2lwZUZvcm0uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTaG93UmVjaXBlIGZyb20gJy4vU2hvd1JlY2lwZSdcbmltcG9ydCBFZGl0UmVjaXBlIGZyb20gJy4vRWRpdFJlY2lwZSdcblxuXG5jbGFzcyBSZWNpcGVFbnRyeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IGlzRWRpdGluZzogZmFsc2UsIHNob3dFbnRyeTogZmFsc2UgfVxuXG4gIHRvZ2dsZUVudHJ5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0VudHJ5OiAhdGhpcy5zdGF0ZS5zaG93RW50cnkgfSlcbiAgfVxuXG4gIHRvZ2dsZUVkaXRpbmcgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6ICF0aGlzLnN0YXRlLmlzRWRpdGluZyB9KSAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY2lwZU5hbWUsIGRlc2NyaXB0aW9uLCBpbmdyZWRpZW50cyB9ID0gdGhpcy5wcm9wcy5yZWNpcGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIHJlY2lwZS1pdGVtXCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHJlY2lwZUhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRW50cnl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgYGdseXBoaWNvbiAke3RoaXMuc3RhdGUuc2hvd0VudHJ5ID9cbiAgICAgICAgICAgICAgICBcImdseXBoaWNvbi1taW51c1wiIDpcbiAgICAgICAgICAgICAgICBcImdseXBoaWNvbi1wbHVzXCJ9YFxuICAgICAgICAgICAgICB9IC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICB7cmVjaXBlTmFtZX1cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdGluZ30gaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFwiIC8+PC9hPlxuICAgICAgICAgIDwvaDQ+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RW50cnkgJiYgPFNob3dSZWNpcGUgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSAvPn1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0VkaXRpbmcgJiYgPEVkaXRSZWNpcGUgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSB0b2dnbGVFZGl0aW5nPXt0aGlzLnRvZ2dsZUVkaXRpbmd9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlRW50cnlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1JlY2lwZUVudHJ5LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUmVjaXBlRW50cnkgZnJvbSAnLi9SZWNpcGVFbnRyeSdcblxuY2xhc3MgUmVjaXBlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyICgpIHtcbiAgICBcbiAgICBjb25zdCByZW5kZXJSZWNpcGUgPSAocmVjaXBlLCBpbmRleCkgPT4gPFJlY2lwZUVudHJ5IGtleT17aW5kZXh9IHsuLi50aGlzLnByb3BzfSByZWNpcGU9e3JlY2lwZX0gLz5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS1saXN0XCI+XG4gICAgICAgIHt0aGlzLnByb3BzLnJlY2lwZXMubWFwKHJlbmRlclJlY2lwZSl9XG4gICAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgICAucmVjaXBlLWl0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MywgNyk7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4IDFweCAjZGJhOTE1O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5nbHlwaGljb24tcGVuY2lsIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlY2lwZUhlYWRpbmcge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYXJnZS10YSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbC10ZXh0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmMGFkNGU7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgU2hvd1JlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBpbmdyZWRpZW50cywgZGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHMucmVjaXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIHsoaW5ncmVkaWVudHMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5ncmVkaWVudC1saXN0XCI+XG4gICAgICAgICAgICAgICAge2luZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJpbmdyZWRpZW50XCI+e2luZ3JlZGllbnR9PC9saT4pfVxuICAgICAgICAgICAgICA8L3VsPiA6IDxwPm5vIGluZ3JlZGllbnRzIGFkZGVkIPCfmYE8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWNpcGUtZGVzY3JpcHRpb25cIj57ISFkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogJ25vIGRlc2NyaXB0aW9uIHlldCDwn5mBJ308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgICAucGFuZWwtZGVmYXVsdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVjaXBlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbmdyZWRpZW50LWxpc3Qge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5ncmVkaWVudCB7IFxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2E5YzQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA3NmVtO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93UmVjaXBlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TaG93UmVjaXBlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cbmNsYXNzIFNpdGVIZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlIHx8ICdEZWZhdWx0J308L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cDovL3Byb3BlbGxlci5pbi9jb21wb25lbnRzL3RleHRmaWVsZC9jc3MvdGV4dGZpZWxkLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbWF0aWMrU0N8T3BlbitTYW5zOjQwMCwzMDAsNjAwLDcwMCw4MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9yZWNpcGUtYmtnLmpwZykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzNjM2IzYjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHk6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXBwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC45MjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggcmdiYSgxMDEsIDk1LCA5NSwgMC44NCk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXBwLXRpdGxlIHsgXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0FtYXRpYyBTQycsIGN1cnNpdmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzdnc7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCA1cHggN3B4ICM1NzUxNTE7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLCBoMiwgaDMgeyBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlSGVhZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2l0ZUhlYWQuanMiLCJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZWNpcGUgPSAocmVjaXBlcywgdXBkYXRlZFJlY2lwZSkgPT4ge1xuICBjb25zdCB1cGRhdGVkSW5kZXggPSByZWNpcGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucmVjaXBlTmFtZSA9PT0gdXBkYXRlZFJlY2lwZS5yZWNpcGVOYW1lKVxuICByZXR1cm4gW1xuICAgIC4uLnJlY2lwZXMuc2xpY2UoMCwgdXBkYXRlZEluZGV4KSxcbiAgICB1cGRhdGVkUmVjaXBlLFxuICAgIC4uLnJlY2lwZXMuc2xpY2UodXBkYXRlZEluZGV4KzEpXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZFJlY2lwZSA9IChyZWNpcGVzLCBuZXdSZWNpcGUpID0+IHtcbiAgcmV0dXJuIFtuZXdSZWNpcGUsIC4uLnJlY2lwZXNdXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkUmVjaXBlcyA9ICgpID0+IFxuICBbXG4gICAge1xuICAgICAgXCJyZWNpcGVOYW1lXCI6IFwiUGl6emFcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1wiQnJlYWRcIiwgXCJCcm9jb2xsaVwiLCBcIlRvbWF0b1wiLCBcIk9uaW9uXCIsIFwiTXVzaHJvb21cIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWRkIHRvcHBpbmdzIHRvIGRvdWdoIGJhc2UgYW5kIHBsYWNlIGludG8gb3ZlbiBmb3IgMzUgbWludXRlcyBvbiBhIGhpZ2ggaGVhdC5cXG5cXG5CZWxsaXNzaW1vIVwiXG4gICAgfSwge1xuICAgICAgXCJyZWNpcGVOYW1lXCI6IFwiU3BhZ2hldHRpXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIlNwYWdoZXR0aVwiLCBcIlNhdWNlXCIsIFwiVG9tYXRvZXNcIiwgXCJCYWNvblwiLCBcIkdhcmxpY1wiXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUcnkgbm90IHRvIGdldCBpdCBhbGwgb3ZlciB5b3VyIHNoaXJ0LlwiXG4gICAgfSwge1xuICAgICAgXCJyZWNpcGVOYW1lXCI6IFwiTWVhdGJhbGxzXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIk1pbmNlZCBCZWVmL1BvcmtcIiwgXCJPbmlvbnNcIiwgXCJGbG91clwiLCBcIkNoaWxpIFBlcHBlcnNcIiwgXCJUb21hdG9lc1wiLCBcIlNlYXNvbmluZ1wiXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSb3VnaGx5IGNob3Agb25pb25zIGFuZCBtaXggd2l0aCBtaW5jZWQgbWVhdC4gQWRkIGZsb3VyIGZvciBmaXJtbmVzcyB1bnRpbCB0aGV5IGhvbGQgdGhlaXIgb3duIHNoYXBlLiBQbGFjZSBpbnRvIHBhbiBvbiBoaWdoIGhlYXQgd2l0aCBhIGJydXNoaW5nIG9mIG9pbCB1bnRpbCBicm93bmVkLiBSZWR1Y2UgaGVhdCB1bnRpbCBjb29rZWQgdGhyb3VnaFwiXG4gICAgfSwge1xuICAgICAgXCJyZWNpcGVOYW1lXCI6IFwi8J+ngCBDaGVlc2VDYWtlXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIkNyZWFtIENoZWVzZVwiLCBcIldoaXBwaW5nIENyZWFtXCIsIFwiU3RyYXdiZXJyaWVzXCIsIFwiR2luZ2VyIFNuYXAgQmlzY3VpdHNcIiwgXCJTdWdhclwiLCBcIkJ1dHRlclwiXSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDcnVtYmxlIHRoZSBiaXNjdWl0cyBpbnRvIGEgdGluIGFuZCBtaXggd2l0aCB0aGUgYnV0dGVyLiBIZWF0IGZvciBhIGZldyBtaW51dGVzIHRvIGZvcm0gYSBzb2xpZCBiYXNlLiBNaXggdGhlIGNyZWFtIGNoZWVzZSBhbmQgd2hpcHBpbmcgY3JlYW0gdW50aWwgaGVhdnksIHRoZW4gYXBwbHkgdG8gdG9wIG9mIGJpc2N1aXQgYmFzZS5cXG5cXG5BZGQgc3RyYXdiZXJyaWVzIGZvciBkZWNvcmF0aW9uIGFuZCBsZWF2ZSB0byByZXN0IGluIGZyaWRnZSBmb3IgMTIgaG91cnMuXCJcbiAgICB9XG4gIF1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcmVjaXBlSGVscGVycy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFLQTtBQUxBOzs7Ozs7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFNQTtBQUVBO0FBRUE7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQWNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFtQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7Ozs7O0FBSUE7QUFDQTtBQUNBOztBQURBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFwQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUdBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7OztBQWtDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFtQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQXlFQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBOzs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTs7QUFJQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFGQTtBQWZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        