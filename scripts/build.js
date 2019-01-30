const { execSync } = require('child_process');

console.log('Removing /dist content');
execSync('rm -rf ./dist/*');
console.log('Done removing');

console.log('Babel starts.');
execSync('babel ./src/ --out-dir ./dist/ --ignore \'**/*.spec.js\',\'**/*.spec.jsx\'');
console.log('Babel done.');

console.log('Preparing dist folder to be published.');
execSync('cp package.json ./dist/package.json');
execSync('cp README.md ./dist/README.md');
execSync('git add dist/*');
console.log('Preparation done.');

console.log('All done!');

