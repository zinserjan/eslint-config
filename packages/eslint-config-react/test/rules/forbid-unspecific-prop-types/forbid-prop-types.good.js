/* eslint-disable react/prefer-stateless-function, react/require-default-props */

const React = require("react");

class Component extends React.Component {
  render() {
    return <div />;
  }
}
Component.propTypes = {
  a: React.PropTypes.string,
  r: React.PropTypes.arrayOf(React.PropTypes.string),
  o: React.PropTypes.shape({ test: React.PropTypes.string })
};
