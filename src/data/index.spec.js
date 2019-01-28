import data, { connectors } from './index';

describe('/data', () => {
  it('should export all helpers as default', () => {
    expect(typeof data).toBe('object');
    expect(typeof data.connectors).toBe('object');
  });

  it('should export connectors as named export', () => {
    expect(typeof connectors).toBe('object');
    expect(typeof connectors.withPageProductId).toBe('function');
  });
});
