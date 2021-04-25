import { createHashHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import creteRootReducer from './reducers';
import saga from './sagas';

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState?: any) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const rootReducer = creteRootReducer(history);
  const store = createStore(rootReducer, initialState, composedEnhancers);

  sagaMiddleware.run(saga);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
