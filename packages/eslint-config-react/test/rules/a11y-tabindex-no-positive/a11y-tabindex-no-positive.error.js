/* eslint-disable react/react-in-jsx-scope*/

// Avoid positive tabIndex property values to synchronize the flow of the page with keyboard tab order.
const a = (
  <div>
    <span tabIndex="5">foo</span>
    <span tabIndex="3">bar</span>
    <span tabIndex="1">baz</span>
    <span tabIndex="2">never really sure what goes after baz</span>
  </div>
);
