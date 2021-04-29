import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

import { persistStore } from 'redux-persist';
import persistedReducer from './root.reducer';



export const store = createStore(persistedReducer, applyMiddleware(logger));
export let persistor = persistStore(store);


