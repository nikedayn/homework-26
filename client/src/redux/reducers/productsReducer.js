import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

import { searchFunction } from "../../Components/Common/search";

const initialState = {
    products: [
        {
            id: nanoid(),
            text: 'Велосипед Pride Stella 6.1 MS',
            price: 12490,
            imgSRC: 'https://veliki.com.ua/files/2022/10_17/18_44/u_files_store_37_1139.jpg'
        },
        {
            id: nanoid(),
            text: 'Велосипед Crosser Solo 2x9 27.5"',
            price: 8990,
            imgSRC: 'https://veliki.com.ua/files/2023/02_14/13_28/u_files_store_37_3661.jpg'
        },
        {
            id: nanoid(),
            text: 'Велосипед Bergamont Revox 3 29" FMN',
            price: 21990,
            imgSRC: 'https://veliki.com.ua/files/2021/02_15/14_57/u_files_store_0_4021046.jpg'
        },
        {
            id: nanoid(),
            text: 'Велосипед Pride Rocksteady AL 7.1',
            price: 14990,
            imgSRC: 'https://veliki.com.ua/files/2022/07_13/19_35/u_files_store_37_985.jpg'
        },
        {
            id: nanoid(),
            text: 'Велосипед Crosser MT-036 2x12-L-S 29"',
            price: 11990,
            imgSRC: 'https://veliki.com.ua/files/2023/02_04/16_08/u_files_store_37_239.jpg'
        }
    ],
    search: {
        text: '',
        status: false,
        arr: []
    }
}

export const updateSearch = createAction('products/updateSearch', (newText) => ({
    payload: newText
}))

export const startSearch = createAction('products/startSearch')

const productsReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateSearch, (state, action) => {
        state.search.text = action.payload;
        if (action.payload.length === 0) {
            state.search.status = false;
        }
    });
    builder.addCase(startSearch, (state, action) => {
        if (state.search.text.length !== 0) {
            state.search.status = true;
            state.search.arr = state.products.filter((item) => {
                if (searchFunction(state.search.text, item.text)) {
                    return item.id;
                }
                else {
                    return null
                }
            })
        }
        console.log(state.search.arr);
    });
});

export default productsReducer;