import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import { URL } from 'helpers';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
  },
  toolbar: {
    marginRight: '20px',
  },
  logo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to={URL.HOME()}>
          <div className={classes.logo}>Memo Management</div>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};
Topbar.defaultProps = {
  className: '',
  onSidebarOpen: () => {},
};

export default Topbar;
