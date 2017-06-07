
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
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'Recipe CRUD');
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
      }), _react2.default.createElement(_Nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.children)));
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
      }, '\n          body {\n            background: hsla(0, 0%, 88%, 0.53);\n            font-family: \'Lora\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 18px;\n            color: #3c3b3b;                 \n          }\n\n          h1, h2, h3 { \n            font-family: \'Open Sans\',\'Helvetica Neue\', Helvetica,Arial, sans-serif;\n            font-size: 65px;\n            letter-spacing: -0.02em;\n            line-height: 1.1;\n            font-weight: 800;\n            margin-bottom: 44px;\n            text-shadow: 0 1px 1px #fff;\n          }\n\n          h2 {\n            font-size: 45px;\n            margin-bottom: 20px;\n          }\n\n          h3 {\n            font-size: 35px;\n            font-weight: 300;\n            margin-bottom: 25px;\n            line-height: 1.2;\n            color: #6d6d6d;\n          }\n        '));
    }
  }]);

  return SiteHead;
}(_react.Component);

exports.default = SiteHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-recipe-crud/components/SiteHead.js"); } } })();

/***/ })

},[539]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2UzMDA0ODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTMwMDQ4MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz9lMzAwNDgwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWQuanM/ZTMwMDQ4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cblxuY2xhc3MgUmVjaXBlQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgUmVjaXBlIENSVUQgXG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlQXBwXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2l0ZUhlYWQgZnJvbSAnLi9TaXRlSGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaXRlSGVhZCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0vPlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBsaW5rOiAnUmVjaXBlcycsIGhyZWY6ICcvJ31cbl1cblxuY29uc3QgcmVuZGVyTGlua3MgPSAobGlua3MpID0+XG4gIGxpbmtzLm1hcCAobCA9PlxuICAgIDxsaSBrZXk9e2wubGlua30+XG4gICAgICA8TGluayBocmVmPXtsLmhyZWZ9PlxuICAgICAgICA8YT57bC5saW5rfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApXG5cbmNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWN1c3RvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyIHBhZ2Utc2Nyb2xsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICBNZW51IDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+UmVhY3QgQ1JVRCBSZWNpcGUgQXBwPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cImJzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgeyByZW5kZXJMaW5rcyhsaW5rcykgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5jbGFzcyBTaXRlSGVhZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZSB8fCAnRGVmYXVsdCd9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICA8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMGl0YWxpYyw0MDBpdGFsaWMsNjAwaXRhbGljLDcwMGl0YWxpYyw4MDBpdGFsaWMsNDAwLDMwMCw2MDAsNzAwLDgwMCcgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcycgLz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaHNsYSgwLCAwJSwgODglLCAwLjUzKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzYzNiM2I7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSwgaDIsIGgzIHsgXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICBjb2xvcjogIzZkNmQ2ZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlSGVhZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2l0ZUhlYWQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVFBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBaUNBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        