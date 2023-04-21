import React from 'react'
import { useParams } from 'react-router'
import { selectProductById } from './productSlice'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IsLoggedIn from '../auth/IsLoggedIn';

export default function SinleProductPage() {
    
    const {productId} = useParams();
    const productWithGivenId = useSelector(state => selectProductById(state, productId));


    if (!productId) return (
        <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
            <div className="bg-green-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                <h1 className="">No Prduct Id Provided</h1>
                <h2>{productId}</h2>
            </div>
        </div>
    )

    
    else if (!productWithGivenId) return (
        <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
            <div className="bg-green-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                <h1 className="">No Products Found With Given id</h1>
                <h2>{productId}</h2>
            </div>
        </div>
    )
    
    return (
        <div className="w-[90%] relative gap-x-2 mx-auto h-screen flex md:flex-row flex-col items-center justify-center mt-20 ">
            <div className="w-full h-full flex flex-col items-start justify-center">
                <div className=" flex gap-y-1 flex-wrap items-start justify-center">

                    <img 
                        src={productWithGivenId.images[0]} 
                        alt="product" 
                        className="object-cover w-[300px] h-[200px] transition-all duration-300 rounded-md p-1"
                    />
                    <img 
                        src={productWithGivenId.images[1]} 
                        alt="product" 
                        className="object-cover w-[300px] h-[200px] transition-all duration-300 rounded-md p-1"
                    />
                    <img 
                        src={productWithGivenId.images[2]} 
                        alt="product" 
                        className="object-cover w-[300px] h-[200px] transition-all duration-300 rounded-md p-1"
                    />
                    <img 
                        src={productWithGivenId.images[3]} 
                        alt="product" 
                        className="object-cover w-[300px] h-[200px] transition-all duration-300 rounded-md p-1"
                    />
                </div>
            </div>

            <section className="bg-white min-w-[50%] p-8 rounded-lg shadow-lg">
                <h1 className="font-bold text-3xl mb-8">Product Information</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-between">
                        <h2 className="text-lg font-medium">Brand:</h2>
                        <p className="text-gray-600">{productWithGivenId.brand}</p>
                    </div>
                    <div className="">
                        <h2 className="text-lg font-medium">Price:
                            <p className="text-gray-600">${productWithGivenId.price}</p>
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="text-lg font-medium">Name:</h2>
                        <p className="text-gray-600">{productWithGivenId.title}</p>
                    </div>
                    
                    <div className="flex flex-col justify-between">
                        <h2 className="text-lg font-medium">Category:
                            
                            <i className="text-gray-600 ml-2">
                                <Link
                                    className="bg-gray-200 px-2 py-1 rounded-md text-sm hover:bg-gray-300 transition-all duration-300"
                                    to={`/categories/${productWithGivenId.category}`}
                                >
                                    {productWithGivenId.category}
                                </Link>
                            </i>
                        </h2>
                    </div>
                    
                    <div className="flex flex-col justify-between">
                        <h2 className="text-lg font-medium">Description:</h2>
                        <p className="text-gray-600">{productWithGivenId.description}</p>
                    </div>
                    
                    <div className="flex flex-col gap-y-2 justify-between">
                        <IsLoggedIn productId={productWithGivenId.id} message={"Login To Add To Cart"}/>
                    </div>
                </div>
            </section>

        </div>
    )
}
