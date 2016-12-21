/* eslint-disable react/react-in-jsx-scope*/

const a = <div role="button" />; // Good: "button" is a valid ARIA role
const b = <div role={role} />; // Good: role is a variable & cannot be determined until runtime.
const c = <div />; // Good: No ARIA role
