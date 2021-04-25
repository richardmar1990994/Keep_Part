import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import authReducer from '../components/core/redux/auth.duck';
import userReducer from '../components/core/redux/user.duck';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...authReducer,
    ...userReducer,
  });
