module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["vue", "only-warn"],
  parser: "vue-eslint-parser",
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {}
};
