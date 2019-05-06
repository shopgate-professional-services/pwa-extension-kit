"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Checks if current theme is an iOS theme.
 * @link https://github.com/shopgate-professional-services/pwa-extension-kit/src/env/README.md
 * @returns {boolean}
 */
function isIOSTheme() {
  return process.env.THEME.includes('ios');
}

var _default = isIOSTheme;
exports["default"] = _default;