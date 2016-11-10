/* eslint-disable react/prop-types */
const React = require("react");

class Hello extends React.PureComponent {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
