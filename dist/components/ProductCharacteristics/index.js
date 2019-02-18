"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProductCharacteristics = _interopRequireDefault(require("@shopgate/pwa-common/components/ProductCharacteristics"));

var _withProductContext = _interopRequireDefault(require("../../connectors/withProductContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _withProductContext.default)(function (props) {
  return _react.default.createElement(_ProductCharacteristics.default, props);
});

exports.default = _default;