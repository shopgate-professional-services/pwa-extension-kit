import helpers, { isIOSTheme } from './index';

describe('env/helpers', () => {
  it('should export all functions as default', () => {
    const requiredNames = ['isIOSTheme'];
    requiredNames.forEach(name => {
      expect(typeof helpers[name]).toBe('function');
    });
  });

  it('should export isIOSTheme as named export', () => {
    expect(typeof isIOSTheme).toBe('function');
  });
});
