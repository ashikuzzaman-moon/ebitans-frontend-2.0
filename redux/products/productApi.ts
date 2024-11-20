import { name } from '@/consts';
import { apiSlice } from '../api/apiSlice';
import {
    setProduct,
    setBestSellProduct,
    setRelatedProduct,
    setCampaignProduct,
    setFeatureProduct,
} from './productSlice';
import { cacher } from '../rtkQueryCacheUtils';

// Inject the getHome mutation endpoint into apiSlice
export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/product`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setProduct(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setProduct(null));
                }
            },
        }),
        getBestSellProduct: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/best_sell_product`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setBestSellProduct(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setBestSellProduct(null));
                }
            },
        }),
        getFeatureProduct: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/feature_product`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setFeatureProduct(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setFeatureProduct(null));
                }
            },
        }),

        // getRelatedProduct: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: '/getsubdomain/name',
        //         method: 'POST',
        //         body: data,
        //     }),
        //     async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //         try {
        //             const { data } = await queryFulfilled;
        //             if (data) {
        //                 dispatch(setRelatedProduct(data)); // Dispatch the action with the received data
        //             }
        //         } catch (error) {
        //             // console.error("Error in getHome mutation:", error);
        //         }
        //     },
        // }),

        getSingleProduct: builder.query<any, any>({
            query: ({ store_id, productId }) => ({
                url: `get/offer/product/${store_id}/${productId}`,
                method: 'GET',
            }),
        }),
        getCategoryProduct: builder.query<any, any>({
            query: ({ id }) => ({
                url: `getcatproducts/${id}`,
                method: 'GET',
            }),
            // configuration for an individual endpoint, overriding the api setting
            // providesTags:  (result, error, id) => [{ type: 'Category', id }],
            providesTags: ['homeCategoryProduct'],
            keepUnusedDataFor: 600,
        }),
    }),
    overrideExisting: false, // Optional: prevents overwriting if already defined
});

export const {
    useGetProductQuery,
    useGetSingleProductQuery,
    useGetCategoryProductQuery,
    useGetBestSellProductQuery,
    useGetFeatureProductQuery,
} = productApi;
