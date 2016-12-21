/* eslint-disable react/react-in-jsx-scope, react/jsx-no-undef */

const a = <Hello personal />;

const b = (
  <Hello
    personal
    foo="bar"
  />
);

const c = <Hello foo={{}} />;

const d = (
  <Hello personal>
    Hallo
  </Hello>
);
