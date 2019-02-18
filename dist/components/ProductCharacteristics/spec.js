"use strict";

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MockedComponent = function MockedComponent() {
  return null;
};

jest.mock('@shopgate/pwa-common/components/ProductCharacteristics', function () {
  return function (props) {
    return _react.default.createElement(MockedComponent, props);
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

              return _react.default.createElement(ContextChildren, _extends({
                options: {},
                productId: "123",
                variantId: "123-45",
                conditioner: {}
              }, contextProps));
            }
          }
        }
      }, otherProps);

      return _react.default.createElement(Child, props);
    }
  };
});
describe('connectors/withProduct', function () {
  it('should render with specified props', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_index.default, null));
    expect(component.find(MockedComponent).props()).toMatchObject({
      productContext: {
        conditioner: {},
        options: {},
        productId: '123',
        variantId: '123-45'
      }
    });
  });
});