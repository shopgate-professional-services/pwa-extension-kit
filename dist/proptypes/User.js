"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _propTypes.default.shape({
  isLoggedIn: _propTypes.default.bool.isRequired,
  id: _propTypes.default.oneOfType(_propTypes.default.string, _propTypes.default.number),
  email: _propTypes.default.string,
  firstName: _propTypes.default.string,
  lastName: _propTypes.default.string,
  displayName: _propTypes.default.string
});

var _default = User;
exports.default = _default;