import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey } from '../../key/key';
import { createSelector } from '@reduxjs/toolkit';

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
            invalidatesTags: (result, error, arg) => [{type: "News", id: arg.id}],
            async onQueryStarted({newsId, newsName}, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getSingleNews", undefined, draft => {
                        const news = draft.find(news => news.id === newsId);

                        if (news) {
                            headline.likes[like]++;
                        }
                    })
                
                )
                try {
                    await queryFulfilled
                } catch (error) {
                    patchResult.undo();
                }
            }
        })
    })
})


// select news based on id from the cached data

export const selectAllNews = apiSlice.endpoints.getHeadlines.select();

export const allHeadlines = createSelector(
    selectAllNews,
    newsResult => selectAllNews?.data ?? []
)

export const selectHeadlinesById = createSelector(
    allHeadlines,
    (state, newsId) => newsId,
    (news, newsId) => news.find(news => news.id === newsId)
)
export const { useGetHeadlinesQuery, useGetSingleNewsQuery, useAddNewsMutation } = apiSlice;
