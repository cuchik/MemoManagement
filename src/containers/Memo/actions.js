import { MemoTypes } from './types';

// GET
export const getMemos = param => {
  return { type: MemoTypes.GET_MEMOS.ROOT, payload: param };
};
export const getMemosLoading = () => {
  return { type: MemoTypes.GET_MEMOS.LOADING };
};
export const getMemosSuccess = payload => {
  return { type: MemoTypes.GET_MEMOS.SUCCESS, payload };
};
export const getMemosError = payload => {
  return { type: MemoTypes.GET_MEMOS.ERROR, payload };
};

// CREATE
export const createMemo = data => {
  return { type: MemoTypes.CREATE_MEMO.ROOT, payload: data };
};
export const createMemoLoading = () => {
  return { type: MemoTypes.CREATE_MEMO.LOADING };
};
export const createMemoSuccess = payload => {
  return { type: MemoTypes.CREATE_MEMO.SUCCESS, payload };
};
export const createMemoError = payload => {
  return { type: MemoTypes.CREATE_MEMO.ERROR, payload };
};
// UPDATE
export const updateMemo = data => {
  return { type: MemoTypes.UPDATE_MEMO.ROOT, payload: data };
};
export const updateMemoLoading = () => {
  return { type: MemoTypes.UPDATE_MEMO.LOADING };
};
export const updateMemoSuccess = payload => {
  return { type: MemoTypes.UPDATE_MEMO.SUCCESS, payload };
};
export const updateMemoError = payload => {
  return { type: MemoTypes.UPDATE_MEMO.ERROR, payload };
};
// DELTE
export const deleteMemo = data => {
  return { type: MemoTypes.DELETE_MEMO.ROOT, payload: data };
};
export const deleteMemoLoading = () => {
  return { type: MemoTypes.DELETE_MEMO.LOADING };
};
export const deleteMemoSuccess = payload => {
  return { type: MemoTypes.DELETE_MEMO.SUCCESS, payload };
};
export const deleteMemoError = payload => {
  return { type: MemoTypes.DELETE_MEMO.ERROR, payload };
};
