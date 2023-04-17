import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from './productSlice';

export default function Products() {
    const productError = useSelector(state => state.product.error);
    const productStatus = useSelector(state => state.product.status);
    const allProducts = useSelector(state => selectAllProducts(state));
    const dispatch = useDispatch();

    useEffect( () => {
        if (productStatus === "idle") {
            dispatch(fetchProducts());
            console.log(allProducts)
        }   
    }, [productStatus, dispatch, allProducts]);

    let content;

    if (productStatus === "idle") content = <h1> Loading </h1>
    else if (productStatus === "failed") content = <h1> {productError} error </h1>
    else content = <h1>  {productStatus} status</h1>
    return (
        <div className="mt-20">
            {content}

            {
                allProducts.map( item => (
                    <div className="">
                        <h1> {item.id} </h1>
                    </div>
                ))
            }
        </div>
    )
}
