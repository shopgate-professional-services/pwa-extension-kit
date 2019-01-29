# Shopgate Connect - PWA Extension Kit - .data/connectors - Data connectors
## Purpose

Connectors are [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) which are made to simplify reading data from PWA app by frontend components.

Connectors are meant to replace some PWA redux selectors or Contexts by using them in a simpler way and hiding the logic behind gathering basic data which is proven to be commonly used by many extensions.   

## Available connectors
### withPageProductId
Connector which provides `hex2Bin` decoded `productId` which is also available in the page pathname params. It's intended to be used with or without additional product selectors like `getProduct`, `getBaseProduct` depending on the extension needs.

### Possible usage
This connector will only work while being rendered on a page which has :productId pathname param. Current pages which offer this param are:
- Product Page ('/item/:productId')
- Write review page ('/item/:productId/write-review')

#### Example usage
##### Getting productId as is
```jsx
// Page pathname where component is rendered: '/item/31323334'
import { withPageProductId } from '@shopgate/pwa-extension-kit/data/connectors';

// Will produce <div>This product id is: 1234</div>
const MyComponent = ({ productId}) => (<div>This product id is: ${productId}</div);

export default withPageProductId(MyComponent);
```

#### Getting always a base product id
Some products has variants. If variant is selected by user or product page is rendered directly with selected variant (by for example deep linking), product id available in the pathname is an id of currently selected variant.
In this case, in order to read the `baseProductId` (product id of a variant's parent product), there's need to use additional PWA redux selectors.
```jsx
// Page pathname where component is rendered: '/item/313233342d76617269616e742d31'
import { connect } from 'react-redux'; // Provides connection to redux.
import { withPageProductId } from '@shopgate/pwa-extension-kit/data/connectors'; // Fetches and decodes productId from a pathname
import { getBaseProductId } from '@shopgate/pwa-common-commerce/product/selectors'; // Makes sure productId always comes from base product.

// Will produce <div>This product id is: 1234</div>
const MyComponent = ({ baseProductId }) => (<div>This product id is: ${baseProductId}</div);

// Function that maps state and given props to component props.
// State is a current redux state
// Props in this example are made by `withPageProductId` connector and pass decoded `1234-variant-1` (encoded version: `313233342d76617269616e742d31`)
const mapStateToProps = (state, props) => ({
  baseProductId: getBaseProductId(state, props)
});

// Component connected with redux only
const ConnectedComponent = connect(mapStateToProps)(MyComponent);

// ConnectedComponent wrapped with data connector.
export default withPageProductId(ConnectedComponent);
``z
