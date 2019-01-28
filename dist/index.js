"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "env", {
  enumerable: true,
  get: function get() {
    return _env.default;
  }
});
Object.defineProperty(exports, "data", {
  enumerable: true,
  get: function get() {
    return _data.default;
  }
});
exports.default = void 0;

var _env = _interopRequireDefault(require("./env"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  env: _env.default,
  data: _data.default
};
exports.default = _default;