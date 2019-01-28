"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _withPageProductId = _interopRequireDefault(require("./withPageProductId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockedProductId = '31323334';
jest.mock('@shopgate/pwa-common/context', function () {
  return {
    RouteContext: {
      Consumer: function Consumer(props) {
        // eslint-disable-next-line react/prop-types
        var Child = props.children;
        return _react.default.createElement(Child, {
          params: {
            productId: mockedProductId
          }
        });
      }
    }
  };
});
describe('data/connectors/withPageProductId', function () {
  // eslint-disable-next-line react/prop-types, require-jsdoc
  var MockedComponent = function MockedComponent(props) {
    return _react.default.createElement("div", null, props.productId);
  };

  it('should render with productId', function () {
    var Component = (0, _withPageProductId.default)(MockedComponent);
    var component = (0, _enzyme.mount)(_react.default.createElement(Component, {
      otherProp: 1
    }));
    expect(component.find('MockedComponent').props()).toEqual({
      productId: '1234',
      otherProp: 1
    });
  });
});