import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import {authReducer} from './slices/auth.slice.ts';
import {authApi} from './services/auth.api.ts';
import {setupListeners} from '@reduxjs/toolkit/query';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  authApi: authApi.reducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(authApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
