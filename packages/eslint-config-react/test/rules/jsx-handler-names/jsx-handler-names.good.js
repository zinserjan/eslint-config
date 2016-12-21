/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

const a = <MyComponent onChange={this.handleChange} />;

const b = <MyComponent onChange={this.props.onFoo} />;
