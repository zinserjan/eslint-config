/* eslint-disable react/prefer-stateless-function */

const React = require("react");

class Component extends React.Component {
  render() {
    return <div />;
  }
}
Component.propTypes = {
  a: React.PropTypes.any,
  r: React.PropTypes.array,
  o: React.PropTypes.object
};
