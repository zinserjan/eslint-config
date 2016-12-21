/* eslint-disable react/react-in-jsx-scope*/

const a = <div role="datepicker" />; // Bad: "datepicker" is not an ARIA role
const b = <div role="range" />; // Bad: "range" is an _abstract_ ARIA role
const c = <div role="" />; // Bad: An empty ARIA role is not allowed
