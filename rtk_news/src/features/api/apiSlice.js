import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi( {
    
    reducerPath: "api",
    
    baseQuery: fetchBaseQuery({baseUrl: `https://newsapi.org/v2/everything&apiKey=e78c3c2de41e4c6c8c14e0982886f47f`}),
    
    endpoints: builder => ({
        getNews: builder.query({
            query: () => "/news"
        })
    })
})

export const {useGetNewsQuery} = apiSlice;
