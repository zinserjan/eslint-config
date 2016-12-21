/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

class Hello extends React.Component {
  componentDidMount() {
    const component = this.hello;
    // ...do something with component
  }

  render() {
    return <div ref={(c) => { this.hello = c; }}>Hello World!</div>;
  }
}
