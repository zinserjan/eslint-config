module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  plugins: ["eslint-plugin-import"],
  rules: {
    // modules
    "import/no-commonjs": ["error"],
    "import/no-amd": ["error"],
    "import/no-namespace": ["error"],
    "no-duplicate-imports": ["warn"],
    "import/no-mutable-exports": ["warn"],
    "import/export": ["error"],
    "import/first": ["warn"],
    "import/newline-after-import": ["warn"],
    "import/no-named-default": ["warn"],
    "import/order": ["warn"],
    "import/no-absolute-path": ["error"],
    "import/no-webpack-loader-syntax": ["error"],
  }
};
