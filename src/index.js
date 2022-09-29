import React from 'react';

export function Button(props) {
  const {
    children,
    ...elementProps
  } = props;
  return <button type="button" {...elementProps}>{children}</button>
}
