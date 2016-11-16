/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef, react/prefer-es6-class */

const Hello = React.createClass({
  handleClick: function() {
    setTimeout(function() {
      if (this.isMounted()) {
        return;
      }
    });
  },
  render: function() {
    return <div onClick={this.handleClick}>Hello</div>;
  }
});
