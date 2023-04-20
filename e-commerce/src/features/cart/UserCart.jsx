import React from 'react'
import { useSelector } from 'react-redux';
import { getAllProductsInCart } from './cartSlice';
import { Link } from 'react-router-dom';
export default function UserCart() {
    
    const products = useSelector(getAllProductsInCart);
    const status = useSelector(state => state.cart.status);
    const error = useSelector(state => state.cart.error);


    if (!products.length) {
        return (
            <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
                <div className="bg-green-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                    <h1 className="">No Products Found in Your Cart</h1>
                    <Link to="/product" className="bg-green-300 p-2 outline-none border-none rounded-md"> See Products </Link>
                </div>
            </div>
        )
    }

    else if (error ) {
        return (
            <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
                <div className="bg-red-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                    <h1 className="">Error Getting Cart Details</h1>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                status === "loading"
                ? 
                <div className="w-12 h-12 rounded-full animate-spin absolute left-[50%] mt-4border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                : null
            }

        </div>
    )
}
