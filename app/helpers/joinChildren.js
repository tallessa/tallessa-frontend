import React from 'react';
import intersperse from 'intersperse';


export default function joinChildren(children, separator) {
  return intersperse(React.Children.toArray(children), separator);
}
