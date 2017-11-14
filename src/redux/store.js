import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducer';
import { rootSaga } from '../sagas/homeSagas';

export default function () {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    applyMiddleware(rootSaga)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
