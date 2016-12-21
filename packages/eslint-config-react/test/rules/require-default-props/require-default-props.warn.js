/* eslint-disable react/react-in-jsx-scope */

const HelloWorld = ({ name = 'John Doe' }) => (
  <h1>Hello, {name.first} {name.last}!</h1>
);

HelloWorld.propTypes = {
  name: React.PropTypes.shape({
    first: React.PropTypes.string,
    last: React.PropTypes.string,
  })
};
