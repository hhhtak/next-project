const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/pages/api/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/products/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/interface/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@repository/(.*)$': '<rootDir>/src/repository/$1',
    '^@api/(.*)$': '<rootDir>/src/pages/api/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
