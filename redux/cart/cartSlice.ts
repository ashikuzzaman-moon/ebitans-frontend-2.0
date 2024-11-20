import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    cartList: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<any>) => {
            state.cartList = action.payload;
        },
    },
});

export const { setCart } = cartSlice.actions;

// Export the reducer
export const { reducerPath, reducer } = cartSlice;
