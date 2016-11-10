/* eslint-disable react/prefer-stateless-function, react/prop-types */
const React = require("react");

class Hello extends React.Component {

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
