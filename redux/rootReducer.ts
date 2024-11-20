import { combineReducers } from 'redux';
import { apiSlice } from './api/apiSlice';
import { storeSlice } from './appStore/appStoreSlice';
import { cartSlice } from './cart/cartSlice';
import { homeSlice } from './home/homeSlice';
import { productSlice } from './products/productSlice';
import { categorySlice } from './category/categorySlice';
import { pageSlice } from './page/pageSlice';
import { blogSlice } from './blog/blogSlice';
// import mesagesSliceReducer from './messages/messagesSlice';

// import slices
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [homeSlice.reducerPath]: homeSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [storeSlice.reducerPath]: storeSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [pageSlice.reducerPath]: pageSlice.reducer,
    [blogSlice.reducerPath]: blogSlice.reducer,

    // auth: authSliceReducer,
    // messages: mesagesSliceReducer,
});

export default rootReducer;
