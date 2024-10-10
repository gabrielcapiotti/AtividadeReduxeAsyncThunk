// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import personagensReducer from '../store/slices/PersonagensSlice';

export const store = configureStore({
    reducer: {
        personagens: personagensReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
