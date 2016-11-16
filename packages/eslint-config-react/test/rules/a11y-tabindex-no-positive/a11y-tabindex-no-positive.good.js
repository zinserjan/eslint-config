/* eslint-disable react/react-in-jsx-scope*/

// Avoid positive tabIndex property values to synchronize the flow of the page with keyboard tab order.
const a = (
  <div>
    <span tabIndex="0">foo</span>
    <span tabIndex="-1">bar</span>
    <span tabIndex={0}>baz</span>
  </div>
);
