/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

const x = <div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>;
const y = <Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>;


React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
