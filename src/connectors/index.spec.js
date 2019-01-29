import connectors, { withPageProductId } from './index';

describe('data/connectors', () => {
  it('should export all functions as default', () => {
    expect(typeof connectors).toBe('object');
    expect(typeof connectors.withPageProductId).toBe('function');
  });

  it('should export withPageProductId as named export', () => {
    expect(typeof withPageProductId).toBe('function');
  });
});
