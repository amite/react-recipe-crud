
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

      return _react2.default.createElement('div', { className: 'list-group-item recipe-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('h4', { className: 'list-group-item-heading recipeHeading', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('i', { onClick: this.toggleEntry,
        className: 'glyphicon ' + (this.state.showEntry ? "glyphicon-minus" : "glyphicon-plus"), __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), '\xA0\xA0', recipeName, _react2.default.createElement('a', { onClick: this.handleRemoveRecipe, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-remove', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement('a', { onClick: this.toggleEditing, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), this.state.showEntry && _react2.default.createElement(_ShowRecipe2.default, (0, _extends3.default)({}, this.props, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), this.state.isEditing && _react2.default.createElement(_EditRecipe2.default, (0, _extends3.default)({}, this.props, this.state, { toggleEditing: this.toggleEditing, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
      }, '\n            .recipe-item {\n              margin-bottom: 15px !important;\n              min-height: 30px;\n              background: rgb(255, 193, 7);\n              color: white;\n              border-radius: 2px !important;\n              box-shadow: 0px 3px 0px 1px #dba915;\n              border: none;\n            }\n\n            .glyphicon-pencil, .glyphicon-remove {\n              float: right;\n              margin-left: 20px;\n              color: white;\n            }\n            .recipeHeading {\n              font-size: 1em;\n            }\n            .large-ta {\n              height: 110px !important;\n            }\n            .small-text {\n              padding-top: 8px !important;\n              font-size: 12px !important;\n              letter-spacing: 0.05em;\n              color: #f0ad4e;\n              text-transform: uppercase;\n            }\n\n          '));
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
      }, '\n          body {\n            background: url(/static/img/bhook.jpg) no-repeat;\n            background-size: cover;\n            font-family: Open Sans, Helvetica Neue, Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;\n            width: 100vw;\n            height: 100vh;                \n          }\n\n          body::before {\n            content: "";\n            background-color: #666;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            opacity: 0.55;\n          }\n\n          .app {\n            padding-top:80px;\n            transform: translateY(100px);\n            background: white;\n            min-height: 600px;\n            max-height: 600px;\n            opacity: 0.92;\n            box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);\n            overflow: hidden;\n            overflow-y: visible;\n          }\n\n          .app-title { \n            font-family: \'Amatic SC\', cursive;\n            color: white;\n            text-align: center;\n            position: relative;\n            top: 75px;\n            font-size: 13vw;\n            margin-bottom: 0;\n            text-shadow: 0px 5px 7px #575151;\n            letter-spacing: 0.03em;\n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n        '));
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
exports.loadRecipes = exports.removeRecipe = exports.addRecipe = exports.updateRecipe = undefined;

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

var removeRecipe = exports.removeRecipe = function removeRecipe(recipes, recipeName) {
  var removeIndex = recipes.findIndex(function (item) {
    return item.recipeName === recipeName;
  });
  return [].concat((0, _toConsumableArray3.default)(recipes.slice(0, removeIndex)), (0, _toConsumableArray3.default)(recipes.slice(removeIndex + 1)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2IxMzBlZTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UmVjaXBlLmpzP2IxMzBlZTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/YjEzMGVlNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLmpzP2IxMzBlZTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdSZWNpcGVGb3JtLmpzP2IxMzBlZTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVFbnRyeS5qcz9iMTMwZWU3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz9iMTMwZWU3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hvd1JlY2lwZS5qcz9iMTMwZWU3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/YjEzMGVlNyIsIndlYnBhY2s6Ly8vLi9saWIvcmVjaXBlSGVscGVycy5qcz9iMTMwZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFpvb20gfSBmcm9tICdhbmltYXRlLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5ld1JlY2lwZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OZXdSZWNpcGVGb3JtJ1xuaW1wb3J0IFJlY2lwZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9SZWNpcGVMaXN0J1xuaW1wb3J0IHsgdXBkYXRlUmVjaXBlLCBhZGRSZWNpcGUsIGxvYWRSZWNpcGVzLCByZW1vdmVSZWNpcGUgfSBmcm9tICcuLi9saWIvcmVjaXBlSGVscGVycydcblxuY2xhc3MgUmVjaXBlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgcmVjaXBlczogbG9hZFJlY2lwZXMoKSB9XG5cbiAgc2F2ZVJlY2lwZXMgPSAodXBkYXRlZFJlY2lwZSkgPT4ge1xuICAgIGxldCB1cGRhdGVkUmVjaXBlcyA9IHVwZGF0ZVJlY2lwZSh0aGlzLnN0YXRlLnJlY2lwZXMsIHVwZGF0ZWRSZWNpcGUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlY2lwZXM6IHVwZGF0ZWRSZWNpcGVzIH0pXG4gIH1cblxuICBjcmVhdGVSZWNpcGUgPSAocmVjaXBlTmFtZSkgPT4ge1xuICAgIGxldCBuZXdSZWNpcGUgPSB7IHJlY2lwZU5hbWUsIGluZ3JlZGllbnRzOiBbXSwgZGVzY3JpcHRpb246IFwiXCIgfVxuICAgIGxldCB1cGRhdGVkUmVjaXBlcyA9IGFkZFJlY2lwZSh0aGlzLnN0YXRlLnJlY2lwZXMsIG5ld1JlY2lwZSlcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVjaXBlczogdXBkYXRlZFJlY2lwZXMgfSlcbiAgfVxuXG4gIGRlbGV0ZVJlY2lwZSA9IChyZWNpcGVOYW1lKSA9PiB7XG4gICAgbGV0IHVwZGF0ZWRSZWNpcGVzID0gcmVtb3ZlUmVjaXBlKHRoaXMuc3RhdGUucmVjaXBlcywgcmVjaXBlTmFtZSlcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVjaXBlczogdXBkYXRlZFJlY2lwZXMgfSkgICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxab29tIGR1cmF0aW9uPScwLjVzJyB0aW1pbmdGdW5jdGlvbj0nZWFzZS1pbi1vdXQnPlxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiUmVhY3QgQ1JVRCBSZWNpcGUgQXBwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFwcC10aXRsZVwiPkNvb2sgQmhvb2s8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiPlxuICAgICAgICAgICAgPE5ld1JlY2lwZUZvcm0gY3JlYXRlUmVjaXBlPXt0aGlzLmNyZWF0ZVJlY2lwZX0gIC8+XG4gICAgICAgICAgICA8UmVjaXBlTGlzdCB7Li4udGhpcy5zdGF0ZX0gZGVsZXRlUmVjaXBlPXt0aGlzLmRlbGV0ZVJlY2lwZX0gc2F2ZVJlY2lwZXM9e3RoaXMuc2F2ZVJlY2lwZXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9ab29tPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcblxuY2xhc3MgRWRpdFJlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7IHNob3dNb2RhbDogdHJ1ZSwgaW5ncmVkaWVudHM6IHRoaXMucHJvcHMucmVjaXBlLmluZ3JlZGllbnRzLmpvaW4oXCIsIFwiKSwgZGVzY3JpcHRpb246IHRoaXMucHJvcHMucmVjaXBlLmRlc2NyaXB0aW9uIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXYpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtldi50YXJnZXQubmFtZV06IGV2LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVGb3JtU2F2ZSA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdXBkYXRlZFJlY2lwZSA9IHsgXG4gICAgICByZWNpcGVOYW1lOiB0aGlzLnByb3BzLnJlY2lwZS5yZWNpcGVOYW1lLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXG4gICAgICBpbmdyZWRpZW50czogdGhpcy5zdGF0ZS5pbmdyZWRpZW50cy5sZW5ndGggPiAwID8gdGhpcy5zdGF0ZS5pbmdyZWRpZW50cy5zcGxpdCgnLCAnKSA6IFwiXCJcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nLi4nLCB1cGRhdGVkUmVjaXBlKVxuICAgIHRoaXMucHJvcHMuc2F2ZVJlY2lwZXModXBkYXRlZFJlY2lwZSlcbiAgICB0aGlzLnByb3BzLnRvZ2dsZUVkaXRpbmcoKVxuICAgIHRoaXMuaGFuZGxlTW9kYWwoKVxuICB9XG5cbiAgaGFuZGxlTW9kYWwgPSAoZXYpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY2lwZU5hbWUsIGluZ3JlZGllbnRzLCBkZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wcy5yZWNpcGVcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLnNob3dNb2RhbCAmJiA8TW9kYWw+XG4gICAgICAgIDxoMj57cmVjaXBlTmFtZX08L2gyPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU2F2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBtZC10ZXh0ZmllbGRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVndWxhcjFcIiBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+XG4gICAgICAgICAgICAgIEluZ3JlZGllbnRzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbmdyZWRpZW50c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGluZ3JlZGllbnRzXCIgaWQ9XCJyZWd1bGFyMVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5pbmdyZWRpZW50c30gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHNtYWxsLXRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwbWQtdGV4dGZpZWxkXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ3VsYXIxXCIgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBpZD1cInJlZ3VsYXIxXCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBuaWNlIGRlc2NyaXB0aW9uXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbGFyZ2UtdGFcIj5cbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idG4gYnRuIGJ0bi13YXJuaW5nIGJ0bi1sZ1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9ybVNhdmV9PnNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRSZWNpcGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0VkaXRSZWNpcGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTaXRlSGVhZCBmcm9tICcuL1NpdGVIZWFkJ1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2l0ZUhlYWQgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vZGFsVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm1vZGFsVGFyZ2V0LmNsYXNzTmFtZSA9ICdlZGl0LW1vZGFsJztcblxuICAgIHRoaXMuYmtnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuYmtnRWwuY2xhc3NOYW1lID0gJ2JrZyc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmtnRWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsVGFyZ2V0KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMubW9kYWxUYXJnZXQuY2xhc3NOYW1lICs9ICcgZXhwYW5kJyB9LCA1KVxuICAgIFxuICAgIHRoaXMuX3JlbmRlcigpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fcmVuZGVyKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5tb2RhbFRhcmdldClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW9kYWxUYXJnZXQpICAgIFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ia2dFbCkgICAgXG4gIH1cblxuICBfcmVuZGVyKCkge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAuZWRpdC1tb2RhbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7ICAgICAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lZGl0LW1vZGFsLmV4cGFuZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ia2cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PixcbiAgICAgIHRoaXMubW9kYWxUYXJnZXRcbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxub3NjcmlwdCAvPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Nb2RhbC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UmVjaXBlRm9ybSBleHRlbmRzIENvbXBvbmVudHtcbiAgXG4gIHN0YXRlID0geyB2YWx1ZTogXCJcIiB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgaGFuZGxlRm9ybVN1Ym1pdCA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5wcm9wcy5jcmVhdGVSZWNpcGUodGhpcy5zdGF0ZS52YWx1ZSkgOiBjb25zb2xlLmxvZygnZW1wdHknKVxuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBcIlwifSlcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxmb3JtIGlkPVwiYWRkLXJlY2lwZVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1TdWJtaXR9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgYWRkLW9uXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBOZXcgUmVjaXBlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiKyBBZGRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvcm1TdWJtaXR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBidG4gYnRuLXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICNhZGQtcmVjaXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE0OSwgMTg3LCAwLjc0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNhZGQtcmVjaXBlIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZm9ybT5cblxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3UmVjaXBlRm9ybS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNob3dSZWNpcGUgZnJvbSAnLi9TaG93UmVjaXBlJ1xuaW1wb3J0IEVkaXRSZWNpcGUgZnJvbSAnLi9FZGl0UmVjaXBlJ1xuXG5cbmNsYXNzIFJlY2lwZUVudHJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgaXNFZGl0aW5nOiBmYWxzZSwgc2hvd0VudHJ5OiBmYWxzZSB9XG5cbiAgdG9nZ2xlRW50cnkgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RW50cnk6ICF0aGlzLnN0YXRlLnNob3dFbnRyeSB9KVxuICB9XG5cbiAgdG9nZ2xlRWRpdGluZyA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogIXRoaXMuc3RhdGUuaXNFZGl0aW5nIH0pICAgIFxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlUmVjaXBlID0gKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMuZGVsZXRlUmVjaXBlKHRoaXMucHJvcHMucmVjaXBlLnJlY2lwZU5hbWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZWNpcGVOYW1lLCBkZXNjcmlwdGlvbiwgaW5ncmVkaWVudHMgfSA9IHRoaXMucHJvcHMucmVjaXBlXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSByZWNpcGUtaXRlbVwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZyByZWNpcGVIZWFkaW5nXCI+XG4gICAgICAgICAgICA8aSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVudHJ5fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGBnbHlwaGljb24gJHt0aGlzLnN0YXRlLnNob3dFbnRyeSA/XG4gICAgICAgICAgICAgICAgXCJnbHlwaGljb24tbWludXNcIiA6XG4gICAgICAgICAgICAgICAgXCJnbHlwaGljb24tcGx1c1wifWBcbiAgICAgICAgICAgICAgfSAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAge3JlY2lwZU5hbWV9XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVJlY2lwZX0gaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVwiIC8+PC9hPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50b2dnbGVFZGl0aW5nfSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGVuY2lsXCIgLz48L2E+XG4gICAgICAgICAgPC9oND5cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFbnRyeSAmJiA8U2hvd1JlY2lwZSB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IC8+fVxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlzRWRpdGluZyAmJiA8RWRpdFJlY2lwZSB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IHRvZ2dsZUVkaXRpbmc9e3RoaXMudG9nZ2xlRWRpdGluZ30gLz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVFbnRyeVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVjaXBlRW50cnkuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZWNpcGVFbnRyeSBmcm9tICcuL1JlY2lwZUVudHJ5J1xuXG5jbGFzcyBSZWNpcGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIgKCkge1xuICAgIFxuICAgIGNvbnN0IHJlbmRlclJlY2lwZSA9IChyZWNpcGUsIGluZGV4KSA9PiA8UmVjaXBlRW50cnkga2V5PXtpbmRleH0gey4uLnRoaXMucHJvcHN9IHJlY2lwZT17cmVjaXBlfSAvPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjaXBlLWxpc3RcIj5cbiAgICAgICAge3RoaXMucHJvcHMucmVjaXBlcy5tYXAocmVuZGVyUmVjaXBlKX1cbiAgICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAgIC5yZWNpcGUtaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTkzLCA3KTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggMXB4ICNkYmE5MTU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdseXBoaWNvbi1wZW5jaWwsIC5nbHlwaGljb24tcmVtb3ZlIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlY2lwZUhlYWRpbmcge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYXJnZS10YSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbC10ZXh0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICNmMGFkNGU7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgU2hvd1JlY2lwZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBpbmdyZWRpZW50cywgZGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHMucmVjaXBlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIHsoaW5ncmVkaWVudHMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5ncmVkaWVudC1saXN0XCI+XG4gICAgICAgICAgICAgICAge2luZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWVudCwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJpbmdyZWRpZW50XCI+e2luZ3JlZGllbnR9PC9saT4pfVxuICAgICAgICAgICAgICA8L3VsPiA6IDxwPm5vIGluZ3JlZGllbnRzIGFkZGVkIPCfmYE8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWNpcGUtZGVzY3JpcHRpb25cIj57ISFkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogJ25vIGRlc2NyaXB0aW9uIHlldCDwn5mBJ308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgICAucGFuZWwtZGVmYXVsdCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVjaXBlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbmdyZWRpZW50LWxpc3Qge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5ncmVkaWVudCB7IFxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2E5YzQ7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA3NmVtO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93UmVjaXBlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TaG93UmVjaXBlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cbmNsYXNzIFNpdGVIZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlIHx8ICdEZWZhdWx0J308L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cDovL3Byb3BlbGxlci5pbi9jb21wb25lbnRzL3RleHRmaWVsZC9jc3MvdGV4dGZpZWxkLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbWF0aWMrU0N8T3BlbitTYW5zOjQwMCwzMDAsNjAwLDcwMCw4MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltZy9iaG9vay5qcGcpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzYzNiM2I7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo4MHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMTAxLCA5NSwgOTUsIDAuODQpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFwcC10aXRsZSB7IFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbWF0aWMgU0MnLCBjdXJzaXZlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA3NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3Z3O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggNXB4IDdweCAjNTc1MTUxO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSwgaDIsIGgzIHsgXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICBjb2xvcjogIzZkNmQ2ZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUhlYWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NpdGVIZWFkLmpzIiwiXG5leHBvcnQgY29uc3QgdXBkYXRlUmVjaXBlID0gKHJlY2lwZXMsIHVwZGF0ZWRSZWNpcGUpID0+IHtcbiAgY29uc3QgdXBkYXRlZEluZGV4ID0gcmVjaXBlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnJlY2lwZU5hbWUgPT09IHVwZGF0ZWRSZWNpcGUucmVjaXBlTmFtZSlcbiAgcmV0dXJuIFtcbiAgICAuLi5yZWNpcGVzLnNsaWNlKDAsIHVwZGF0ZWRJbmRleCksXG4gICAgdXBkYXRlZFJlY2lwZSxcbiAgICAuLi5yZWNpcGVzLnNsaWNlKHVwZGF0ZWRJbmRleCsxKVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBhZGRSZWNpcGUgPSAocmVjaXBlcywgbmV3UmVjaXBlKSA9PiB7XG4gIHJldHVybiBbbmV3UmVjaXBlLCAuLi5yZWNpcGVzXVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVjaXBlID0gKHJlY2lwZXMsIHJlY2lwZU5hbWUpID0+IHtcbiAgY29uc3QgcmVtb3ZlSW5kZXggPSByZWNpcGVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucmVjaXBlTmFtZSA9PT0gcmVjaXBlTmFtZSkgIFxuICByZXR1cm4gW1xuICAgIC4uLnJlY2lwZXMuc2xpY2UoMCwgcmVtb3ZlSW5kZXgpLFxuICAgIC4uLnJlY2lwZXMuc2xpY2UocmVtb3ZlSW5kZXgrMSlcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFJlY2lwZXMgPSAoKSA9PiBcbiAgW1xuICAgIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIlBpenphXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIkJyZWFkXCIsIFwiQnJvY29sbGlcIiwgXCJUb21hdG9cIiwgXCJPbmlvblwiLCBcIk11c2hyb29tXCJdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCB0b3BwaW5ncyB0byBkb3VnaCBiYXNlIGFuZCBwbGFjZSBpbnRvIG92ZW4gZm9yIDM1IG1pbnV0ZXMgb24gYSBoaWdoIGhlYXQuXFxuXFxuQmVsbGlzc2ltbyFcIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIlNwYWdoZXR0aVwiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJTcGFnaGV0dGlcIiwgXCJTYXVjZVwiLCBcIlRvbWF0b2VzXCIsIFwiQmFjb25cIiwgXCJHYXJsaWNcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVHJ5IG5vdCB0byBnZXQgaXQgYWxsIG92ZXIgeW91ciBzaGlydC5cIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIk1lYXRiYWxsc1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJNaW5jZWQgQmVlZi9Qb3JrXCIsIFwiT25pb25zXCIsIFwiRmxvdXJcIiwgXCJDaGlsaSBQZXBwZXJzXCIsIFwiVG9tYXRvZXNcIiwgXCJTZWFzb25pbmdcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUm91Z2hseSBjaG9wIG9uaW9ucyBhbmQgbWl4IHdpdGggbWluY2VkIG1lYXQuIEFkZCBmbG91ciBmb3IgZmlybW5lc3MgdW50aWwgdGhleSBob2xkIHRoZWlyIG93biBzaGFwZS4gUGxhY2UgaW50byBwYW4gb24gaGlnaCBoZWF0IHdpdGggYSBicnVzaGluZyBvZiBvaWwgdW50aWwgYnJvd25lZC4gUmVkdWNlIGhlYXQgdW50aWwgY29va2VkIHRocm91Z2hcIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIvCfp4AgQ2hlZXNlQ2FrZVwiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJDcmVhbSBDaGVlc2VcIiwgXCJXaGlwcGluZyBDcmVhbVwiLCBcIlN0cmF3YmVycmllc1wiLCBcIkdpbmdlciBTbmFwIEJpc2N1aXRzXCIsIFwiU3VnYXJcIiwgXCJCdXR0ZXJcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3J1bWJsZSB0aGUgYmlzY3VpdHMgaW50byBhIHRpbiBhbmQgbWl4IHdpdGggdGhlIGJ1dHRlci4gSGVhdCBmb3IgYSBmZXcgbWludXRlcyB0byBmb3JtIGEgc29saWQgYmFzZS4gTWl4IHRoZSBjcmVhbSBjaGVlc2UgYW5kIHdoaXBwaW5nIGNyZWFtIHVudGlsIGhlYXZ5LCB0aGVuIGFwcGx5IHRvIHRvcCBvZiBiaXNjdWl0IGJhc2UuXFxuXFxuQWRkIHN0cmF3YmVycmllcyBmb3IgZGVjb3JhdGlvbiBhbmQgbGVhdmUgdG8gcmVzdCBpbiBmcmlkZ2UgZm9yIDEyIGhvdXJzLlwiXG4gICAgfVxuICBdXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3JlY2lwZUhlbHBlcnMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTs7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFFQTtBQUVBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFjQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7O0FBbUNBOzs7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7QUFEQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBcENBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFFQTtBQUFBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBb0NBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7OztBQW1DQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBeUVBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7O0FBSUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRkE7QUFmQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        