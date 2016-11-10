const React = require("react");

const a = <div dangerouslySetInnerHTML={{ __html: "HTML" }}/>;
const b = <Hello dangerouslySetInnerHTML={{ __html: "HTML" }}/>;
const c = <div>
  Children
</div>;
const d = <Hello>
  Children
</Hello>;


React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } });
React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } });
React.createElement("div", {}, "Children");
React.createElement("Hello", {}, "Children");
