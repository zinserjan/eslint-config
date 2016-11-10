/* eslint-disable react/prefer-stateless-function, react/prop-types */

const React = require("react");

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
