import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  getProductByIdInCart, getProductWithGivenId, } from '../cart/cartSlice';
import { updateStatus } from '../cart/cartSlice';

function IsLoggedIn({message: errorMessage, isCartMessage, productId}) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [saved, setSavedStatus] = useState(false);
    const status = useSelector(state => state.cart.status);
    const error = useSelector(state => state.cart.error);
    const productExistsInCart = useSelector(state => getProductByIdInCart(state, productId));
    const dispatch = useDispatch();

    useEffect( () => {
        setIsLoggedIn(localStorage.getItem('token'));
    }, []);

    React.useEffect( () => {
        return () => dispatch(updateStatus('idle'))
    }, [dispatch])

    React.useEffect( () => {
        setSavedStatus(status === "success");
    }, [status])

    const defaultButtonClass = "text-white w-full bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center";
    const defaultCartClass = "text-white w-full bg-gray-200 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out";
    
    // saving product

    const addProductToCart = () => {
        
        if (productExistsInCart) return alert("product already in your cart");
        if (isCartMessage) { // adding to cart

        }
        
        // adding to cart
        dispatch(getProductWithGivenId(productId))
        if (status === "success" || saved) return alert("saved to cart")
    }

    return (
        <div className="flex relative items-center justify-between w-full">
            
            {isLoggedIn ? (
                <button  onClick={addProductToCart} href="#" className={`${!isCartMessage ? defaultButtonClass : defaultCartClass} relative` }>
                    {isCartMessage || "Add to cart"}
                    {
                        status === "loading" 
                        ? 
                        <div className="absolute left-10 top-0 w-12 h-12 rounded-full animate-spin border border-solid border-indigo-500 border-t-transparent"></div>                    
                        : null
                    }
                </button>
            ) : (
                <p className="p-1 bg-red-500 text-white rounded-sm line-clamp-1">{errorMessage}</p>
            )}

            {
                error ?
                <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
                    <div className="bg-green-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                        <h1 className="">Error While adding item to cart</h1>
                        <h2>{error}</h2>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default React.memo(IsLoggedIn)