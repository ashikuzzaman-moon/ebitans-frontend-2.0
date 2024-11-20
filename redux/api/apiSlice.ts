'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cacher } from "../rtkQueryCacheUtils";
// import { setStore } from '../home/homeSlice';
// import { userLoggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_REACT_APP_BASE_URL,
});


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args: any, api: any, extraOptions: any) => {
        let result = await baseQuery(args, api, extraOptions);
        return result;
    },
    tagTypes: ['homeCategoryProduct',"initializeApp"] as string[],
    // tagTypes: [...cacher.defaultTags],
    keepUnusedDataFor: 900, // Default cache duration for all queries
    endpoints: (builder) => ({
        // refreshToken: builder.query({
        //     query: () => ({
        //         url: "/refresh",
        //         method: "GET",
        //     }),
        //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //         // try {
        //         //     const result = await queryFulfilled;

        //         //     dispatch(
        //         //         userLoggedIn({
        //         //             accessToken: result.data.accessToken,
        //         //             user: result.data.user,
        //         //         })
        //         //     );
        //         // } catch (err) {
        //         //     dispatch(userLoggedOut());
        //         // }
        //     },
        // }),
    }),
});

export const { reducerPath, reducer, middleware } = apiSlice; 