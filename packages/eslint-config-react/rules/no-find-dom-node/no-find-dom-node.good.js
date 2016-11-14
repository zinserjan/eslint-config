/* eslint-disable react/prop-types, react/react-in-jsx-scope */

class MyComponent extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={node => this.node = node} />
  }
}
