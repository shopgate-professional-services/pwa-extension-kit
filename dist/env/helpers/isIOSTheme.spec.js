"use strict";

var _isIOSTheme = _interopRequireDefault(require("./isIOSTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('isiOSTheme', function () {
  var orgTHEME = process.env.THEME;
  afterAll(function () {
    process.env.THEME = orgTHEME;
  });
  it('should return false for gmd', function () {
    process.env.THEME = 'gmd';
    expect((0, _isIOSTheme.default)()).toBe(false);
  });
  it('should return true for ios', function () {
    process.env.THEME = 'ios';
    expect((0, _isIOSTheme.default)()).toBe(true);
  });
});