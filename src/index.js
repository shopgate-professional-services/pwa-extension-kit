import env, { helpers} from './index';

describe('env/helpers', () => {
  it('should export all functions as default', () => {
    const requiredNames = ['helpers'];
    requiredNames.forEach(name => {
      expect(typeof env[name]).toBe('function');
    });
  });

  it('should export isIOSTheme as named export', () => {
    expect(typeof isIOSTheme).toBe('function');
  });
});
