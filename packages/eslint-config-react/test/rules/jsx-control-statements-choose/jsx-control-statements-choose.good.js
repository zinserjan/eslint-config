/* eslint-disable react/react-in-jsx-scope*/

const a = (
  <Choose>
    <When condition={"".length > 0}>
      test
    </When>
  </Choose>
);

const b = (
  <Choose>
    <When condition={"".length > 0}>
      test
    </When>
    <Otherwise>
      test
    </Otherwise>
  </Choose>
);

const c = (
  <Choose>
    <When condition={"".length > 0}>
      test
    </When>
    <When condition={"".length > 0}>
      test
    </When>
    <Otherwise>
      test
    </Otherwise>
  </Choose>
);
