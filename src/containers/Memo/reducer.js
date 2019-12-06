/* eslint-disable no-case-declarations */
import ActivityStatus from 'common/enum/activity';

import { MemoState } from './state';
import { MemoTypes } from './types';

const initialMemoState = new MemoState();

export const memoReducer = (state = initialMemoState, action) => {
  switch (action.type) {
    // GET
    case MemoTypes.GET_MEMOS.LOADING:
      return {
        ...state,
        memos: {
          data: [],
          activityStatus: ActivityStatus.Loading,
          error: null,
        },
      };
    case MemoTypes.GET_MEMOS.SUCCESS:
      return {
        ...state,
        memos: {
          data: action.payload,
          activityStatus: ActivityStatus.Success,
          error: null,
        },
      };
    case MemoTypes.GET_MEMOS.ERROR:
      return {
        ...state,
        memos: {
          data: [],
          activityStatus: ActivityStatus.Success,
          error: null,
        },
      };

    // CREATE
    case MemoTypes.CREATE_MEMO.LOADING:
      return {
        ...state,
        createMemo: {
          data: {},
          activityStatus: ActivityStatus.Loading,
          error: null,
        },
      };
    case MemoTypes.CREATE_MEMO.SUCCESS:
      return {
        ...state,
        createMemo: {
          data: action.payload,
          activityStatus: ActivityStatus.Success,
          error: null,
        },
        memos: {
          ...state.memos,
          data: [...state.memos.data, ...[action.payload]],
        },
      };
    case MemoTypes.CREATE_MEMO.ERROR:
      return {
        ...state,
        createMemo: {
          data: {},
          activityStatus: ActivityStatus.Success,
          error: null,
        },
      };
    // UPDATE
    case MemoTypes.UPDATE_MEMO.LOADING:
      return {
        ...state,
        updateMemo: {
          data: {},
          activityStatus: ActivityStatus.Loading,
          error: null,
        },
      };
    case MemoTypes.UPDATE_MEMO.SUCCESS:
      return {
        ...state,
        updateMemo: {
          data: action.payload,
          activityStatus: ActivityStatus.Success,
          error: null,
        },
        memos: {
          ...state.memos,
          data: state.memos.data.map(m => {
            let newM = { ...m };
            if (m.id === action.payload.id) {
              newM = action.payload;
            }
            return newM;
          }),
        },
      };
    case MemoTypes.UPDATE_MEMO.ERROR:
      return {
        ...state,
        updateMemo: {
          data: {},
          activityStatus: ActivityStatus.Success,
          error: null,
        },
      };
    // DELETE
    case MemoTypes.DELETE_MEMO.LOADING:
      return {
        ...state,
        deleteMemo: {
          data: {},
          activityStatus: ActivityStatus.Loading,
          error: null,
        },
      };
    case MemoTypes.DELETE_MEMO.SUCCESS:
      return {
        ...state,
        deleteMemo: {
          data: action.payload,
          activityStatus: ActivityStatus.Success,
          error: null,
        },
        memos: {
          ...state.memos,
          data: state.memos.data.filter(m => m.id !== action.payload.id),
        },
      };
    case MemoTypes.DELETE_MEMO.ERROR:
      return {
        ...state,
        deleteMemo: {
          data: {},
          activityStatus: ActivityStatus.Success,
          error: null,
        },
      };

    default:
      return state;
  }
};
