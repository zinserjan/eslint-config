/* eslint-disable react/react-in-jsx-scope, no-multi-spaces, react/jsx-closing-bracket-location */

const b = (<input
  className="name"
  name="string"
  value="string">  {/* oops! */}
  x="y">
    Body Text
</input>);
