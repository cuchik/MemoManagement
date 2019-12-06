import React from 'react';

import FixedTable from './Fixed';

const Table = (props) => {
  const { type, children, tableProps } = props;
  if (type === 'fixed') {
    return (<FixedTable {...tableProps} >{children}</FixedTable>);
  }
  return (<div />);
}

export default Table;