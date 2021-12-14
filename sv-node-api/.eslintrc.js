module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "max-len": ["error", { code: 120 }],
    semi: ["error", "always"],
  },
};
