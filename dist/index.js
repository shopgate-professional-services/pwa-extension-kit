"use strict";

var _index = _interopRequireWildcard(require("./index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

describe('env/helpers', function () {
  it('should export all functions as default', function () {
    var requiredNames = ['helpers'];
    requiredNames.forEach(function (name) {
      expect(_typeof(_index.default[name])).toBe('function');
    });
  });
  it('should export isIOSTheme as named export', function () {
    expect(typeof isIOSTheme === "undefined" ? "undefined" : _typeof(isIOSTheme)).toBe('function');
  });
});