const React = require("react");

const x = <div children='Children' />;

const y = <MyComponent children={<AnotherComponent />} />;
const z = <MyComponent children={['Child 1', 'Child 2']} />;

React.createElement("div", { children: 'Children' });
