"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Conditioner = _interopRequireDefault(require("@shopgate/pwa-core/classes/Conditioner"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mockedConditioner = new _Conditioner["default"]();
var mockedMapStateToPropsResult = {
  variants: {
    products: [{
      id: '32050590001000',
      characteristics: {
        1: '1',
        2: '11'
      }
    }, {
      id: '32050590000950',
      characteristics: {
        1: '2',
        2: '12'
      }
    }],
    characteristics: [{
      id: '1',
      label: 'Color',
      values: [{
        id: '1',
        label: 'BLACK-WHITE (9000)'
      }, {
        id: '2',
        label: 'RED-WHITE (1000)'
      }]
    }, {
      id: '2',
      label: 'Size',
      values: [{
        id: '11',
        label: '7'
      }, {
        id: '12',
        label: '7.5'
      }]
    }]
  }
};
jest.mock('react-redux', function () {
  return {
    connect: function connect(mapStateToProps) {
      return function (Component) {
        return function (props) {
          return _react["default"].createElement(Component, _extends({
            variants: mockedMapStateToPropsResult.variants
          }, props));
        };
      };
    }
  };
});
jest.mock('@shopgate/pwa-common/context', function () {
  return {
    // eslint-disable-next-line react/prop-types
    Theme: function Theme(_ref) {
      var children = _ref.children,
          otherProps = _objectWithoutProperties(_ref, ["children"]);

      var Child = children;

      var props = _objectSpread({
        AppBar: function AppBar() {
          return null;
        },
        Drawer: function Drawer() {
          return null;
        },
        View: function View() {
          return null;
        },
        contexts: {
          ProductContext: {
            // eslint-disable-next-line react/prop-types
            Consumer: function Consumer(_ref2) {
              var ContextChildren = _ref2.children,
                  contextProps = _objectWithoutProperties(_ref2, ["children"]);

              return _react["default"].createElement(ContextChildren, _extends({
                options: {},
                productId: "123",
                variantId: "123-45",
                conditioner: mockedConditioner
              }, contextProps));
            }
          }
        }
      }, otherProps);

      return _react["default"].createElement(Child, props);
    }
  };
});
describe('components/ProductCharacteristics', function () {
  it('should render', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      render: jest.fn()
    }));
    expect(component).toMatchSnapshot();
  });
  it('should call render prop', function () {
    var renderer = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      render: renderer
    }));
    var expected1 = {
      charRef: {
        current: null
      },
      disabled: false,
      highlight: false,
      id: '1',
      key: '1',
      label: 'Color',
      selected: null,
      values: [{
        id: '1',
        label: 'BLACK-WHITE (9000)',
        selectable: true
      }, {
        id: '2',
        label: 'RED-WHITE (1000)',
        selectable: true
      }]
    };
    var expected2 = {
      charRef: {
        current: null
      },
      disabled: true,
      highlight: false,
      id: '2',
      key: '2',
      label: 'Size',
      selected: null,
      values: [{
        id: '11',
        label: '7',
        selectable: true
      }, {
        id: '12',
        label: '7.5',
        selectable: true
      }]
    };
    expect(renderer).toHaveBeenCalledTimes(2);
    var args1 = renderer.mock.calls[0][0];
    expect(_typeof(args1.select)).toBe('function');
    expect(args1).toMatchObject(expected1);
    var args2 = renderer.mock.calls[1][0];
    expect(_typeof(args2.select)).toBe('function');
    expect(args2).toMatchObject(expected2);
  });
});