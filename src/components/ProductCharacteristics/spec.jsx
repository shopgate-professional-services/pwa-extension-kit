import React, { Component } from 'react';
import { mount } from 'enzyme';
import ProductCharacteristics from './index';

const MockedComponent = () => null;
jest.mock('@shopgate/pwa-common/components/ProductCharacteristics', () => props => <MockedComponent {...props} />);

jest.mock('@shopgate/pwa-common/context', () => ({
  // eslint-disable-next-line react/prop-types
  Theme: ({ children, ...otherProps }) => {
    const Child = children;

    const props = {
      AppBar: () => null,
      Drawer: () => null,
      View: () => null,
      contexts: {
        ProductContext: {
          // eslint-disable-next-line react/prop-types
          Consumer: ({ children: ContextChildren, ...contextProps }) => (
            <ContextChildren
              options={{}}
              productId="123"
              variantId="123-45"
              conditioner={{}}
              {...contextProps}
            />
          ),
        },
      },
      ...otherProps,
    };

    return (
      <Child {...props} />
    );
  },
}));

describe('connectors/withProduct', () => {
  it('should render with specified props', () => {
    const component = mount(<ProductCharacteristics />);

    expect(component.find(MockedComponent).props()).toMatchObject({
      productContext: {
        conditioner: {},
        options: {},
        productId: '123',
        variantId: '123-45',
      },
    });
  });
});
