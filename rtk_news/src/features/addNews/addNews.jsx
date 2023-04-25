import React from 'react'
import { useAddNewsMutation } from '../api/apiSlice'

export default function AddNews() {

    const [addNews, {isLoading}] = useAddNewsMutation();

    const saveAddedNews = async () => {
        try {
            await addNews().unwrap();
        } catch (error) {
            console.log('error adding news');
        }
    }

    if (isLoading) return <div className="animate-spin w-12 h-12 rounded-full border-2 border-yellow-300"></div>
    
    return (
        <div className="flex flex-col">
            <input type="text" placeholder='title' />
            <input type="text" placeholder='description' />
            <button onClick={saveAddedNews}> Add News</button>
        </div>
    )
}
