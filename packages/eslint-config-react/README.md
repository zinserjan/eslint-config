# eslint-config-react

> A set of opinionated ESLint rules tailored for React Components


## Rules
-----

### Forbid className & style
This rule prevents passing of props className & style that [that add lots of complexity](https://medium.com/brigade-engineering/don-t-pass-css-classes-between-components-e9f7ab192785) to Components.
This rule only applies to Components (e.g. `<Foo />`) and not DOM nodes (e.g. `<div />`).

**warning**
```
const x = <Hello className="hallo" />;
const y = <Hello style={{display: "none"}} />;
```

**good**
```
const x = <div className="hallo" />;
const y = <div style={{display: "none"}} />;
```

-----

### Forbid certain propTypes

This rule prevents vague prop types with more specific alternatives available (any, array, object)

**warning**
```
class Component extends React.Component {
  static propTypes = {
    a: React.PropTypes.any,
    r: React.PropTypes.array,
    o: React.PropTypes.object
  }
  render() {
    return <div />;
  }
}
```

**good**
```
class Component extends React.Component {
  static propTypes = {
    a: React.PropTypes.string,
    r: React.PropTypes.arrayOf(React.PropTypes.string),
    o: React.PropTypes.shape({ test: React.PropTypes.string })
  }
  render() {
    return <div />;
  }
}
```

-----

### Forbid passing children as prop
Children should always be actual children, not passed in as a prop.

**error**
```
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })
```

**good**
```
<div>Children</div>

<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
```

-----
