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
    // eslint-plugin-react basic react rules
    "react/forbid-component-props": ["warn", { "forbid": ["className", "style"] }],
    "react/forbid-prop-types": ["warn", { "forbid": ["any", "array", "object"] }],
    "react/no-children-prop": ["error"],
    "react/no-danger-with-children": ["error"],
    "react/no-find-dom-node": ["warn"],
    "react/no-did-update-set-state": ["warn", "disallow-in-func"],
    "react/no-direct-mutation-state": ["error"],
    "react/no-render-return-value": ["error"],
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-string-refs": ["error"],
    "react/no-unescaped-entities": ["warn"],
    "react/no-unknown-property": ["warn"],
    "react/no-unused-prop-types": ["off"], // disabled cause it does not detect all calls to props
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": ["warn", { ignorePureComponents: true }],
    "react/prop-types": ["warn"],
    "react/react-in-jsx-scope": ["error"],
    "react/require-render-return": ["error"],
    "react/sort-comp": ["warn"],
    "react/style-prop-object": ["error"],
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    // eslint-plugin-react jsx specific rules
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-closing-bracket-location": ["warn", "after-props"],
    "react/jsx-curly-spacing": ["warn", "never", { "allowMultiline": false }],
    "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
  }
};
