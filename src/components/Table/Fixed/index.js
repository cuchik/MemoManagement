import React from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/styles';

import Card from 'components/Card';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(() => ({
  wrapper: {},
  inner: {},
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  tableWrapper: {
    width: '100%',
  },
  notFoundRow: {
    padding: 0,
  },
}));

const FixedTable = props => {
  const { classNames = {}, columns, rows, notFoundLabel, tableHeight } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.wrapper, 'has-scroll', classNames.fixedWrapper)}
    >
      <div className={clsx(classes.inner, classNames.fixedInner)}>
        <Paper className={clsx(classes.root, classNames.fixedRoot)}>
          <div
            className={clsx(classes.tableWrapper, classNames.fixedTableWrapper)}
            style={{
              maxHeight: tableHeight,
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                        width: column.width,
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows && rows.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className={classes.notFoundRow}
                    >
                      <Card
                        type="not-found"
                        cardProps={{
                          title: notFoundLabel || 'Item Not Found',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                )}
                {rows.map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map(column => {
                        const value = row[column.name];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format
                              ? column.format(
                                  column.name === 'object' ? row : value,
                                )
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default FixedTable;
