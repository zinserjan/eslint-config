/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

const x = <div className="hallo" />;
const y = <div style={{display: "none"}} />;

// it's okay but should be avoided
const a = <Hello className="hallo" />;
const b = <Hello style={{display: "none"}} />;
