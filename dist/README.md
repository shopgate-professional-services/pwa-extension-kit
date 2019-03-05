# Shopgate Connect - PWA Extension Kit

[![Build Status](https://travis-ci.org/shopgate-professional-services/pwa-extension-kit.svg?branch=master)](https://travis-ci.org/shopgate-professional-services/pwa-extension-kit) [![Coverage Status](https://coveralls.io/repos/github/shopgate-professional-services/pwa-extension-kit/badge.svg?branch=master)](https://coveralls.io/github/shopgate-professional-services/pwa-extension-kit?branch=master)

Extra library for extra helpers, components and other often used snippets that are making the extensions development easier.

## Purpose
This package is an extra package on top of other PWA libraries.
It contains functions, React components and wrappers which are meant to help developing PWA extensions but for reasons there is no place for it into the main PWA libraries.

## Versioning
This package follows semver. 

## Index of contents (alphabetically ordered)
- `env` - Environment related helpers [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/env/README.md)
  - `env/helpers/isIOSTheme` - detects if currently used theme is an ios theme [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/env/README.md#isIOSTheme)
- `/helpers` - Common helper functions [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/helpers/README.md)
  - `/helpers/TaggedLogger` - helper class for printing tagged logs [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/helpers/README.md#TaggedLogger)
- `/connectors` - [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) used as a data/actions interface
  - `/connectors/withHistoryActions` - Provides routing actions: `historyPop`, `historyPush` and `historyReplace`. [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/connectors/README.md#withHistoryActions)
  - `/connectors/withPageProductId` - Provides decoded `productId` read from a pathname of a product page. [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/connectors/README.md#withPageProductId)
  - `/connectors/withPageState` - Provides `isVisible` and `isLoading` booleans. Values are taken from a page state. [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/connectors/README.md#withPageState)
  - `/connectors/withUser` - Provides `user` object with user data [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/connectors/README.md#withUser)
  - `/connectors/withThemeComponents` - Provides Components from the theme (AppBar, Drawer, View, ProductCard) [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/connectors/README.md#withThemeComponents)
  - `/connectors/withProductContext` - Provides product context [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/connectors/README.md#withProductContext)
- `/components` - Common Components  [read documentation](https://github.com/shopgate/pwa-extension-kit/blob/master/src/components/README.md)
  - `/components/ProductCharacteristics` - Component to show some product characteristics aka variant selection [read documentation](https://github.com/shopgate/pwa-extension-kit/blob/master/src/helpers/README.md#TaggedLogger)
- `proptypes` - React prop types definitions.
  - `User` - User entity definition [read documentation](https://github.com/shopgate-professional-services/pwa-extension-kit/blob/master/src/proptypes/README.md#User)



## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - PWA Extension Kit is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
