import React from 'react';

export const Button = ({
  children, onClick, ...restProps
}) => <button onClick={onClick} {...restProps}>{children}</button>;
