/* eslint-disable react/prefer-stateless-function */
const React = require("react");

class Hello extends React.Component {

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hello.propTypes = {
  name: React.PropTypes.string.isRequired,
};
