"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _user = require("@shopgate/pwa-common/selectors/user");

var _user2 = require("./selectors/user");

var _proptypes = require("../proptypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WithUser wrapper.
 * @param {function} WrappedComponent Wrapped component.
 * @param {Object} user Mapped user data.
 * @returns {JSX}
 */
var WithUser = function WithUser(_ref) {
  var WrappedComponent = _ref.WrappedComponent,
      user = _ref.user,
      otherProps = _objectWithoutProperties(_ref, ["WrappedComponent", "user"]);

  return _react["default"].createElement(WrappedComponent, _extends({
    user: user
  }, otherProps));
};

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: {
      isLoggedIn: (0, _user.isUserLoggedIn)(state) || false,
      id: (0, _user2.getUserId)(state) || null,
      email: (0, _user.getUserEmail)(state) || null,
      firstName: (0, _user.getUserFirstName)(state) || null,
      lastName: (0, _user2.getUserLastName)(state) || null,
      displayName: (0, _user.getUserDisplayName)(state) || null
    }
  };
};

var ConnectedWithUser = (0, _reactRedux.connect)(mapStateToProps)(WithUser);
/**
* Returns a Wrapped Component with current user data.
* @param {function} WrappedComponent Component which will be wrapped with data connector.
* @returns {function} React component.
*/

var withUser = function withUser(WrappedComponent) {
  return function (props) {
    return _react["default"].createElement(ConnectedWithUser, _extends({
      WrappedComponent: WrappedComponent
    }, props));
  };
};

var _default = withUser;
exports["default"] = _default;