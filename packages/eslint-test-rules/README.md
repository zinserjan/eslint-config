# eslint-test-rules

> command line for testing your code style against eslint rules


## Usage in package.json



```json
{
  "scripts": {
    "test": "eslint-test-rules --good \"./test/**/*.good.js\" --warn \"./test/**/*.warn.js\" --error \"./test/**/*.error.js\""
  },
  "devDependencies": {
    "eslint-test-rules": "*"
  }
}
```
