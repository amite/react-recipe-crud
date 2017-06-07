
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

var _NewRecipe = __webpack_require__(546);

var _NewRecipe2 = _interopRequireDefault(_NewRecipe);

var _RecipeList = __webpack_require__(547);

var _RecipeList2 = _interopRequireDefault(_RecipeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/pages/index.js?entry';


var RecipeApp = function (_Component) {
  (0, _inherits3.default)(RecipeApp, _Component);

  function RecipeApp() {
    (0, _classCallCheck3.default)(this, RecipeApp);

    return (0, _possibleConstructorReturn3.default)(this, (RecipeApp.__proto__ || (0, _getPrototypeOf2.default)(RecipeApp)).apply(this, arguments));
  }

  (0, _createClass3.default)(RecipeApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'React CRUD Recipe App', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'app col-md-6 col-md-offset-3', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_NewRecipe2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_RecipeList2.default, { recipes: this.props.recipes, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, '\n          .app {\n              transform: translateY(250px);\n              background: white;\n              min-height: 600px;\n              opacity: 0.9;\n              box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);\n          }\n        '));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var recipes;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recipes = [{ "recipeName": "Pizza", "ingredients": ["Bread", "Brocolli", "Tomato", "Onion", "Mushroom"], "description": "Add toppings to dough base and place into oven for 35 minutes on a high heat.\n\nBellissimo!" }, { "recipeName": "Spaghetti", "ingredients": ["Spaghetti", "Sauce", "Tomatoes", "Bacon", "Garlic"], "description": "Try not to get it all over your shirt." }, { "recipeName": "Meatballs", "ingredients": ["Minced Beef/Pork", "Onions", "Flour", "Chili Peppers", "Tomatoes", "Seasoning"], "description": "Roughly chop onions and mix with minced meat. Add flour for firmness until they hold their own shape. Place into pan on high heat with a brushing of oil until browned. Reduce heat until cooked through" }, { "recipeName": "Boiled Cabbage", "ingredients": ["Cabage", "Water"], "description": "Add cabbage to boiling water. Wait. Eat. Delicious - Maybe..." }, { "recipeName": "CheeseCake", "ingredients": ["Cream Cheese", "Whipping Cream", "Strawberries", "Ginger Snap Biscuits", "Sugar", "Butter"], "description": "Crumble the biscuits into a tin and mix with the butter. Heat for a few minutes to form a solid base. Mix the cream cheese and whipping cream until heavy, then apply to top of biscuit base.\n\n\nAdd strawberries for decoration and leave to rest in fridge for 12 hours." }];
                return _context.abrupt('return', { recipes: recipes });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(538);


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

var _SiteHead = __webpack_require__(545);

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
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800', rel: 'stylesheet', type: 'text/css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('style', { global: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, '\n          body {\n            background: url(\'/static/img/recipe-bkg.jpg\') no-repeat;\n            background-size: cover;\n            font-family: \'Lora\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;\n            width: 100vw;\n            height: 100vh;                \n          }\n\n          body::before {\n            content: "";\n            background-color: #666;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            opacity: 0.6;\n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n\n          .recipe-item {\n            margin-bottom: 15px;\n            min-height: 30px;\n            background: rgb(255, 193, 7);\n            color: white;\n            border-radius: 5px;\n          }\n\n          .glyphicon-pencil {\n            float: right;\n          }\n        '));
    }
  }]);

  return SiteHead;
}(_react.Component);

exports.default = SiteHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); } } })();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipe.js";


var NewRecipe = function (_Component) {
  (0, _inherits3.default)(NewRecipe, _Component);

  function NewRecipe() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewRecipe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRecipe.__proto__ || (0, _getPrototypeOf2.default)(NewRecipe)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: "" }, _this.handleChange = function (e) {
      _this.setState({ value: e.target.value });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewRecipe, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("form", {
        id: "add-recipe",
        onSubmit: this.props.onAddRecipe,
        value: this.state.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("div", { className: "input-group add-on", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("input", {
        placeholder: "Add New Recipe",
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement("div", { className: "input-group-btn", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("input", {
        type: "submit",
        value: "+ Add",
        className: "form-control btn btn-primary", __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "\n          #add-recipe {\n            background: rgba(76, 149, 187, 0.74);\n            padding: 10px;\n            text-align: center;\n            min-width: 100%;\n            position: absolute;\n            left: 0;\n            top: 0px;\n          }\n          #add-recipe input {\n            padding: 0 10px;\n          }\n        "));
    }
  }]);

  return NewRecipe;
}(_react.Component);

exports.default = NewRecipe;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipe.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/NewRecipe.js"); } } })();

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

var _Recipe = __webpack_require__(548);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Recipe.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/Recipe.js"); } } })();

/***/ })

},[539]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzRjOTVhMzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NGM5NWEzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz80Yzk1YTMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/NGM5NWEzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld1JlY2lwZS5qcz80Yzk1YTMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlTGlzdC5qcz80Yzk1YTMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjaXBlLmpzP2YxZWQ3ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5ld1JlY2lwZSBmcm9tICcuLi9jb21wb25lbnRzL05ld1JlY2lwZSdcbmltcG9ydCBSZWNpcGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVjaXBlTGlzdCdcblxuXG5cbmNsYXNzIFJlY2lwZUFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgIGNvbnN0IHJlY2lwZXMgPSBbe1wicmVjaXBlTmFtZVwiOlwiUGl6emFcIixcImluZ3JlZGllbnRzXCI6W1wiQnJlYWRcIixcIkJyb2NvbGxpXCIsXCJUb21hdG9cIixcIk9uaW9uXCIsXCJNdXNocm9vbVwiXSxcImRlc2NyaXB0aW9uXCI6XCJBZGQgdG9wcGluZ3MgdG8gZG91Z2ggYmFzZSBhbmQgcGxhY2UgaW50byBvdmVuIGZvciAzNSBtaW51dGVzIG9uIGEgaGlnaCBoZWF0LlxcblxcbkJlbGxpc3NpbW8hXCJ9LHtcInJlY2lwZU5hbWVcIjpcIlNwYWdoZXR0aVwiLFwiaW5ncmVkaWVudHNcIjpbXCJTcGFnaGV0dGlcIixcIlNhdWNlXCIsXCJUb21hdG9lc1wiLFwiQmFjb25cIixcIkdhcmxpY1wiXSxcImRlc2NyaXB0aW9uXCI6XCJUcnkgbm90IHRvIGdldCBpdCBhbGwgb3ZlciB5b3VyIHNoaXJ0LlwifSx7XCJyZWNpcGVOYW1lXCI6XCJNZWF0YmFsbHNcIixcImluZ3JlZGllbnRzXCI6W1wiTWluY2VkIEJlZWYvUG9ya1wiLFwiT25pb25zXCIsXCJGbG91clwiLFwiQ2hpbGkgUGVwcGVyc1wiLFwiVG9tYXRvZXNcIixcIlNlYXNvbmluZ1wiXSxcImRlc2NyaXB0aW9uXCI6XCJSb3VnaGx5IGNob3Agb25pb25zIGFuZCBtaXggd2l0aCBtaW5jZWQgbWVhdC4gQWRkIGZsb3VyIGZvciBmaXJtbmVzcyB1bnRpbCB0aGV5IGhvbGQgdGhlaXIgb3duIHNoYXBlLiBQbGFjZSBpbnRvIHBhbiBvbiBoaWdoIGhlYXQgd2l0aCBhIGJydXNoaW5nIG9mIG9pbCB1bnRpbCBicm93bmVkLiBSZWR1Y2UgaGVhdCB1bnRpbCBjb29rZWQgdGhyb3VnaFwifSx7XCJyZWNpcGVOYW1lXCI6XCJCb2lsZWQgQ2FiYmFnZVwiLFwiaW5ncmVkaWVudHNcIjpbXCJDYWJhZ2VcIixcIldhdGVyXCJdLFwiZGVzY3JpcHRpb25cIjpcIkFkZCBjYWJiYWdlIHRvIGJvaWxpbmcgd2F0ZXIuIFdhaXQuIEVhdC4gRGVsaWNpb3VzIC0gTWF5YmUuLi5cIn0se1wicmVjaXBlTmFtZVwiOlwiQ2hlZXNlQ2FrZVwiLFwiaW5ncmVkaWVudHNcIjpbXCJDcmVhbSBDaGVlc2VcIixcIldoaXBwaW5nIENyZWFtXCIsXCJTdHJhd2JlcnJpZXNcIixcIkdpbmdlciBTbmFwIEJpc2N1aXRzXCIsXCJTdWdhclwiLFwiQnV0dGVyXCJdLFwiZGVzY3JpcHRpb25cIjpcIkNydW1ibGUgdGhlIGJpc2N1aXRzIGludG8gYSB0aW4gYW5kIG1peCB3aXRoIHRoZSBidXR0ZXIuIEhlYXQgZm9yIGEgZmV3IG1pbnV0ZXMgdG8gZm9ybSBhIHNvbGlkIGJhc2UuIE1peCB0aGUgY3JlYW0gY2hlZXNlIGFuZCB3aGlwcGluZyBjcmVhbSB1bnRpbCBoZWF2eSwgdGhlbiBhcHBseSB0byB0b3Agb2YgYmlzY3VpdCBiYXNlLlxcblxcblxcbkFkZCBzdHJhd2JlcnJpZXMgZm9yIGRlY29yYXRpb24gYW5kIGxlYXZlIHRvIHJlc3QgaW4gZnJpZGdlIGZvciAxMiBob3Vycy5cIn1dO1xuICAgIHJldHVybiB7IHJlY2lwZXMgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPVwiUmVhY3QgQ1JVRCBSZWNpcGUgQXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwIGNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiPlxuICAgICAgICAgIDxOZXdSZWNpcGUgLz5cbiAgICAgICAgICA8UmVjaXBlTGlzdCByZWNpcGVzPXt0aGlzLnByb3BzLnJlY2lwZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIC5hcHAge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUwcHgpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDEwMSwgOTUsIDk1LCAwLjg0KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2l0ZUhlYWQgZnJvbSAnLi9TaXRlSGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaXRlSGVhZCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWNpcGVfX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIC5yZWNpcGVfX2NvbnRhaW5lciB7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgbGluazogJ1JlY2lwZXMnLCBocmVmOiAnLyd9XG5dXG5cbmNvbnN0IHJlbmRlckxpbmtzID0gKGxpbmtzKSA9PlxuICBsaW5rcy5tYXAgKGwgPT5cbiAgICA8bGkga2V5PXtsLmxpbmt9PlxuICAgICAgPExpbmsgaHJlZj17bC5ocmVmfT5cbiAgICAgICAgPGE+e2wubGlua308L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKVxuXG5jbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1jdXN0b21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlciBwYWdlLXNjcm9sbFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgTWVudSA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlJlYWN0IENSVUQgUmVjaXBlIEFwcDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHsgcmVuZGVyTGlua3MobGlua3MpIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cblxuY2xhc3MgU2l0ZUhlYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGUgfHwgJ0RlZmF1bHQnfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDBpdGFsaWMsNDAwaXRhbGljLDYwMGl0YWxpYyw3MDBpdGFsaWMsODAwaXRhbGljLDQwMCwzMDAsNjAwLDcwMCw4MDAnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnIC8+XG4gICAgICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL3N0YXRpYy9pbWcvcmVjaXBlLWJrZy5qcGcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzNjM2IzYjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHk6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLCBoMiwgaDMgeyBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgIGNvbG9yOiAjNmQ2ZDZkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWNpcGUtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDE5MywgNyk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdseXBoaWNvbi1wZW5jaWwge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9IZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlSGVhZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2l0ZUhlYWQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1JlY2lwZSBleHRlbmRzIENvbXBvbmVudHtcbiAgXG4gIHN0YXRlID0geyB2YWx1ZTogXCJcIiB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIFxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwiYWRkLXJlY2lwZVwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLnByb3BzLm9uQWRkUmVjaXBlfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBhZGQtb25cIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIE5ldyBSZWNpcGVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCIrIEFkZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBidG4gYnRuLXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgI2FkZC1yZWNpcGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTQ5LCAxODcsIDAuNzQpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2FkZC1yZWNpcGUgaW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9mb3JtPlxuXG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OZXdSZWNpcGUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9SZWNpcGUnXG5cbmNsYXNzIFJlY2lwZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlciAoKSB7XG4gICAgXG4gICAgY29uc3QgcmVuZGVyUmVjaXBlID0gKHJlY2lwZSwgaW5kZXgpID0+IDxSZWNpcGUgcmVjaXBlPXtyZWNpcGV9IC8+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNpcGUtbGlzdFwiPlxuICAgICAgICB7dGhpcy5wcm9wcy5yZWNpcGVzLm1hcChyZW5kZXJSZWNpcGUpfVxuXG4gICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgIC5yZWNpcGUtbGlzdCB7IFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVMaXN0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9SZWNpcGVMaXN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBSZWNpcGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSByZWNpcGUtaXRlbVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgcmVjaXBlSGVhZGluZ1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAge3RoaXMucHJvcHMucmVjaXBlLnJlY2lwZU5hbWV9XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFwiIC8+PC9hPlxuICAgICAgICA8L2g0PlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9SZWNpcGUuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBYkE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBVUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQVFBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBUUE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUE2REE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTs7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUxBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUhBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQUE7QUFBQTtBQUFBOzs7OztBQWpDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFVQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBTEE7Ozs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        