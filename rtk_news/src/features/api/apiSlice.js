import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from '../../key/key';

export const apiSlice = createApi( {
    
    reducerPath: "api",
    
    baseQuery: fetchBaseQuery({baseUrl: `https://api.newscatcherapi.com/v2/latest_headlines`, headers: {
        'x-api-key': apiKey
    }}),
    
    endpoints: builder => ({
        getHeadlines: builder.query({
            query: () => ""
        })
    })
})

export const { useGetHeadlinesQuery } = apiSlice;
