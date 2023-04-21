import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from './productSlice';
import ProductCard from './ProductCard';
import SearchProduct from '../searchProduct/SearchProduct';

export default function Products() {

    const productError = useSelector(state => state.product.error);
    const productStatus = useSelector(state => state.product.status);
    const allProducts = useSelector(state => selectAllProducts(state));
    const dispatch = useDispatch();

    useEffect( () => {
        if (productStatus === "idle") {
            dispatch(fetchProducts());
        }   
    }, [productStatus, dispatch]);

    let content;

    if (productStatus === "loading") {
        content = <div className="w-12 h-12 rounded-full animate-spin absolute left-[50%] mt-4
        border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
    }
    
    const ProductsCard = allProducts.map(item => <ProductCard brand={item.brand || null} thumbnail={item.images[0]} title={item.title} id={item.id} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} key={item.id} />)
    
    return (
        <div className="mt-20 ">
            <SearchProduct />
            {content}
            
            {productError}
            {
                !productError ? <h1 className="text-center text-4xl font-semibold mt-10 mb-10"> Availabel Products</h1> : null
            }
            <div className="flex w-full h-full flex-wrap gap-x-3 gap-y-4 justify-center items-center">
                {ProductsCard}
            </div>
        </div>
    )
}
