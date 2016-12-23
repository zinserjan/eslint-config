/* eslint-disable no-unused-vars */

const obj = { x: "foo" };
const key = "x";

// bad
const value = eval(`obj.${key}`);
