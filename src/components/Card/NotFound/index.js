import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Heading from 'components/Heading';

const useStyles = makeStyles(() => ({
  notfoundWrapper: {
    '& > div': {
      paddingBottom: '16px !important',
    },
  },
  heading: {
    textAlign: 'center',
    width: '100%',
  },
}));

const NotFoundCard = props => {
  const { title, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={classes.notfoundWrapper}>
      <CardContent>
        <Heading as="h5" className={classes.heading}>
          {title}
        </Heading>
      </CardContent>
    </Card>
  );
};

export default NotFoundCard;
