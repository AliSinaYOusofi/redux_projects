import React from 'react'
import { useGetHeadlinesQuery } from '../api/apiSlice'
import NewsCard from '../../components/NewsCard';

export default function NewsList() {

    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetHeadlinesQuery();


    if (isLoading) {
        return (
            <div class="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        )
    }

    else if (isError) {
        return ( 
            <div>
                <h1 className="font-bold text-4xl text-black/40"> Error Fetching News: {error}</h1>
            </div>
        )
    }

    
    let newsList = news.articles.map(news => <NewsCard news={news}/>)
    return (
        <div className="w-full h-full mx-auto flex flex-col justify-center gap-x-2 gap-y-2 items-center flex-wrap">{newsList}</div>
    )
}
