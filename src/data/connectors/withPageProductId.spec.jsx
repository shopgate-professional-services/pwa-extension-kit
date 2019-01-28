import React from 'react';
import { mount } from 'enzyme';
import withPageProductId from './withPageProductId';

const mockedProductId = '31323334';

jest.mock('@shopgate/pwa-common/context', () => ({
  RouteContext: {
    Consumer: (props) => {
      // eslint-disable-next-line react/prop-types
      const Child = props.children;
      return <Child params={{ productId: mockedProductId }} />;
    },
  },
}));

describe('data/connectors/withPageProductId', () => {
  // eslint-disable-next-line react/prop-types, require-jsdoc
  const MockedComponent = props => <div>{props.productId}</div>;

  it('should render with productId', () => {
    const Component = withPageProductId(MockedComponent);

    const component = mount(<Component otherProp={1} />);
    expect(component.find('MockedComponent').props()).toEqual({
      productId: '1234',
      otherProp: 1,
    });
  });
});
