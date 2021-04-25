import { all } from 'redux-saga/effects';

import authSaga from '../components/core/redux/auth.saga';
import userSaga from '../components/core/redux/user.saga';

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
