/* eslint-disable react/react-in-jsx-scope*/

const a = (
  <Choose>
    <When condition={"".length > 0}>test</When>
    <Otherwise>test</Otherwise>
    <Otherwise>test</Otherwise>
  </Choose>
);


const b = (
  <Choose>
    <When condition={"".length > 0}>test</When>
    <Otherwise>test</Otherwise>
    <div />
  </Choose>
);


const c = (
  <Choose>
    <When condition={"".length > 0}>test</When>
    <Otherwise>test</Otherwise>
    <Otherwise>test</Otherwise>
    <div />
  </Choose>
);
