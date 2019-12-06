import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  iconWrapper: {
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
    },
  },
}));

const BaseIcon = props => {
  const { children, className, color, ...other } = props;
  const classes = useStyles();
  return (
    <span className={clsx(classes.iconWrapper, className)} {...other}>
      {children}
    </span>
  );
};

export default BaseIcon;
