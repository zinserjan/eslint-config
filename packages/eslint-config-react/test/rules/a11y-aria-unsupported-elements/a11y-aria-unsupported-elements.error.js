/* eslint-disable react/react-in-jsx-scope*/

// Bad: the meta, html, script, style element should not be given any ARIA attributes
const a = <meta charSet="UTF-8" aria-hidden="false" />;
const b = <html aria-hidden="false" />;
const c = <script aria-hidden="false" />;
const c = <style aria-hidden="false" />;
