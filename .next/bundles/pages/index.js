
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 538:
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
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'edit-modal';
      this.bkgEl = document.createElement('div');
      this.bkgEl.className = 'bkg';

      document.body.appendChild(this.bkgEl);
      document.body.appendChild(this.modalTarget);

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
          lineNumber: 31
        }
      }, this.props.children, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, '\n          .edit-modal {\n            background: white;\n            width: 50%;\n            top: 50%;\n            transform: translate(50%, -50%);\n            padding: 30px;\n            min-height: 500px;\n            border-radius: 5px;\n            position: fixed;\n            box-shadow: 0px 3px 6px 6px rgba(0, 0, 0, 0.23);\n          }\n        ')), this.modalTarget);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('noscript', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      });
    }
  }]);

  return EditModal;
}(_react.Component);

exports.default = EditModal;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditModal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/EditModal.js"); } } })();

/***/ }),

/***/ 539:
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

var _Layout = __webpack_require__(543);

var _Layout2 = _interopRequireDefault(_Layout);

var _NewRecipeForm = __webpack_require__(545);

var _NewRecipeForm2 = _interopRequireDefault(_NewRecipeForm);

var _RecipeList = __webpack_require__(547);

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

/***/ 543:
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

var _SiteHead = __webpack_require__(548);

var _SiteHead2 = _interopRequireDefault(_SiteHead);

var _Nav = __webpack_require__(544);

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

/***/ 544:
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

var _link = __webpack_require__(542);

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
    }, _this.handleFormSubmit = function (e) {
      e.preventDefault();
      _this.state.value ? _this.props.handleCreateRecipe(_this.state.value) : console.log('empty');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewRecipeForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('form', { id: 'add-recipe',
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'input-group add-on', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('input', {
        placeholder: 'Add New Recipe',
        type: 'text',
        value: this.state.value,
        onChange: this.handleChange,
        className: 'form-control',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('div', { className: 'input-group-btn', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('input', {
        type: 'submit',
        value: '+ Add',
        onClick: this.handleFormSubmit,
        className: 'form-control btn btn-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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

var _EditModal = __webpack_require__(538);

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
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'list-group-item recipe-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h4', { className: 'list-group-item-heading recipeHeading', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), '\xA0\xA0', recipeName, _react2.default.createElement('a', { onClick: this.handleModal, href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('i', { className: 'glyphicon glyphicon-pencil', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }))), this.state.showModal && _react2.default.createElement(_EditModal2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, recipeName), _react2.default.createElement('div', { className: 'form-group pmd-textfield', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('label', { htmlFor: 'regular1', className: 'control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Description'), _react2.default.createElement('textarea', { type: 'text', id: 'regular1', defaultValue: description, className: 'form-control large-ta', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement('button', { className: 'close-btn btn btn-warning btn-lg', onClick: this.handleModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'close')), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, '\n            .app {\n              padding-top:80px;\n              transform: translateY(200px);\n              background: white;\n              min-height: 600px;\n              opacity: 0.92;\n              box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);\n            }\n            .bkg {\n              background: rgba(0, 0, 0, 0.45);\n              position: absolute;\n              width: 100%;\n              height: 100%;\n              left: 0;\n              top: 0;\n            }\n            .recipeHeading {\n              font-size: 1em;\n            }\n            .large-ta {\n              height: 110px !important;\n            }\n            .close-btn {\n              position: absolute;\n              right: 20px;\n              bottom: 15px;\n              padding: 5px 45px;\n            }\n          ')));
    }
  }]);

  return RecipeEntry;
}(_react.Component);

exports.default = RecipeEntry;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeEntry.js"); } } })();

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

var _RecipeEntry = __webpack_require__(546);

var _RecipeEntry2 = _interopRequireDefault(_RecipeEntry);

var _EditModal = __webpack_require__(538);

var _EditModal2 = _interopRequireDefault(_EditModal);

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
            lineNumber: 11
          }
        });
      };

      return _react2.default.createElement('div', { className: 'recipe-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.recipes.map(renderRecipe));
    }
  }]);

  return RecipeList;
}(_react.Component);

exports.default = RecipeList;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/RecipeList.js"); } } })();

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
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800', rel: 'stylesheet', type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('style', { global: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, '\n          body {\n            background: url(\'/static/img/recipe-bkg.jpg\') no-repeat;\n            background-size: cover;\n            font-family: \'Lora\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;\n            width: 100vw;\n            height: 100vh;                \n          }\n\n          body::before {\n            content: "";\n            background-color: #666;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            opacity: 0.6;\n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n\n          .recipe-item {\n            margin-bottom: 15px !important;\n            min-height: 30px;\n            background: rgb(255, 193, 7);\n            color: white;\n            border-radius: 5px;\n          }\n\n          .glyphicon-pencil {\n            float: right;\n          }\n        '));
    }
  }]);

  return SiteHead;
}(_react.Component);

exports.default = SiteHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(539);


/***/ })

},[549]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdE1vZGFsLmpzPzU1MTc1NDQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NTUxNzU0NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz81NTE3NTQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2LmpzPzU1MTc1NDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdSZWNpcGVGb3JtLmpzPzU1MTc1NDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWNpcGVFbnRyeS5qcz81NTE3NTQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz81NTE3NTQ0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/NTUxNzU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5jbGFzcyBFZGl0TW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vZGFsVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm1vZGFsVGFyZ2V0LmNsYXNzTmFtZSA9ICdlZGl0LW1vZGFsJztcbiAgICB0aGlzLmJrZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLmJrZ0VsLmNsYXNzTmFtZSA9ICdia2cnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJrZ0VsKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbFRhcmdldClcbiAgICBcbiAgICB0aGlzLl9yZW5kZXIoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX3JlbmRlcigpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMubW9kYWxUYXJnZXQpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsVGFyZ2V0KSAgICBcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmtnRWwpICAgIFxuICB9XG5cbiAgX3JlbmRlcigpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgLmVkaXQtbW9kYWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj4sXG4gICAgICB0aGlzLm1vZGFsVGFyZ2V0XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8bm9zY3JpcHQgLz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0TW9kYWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0VkaXRNb2RhbC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOZXdSZWNpcGVGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3UmVjaXBlRm9ybSdcbmltcG9ydCBSZWNpcGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaXBlTGlzdCdcblxuY2xhc3MgUmVjaXBlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBjb25zdCByZWNpcGVzID0gW3tcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIlBpenphXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIkJyZWFkXCIsIFwiQnJvY29sbGlcIiwgXCJUb21hdG9cIiwgXCJPbmlvblwiLCBcIk11c2hyb29tXCJdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCB0b3BwaW5ncyB0byBkb3VnaCBiYXNlIGFuZCBwbGFjZSBpbnRvIG92ZW4gZm9yIDM1IG1pbnV0ZXMgb24gYSBoaWdoIGhlYXQuXFxuXFxuQmVsbGlzc2ltbyFcIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIlNwYWdoZXR0aVwiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJTcGFnaGV0dGlcIiwgXCJTYXVjZVwiLCBcIlRvbWF0b2VzXCIsIFwiQmFjb25cIiwgXCJHYXJsaWNcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVHJ5IG5vdCB0byBnZXQgaXQgYWxsIG92ZXIgeW91ciBzaGlydC5cIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIk1lYXRiYWxsc1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXCJNaW5jZWQgQmVlZi9Qb3JrXCIsIFwiT25pb25zXCIsIFwiRmxvdXJcIiwgXCJDaGlsaSBQZXBwZXJzXCIsIFwiVG9tYXRvZXNcIiwgXCJTZWFzb25pbmdcIl0sXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUm91Z2hseSBjaG9wIG9uaW9ucyBhbmQgbWl4IHdpdGggbWluY2VkIG1lYXQuIEFkZCBmbG91ciBmb3IgZmlybW5lc3MgdW50aWwgdGhleSBob2xkIHRoZWlyIG93biBzaGFwZS4gUGxhY2UgaW50byBwYW4gb24gaGlnaCBoZWF0IHdpdGggYSBicnVzaGluZyBvZiBvaWwgdW50aWwgYnJvd25lZC4gUmVkdWNlIGhlYXQgdW50aWwgY29va2VkIHRocm91Z2hcIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIkJvaWxlZCBDYWJiYWdlXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcIkNhYmFnZVwiLCBcIldhdGVyXCJdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCBjYWJiYWdlIHRvIGJvaWxpbmcgd2F0ZXIuIFdhaXQuIEVhdC4gRGVsaWNpb3VzIC0gTWF5YmUuLi5cIlxuICAgIH0sIHtcbiAgICAgIFwicmVjaXBlTmFtZVwiOiBcIkNoZWVzZUNha2VcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1wiQ3JlYW0gQ2hlZXNlXCIsIFwiV2hpcHBpbmcgQ3JlYW1cIiwgXCJTdHJhd2JlcnJpZXNcIiwgXCJHaW5nZXIgU25hcCBCaXNjdWl0c1wiLCBcIlN1Z2FyXCIsIFwiQnV0dGVyXCJdLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNydW1ibGUgdGhlIGJpc2N1aXRzIGludG8gYSB0aW4gYW5kIG1peCB3aXRoIHRoZSBidXR0ZXIuIEhlYXQgZm9yIGEgZmV3IG1pbnV0ZXMgdG8gZm9ybSBhIHNvbGlkIGJhc2UuIE1peCB0aGUgY3JlYW0gY2hlZXNlIGFuZCB3aGlwcGluZyBjcmVhbSB1bnRpbCBoZWF2eSwgdGhlbiBhcHBseSB0byB0b3Agb2YgYmlzY3VpdCBiYXNlLlxcblxcbkFkZCBzdHJhd2JlcnJpZXMgZm9yIGRlY29yYXRpb24gYW5kIGxlYXZlIHRvIHJlc3QgaW4gZnJpZGdlIGZvciAxMiBob3Vycy5cIlxuICAgIH1dO1xuICAgIFxuICAgIHJldHVybiB7IHJlY2lwZXMgfVxuICB9XG5cbiAgaGFuZGxlQ3JlYXRlUmVjaXBlID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPVwiUmVhY3QgQ1JVRCBSZWNpcGUgQXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiPlxuICAgICAgICAgIDxOZXdSZWNpcGVGb3JtIHsuLi50aGlzLnByb3BzfSBoYW5kbGVDcmVhdGVSZWNpcGU9e3RoaXMuaGFuZGxlQ3JlYXRlUmVjaXBlfSAgLz5cbiAgICAgICAgICA8UmVjaXBlTGlzdCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNpdGVIZWFkIGZyb20gJy4vU2l0ZUhlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2J1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2l0ZUhlYWQgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVjaXBlX19jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAucmVjaXBlX19jb250YWluZXIgeyBcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGxpbms6ICdSZWNpcGVzJywgaHJlZjogJy8nfVxuXVxuXG5jb25zdCByZW5kZXJMaW5rcyA9IChsaW5rcykgPT5cbiAgbGlua3MubWFwIChsID0+XG4gICAgPGxpIGtleT17bC5saW5rfT5cbiAgICAgIDxMaW5rIGhyZWY9e2wuaHJlZn0+XG4gICAgICAgIDxhPntsLmxpbmt9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gIClcblxuY2xhc3MgTmF2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItY3VzdG9tXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXIgcGFnZS1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgIE1lbnUgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5SZWFjdCBDUlVEIFJlY2lwZSBBcHA8L2E+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgICAgICB7IHJlbmRlckxpbmtzKGxpbmtzKSB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdSZWNpcGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xuICBcbiAgc3RhdGUgPSB7IHZhbHVlOiBcIlwiIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5wcm9wcy5oYW5kbGVDcmVhdGVSZWNpcGUodGhpcy5zdGF0ZS52YWx1ZSkgOiBjb25zb2xlLmxvZygnZW1wdHknKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGZvcm0gaWQ9XCJhZGQtcmVjaXBlXCJcbiAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBhZGQtb25cIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIE5ldyBSZWNpcGVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIrIEFkZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJ0biBidG4tcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAjYWRkLXJlY2lwZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAxNDksIDE4NywgMC43NCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjYWRkLXJlY2lwZSBpbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Zvcm0+XG5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05ld1JlY2lwZUZvcm0uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBFZGl0TW9kYWwgZnJvbSAnLi9FZGl0TW9kYWwnXG5cbmNsYXNzIFJlY2lwZUVudHJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHsgc2hvd0VudHJ5OiBmYWxzZSwgc2hvd01vZGFsOiBmYWxzZSB9XG5cbiAgaGFuZGxlTW9kYWwgPSAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgcmVjaXBlTmFtZSwgZGVzY3JpcHRpb24sIGluZ3JlZGllbnRzIH0gPSB0aGlzLnByb3BzLnJlY2lwZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIHJlY2lwZS1pdGVtXCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHJlY2lwZUhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICB7cmVjaXBlTmFtZX1cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTW9kYWx9IGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcIiAvPjwvYT5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbCAmJlxuICAgICAgICAgICAgPEVkaXRNb2RhbD5cbiAgICAgICAgICAgICAgPGgyPntyZWNpcGVOYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwbWQtdGV4dGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWd1bGFyMVwiIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD1cInJlZ3VsYXIxXCIgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGxhcmdlLXRhXCI+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnRuIGJ0biBidG4td2FybmluZyBidG4tbGdcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9FZGl0TW9kYWw+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC45MjtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDEwMSwgOTUsIDk1LCAwLjg0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ia2cge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWNpcGVIZWFkaW5nIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFyZ2UtdGEge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZUVudHJ5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9SZWNpcGVFbnRyeS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFJlY2lwZUVudHJ5IGZyb20gJy4vUmVjaXBlRW50cnknXG5pbXBvcnQgRWRpdE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdE1vZGFsJ1xuXG5cbmNsYXNzIFJlY2lwZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciAoKSB7XG4gICAgXG4gICAgY29uc3QgcmVuZGVyUmVjaXBlID0gKHJlY2lwZSwgaW5kZXgpID0+IDxSZWNpcGVFbnRyeSBrZXk9e2luZGV4fSByZWNpcGU9e3JlY2lwZX0gLz5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2lwZS1saXN0XCI+XG4gICAgICAgIHt0aGlzLnByb3BzLnJlY2lwZXMubWFwKHJlbmRlclJlY2lwZSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlTGlzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5jbGFzcyBTaXRlSGVhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZSB8fCAnRGVmYXVsdCd9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly9wcm9wZWxsZXIuaW4vY29tcG9uZW50cy90ZXh0ZmllbGQvY3NzL3RleHRmaWVsZC5jc3NcIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwaXRhbGljLDQwMGl0YWxpYyw2MDBpdGFsaWMsNzAwaXRhbGljLDgwMGl0YWxpYyw0MDAsMzAwLDYwMCw3MDAsODAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJyAvPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvc3RhdGljL2ltZy9yZWNpcGUtYmtnLmpwZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xvcmEnLCdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSxBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjM2MzYjNiO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsIGgyLCBoMyB7IFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSxBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgY29sb3I6ICM2ZDZkNmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlY2lwZS1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxOTMsIDcpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5nbHlwaGljb24tcGVuY2lsIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUhlYWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NpdGVIZWFkLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFtQkE7OztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBOzs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBOzs7Ozs7QUFuQ0E7Ozs7O0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUFBOzs7OztBQVVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVFBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBR0E7QUFHQTtBQUVBO0FBQUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7QUFEQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBcENBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFJQTtBQUFBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFvQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUE2REE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        