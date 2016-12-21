/* eslint-disable react/react-in-jsx-scope*/

// Bad: the radio role does not support the aria-required property
<ul role="radiogroup" aria-labelledby="foo">
  <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
  <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
  <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
