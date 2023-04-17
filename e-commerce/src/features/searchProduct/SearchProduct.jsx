import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { selectAllSearch } from './searchSlice';

import { useDispatch } from 'react-redux';
import { getSearchProduct } from './searchSlice';
import ProductCard from '../products/ProductCard';

export default function SearchProduct() {
    
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const error = useSelector(state => state.search.error);
    const status = useSelector(state => state.search.status);
    const searchResults = useSelector(state => selectAllSearch(state));
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(status === 'loading')
    }, [status]);


    const getProductsOnClick = () => {
        if (!search) return alert("please enter search keyword");
        dispatch(getSearchProduct(search));
    }
    const handleEnterSearchFromKeyboard = (e) => {
        if (e.key === 'Enter') {
            dispatch(getSearchProduct(search));
        }
    }
    const searchResultList = searchResults.map(item => <ProductCard brand={item.brand || null} thumbnail={item.images[0]} title={item.title} id={item.id} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} key={item.id} />);
    return (
        <>
            <div className="mb-3">
                <div className="relative  mb-4 flex w-1/2  flex-wrap mx-auto">
                    <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search Products"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleEnterSearchFromKeyboard}/>
                    <button
                        className="relative z-[2]  flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        onClick={getProductsOnClick}
                        onKeyDown={handleEnterSearchFromKeyboard}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-black">
                        <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
            </div>
            {
                loading 
                ? <div className="w-12 h-12 rounded-full animate-spin absolute left-[50%] mt-4
                    border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"></div> 
                : null
            }
            <h1> {error}</h1>
            {
                status === "succeeded" && searchResults.length ? <h1 className="text-center text-4xl font-semibold mt-10 mb-10"> Search Results For : {search}</h1> : null
            }
            <div className="mt-10 mb-5 flex w-full h-full flex-wrap gap-x-3 gap-y-4 justify-center items-center">
                {searchResultList}
            </div>
            {
               status === "succeeded" && !searchResults.length ? <h1 className="text-center mx-auto text-4xl font-semibold mt-10 mb-10 bg-red-600 p-2 rouned-md  w-fit"> No Results Found For {search}</h1> : null
            }
        </>
    )
}
