import React from 'react'
import {formatDistance} from 'date-fns';

export default function NewsCard({news}) {

    return (
        <div key={news._id} className="relative mt-10 flex flex-col w-[50%]  rounded-tr-md rounded-tl-md shadow-md shadow-black/20">
            
            <img className="rounded-tr-md object-contain w-full rounded-tl-md" src={news.media} alt=""/>
            
            <div className="text-black ">
                <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold ">
                    {news.title}
                </h3>
                <p className="mt-1 text-black line-clamp-2 transition-all duration-300 hover:line-clamp-none">
                    {news.summary}
                </p>
                <p className="mt-5 text-xs text-white">
                    {formatDistance(new Date(news.published_date), Date.now(), { addSuffix: true})}
                </p>
                <p> Read More: {news.url}</p>
                </div>
            </div>

        </div>
    )
}
