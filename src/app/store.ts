// Core
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';


// Dependencies
import effects from './effects';
import reducers, { IAppState } from './reducers';


export const middleware = {
    saga: createSagaMiddleware({ }),
    logger: createLogger({ collapsed: true }),
};


const store: Store<IAppState> = createStore(
    reducers,
    applyMiddleware(
        middleware.logger,
        middleware.saga,
    ),
);


middleware.saga.run(effects);


export default store;