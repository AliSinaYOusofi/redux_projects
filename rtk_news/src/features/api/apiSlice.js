import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from '../../key/key';

export const apiSlice = createApi( {
    
    reducerPath: "api",
    
    baseQuery: fetchBaseQuery({baseUrl: `https://api.newscatcherapi.com/v2`, headers: {
        'x-api-key': apiKey
    }}),

    tagTypes: ["News"],
    
    endpoints: builder => ({
        
        getHeadlines: builder.query({
            query: () => "/latest_headlines?&lang=en&topic=sport&page_size=10",
            providesTags: ["News"]
        }),
        
        getSingleNews: builder.query({
            query: (title) => `/search?lang=end&title=${title}&lang=en&page_size=2`
        }),

        addNews: builder.mutation({
            query: initialPost => ({
                url: "/addNews",
                method: "POST",
                body: initialPost
            }),
            invalidatesTags: ["News"]
        })
    })
})

export const { useGetHeadlinesQuery, useGetSingleNewsQuery, useAddNewsMutation } = apiSlice;
