import React from 'react'
import { useSelector } from 'react-redux';
import { getAllProductsInCart } from './cartSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from './cartSlice';

export default function UserCart() {
    
    const productsInCart = useSelector(getAllProductsInCart);
    const error = useSelector(state => state.cart.error);
    const dispatch = useDispatch();


    if (!productsInCart.length) {
        return (
            <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
                <div className="bg-green-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                    <h1 className="">No Products Found in Your Cart</h1>
                    <Link to="/product" className="bg-green-300 mt-10 p-2 outline-none border-none rounded-md"> See Products </Link>
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
        <div className="mt-20 flex items-center justify-between w-[90%] mx-auto">
            <div className="flex flex-row  flex-wrap gap-x-2 p-2 rounded-md w-fit">
                {
                    productsInCart.map(product => (
                        <div className="flex mt-2 items-start justify-between gap-y-10 gap-x-4 w-full p-2 bg-gray-100 rounded-md mb-0 border-b-2 border-gray-300">
                            <div className="">
                                <img 
                                    alt=""
                                    src={product.images[0]}
                                    className="ob object-contain  rounded-md"
                                />
                            </div>
                            
                            <div className="flex flex-col gap-y-2 items-center justify-between h-full">
                                <h1>{product.title}</h1>
                                <p>{product.price}$</p>
                            </div>
                            
                            <svg onClick={() => dispatch(deleteFromCart(product.id))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </div>
                    ))
                }
            </div>
            
            <div>

            </div>
        </div>
    )
}
