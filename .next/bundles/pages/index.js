
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

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(64);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Layout = __webpack_require__(547);

var _Layout2 = _interopRequireDefault(_Layout);

var _NewRecipeForm = __webpack_require__(549);

var _NewRecipeForm2 = _interopRequireDefault(_NewRecipeForm);

var _RecipeList = __webpack_require__(551);

var _RecipeList2 = _interopRequireDefault(_RecipeList);

var _animateComponents = __webpack_require__(540);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeApp.__proto__ || (0, _getPrototypeOf2.default)(RecipeApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = { recipes: _this.props.recipes }, _this.handleCreateRecipe = function (recipeName) {
      var newRecipe = { recipeName: recipeName, ingredients: [], description: "" };
      var updatedRecipes = _this.state.recipes.concat(newRecipe);
      _this.setState({ recipes: updatedRecipes });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_animateComponents.Zoom, { duration: '0.5s', timingFunction: 'ease-in-out', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_Layout2.default, { title: 'React CRUD Recipe App', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h2', { className: 'app-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Recipe Book'), _react2.default.createElement('div', { className: 'app col-md-6 col-md-offset-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_NewRecipeForm2.default, (0, _extends3.default)({}, this.props, { handleCreateRecipe: this.handleCreateRecipe, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_RecipeList2.default, (0, _extends3.default)({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })))));
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
                  "recipeName": "🧀 CheeseCake",
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

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditModal.js';


var EditModal = function (_Component) {
  (0, _inherits3.default)(EditModal, _Component);

  function EditModal() {
    (0, _classCallCheck3.default)(this, EditModal);

    return (0, _possibleConstructorReturn3.default)(this, (EditModal.__proto__ || (0, _getPrototypeOf2.default)(EditModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(EditModal, [{
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

  return EditModal;
}(_react.Component);

exports.default = EditModal;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditModal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditModal.js"); } } })();

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

var _SiteHead = __webpack_require__(552);

var _SiteHead2 = _interopRequireDefault(_SiteHead);

var _Nav = __webpack_require__(548);

var _Nav2 = _interopRequireDefault(_Nav);

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
          lineNumber: 9
        }
      }, _react2.default.createElement(_SiteHead2.default, { title: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement('div', { className: 'container recipe__container', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.children)), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, '\n          .recipe__container { \n            \n          }\n        '));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Layout.js"); } } })();

/***/ }),

/***/ 548:
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

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Nav.js';

var links = [{ link: 'Recipes', href: '/' }];

var renderLinks = function renderLinks(links) {
  return links.map(function (l) {
    return _react2.default.createElement('li', { key: l.link, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement(_link2.default, { href: l.href, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, l.link)));
  });
};

var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('nav', { className: 'navbar navbar-default navbar-custom', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('div', { className: 'navbar-header page-scroll', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('span', { className: 'sr-only', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Toggle navigation'), 'Menu ', _react2.default.createElement('i', { className: 'fa fa-bars', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('a', { className: 'navbar-brand', href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'React CRUD Recipe App')), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('ul', { className: 'nav navbar-nav navbar-right', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, renderLinks(links)))));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Nav.js"); } } })();

/***/ }),

/***/ 549:
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
      _this.state.value ? _this.props.handleCreateRecipe(_this.state.value) : console.log('empty');
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
          lineNumber: 40
        }
      }, '\n          #add-recipe {\n            background: rgba(76, 149, 187, 0.74);\n            padding: 10px;\n            text-align: center;\n            min-width: 100%;\n            position: absolute;\n            left: 0;\n            top: 0px;\n          }\n          #add-recipe input {\n            padding: 0 10px;\n          }\n        '));
    }
  }]);

  return NewRecipeForm;
}(_react.Component);

exports.default = NewRecipeForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipeForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipeForm.js"); } } })();

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

var _EditModal = __webpack_require__(546);

var _EditModal2 = _interopRequireDefault(_EditModal);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RecipeEntry.__proto__ || (0, _getPrototypeOf2.default)(RecipeEntry)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showEntry: false, showModal: false }, _this.handleModal = function (ev) {
      ev.preventDefault();
      _this.setState({ showModal: !_this.state.showModal });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RecipeEntry, [{
    key: 'render',
    value: function render() {
      var _props$recipe = this.props.recipe,
          recipeName = _props$recipe.recipeName,
          description = _props$recipe.description,
          ingredients = _props$recipe.ingredients;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', { className: 'list-group-item recipe-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('h4', { className: 'list-group-item-heading recipeHeading', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), '\xA0\xA0', recipeName, _react2.default.createElement('a', { onClick: this.handleModal, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }))), this.state.showModal && _react2.default.createElement(_EditModal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, recipeName), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Ingredients'), _react2.default.createElement('input', { type: 'text', id: 'regular1', defaultValue: ingredients.join(", "), className: 'form-control small-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Description'), _react2.default.createElement('textarea', { type: 'text', id: 'regular1', defaultValue: description, className: 'form-control large-ta', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), _react2.default.createElement('button', { className: 'close-btn btn btn-warning btn-lg', onClick: this.handleModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'close')), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, '\n\n            .recipe-item {\n              margin-bottom: 15px !important;\n              min-height: 30px;\n              background: rgb(255, 193, 7);\n              color: white;\n              border-radius: 0 !important;\n              box-shadow: 0px 3px 0px 1px #dba915;\n              border: none;\n            }\n\n            .recipe-item:active {\n              position: relative;\n              top: 2px;\n            }\n\n            .glyphicon-pencil {\n              float: right;\n            }\n            .recipeHeading {\n              font-size: 1em;\n            }\n            .large-ta {\n              height: 110px !important;\n            }\n            .small-text {\n              padding-top: 8px !important;\n              font-size: 12px !important;\n              letter-spacing: 0.05em;\n              color: #f0ad4e;\n              text-transform: uppercase;\n            }\n            .close-btn {\n              position: absolute;\n              right: 20px;\n              bottom: 15px;\n              padding: 5px 45px;\n            }\n          ')));
    }
  }]);

  return RecipeEntry;
}(_react.Component);

exports.default = RecipeEntry;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js"); } } })();

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

var _RecipeEntry = __webpack_require__(550);

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

      var renderRecipe = function renderRecipe(recipe, index) {
        return _react2.default.createElement(_RecipeEntry2.default, { key: index, recipe: recipe, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        });
      };

      return _react2.default.createElement('div', { className: 'recipe-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.recipes.map(renderRecipe));
    }
  }]);

  return RecipeList;
}(_react.Component);

exports.default = RecipeList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js"); } } })();

/***/ }),

/***/ 552:
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
      }, '\n          body {\n            background: url(\'/static/img/recipe-bkg.jpg\') no-repeat;\n            background-size: cover;\n            font-family: \'Lora\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;\n            width: 100vw;\n            height: 100vh;                \n          }\n\n          .app {\n            padding-top:80px;\n            transform: translateY(100px);\n            background: white;\n            min-height: 600px;\n            opacity: 0.92;\n            box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);\n          }\n\n          .app-title { \n            font-family: \'Amatic SC\', cursive;\n            color: white;\n            text-align: center;\n            position: relative;\n            top: 75px;\n            font-size: 9em;\n            margin-bottom: 0;\n            text-shadow: 0px 5px 7px #575151;\n            letter-spacing: 0.03em;\n          }\n\n          body::before {\n            content: "";\n            background-color: #666;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            opacity: 0.6;\n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n        '));
    }
  }]);

  return SiteHead;
}(_react.Component);

exports.default = SiteHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); } } })();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(538);


/***/ })

},[554]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzMwZTdiZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0TW9kYWwuanM/MzBlN2JmOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz8zMGU3YmY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzPzMwZTdiZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdSZWNpcGVGb3JtLmpzPzMwZTdiZjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVFbnRyeS5qcz8zMGU3YmY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz8zMGU3YmY4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/MzBlN2JmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTmV3UmVjaXBlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL05ld1JlY2lwZUZvcm0nXG5pbXBvcnQgUmVjaXBlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1JlY2lwZUxpc3QnXG5pbXBvcnQgeyBab29tIH0gZnJvbSAnYW5pbWF0ZS1jb21wb25lbnRzJztcblxuY2xhc3MgUmVjaXBlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBjb25zdCByZWNpcGVzID0gW3tcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIlBpenphXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIkJyZWFkXCIsIFwiQnJvY29sbGlcIiwgXCJUb21hdG9cIiwgXCJPbmlvblwiLCBcIk11c2hyb29tXCJdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCB0b3BwaW5ncyB0byBkb3VnaCBiYXNlIGFuZCBwbGFjZSBpbnRvIG92ZW4gZm9yIDM1IG1pbnV0ZXMgb24gYSBoaWdoIGhlYXQuXFxuXFxuQmVsbGlzc2ltbyFcIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIlNwYWdoZXR0aVwiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJTcGFnaGV0dGlcIiwgXCJTYXVjZVwiLCBcIlRvbWF0b2VzXCIsIFwiQmFjb25cIiwgXCJHYXJsaWNcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVHJ5IG5vdCB0byBnZXQgaXQgYWxsIG92ZXIgeW91ciBzaGlydC5cIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIk1lYXRiYWxsc1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJNaW5jZWQgQmVlZi9Qb3JrXCIsIFwiT25pb25zXCIsIFwiRmxvdXJcIiwgXCJDaGlsaSBQZXBwZXJzXCIsIFwiVG9tYXRvZXNcIiwgXCJTZWFzb25pbmdcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUm91Z2hseSBjaG9wIG9uaW9ucyBhbmQgbWl4IHdpdGggbWluY2VkIG1lYXQuIEFkZCBmbG91ciBmb3IgZmlybW5lc3MgdW50aWwgdGhleSBob2xkIHRoZWlyIG93biBzaGFwZS4gUGxhY2UgaW50byBwYW4gb24gaGlnaCBoZWF0IHdpdGggYSBicnVzaGluZyBvZiBvaWwgdW50aWwgYnJvd25lZC4gUmVkdWNlIGhlYXQgdW50aWwgY29va2VkIHRocm91Z2hcIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIkJvaWxlZCBDYWJiYWdlXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIkNhYmFnZVwiLCBcIldhdGVyXCJdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCBjYWJiYWdlIHRvIGJvaWxpbmcgd2F0ZXIuIFdhaXQuIEVhdC4gRGVsaWNpb3VzIC0gTWF5YmUuLi5cIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIvCfp4AgQ2hlZXNlQ2FrZVwiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJDcmVhbSBDaGVlc2VcIiwgXCJXaGlwcGluZyBDcmVhbVwiLCBcIlN0cmF3YmVycmllc1wiLCBcIkdpbmdlciBTbmFwIEJpc2N1aXRzXCIsIFwiU3VnYXJcIiwgXCJCdXR0ZXJcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3J1bWJsZSB0aGUgYmlzY3VpdHMgaW50byBhIHRpbiBhbmQgbWl4IHdpdGggdGhlIGJ1dHRlci4gSGVhdCBmb3IgYSBmZXcgbWludXRlcyB0byBmb3JtIGEgc29saWQgYmFzZS4gTWl4IHRoZSBjcmVhbSBjaGVlc2UgYW5kIHdoaXBwaW5nIGNyZWFtIHVudGlsIGhlYXZ5LCB0aGVuIGFwcGx5IHRvIHRvcCBvZiBiaXNjdWl0IGJhc2UuXFxuXFxuQWRkIHN0cmF3YmVycmllcyBmb3IgZGVjb3JhdGlvbiBhbmQgbGVhdmUgdG8gcmVzdCBpbiBmcmlkZ2UgZm9yIDEyIGhvdXJzLlwiXG4gICAgfV07XG4gICAgXG4gICAgcmV0dXJuIHsgcmVjaXBlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHsgcmVjaXBlczogdGhpcy5wcm9wcy5yZWNpcGVzIH1cblxuICBoYW5kbGVDcmVhdGVSZWNpcGUgPSAocmVjaXBlTmFtZSkgPT4ge1xuICAgIGxldCBuZXdSZWNpcGUgPSB7IHJlY2lwZU5hbWUsIGluZ3JlZGllbnRzOiBbXSwgZGVzY3JpcHRpb246IFwiXCIgfVxuICAgIGxldCB1cGRhdGVkUmVjaXBlcyA9IHRoaXMuc3RhdGUucmVjaXBlcy5jb25jYXQobmV3UmVjaXBlKVxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGVzOiB1cGRhdGVkUmVjaXBlcyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Wm9vbSBkdXJhdGlvbj0nMC41cycgdGltaW5nRnVuY3Rpb249J2Vhc2UtaW4tb3V0Jz5cbiAgICAgICAgPExheW91dCB0aXRsZT1cIlJlYWN0IENSVUQgUmVjaXBlIEFwcFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhcHAtdGl0bGVcIj5SZWNpcGUgQm9vazwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAgY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XG4gICAgICAgICAgICA8TmV3UmVjaXBlRm9ybSB7Li4udGhpcy5wcm9wc30gaGFuZGxlQ3JlYXRlUmVjaXBlPXt0aGlzLmhhbmRsZUNyZWF0ZVJlY2lwZX0gIC8+XG4gICAgICAgICAgICA8UmVjaXBlTGlzdCB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1pvb20+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5jbGFzcyBFZGl0TW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vZGFsVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm1vZGFsVGFyZ2V0LmNsYXNzTmFtZSA9ICdlZGl0LW1vZGFsJztcblxuICAgIHRoaXMuYmtnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuYmtnRWwuY2xhc3NOYW1lID0gJ2JrZyc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmtnRWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsVGFyZ2V0KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMubW9kYWxUYXJnZXQuY2xhc3NOYW1lICs9ICcgZXhwYW5kJyB9LCA1KVxuICAgIFxuICAgIHRoaXMuX3JlbmRlcigpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5fcmVuZGVyKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5tb2RhbFRhcmdldClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW9kYWxUYXJnZXQpICAgIFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ia2dFbCkgICAgXG4gIH1cblxuICBfcmVuZGVyKCkge1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAuZWRpdC1tb2RhbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7ICAgICAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lZGl0LW1vZGFsLmV4cGFuZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ia2cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PixcbiAgICAgIHRoaXMubW9kYWxUYXJnZXRcbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxub3NjcmlwdCAvPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRNb2RhbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRWRpdE1vZGFsLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2l0ZUhlYWQgZnJvbSAnLi9TaXRlSGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaXRlSGVhZCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWNpcGVfX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIC5yZWNpcGVfX2NvbnRhaW5lciB7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbGluazogJ1JlY2lwZXMnLCBocmVmOiAnLyd9XG5dXG5cbmNvbnN0IHJlbmRlckxpbmtzID0gKGxpbmtzKSA9PlxuICBsaW5rcy5tYXAgKGwgPT5cbiAgICA8bGkga2V5PXtsLmxpbmt9PlxuICAgICAgPExpbmsgaHJlZj17bC5ocmVmfT5cbiAgICAgICAgPGE+e2wubGlua308L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKVxuXG5jbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1jdXN0b21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlciBwYWdlLXNjcm9sbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgTWVudSA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlJlYWN0IENSVUQgUmVjaXBlIEFwcDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHsgcmVuZGVyTGlua3MobGlua3MpIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1JlY2lwZUZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XG4gIFxuICBzdGF0ZSA9IHsgdmFsdWU6IFwiXCIgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIGhhbmRsZUZvcm1TdWJtaXQgPSAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMucHJvcHMuaGFuZGxlQ3JlYXRlUmVjaXBlKHRoaXMuc3RhdGUudmFsdWUpIDogY29uc29sZS5sb2coJ2VtcHR5JylcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogXCJcIn0pXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBpZD1cImFkZC1yZWNpcGVcIlxuICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU3VibWl0fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGFkZC1vblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgTmV3IFJlY2lwZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cIisgQWRkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYnRuIGJ0bi1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICNhZGQtcmVjaXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE0OSwgMTg3LCAwLjc0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNhZGQtcmVjaXBlIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZm9ybT5cblxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmV3UmVjaXBlRm9ybS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEVkaXRNb2RhbCBmcm9tICcuL0VkaXRNb2RhbCdcblxuY2xhc3MgUmVjaXBlRW50cnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0geyBzaG93RW50cnk6IGZhbHNlLCBzaG93TW9kYWw6IGZhbHNlIH1cblxuICBoYW5kbGVNb2RhbCA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY2lwZU5hbWUsIGRlc2NyaXB0aW9uLCBpbmdyZWRpZW50cyB9ID0gdGhpcy5wcm9wcy5yZWNpcGVcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIHJlY2lwZS1pdGVtXCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHJlY2lwZUhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICB7cmVjaXBlTmFtZX1cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9kYWx9IGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcIiAvPjwvYT5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbCAmJlxuICAgICAgICAgICAgPEVkaXRNb2RhbD5cbiAgICAgICAgICAgICAgPGgyPntyZWNpcGVOYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwbWQtdGV4dGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWd1bGFyMVwiIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIEluZ3JlZGllbnRzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJlZ3VsYXIxXCIgZGVmYXVsdFZhbHVlPXtpbmdyZWRpZW50cy5qb2luKFwiLCBcIil9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBzbWFsbC10ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwbWQtdGV4dGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWd1bGFyMVwiIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGlkPVwicmVndWxhcjFcIiBkZWZhdWx0VmFsdWU9e2Rlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbGFyZ2UtdGFcIj5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbG9zZS1idG4gYnRuIGJ0bi13YXJuaW5nIGJ0bi1sZ1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9kYWx9PmNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8L0VkaXRNb2RhbD5cbiAgICAgICAgICB9XG4gICAgICAgICAgPHN0eWxlPntgXG5cbiAgICAgICAgICAgIC5yZWNpcGUtaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTkzLCA3KTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4IDFweCAjZGJhOTE1O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWNpcGUtaXRlbTphY3RpdmUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ2x5cGhpY29uLXBlbmNpbCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWNpcGVIZWFkaW5nIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFyZ2UtdGEge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGwtdGV4dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjBhZDRlO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUVudHJ5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9SZWNpcGVFbnRyeS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFJlY2lwZUVudHJ5IGZyb20gJy4vUmVjaXBlRW50cnknXG5cbmNsYXNzIFJlY2lwZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciAoKSB7XG4gICAgXG4gICAgY29uc3QgcmVuZGVyUmVjaXBlID0gKHJlY2lwZSwgaW5kZXgpID0+IDxSZWNpcGVFbnRyeSBrZXk9e2luZGV4fSByZWNpcGU9e3JlY2lwZX0gLz5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS1saXN0XCI+XG4gICAgICAgIHt0aGlzLnByb3BzLnJlY2lwZXMubWFwKHJlbmRlclJlY2lwZSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5jbGFzcyBTaXRlSGVhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZSB8fCAnRGVmYXVsdCd9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly9wcm9wZWxsZXIuaW4vY29tcG9uZW50cy90ZXh0ZmllbGQvY3NzL3RleHRmaWVsZC5jc3NcIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QW1hdGljK1NDfE9wZW4rU2Fuczo0MDAsMzAwLDYwMCw3MDAsODAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUgZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1nL3JlY2lwZS1ia2cuanBnJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzYzNiM2I7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXBwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMTAxLCA5NSwgOTUsIDAuODQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcHAtdGl0bGUgeyBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNzVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOWVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggNXB4IDdweCAjNTc1MTUxO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSwgaDIsIGgzIHsgXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICBjb2xvcjogIzZkNmQ2ZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUhlYWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NpdGVIZWFkLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUtBO0FBTEE7QUFBQTs7Ozs7O0FBekNBOzs7OztBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFtQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBVUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQVFBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUUE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUdBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBREE7QUFHQTtBQUhBO0FBQUE7QUFHQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBU0E7QUFUQTtBQUNBOztBQVFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQXJDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBSUE7QUFBQTs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBK0NBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBc0VBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        