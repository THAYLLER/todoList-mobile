module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
    '\\.ts$': 'ts-jest',
    '\\.tsx$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: ['./jest/setup.js'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.tsx'],
  verbose: true,
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native|react-native-mmkv-storage)/)',
  ],
};
