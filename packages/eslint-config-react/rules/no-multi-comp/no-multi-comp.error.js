/* eslint-disable react/prefer-stateless-function, react/prop-types  */
const React = require("react");

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
