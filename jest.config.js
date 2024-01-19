module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/unit/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
