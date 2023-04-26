import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from '../../key/key';

export const apiSlice = createApi( {
    
    reducerPath: "api",
    keepUnusedDataFor: 120,
    
    baseQuery: fetchBaseQuery({baseUrl: `https://api.newscatcherapi.com/v2`, headers: {
        'x-api-key': apiKey
    }}),

    tagTypes: ["News"],
    
    endpoints: builder => ({
        
        getHeadlines: builder.query({
            
            query: () => "/latest_headlines?&lang=en&topic=sport&page_size=10",
            
            providesTags: (result = [], error, arg) => [
                'News',
                ...result.map(({id}) => ({type: "News", id}))
            ]
        }),
        
        getSingleNews: builder.query({
            query: (title) => `/search?lang=end&title=${title}&lang=en&page_size=2`,
            providesTags: (result, error, arg) => [{type: "News", id: arg}]
        }),

        addNews: builder.mutation({
            query: initialPost => ({
                url: "/addNews",
                method: "POST",
                body: initialPost
            }),
            invalidatesTags: ["News"]
        }),

        editNews: builder.mutation({
            query: newsData => ({
                url: "/editNews",
                method: "PATCH",
                body: newsData
            }),
            invalidatesTags: (result, error, arg) => [{type: "News", id: arg.id}]
        })
    })
})

export const { useGetHeadlinesQuery, useGetSingleNewsQuery, useAddNewsMutation } = apiSlice;
