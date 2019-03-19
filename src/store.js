import { createStore, applyMiddleware } from 'redux';
import rootRecuder from './reducers/rootreducer';
import rootSaga from './sagas/rootsaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootRecuder,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

 export default store;