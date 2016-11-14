/* eslint-disable react/react-in-jsx-scope */

const b = (<input
  className="name"
  name="string"
  value="string">  {/* oops! */}
  x="y">
    Body Text
</input>);
