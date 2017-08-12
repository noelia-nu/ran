module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: false,
  moduleFileExtensions: ['js', 'json'],
  testRegex: '\\.test\\.js$',
  testPathIgnorePatterns: [
    '<rootDir>/(build|docs|node_modules)/',
    '/__mocks__/'
  ]
};