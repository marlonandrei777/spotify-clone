/* import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor = 
    process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const createAppropriateStore = 
    process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware( ...middlewares)));

sagaMiddleware.run(sagas);

export default store; */

import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// é o conbineReducers
import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware( ...middlewares),
        console.tron.createEnhancer()        
    )
    : applyMiddleware( ...middlewares);

/* dentro da função passamos os reducers q vão armazenar
e alterar as informações d dentro do nosso estado 
(impoprtante passar uma fução vazia antes de ter algum reducer p dentro do createStore) */
const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;