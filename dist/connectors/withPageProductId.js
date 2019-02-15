"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("@shopgate/pwa-common/context");

var _data = require("@shopgate/pwa-common/helpers/data");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var logger = new _helpers.TaggedLogger('withPageProductId');
/**
 * Reads productId from params and tries to hex2bin decode it.
 * @param {Object} params Params.
 * @returns {string|null|false}
 */

function decodeProductIdFromParams(params) {
  var decodedProductId = null;

  if (typeof params.productId === 'undefined') {
    var message = 'Connector is probably rendered outside of page containing "productId" pattern param. Please check documentation for more information: https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/data/connectors/README.md#withPageProductId';
    logger.error(message);
    return decodedProductId;
  }

  decodedProductId = (0, _data.hex2bin)(params.productId);

  if (params.productId && !decodedProductId) {
    logger.warn('Wrapping with empty productId. Possibly productId used in a pathname is not bin2hex encoded.');
  }

  return decodedProductId;
} // eslint-disable-next-line react/prefer-stateless-function, require-jsdoc


var WithPageProductId =
/*#__PURE__*/
function (_Component) {
  _inherits(WithPageProductId, _Component);

  function WithPageProductId() {
    _classCallCheck(this, WithPageProductId);

    return _possibleConstructorReturn(this, _getPrototypeOf(WithPageProductId).apply(this, arguments));
  }

  _createClass(WithPageProductId, [{
    key: "render",

    /**
     * @inheritDoc
     */
    value: function render() {
      var _this$props = this.props,
          WrappedComponent = _this$props.WrappedComponent,
          otherProps = _objectWithoutProperties(_this$props, ["WrappedComponent"]);

      return _react.default.createElement(_context.RouteContext.Consumer, null, function (_ref) {
        var params = _ref.params;
        return _react.default.createElement(WrappedComponent, _extends({
          productId: decodeProductIdFromParams(params)
        }, otherProps));
      });
    }
  }]);

  return WithPageProductId;
}(_react.Component);
/**
 * Returns a Wrapped Component with automatic props.productId read from RouteContext.
 * @param {function} WrappedComponent Component which will be wrapped with data connector.
 * @returns {function} React component.
 */


var withPageProductId = function withPageProductId(WrappedComponent) {
  return function (props) {
    return _react.default.createElement(WithPageProductId, _extends({
      WrappedComponent: WrappedComponent
    }, props));
  };
};

var _default = withPageProductId;
exports.default = _default;