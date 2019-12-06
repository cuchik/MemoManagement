import React from 'react';

import BaseIcon from './Base';

const Icon = props => {
  const { children, iconProps } = props;
  return <BaseIcon {...iconProps}>{children}</BaseIcon>;
};

export default Icon;
