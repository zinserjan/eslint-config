# eslint-config-react

> A set of opinionated ESLint rules tailored for React Components


## Rules
-----

### Prevent usage of className & style
This rule prevents passing of props className & style that [that add lots of complexity](https://medium.com/brigade-engineering/don-t-pass-css-classes-between-components-e9f7ab192785) to Components.
This rule only applies to Components (e.g. `<Foo />`) and not DOM nodes (e.g. `<div />`).

**warn**
```js
const x = <Hello className="hallo" />;
const y = <Hello style={{display: "none"}} />;
```

**good**
```js
const x = <div className="hallo" />;
const y = <div style={{display: "none"}} />;
```

-----

### Prevent usage of certain propTypes

This rule prevents vague prop types with more specific alternatives available (any, array, object)

**warn**
```js
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
```js
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
```js
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })
```

**good**
```js
<div>Children</div>

<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
```

### Prevent problem with children and props.dangerouslySetInnerHTML
This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML prop at the same time. React will throw a warning if this rule is ignored.

**error**
```js
const React = require("react");

const x = <div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>;
const y = <Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>;


React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
```

**good**
```js
const React = require("react");

const a = <div dangerouslySetInnerHTML={{ __html: "HTML" }}/>;
const b = <Hello dangerouslySetInnerHTML={{ __html: "HTML" }}/>;
const c = <div>
  Children
</div>;
const d = <Hello>
  Children
</Hello>;


React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } });
React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } });
React.createElement("div", {}, "Children");
React.createElement("Hello", {}, "Children");
```

-----

### Prevent usage of findDOMNode
Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future.

It is recommended to use callback refs instead.

**warn**
```js
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />
  }
}
```

**good**
```js
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    return <div ref={node => this.node = node} />
  }
}
```

-----

### Prevent usage of setState in componentDidUpdate

Updating the state after a component update will trigger a second render() call and can lead to property/layout thrashing.

**warn**
```js
class Hello extends React.Component {
  componentDidUpdate() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
```

-----

### Forbid direct mutation of this.state

NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.

**error**
```js
class Hello extends React.Component {
  componentDidMount() {
    this.state.name = this.props.name.toUpperCase();
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

```

**good**
```js
class Hello extends React.Component {
  componentDidMount() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

```

-----

### Forbid usage of the return value of React.render

> `ReactDOM.render()` currently returns a reference to the root `ReactComponent` instance. However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root `ReactComponent` instance, the preferred solution is to attach a [callback ref](http://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute) to the root element.

Source: [React Top-Level API documentation](http://facebook.github.io/react/docs/top-level-api.html#reactdom.render)

**error**
```js
const inst = ReactDOM.render(<App />, document.body);
doSomethingWithInst(inst);
```

**good**
```js
ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

ReactDOM.render(<App />, document.body, doSomethingWithInst);
```

-----

### Forbid multiple ES6 component definition per file

Declaring only one component per file improves readability and reusability of components. It's allowed to have multiple stateless components, or one statefull component and some stateless components in the same file.

**error**
```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class HelloJohn extends React.Component {
  render() {
    return <Hello name="John" />;
  }
}
```

**good**
```js
import Hello from "./Hello";

class HelloJohn extends React.Component {
  render() {
    return <Hello name="John" />;
  }
}
```

-----

### Prevent using string references

Currently, two ways are supported by React to refer to components. The first one, providing a string identifier is considered legacy in the official documentation.
Referring to components by setting a property on the this object in the reference callback is preferred.

**error**
```js
class Hello extends React.Component {
  componentDidMount() {
    const component = this.refs.hello;
    // ...do something with component
  }

  render() {
    return <div ref="hello">Hello World!</div>;
  }
}

```

**good**
```js
class Hello extends React.Component {
  componentDidMount() {
    const component = this.hello;
    // ...do something with component
  }

  render() {
    return <div ref={(c) => { this.hello = c; }}>Hello World!</div>;
  }
}
```

-----

### Prevent invalid characters from appearing in markup

This prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements

The preferred way to include one of these characters is to use the HTML escape code.

- `>` can be replaced with `&gt;`
- `"` can be replaced with `&quot;`, `&ldquo;` or `&rdquo;`
- `'` can be replaced with `&apos;`, `&lsquo;` or `&rsquo;`
- `}` can be replaced with `&#125;`

**warn**
```js
<div> > </div>

<input
  className="name"
  name="string"
  value="string">  {/* oops! */}
  x="y">
  Body Text
</input>

<div>{'Text'}}</div>
```

**good**
```js
<div> &gt; </div>
```

-----

### Prevent usage of unknown DOM property (fixable)

In JSX all DOM properties and attributes should be camelCased to be consistent with standard JavaScript style. This can be a possible source of error if you are used to writing plain HTML.

**warn**
```js
var hello = <div class="hello">Hello World</div>;
```

**good**
```js
var hello = <div className="hello">Hello World</div>;
```

-----

### Use ES6 class instead of ES5 for React Components

Stateful components should be build with the new ES6 syntax.

**error**
```js
var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

**good**
```js
class Hello extends React.Component {

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

-----

### Enforce stateless React Components to be written as a pure function

Stateless functional components are simpler than class based components and will benefit from future React performance optimizations specific to these components.
It's also valid to write Components that extends from `React.PureComponent` when they use this.props or this.context.

**warn**
```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class Foo extends React.PureComponent {
  render() {
    return <div>Bar</div>;
  }
}
```

**good**
```js
function Hello(props) {
  return <div>Hello {props.name}</div>;
};

class Hello extends React.PureComponent {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

-----

### Prevent missing props validation in a React component definition

PropTypes improve the reusability of your component by validating the received data.

It can warn other developers if they make a mistake while reusing the component with improper data type.

**warn**
```js
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

**good**
```js
class Hello extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
  };

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

-----

### Prevent missing React when using JSX

When using JSX, <a /> expands to React.createElement("a"). Therefore the React variable must be in scope.

**error**
```js
const hello = <div>Hello {this.props.name}</div>;
```

**good**
```js
import React from "react";

const hello = <div>Hello {this.props.name}</div>;
```

-----

### Enforce ES6 class for returning value in render

When writing the render method in a component it is easy to forget to return the JSX content.

**error**
```js
class Hello extends React.Component {
  render() {
    <div>Hello</div>;
  }
}
```

**good**
```js
class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

-----

### Prevent extra closing tags for components without children

Components without children can be self-closed to avoid unnecessary extra closing tag.

**warn**
```js
const helloJohn = <Hello name="John"></Hello>;
const contentContainer = <div className="content"></div>;
```

**good**
```js
const helloJohn = <Hello name="John" />;
const contentContainer = <div className="content">Hello</div>;
const profile = <Hello name="John"><img src="picture.png" /></Hello>;
```

-----

### Enforce component methods order

When creating React components it is more convenient to always follow the same organisation for methods order to helps you to easily find lifecyle methods, event handlers, etc.

The following organisation must be followed:

  1. optional type annotations (flowtype)
  2. static methods and properties
  3. lifecycle methods: `displayName`, `propTypes`, `contextTypes`, `childContextTypes`, `mixins`, `statics`,`defaultProps`, `constructor`, `getDefaultProps`, `getInitialState`, `state`, `getChildContext`, `componentWillMount`, `componentDidMount`, `componentWillReceiveProps`, `shouldComponentUpdate`, `componentWillUpdate`, `componentDidUpdate`, `componentWillUnmount` (in this order).
  4. custom methods
  5. `render` method

**warn**
```js
class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
  componentDidMount() {
    // do something
  }
}
```

**good**
```js
class Hello extends React.Component {
  componentDidMount() {
    // do something
  }
  render() {
    return <div>Hello</div>;
  }
}
```

-----


### Enforce style prop value being an object

Require that the value of the prop style be an object or a variable that is an object.

**warn**
```js
<div style="color: 'red'" />

<div style={true} />

<Hello style={true} />

const styles = true;
<div style={styles} />
```

**good**
```js
<div style={{ color: "red" }} />

<Hello style={{ color: "red" }} />

const styles = { color: "red" };
<div style={styles} />
```

-----

### Enforce boolean attributes notation in JSX (Fixable)

When using boolean attributes you should always omit the value when the value is `true`.

**warn**
```js
var Hello = <Hello personal={true} />;
```

**good**
```js
var Hello = <Hello personal />;
```

-----

### Closing bracket location in JSX

Enforce the closing bracket location for JSX multiline elements.

**warn**
```js
<Hello
  firstName="John"
  lastName="Smith"
  />;

<Say
  firstName="John"
  lastName="Smith"
>
  Hello
</Say>;
```

**good**
```js
<Hello
  firstName="John"
  lastName="Smith" />;

<Say
  firstName="John"
  lastName="Smith">
  Hello
</Say>;
```

-----

### No spaces inside of curly braces in JSX attributes

**warn**
```js
<Hello name={ firstname } />;
<Hello name={ firstname} />;
<Hello name={firstname } />;

<Hello name={ { firstname: 'John', lastname: 'Doe' } } />;
```

**good**
```js
<Hello name={firstname} />;
<Hello name={{ firstname: 'John', lastname: 'Doe' }} />;
```

-----

### Position of the first property (Fixable)

Ensures the correct position of the first property.

**warn**
```js
<Hello
    personal />

<Hello personal={true}
    foo="bar"
/>

<Hello foo={{
}} />
```

**good**
```js
<Hello personal />

<Hello
  personal={true}
  foo="bar"
/>

<Hello foo={{}} />
```

-----

### Spaces around equal signs in JSX attributes (Fixable)


**warn**
```js
<Hello name = {firstname} />;
<Hello name ={firstname} />;
<Hello name= {firstname} />;
```

**good**
```js
<Hello name={firstname} />;
<Hello name />;
<Hello {...props} />;
```

-----

### Event handler naming conventions in JSX

Props which are used for event handlers should be prefixed with "on".
Component methods which are passed to event handlers should be prefixed with "handle".


**warn**
```js
<MyComponent handleChange={this.handleChange} />
<MyComponent onChange={this.componentChanged} />
```

**good**
```js
<MyComponent onChange={this.handleChange} />
<MyComponent onChange={this.props.onFoo} />
```

-----

### JSX indentation (fixable)

JSX should be indented with 2 spaces.


**warn**
```js
<App>
<Hello />
</App>

<App
test="test"
test2="test" />

```

**good**
```js
<App>
  <Hello />
</App>

<App
  test="test"
  test2="test" />

```

-----

### No .bind() or Arrow Functions in JSX Props

A `bind` call or [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) in a JSX prop will create a brand new function on every single render. This is bad for performance, as it will result in the garbage collector being invoked way more than is necessary.

**warn**
```js
<div onClick={this._handleClick.bind(this)}></div>
<div onClick={() => console.log('Hello!'))}></div>

```

**good**
```js

<div onClick={this._handleClick}></div>
<div ref={(e) => this.element = e}></div>

```

-----

### Prevent comments from being inserted as text nodes

This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally injected as a text node in JSX statements.

**error**
```js
function Comment1() {
  return (
    <div>// empty div</div>
  );
}

function Comment2() {
  return (
    <div>
      /* empty div */
    </div>
  );
}
```

**good**
```js
function Comment1() {
  return (
    <div>{/* empty div */}</div>
  );
}

function Comment2() {
  return (
    <div /* empty div */></div>
  );
}

function Comment3() {
  return (
    <div className={'foo' /* temp class */} />
  );
}

function Comment4() {
  return (
    <div>{'/* This will be output as a text node */'}</div>
  );
}

```

-----

### Prevent duplicate properties in JSX

Creating JSX elements with duplicate props can cause unexpected behavior in your application.

**error**
```js
<Hello name="John" name="John" />;
```

**good**
```js
<Hello firstname="John" lastname="Doe" />;
```

-----

### Disallow undeclared variables in JSX

This rule helps locate potential ReferenceErrors resulting from misspellings or missing components.

**error**
```js
<Hello name="John" />;
```

**good**
```js
var Hello = require('./Hello');

<Hello name="John" />;
```

-----

