const React = require("react");

class MyComponent extends React.Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={node => this.node = node}/>
  }
}
