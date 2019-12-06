import { asyncActionType } from 'utils/methods';

export const MemoTypes = {
  GET_MEMOS: asyncActionType('GET_MEMOS'),
  CREATE_MEMO: asyncActionType('CREATE_MEMO'),
  UPDATE_MEMO: asyncActionType('UPDATE_MEMO'),
  DELETE_MEMO: asyncActionType('DELETE_MEMO'),
};
