/* eslint-disable react/react-in-jsx-scope, react/prefer-stateless-function, react/prop-types */

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
