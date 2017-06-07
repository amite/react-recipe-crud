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

var _SiteHead = require('./SiteHead');

var _SiteHead2 = _interopRequireDefault(_SiteHead);

var _Nav = require('./Nav');

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