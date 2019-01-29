"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getConsole = _interopRequireDefault(require("./_getConsole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var console = (0, _getConsole.default)();
/**
 * Tagged Logger.
 * @link https://github.com/shopgate/pwa-extension-kit/blob/master/helpers/README.md
 */

var TaggedLogger =
/*#__PURE__*/
function () {
  /**
   * Instantiate TaggedLogger with given tag.
   * @param {string} tag Tag which will be appended to all logs.
   */
  function TaggedLogger(tag) {
    _classCallCheck(this, TaggedLogger);

    this.tag = tag;
  }
  /**
   * Prints actual log.
   * @param {string} method Name of method (log, warn, error)
   */


  _createClass(TaggedLogger, [{
    key: "print",
    value: function print(method, message) {
      for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
      }

      console[method].apply(console, ["[".concat(this.tag, "] ").concat(message)].concat(rest));
    }
    /**
     * Prints tagged log.
     * @param {string} message Log message.
     */

  }, {
    key: "log",
    value: function log(message) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.print.apply(this, ['log', message].concat(args));
    }
    /**
     * Prints tagged warning.
     * @param {string} message Log message.
     */

  }, {
    key: "warn",
    value: function warn(message) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      this.print.apply(this, ['warn', message].concat(args));
    }
    /**
     * Prints tagged error.
     * @param {string} message Log message.
     */

  }, {
    key: "error",
    value: function error(message) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      this.print.apply(this, ['error', message].concat(args));
    }
  }]);

  return TaggedLogger;
}();

var _default = TaggedLogger;
exports.default = _default;