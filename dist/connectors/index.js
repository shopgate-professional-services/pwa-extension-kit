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
Object.defineProperty(exports, "withHistoryActions", {
  enumerable: true,
  get: function get() {
    return _withHistoryActions.default;
  }
});
exports.default = void 0;

var _withPageProductId = _interopRequireDefault(require("./withPageProductId"));

var _withHistoryActions = _interopRequireDefault(require("./withHistoryActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  withHistoryActions: _withHistoryActions.default,
  withPageProductId: _withPageProductId.default
};
exports.default = _default;