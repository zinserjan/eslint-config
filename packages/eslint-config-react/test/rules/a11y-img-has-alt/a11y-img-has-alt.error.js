/* eslint-disable react/react-in-jsx-scope*/

const a = <img src="foo" />;
const b = <img {...props} />;
const c = <img {...props} alt />; // Has no value
const d = <img {...props} alt={undefined} />; // Has no value
const e = <img {...props} alt={`${undefined}`} />; // Has no value
