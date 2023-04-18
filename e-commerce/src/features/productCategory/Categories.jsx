import React from 'react'
import { useParams } from 'react-router'
import { getCategories } from './categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCategories } from './categorySlice';
import ProductCard from '../products/ProductCard';
import { updateStatus } from './categorySlice';

export default function Categories() {
    
    const {category} = useParams();
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories);
    const error = useSelector(state => state.category.error);
    const status = useSelector(state => state.category.status);
    
    React.useEffect(() => {
        
        setLoading(status === 'loading');

        if (status === 'idle') {
            console.log('dispatching getCategories with category', category);
            dispatch(getCategories(category));
            console.log(status, 'after dispatch status');
        } else if (status === 'succeeded'){
            console.log(status, ' in else');
            
        }
        
    }, [status, dispatch, category]);

    React.useEffect(() => {
        return () => dispatch(updateStatus('idle'));
    }, [dispatch]);
      
    
    const categoryList = categories.map(item => <ProductCard brand={item.brand || null} thumbnail={item.images[0]} title={item.title} id={item.id} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} key={item.id} />)
    
    if (status === 'loading') return <div className="w-12 mt-20 h-12 rounded-full animate-spin absolute left-[50%] border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
    
    else if (error) return <h1 className="text-center mt-20 mx-auto text-4xl font-semibold mb-10 bg-red-500 p-2 text-white rouned-md  w-fit">error fetching data for category: {category}</h1>
    
    else if (!categories.length) return (
        <div className="h-screen w-screen flex items-center justify-center flex-col text-center  mt-20 mx-auto text-4xl font-semibold mb-10 text-white ">
            <div className="bg-green-400 p-2  rounded-md shadow-md shadow-gray-500/50 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto mb-10 text-white    ">
                <h1 className="">No Products Found With this category</h1>
                <h2>{category}</h2>
            </div>
        </div>
    )
    
    return (
        <div className="mt-20 mb-5 flex w-full h-full flex-wrap gap-x-3 gap-y-4 justify-center items-center">
            {categoryList}
        </div>
    )
}
