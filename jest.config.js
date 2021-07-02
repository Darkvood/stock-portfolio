/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  moduleFileExtensions: ["js", "json", "vue"],
  testMatch: ["<rootDir>/test/**/*.js"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(js)$": "babel-jest"
  },
  globals: {
    "vue-jest": {
      babelConfig: true
    }
  },
  collectCoverage: false
};

module.exports = config;
