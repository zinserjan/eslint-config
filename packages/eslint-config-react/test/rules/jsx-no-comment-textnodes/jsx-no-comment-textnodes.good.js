/* eslint-disable react/react-in-jsx-scope */

function Comment1() {
  return (
    <div>{/* empty div */}</div>
  );
}

function Comment2() {
  return (
    <div /* empty div *//>
  );
}

function Comment3() {
  return (
    <div className={'foo'/* temp class */} />
  );
}

function Comment4() {
  return (
    <div>{'/* This will be output as a text node */'}</div>
  );
}
