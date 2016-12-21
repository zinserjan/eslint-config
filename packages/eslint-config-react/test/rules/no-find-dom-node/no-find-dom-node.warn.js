/* eslint-disable react/prop-types, react/react-in-jsx-scope */

class MyComponent extends React.Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />
  }
}
