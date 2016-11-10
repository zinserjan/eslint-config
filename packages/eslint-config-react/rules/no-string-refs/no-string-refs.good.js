const React = require("react");

class Hello extends React.Component {
  componentDidMount() {
    const component = this.hello;
    // ...do something with component
  }

  render() {
    return <div ref={(c) => { this.hello = c; }}>Hello World!</div>;
  }
}
