import React, { useCallback } from 'react';

export const Input = ({ onChange, value, ...restProps }) => {
  const onChangeText = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);

  return <input onChange={onChangeText} value={value} {...restProps} />;
};
