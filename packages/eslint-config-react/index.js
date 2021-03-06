module.exports = {
  plugins: [
    "react",
    "jsx-a11y",
    "jsx-control-statements"
  ],
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    }
  },
  "globals": {
    // Note: false disallows overwriting these settings
    If: false,
    For: false,
    When: false,
    Choose: false,
    Otherwise: false
  },
  rules: {
    // eslint jsx rules
    "jsx-quotes": ["error"],
    "no-multi-spaces": ["warn"],
    // eslint-plugin-react basic rules
    "react/forbid-component-props": ["off", { "forbid": ["className", "style"] }],
    "react/require-default-props": ["off"],
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array", "object"] }],
    "react/no-children-prop": ["error"],
    "react/no-danger-with-children": ["error"],
    "react/no-is-mounted": ["error"],
    "react/no-find-dom-node": ["warn"],
    "react/no-did-update-set-state": ["error", "disallow-in-func"],
    "react/no-direct-mutation-state": ["error"],
    "react/no-render-return-value": ["error"],
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-string-refs": ["error"],
    "react/no-unescaped-entities": ["warn"],
    "react/no-unknown-property": ["error"],
    "react/no-unused-prop-types": ["off"], // disabled cause it does not detect all calls to props
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": ["warn", { ignorePureComponents: true }],
    "react/prop-types": ["warn"],
    "react/react-in-jsx-scope": ["error"],
    "react/require-render-return": ["error"],
    "react/sort-comp": ["off", { // does not support instance properties yet, rule makes no sense without them
      order: [
        "type-annotations",
        "static-methods",
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],
    "react/style-prop-object": ["error"],
    "react/self-closing-comp": ["error", { component: true, html: true }],
    // eslint-plugin-react jsx specific rules
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-closing-bracket-location": ["warn", "line-aligned"],
    "react/jsx-curly-spacing": ["warn", "never", { allowMultiline: false }],
    "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-handler-names": ["warn", {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on"
    }],
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-no-bind": ["error", {
      ignoreRefs: true,
      allowArrowFunctions: false,
      allowBind: false
    }],
    "react/jsx-no-comment-textnodes": ["error"],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    "react/jsx-no-undef": ["error"],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-space-before-closing": ["warn"],
    "react/jsx-tag-spacing": ["warn", {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never"
    }],
    "react/jsx-uses-react": ["warn"], // This rule has no effect if the no-unused-vars rule is not enabled.
    "react/jsx-uses-vars": ["warn"], // This rule has no effect if the no-unused-vars rule is not enabled.
    "react/jsx-wrap-multilines": ["error", {
      declaration: true,
      assignment: true,
      return: true
    }],
    // eslint react a11y
    "jsx-a11y/img-has-alt": ["error"],
    "jsx-a11y/img-redundant-alt": ["error"],
    "jsx-a11y/aria-role": ["error"],
    "jsx-a11y/aria-props": ["error"],
    "jsx-a11y/aria-proptypes": ["error"],
    "jsx-a11y/role-has-required-aria-props": ["error"],
    "jsx-a11y/role-supports-aria-props": ["error"],
    "jsx-a11y/aria-unsupported-elements": ["error"],
    "jsx-a11y/href-no-hash": ["error"],
    "jsx-a11y/label-has-for": ["warn"],
    "jsx-a11y/tabindex-no-positive": ["error"],
    "jsx-a11y/no-access-key": ["error"],
    // eslint jsx control statements
    "jsx-control-statements/jsx-choose-not-empty": ["error"],
    "jsx-control-statements/jsx-when-require-condition": ["error"],
    "jsx-control-statements/jsx-otherwise-once-last": ["error"],
    "jsx-control-statements/jsx-if-require-condition": ["error"],
  }
};
