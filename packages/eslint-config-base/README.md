# eslint-config-base

> A set of opinionated ESLint rules tailored for JS development

## Installation

```bash
npm install --save-dev @zinserjan/eslint-config-base
```

**.eslintrc**

```json
{
  "extends": [
     "@zinserjan/eslint-config-base"
  ]
}
```

## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Types](#types)
  1. [Variables](#variables)
  1. [Strings](#strings)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Blocks](#blocks)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Type Casting & Coercion](#type-casting--coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Hoisting](#hoisting)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#arrays)
  1. [Properties](#properties)
  1. [Classes & Constructors](#classes--constructors)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)



## Basic Rules

  - **2 spaces** – for indentation
  - **Double quotes for strings** – except to avoid escaping
  - **No unused variables**
  - **Semicolons**
  - **Space after keywords** `if (condition) { ... }`
  - Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.

**[⬆ back to top](#table-of-contents)**

## Types
  - **Primitives**: When you access a primitive type you work directly on its value.

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

  - **Complex**: When you access a complex type you work on a reference to its value.

    + `object`
    + `array`
    + `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

## Variables

  - Use `const` and `let` for all declarations of variables; avoid using `var`. eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html)

    > Why? `var` is function-scoped and works therefore not as everyone expects that. `const` and `let` are block scoped. See [Hoisting](#hoisting) for more details.

  - Use `const` for all variables.

    > Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

  - If you must reassign a variable, use `let` instead of `const`.

**[⬆ back to top](#table-of-contents)**

## Modules

  - Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.
    eslint: [`import/no-commonjs`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md), [`import/no-amd`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md),

    > Why? Modules are the future, let's start using the future now.

    ```javascript
    // bad
    const _ = require("lodash");
    module.exports = _.map;

    // ok
    import _ from "lodash";
    export default _.map;

    // best
    import { map } from "lodash";
    export default map;
    ```

  - Do not use wildcard/namespace imports.
    eslint: [`import/no-namespace`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md)

    > Why? This makes sure you have a single default export.

    ```javascript
    // bad
    import * as _ from "lodash";

    // good
    import _ from "lodash";
    ```

  - And do not export directly from an import.

    > Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

    ```javascript
    // bad
    // filename map.js
    export { map as default } from "lodash";

    // good
    // filename map.js
    import { map } from "lodash";
    export default map;
    ```

  - Only import from a path in one place.
    eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

    > Why? Having multiple lines that import from the same path can make code harder to maintain.

    ```javascript
    // bad
    import foo from "foo";
    // … some other imports … //
    import { named1, named2 } from "foo";

    // good
    import foo, { named1, named2 } from "foo";

    // good
    import foo, {
      named1,
      named2,
    } from "foo";
    ```

  - Do not export mutable bindings.
    eslint: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

    > Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

    ```javascript
    // bad
    let foo = 3;
    export { foo }

    // good
    const foo = 3;
    export { foo }
    ```

  - Catch funny business with exports, like repeated exports of names or defaults.
    eslint: [`import/export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

    > Why? Could be the result of copy/paste, code duplication with intent to rename, etc.

    ```javascript
    // bad
    export default class MyClass { /*...*/ } // Multiple default exports.

    function makeClass() { return new MyClass(...arguments) }

    export default makeClass // Multiple default exports.

    // bad

    export const foo = function () { /*...*/ } // Multiple exports of name 'foo'.

    function bar() { /*...*/ }
    export { bar as foo } // Multiple exports of name 'foo'.

    // good

    export default class MyClass { /*...*/ } // Multiple default exports.
    export function makeClass() { return new MyClass(...arguments) }
    ```

  - Put all `import`s above non-import statements.
    eslint: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

    > Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

    ```javascript
    // bad
    import foo from "foo";
    foo.init();

    import bar from "bar";

    // good
    import foo from "foo";
    import bar from "bar";

    foo.init();
    ```

  - Put a new line after import statements.
    eslint: [`import/newline-after-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

    > Why? Application code should be visually splitted from dependencies.

    ```javascript
    // bad
    import foo from "foo";
    foo.init();

    // good
    import foo from "foo";

    foo.init();
    ```

  - Disallow importing `default` as a named import.
    eslint: [`import/no-named-default`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)

    > Why? Just to make the code more readable.

    ```javascript
    // foo.js
    export default "foo";
    export const bar = "baz";

    // bar.js

    // bad
    import { default as foo } from "./foo.js";
    import { default as foo, bar } from "./foo.js";

    // good
    import foo from "./foo.js";
    import foo, { bar } from "./foo.js";
    ```

  - Enforce a convention in module import order.
    eslint: [`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md)

    The order is as shown in the following example:

    ```js
    // 1. node "builtins"
    import fs from "fs";
    import path from "path";
    // 2. "external" modules
    import _ from "lodash";
    import chalk from "chalk";
    // 3. "internal" modules
    // (if you have configured your path or webpack to handle your internal paths differently)
    import foo from "src/foo";
    // 4. modules from a "parent" directory
    import foo from "../foo";
    import qux from "../../foo/qux";
    // 5. "sibling" modules from the same or a sibling's directory
    import bar from "./bar";
    import baz from "./bar/baz";
    // 6. "index" of the current directory
    import main from "./";
    ```

  - Forbid import of modules using absolute module paths.
    eslint: [`import/no-absolute-path`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)

    > Why? Node.js allows the import of modules using an absolute path such as /home/xyz/file.js. That is a bad practice as it ties the code using it to your computer, and therefore makes it unusable in packages distributed on npm for instance.

    ```javascript
    // bad
    import foo from "/foo";

    // good
    import foo from "foo";
    ```

  - Disallow Webpack loader syntax in module import statements.
    eslint: [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)

    > Why? Using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in `webpack.config.js`.

    ```javascript
    // bad
    import fooSass from "css!sass!foo.scss";
    import barCss from "style!css!bar.css";

    // good
    import fooSass from "foo.scss";
    import barCss from "bar.css";
    ```
