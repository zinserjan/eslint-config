/* eslint-disable react/prop-types, react/react-in-jsx-scope, react/jsx-no-undef */

class Hello extends React.Component {
  componentDidUpdate() {
    this.setState({
      name: this.props.name.toUpperCase()
    });

    this.onUpdate(function callback(newName) {
      this.setState({
        name: newName
      });
    });
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
