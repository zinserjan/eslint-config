/* eslint-disable react/react-in-jsx-scope, react/prefer-stateless-function */

class Hello extends React.Component {

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hello.propTypes = {
  name: React.PropTypes.string.isRequired,
};
