/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  moduleFileExtensions: ["js"],
  testMatch: ["<rootDir>/test/**/*.js"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    ".*\\.(js)$": "babel-jest"
  },
  collectCoverage: false
};

module.exports = config;
