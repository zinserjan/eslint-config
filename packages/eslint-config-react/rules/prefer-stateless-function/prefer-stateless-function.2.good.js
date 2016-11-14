/* eslint-disable react/react-in-jsx-scope, react/prop-types */

class Hello extends React.PureComponent {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
