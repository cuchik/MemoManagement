import React from 'react';
import BaseCard from './Base';
import NotFoundCard from './NotFound';

const Card = props => {
  const { type, children, cardProps } = props;
  if (type === 'not-found') {
    return <NotFoundCard {...cardProps} />;
  }
  return <BaseCard {...cardProps}>{children}</BaseCard>;
};

export default Card;
