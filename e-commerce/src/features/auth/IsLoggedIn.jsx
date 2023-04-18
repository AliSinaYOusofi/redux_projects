import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProductWithGivenId } from '../cart/cartSlice';

export default function IsLoggedIn({message: errorMessage, isCartMessage, productId}) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const status = useSelector(state => state.cart.status);
    const productAlreadyInCart = useSelector(state => getProductWithGivenId(state, productId))
    const error = useSelector(state => state.cart.error);

    const dispatch = useDispatch();

    useEffect( () => {
        setIsLoggedIn(localStorage.getItem('token'));
    }, []);

    const defaultButtonClass = "text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    const defaultCartClass = "text-white w-full bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out";
    
    // saving product

    const addProductToCart = () => {
        
        if (productAlreadyInCart) return alert("Product already in the cart");
        
        if (isCartMessage) { // adding to cart

        }
        
        // adding to wishlist
        dispatch(getProductWithGivenId(productId));
        if (status === "success") {
            setDisableButton(true)
        }
    }

    return (
        <div className="flex items-center justify-between w-full">
            
            {isLoggedIn ? (
                <button disabled={disableButton} onClick={addProductToCart} href="#" className={`${!isCartMessage ? defaultButtonClass : defaultCartClass} ${disableButton ? "cursor-not-allowed" : "cursor-pointer"}` }>{isCartMessage || "Add to cart"}</button>
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
