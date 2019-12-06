import { all, fork } from 'redux-saga/effects';
import { watchMemos } from 'containers/Memo/sagas';

export function* rootSaga() {
  yield all([fork(watchMemos)]);
}
