/* eslint-disable react/prefer-stateless-function, react/prop-types  */
const React = require("react");

function SayHello(props) {
  return <div>Hello {props.name}</div>;

}

class Hello extends React.Component {
  render() {
    return <SayHello name={this.props.name} />
  }
}
