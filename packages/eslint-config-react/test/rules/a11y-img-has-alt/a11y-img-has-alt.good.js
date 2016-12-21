/* eslint-disable react/react-in-jsx-scope*/

const a = <img src="foo" alt="Foo eating a sandwich." />;
const b = <img src="foo" alt={"Foo eating a sandwich."} />;
const c = <img src="foo" alt={altText} />;
const d = <img src="foo" alt={`${person} smiling`} />;
const e = <img src="foo" alt="" />;
