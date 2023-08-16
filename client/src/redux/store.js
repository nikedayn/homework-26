import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';

const store = configureStore({
    reducer: {
        productsPage: productsReducer
    }
})

export default store