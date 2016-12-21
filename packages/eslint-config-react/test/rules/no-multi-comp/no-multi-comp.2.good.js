/* eslint-disable react/react-in-jsx-scope, react/prefer-stateless-function, react/prop-types  */

function SayHello(props) {
  return <div>Hello {props.name}</div>;

}

class Hello extends React.Component {
  render() {
    return <SayHello name={this.props.name} />
  }
}
