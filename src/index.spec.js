import kit, { env, data } from './index';

describe('env/helpers', () => {
  it('should export all functions as default', () => {
   expect(typeof kit).toBe('object');
   expect(typeof kit.env).toBe('object');
   expect(typeof kit.data).toBe('object');
  });

  it('should export as named export', () => {
    expect(typeof env).toBe('object');
    expect(typeof data).toBe('object');
  });
});
