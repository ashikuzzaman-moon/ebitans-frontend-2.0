import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../redux/api/apiSlice';
import { storeApi } from './appStore/appStoreApi';
import rootReducer from './rootReducer';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import compress from 'redux-persist-transform-compress';
// import { authApi } from './auth/authApi';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [authApi.reducerPath],
//   transforms: [compress()],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({ serializableCheck: false }).concat(
            apiSlice.middleware
        ),
});

// Initialize Redux
const initializeApp = async () => {
    await store.dispatch(storeApi.endpoints.getStore.initiate({}));
};

initializeApp();

// export const persistor = persistStore(store());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
