import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectData } from 'store/root.selectors';
import * as memoActions from './actions';
import MemoComponent from './view';

const mapStateToProps = state => {
  return {
    memos: selectData('memo', 'memos')(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMemos: bindActionCreators(memoActions.getMemos, dispatch),
    createMemo: bindActionCreators(memoActions.createMemo, dispatch),
    updateMemo: bindActionCreators(memoActions.updateMemo, dispatch),
    deleteMemo: bindActionCreators(memoActions.deleteMemo, dispatch),
  };
};

const Memo = connect(mapStateToProps, mapDispatchToProps)(MemoComponent);

export default Memo;
