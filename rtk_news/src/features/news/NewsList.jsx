import React from 'react'
import { useGetNewsQuery } from '../api/apiSlice'

export default function NewsList() {

    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNewsQuery();

    console.log(news);
    
    return (
        <div>NewsList</div>
    )
}
