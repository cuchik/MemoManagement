import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { URL } from 'helpers';
import { Main as MainLayout, RouteWithLayout } from './layouts';
import { Memo as MemoView } from './containers';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from={URL.HOME()} to={URL.MEMO()} />
      <RouteWithLayout
        component={MemoView}
        exact
        layout={MainLayout}
        path={URL.MEMO()}
      />
      <Redirect to={URL.MEMO()} />
    </Switch>
  );
};

export default Routes;
