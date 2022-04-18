import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../reducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});
type TStore = ReturnType<typeof store.getState>;
type TDispatch = typeof store.dispatch;

export { store };
export type { TStore, TDispatch };
