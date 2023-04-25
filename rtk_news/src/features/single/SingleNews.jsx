import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleNewsQuery } from '../api/apiSlice';
import NewsCard from '../../components/NewsCard';

export default function SingleNews() {
    
    const {newsTitle} = useParams();

    const {
        data: singleNews = [],
        isLoading,
        isError,
        error
    } = useGetSingleNewsQuery(newsTitle);

    if (isLoading) {
        return (
            <div class="w-12 h-12 left-[50%] top-[50%] rounded-full absolute border-4 border-solid border-gray-200"></div>
        )
    }

    else if (isError) {
        return ( 
            <div>
                <h1 className="font-bold text-4xl text-black/40"> Error Fetching News: {error}</h1>
            </div>
        )
    }

    
    let newsList = singleNews.articles.map(news => <NewsCard news={news}/>)
    return (
        <div className="w-full h-full mx-auto flex flex-col justify-center gap-x-2 gap-y-2 items-center flex-wrap">{newsList}</div>
    )
}
