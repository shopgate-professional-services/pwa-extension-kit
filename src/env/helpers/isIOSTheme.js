/**
 * Checks if current theme is an iOS theme.
 * @link https://github.com/shopgate/pwa-extension-kit/src/env/README.md
 * @returns {boolean}
 */
function isIOSTheme() {
  return process.env.THEME.includes('ios');
}
export default isIOSTheme;
