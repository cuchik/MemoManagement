import React from 'react';

import TextInput from './Text';

const Input = props => {
  const { type, inputProps } = props;
  if (type === 'text') {
    return <TextInput {...inputProps} />;
  }
  return <></>;
};

export default Input;
