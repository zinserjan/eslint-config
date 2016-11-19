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
