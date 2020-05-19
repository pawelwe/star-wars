module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.js$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
    '\\.svg$': '<rootDir>/fileTransformer.js',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/fileMock.js',
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/index.js',
    '<rootDir>/src/apis',
    '<rootDir>/src/config.js',
    '<rootDir>/src/reducers/index.js',
    '<rootDir>/src/actions/index.js',
    '<rootDir>/src/history.js'
  ],
};
