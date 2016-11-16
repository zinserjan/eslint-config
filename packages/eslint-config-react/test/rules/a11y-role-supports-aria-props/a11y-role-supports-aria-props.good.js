/* eslint-disable react/react-in-jsx-scope*/

// Good: the radiogroup role does support the aria-required property
<ul role="radiogroup" aria-required aria-labelledby="foo">
  <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
  <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
  <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
