# eslint-config

[![Build Status][travis-image]][travis-url]

> This is an opinionated set of ESLint configurations for our needs. It was inspired by [airbnb/javascript][airbnb-config], but we wanted to make it further opinionated.

## Getting started

This repository is organized as a monorepo to split the ESLint configuration into individual [packages](./packages/) for each specific use-case.
For further installation instructions have a look at each specific package in [packages](./packages/).

For adding & testing new rules just checkout this repo and run the following:

```bash
# install all dependencies in this repo
$ npm install

# run tests in all packages
$ npm test
```

## License
MIT


[travis-url]: https://travis-ci.org/zinserjan/eslint-config
[travis-image]: https://img.shields.io/travis/zinserjan/eslint-config/master.svg
[airbnb-config]: https://github.com/airbnb/javascript
