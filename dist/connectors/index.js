"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withPageProductId", {
  enumerable: true,
  get: function get() {
    return _withPageProductId.default;
  }
});
Object.defineProperty(exports, "withPageState", {
  enumerable: true,
  get: function get() {
    return _withPageState.default;
  }
});
Object.defineProperty(exports, "withHistoryActions", {
  enumerable: true,
  get: function get() {
    return _withHistoryActions.default;
  }
});
Object.defineProperty(exports, "withUser", {
  enumerable: true,
  get: function get() {
    return _withUser.default;
  }
});
exports.default = void 0;

var _withPageProductId = _interopRequireDefault(require("./withPageProductId"));

var _withPageState = _interopRequireDefault(require("./withPageState"));

var _withHistoryActions = _interopRequireDefault(require("./withHistoryActions"));

var _withUser = _interopRequireDefault(require("./withUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  withHistoryActions: _withHistoryActions.default,
  withPageProductId: _withPageProductId.default,
  withPageState: _withPageState.default,
  withUser: _withUser.default
};
exports.default = _default;