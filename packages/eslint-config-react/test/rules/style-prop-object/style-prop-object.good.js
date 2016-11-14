/* eslint-disable react/react-in-jsx-scope, react/forbid-component-props, react/jsx-no-undef  */

const a = <div style={{ color: "red" }} />;

const b = <Hello style={{ color: "red" }} />;

const styles = { color: "red" };
const c = <div style={styles} />;
