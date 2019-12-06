import ActivityStatus from 'common/enum/activity';

export class MemoState {
  memos;

  createMemo;

  updateMemo;

  deleteMemo;

  constructor() {
    this.memos = {
      activityStatus: ActivityStatus.NoActivity,
      data: [],
      error: null,
    };
    this.createMemo = {
      activityStatus: ActivityStatus.NoActivity,
      data: {},
      error: null,
    };
    this.updateMemo = {
      activityStatus: ActivityStatus.NoActivity,
      data: {},
      error: null,
    };
    this.deleteMemo = {
      activityStatus: ActivityStatus.NoActivity,
      data: {},
      error: null,
    };
  }
}
