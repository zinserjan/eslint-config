/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

ReactDOM.render(<App />, document.body, doSomethingWithInst);
