import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Heading from 'components/Heading';

const useStyles = makeStyles(() => ({
  commonWrapper: {
    margin: '30px 0',
    position: 'relative',
  },
  heading: {
    display: 'flex',
    marginBottom: '0.5rem',
  },
}));

const BaseCard = props => {
  const { className, title, secondTitle, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={classes.commonWrapper}>
      <CardContent>
        <Heading as="h4">{title}</Heading>
        <div className={classes.details}>{children}</div>
      </CardContent>
    </Card>
  );
};

export default BaseCard;
