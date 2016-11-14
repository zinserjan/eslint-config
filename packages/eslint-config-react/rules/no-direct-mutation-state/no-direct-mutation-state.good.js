/* eslint-disable react/prop-types, react/react-in-jsx-scope, react/jsx-no-undef */

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
