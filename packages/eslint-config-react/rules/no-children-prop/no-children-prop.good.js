const React = require("react");

const x = <div>Children</div>
const y = <MyComponent>Children</MyComponent>;
const z = <MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>;

React.createElement("div", {}, 'Children');
React.createElement("div", 'Child 1', 'Child 2');
