/* eslint-disable react/prop-types */

const React = require("react");

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
