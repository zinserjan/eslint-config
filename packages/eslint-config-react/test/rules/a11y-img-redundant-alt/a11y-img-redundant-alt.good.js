/* eslint-disable react/react-in-jsx-scope*/

const a = <img src="foo" alt={alt} />; // Valid cause we have no control with it's content
const a = <img src="foo" alt="Foo eating a sandwich." />;
const b = <img src="bar" aria-hidden alt="Picture of me taking a photo of an image" />; // Will pass because it is hidden.
const c = <img src="baz" alt={`Baz taking a ${photo}`} />; // This is valid since photo is a variable name.
