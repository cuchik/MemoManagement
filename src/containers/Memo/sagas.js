import { takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { MemoService } from './services';
import * as memoActions from './actions';
import { MemoTypes } from './types';

const service = new MemoService();

export function* getMemos() {
  try {
    yield put(memoActions.getMemosLoading());
    const result = service.getMemos();
    yield put(memoActions.getMemosSuccess(result));
  } catch (ex) {
    yield put(memoActions.getMemosError());
  }
}
export function* createMemo(action) {
  try {
    yield put(memoActions.createMemoLoading());
    yield put(memoActions.createMemoSuccess(action.payload));
    toast.success('Create New Memo Success');
  } catch (ex) {
    toast.error('Create New Memo Error');
    yield put(memoActions.createMemoError());
  }
}
export function* updateMemo(action) {
  try {
    yield put(memoActions.updateMemoLoading());
    yield put(memoActions.updateMemoSuccess(action.payload));
    toast.success(`Update Memo [${action.payload.id}] Success`);
  } catch (ex) {
    toast.success(`Update Memo [${action.payload.id}] Error`);
    yield put(memoActions.updateMemoError());
  }
}
export function* deleteMemo(action) {
  try {
    yield put(memoActions.deleteMemoLoading());
    yield put(memoActions.deleteMemoSuccess(action.payload));
    toast.success(`Delete Memo [${action.payload.id}] Success`);
  } catch (ex) {
    toast.error(`Delete Memo [${action.payload.id}] Error`);
    yield put(memoActions.deleteMemoError());
  }
}
export function* watchMemos() {
  yield takeLatest(MemoTypes.GET_MEMOS.ROOT, getMemos);
  yield takeLatest(MemoTypes.CREATE_MEMO.ROOT, createMemo);
  yield takeLatest(MemoTypes.UPDATE_MEMO.ROOT, updateMemo);
  yield takeLatest(MemoTypes.DELETE_MEMO.ROOT, deleteMemo);
}
