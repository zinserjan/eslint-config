/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

const x = <div children='Children' />;

const y = <MyComponent children={<AnotherComponent />} />;
const z = <MyComponent children={['Child 1', 'Child 2']} />;

React.createElement("div", { children: 'Children' });
