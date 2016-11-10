module.exports = {
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/forbid-component-props": ["warn", { "forbid": ["className", "style"] }],
    "react/forbid-prop-types": ["warn", { "forbid": ["any", "array", "object"] }],
    "react/no-children-prop": ["error"],
    "react/no-danger-with-children": ["error"],
    "react/no-find-dom-node": ["warn"],
    "react/no-did-update-set-state": ["warn", "disallow-in-func"]
  }
};
