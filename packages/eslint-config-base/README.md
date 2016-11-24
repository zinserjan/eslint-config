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

  - Use `const` and `let` for all declarations of variables; avoid using `var`.
    eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html)

    > Why? `var` is function-scoped and works therefore not as everyone expects that. `const` and `let` are block scoped. See [Hoisting](#hoisting) for more details.

  - Use `const` for all variables.
    eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign.html)

    > Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

    ```javascript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  - If you must reassign a variable, use `let` instead of `const`.
    eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html)


    ```javascript
    // bad
    var count = 1;
    if (true) {
      count += 1;
    }

    // good, use the let.
    let count = 1;
    if (true) {
      count += 1;
    }
    ```

  - Declare only a single variable per line.
    eslint: [`one-var`](http://eslint.org/docs/rules/one-var.html)

    > Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

    ```javascript
    // bad
    const items = [],
      goSportsTeam = true,
      dragonball = "z";

    // good
    const items = [];
    const goSportsTeam = true;
    const dragonball = "z";
    ```

  - Group all your `const`s and then group all your `let`s.

    > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

    ```javascript
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```
  - Assign variables where you need them, but place them in a reasonable place.

    > Why? `let` and `const` are block scoped and not function scoped.

    ```javascript
    // bad - unnecessary function call
    function checkName(hasName) {
      const name = getName();

      if (hasName === "test") {
        return false;
      }

      if (name === "test") {
        this.setName("");
        return false;
      }

      return name;
    }

    // good
    function checkName(hasName) {
      if (hasName === "test") {
        return false;
      }

      const name = getName();

      if (name === "test") {
        this.setName("");
        return false;
      }

      return name;
    }
    ```

  - Avoid undeclared variables.
    eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

    > Why? This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals.

    ```javascript
    // bad
    b = 10; // would creat a global variable

    // good
    const b = 10;
    ```

  - Code should not contain unused variables.
    eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

    > Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

    ```javascript
    // bad
    let x;

    // Write-only variables are not considered as used.
    let y = 10;
    y = 5;

    // A read for a modification of itself is not considered as used.
    let z = 0;
    z = z + 1;

    // By default, unused arguments cause warnings.
    (function(foo) {
        return 5;
    })();

    // Unused recursive functions also cause warnings.
    function fact(n) {
        if (n < 2) return 1;
        return n * fact(n - 1);
    }

    // good
    const x = 10;
    alert(x);

    // foo is considered used here
    myFunc(function foo() {
        // ...
    }.bind(this));

    (function(foo) {
        return foo;
    })();

    let myFunc;
    myFunc = setTimeout(function() {
        // myFunc is considered used
        myFunc();
    }, 50);
    ```

  - Never assign native objects or read-only variables.
    eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

    > Why? JavaScript environments contain a number of built-in global variables, such as `window` in browsers and `process` in Node.js. In almost all cases, you don’t want to assign a value to these global variables as doing so could result in losing access to important functionality.

    ```javascript
    // bad
    window = {};

    // ok, but avoid this too
    window.test = {};
    ```

  -  Don't chain variable assignments.
     eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

    > Why? Chaining variable assignments creates implicit global variables.

    ```javascript
    // bad
    (function example() {
      // JavaScript interprets this as
      // let a = ( b = ( c = 1 ) );
      // The let keyword only applies to variable a; variables b and c become
      // global variables.
      let a = b = c = 1;
    }());

    console.log(a); // undefined
    console.log(b); // 1
    console.log(c); // 1

    // good
    (function example() {
      let a = 1;
      let b = a;
      let c = a;
    }());

    console.log(a); // undefined
    console.log(b); // undefined
    console.log(c); // undefined

    // the same applies for `const`
    ```

  - Avoid using unary increments and decrements (++, --).
    eslint [`no-plusplus`](http://eslint.org/docs/rules/no-plusplus)

    > Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

    ```javascript
      // bad
      let array = [1, 2, 3];
      let num = 1;
      num++;
      --num;

      let sum = 0;
      let truthyCount = 0;
      for(let i = 0; i < array.length; i++){
        let value = array[i];
        sum += value;
        if (value) {
          truthyCount++;
        }
      }

      // good
      let array = [1, 2, 3];
      let num = 1;
      num += 1;
      num -= 1;

      const sum = array.reduce((a, b) => a + b, 0);
      const truthyCount = array.filter(Boolean).length;
    ```

**[⬆ back to top](#table-of-contents)**

## Strings

  - Use double quotes `""` for strings.
    eslint: [`quotes`](http://eslint.org/docs/rules/quotes.html)

    > Why? We prefer double quotes over single quotes cause they are easier distinguishable from template strings and makes the code more consistent as we are already using double quotes for attributes in JSX.

    ```javascript
    // bad
    const name = 'Capt. Janeway';

    // bad - template literals should contain interpolation or newlines
    const name = `Capt. Janeway`;

    // good
    const name = "Capt. Janeway";
    ```

  - When programmatically building up strings, use template strings instead of concatenation.
    eslint: [`prefer-template`](http://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```javascript
    // bad
    function sayHi(name) {
      return "How are you, " + name + "?";
    }

    // bad
    function sayHi(name) {
      return ["How are you, ", name, "?"].join("");
    }

    // bad
    function sayHi(name) {
      return `How are you, ${ name }?`;
    }

    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    ```

  - Never use `eval()` on a string, it opens too many vulnerabilities.
    eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

    ```javascript
    const obj = { x: "foo" };
    const key = "x";

    // bad
    const value = eval(`obj.${ key }`);

    // good
    const value = obj[key];
    ```

  - Do not unnecessarily escape characters in strings.
    eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

    > Why? Backslashes harm readability, thus they should only be present when necessary.

    ```javascript
    // bad
    const foo = "\'this\' \i\s \"quoted\"";

    // good
    const foo = "'this' is \"quoted\"";
    ```


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
