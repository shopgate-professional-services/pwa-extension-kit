"use strict";

var _index = _interopRequireWildcard(require("./index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('/data', function () {
  it('should export all helpers as default', function () {
    expect(_typeof(_index.default)).toBe('object');
    expect(_typeof(_index.default.connectors)).toBe('object');
  });
  it('should export connectors as named export', function () {
    expect(_typeof(_index.connectors)).toBe('object');
    expect(_typeof(_index.connectors.withPageProductId)).toBe('function');
  });
});