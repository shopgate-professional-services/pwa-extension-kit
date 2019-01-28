import kit, { env } from './index';

describe('env/helpers', () => {
  it('should export all functions as default', () => {
   expect(typeof kit).toBe('object');
   expect(typeof kit.env).toBe('object');
  });

  it('should export as named export', () => {
    expect(typeof env).toBe('object');
  });
});
