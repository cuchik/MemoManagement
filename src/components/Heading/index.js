import React from 'react';
import Typography from '@material-ui/core/Typography';

const Heading = props => {
  const { as = 'h3', children, ...other } = props;

  return (
    <Typography variant={as} {...other}>
      {children}
    </Typography>
  );
};

export default Heading;
