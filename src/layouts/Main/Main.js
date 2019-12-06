import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  content: {
    padding: '30px 50px',
    height: 'calc(100vh - 64px)',
    overflow: 'auto',
  },
}));

const Main = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};
Main.defaultProps = {
  children: <></>,
};

export default Main;
