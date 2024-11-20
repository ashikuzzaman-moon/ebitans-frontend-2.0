'use client';
import { name } from '@/consts';
import { apiSlice } from '../api/apiSlice';
import {
    setBanner,
    setBrand,
    setDesign,
    setHeader,
    setMenu,
    setTestimonial,
} from './homeSlice';

// Inject the getHome mutation endpoint into apiSlice
export const homeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // getHeaderSettings: builder.mutation<any, any>({
        //     query: (data) => ({
        //         url: `header-settings?name=${name}`,
        //         method: 'POST',
        //         body: data,
        //     }),
        //     async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //         try {
        //             const { data } = await queryFulfilled;
        //             if (data) {
        //                 dispatch(setHeader(data)); // Dispatch the action with the received data
        //             }
        //         } catch (error) {
        //             // console.error("Error in getHome mutation:", error);
        //         }
        //     },
        // }),
        getLayout: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/layout`,
                method: 'GET',
            }),
        }),
        getDesign: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/design`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setDesign(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setDesign(null));
                }
            },
        }),
        getMenu: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/menu`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setMenu(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setMenu(null));
                }
            },
        }),
        getSlider: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/slider`,
                method: 'GET',
            }),
            // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;
            //         if (data) {
            //             dispatch(setMenu(data?.data)); // Dispatch the action with the received data
            //         }
            //     } catch (error) {
            //         dispatch(setMenu(null));
            //     }
            // }
        }),
        getBanner: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/banner`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setBanner(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setBanner(null));
                }
            },
        }),
        getBrand: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/brand`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setBrand(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setBrand(null));
                }
            },
        }),
        getTestimonial: builder.query<any, any>({
            query: () => ({
                url: `get-domain/${name}/testimonial`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setTestimonial(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setTestimonial(null));
                }
            },
        }),
        getHeaderSettings: builder.query<any, any>({
            query: () => ({
                url: `header-settings/${name}`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data) {
                        dispatch(setHeader(data?.data)); // Dispatch the action with the received data
                    }
                } catch (error) {
                    dispatch(setHeader(null));
                }
            },
        }),
    }),
    overrideExisting: false, // Optional: prevents overwriting if already defined
});

export const {
    useGetLayoutQuery,
    useGetDesignQuery,
    useGetMenuQuery,
    useGetHeaderSettingsQuery,
    useGetSliderQuery,
    useGetBannerQuery,
    useGetBrandQuery,
    useGetTestimonialQuery,
} = homeApi;
