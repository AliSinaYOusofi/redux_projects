import React, { useState } from 'react'
import {BiPlus} from 'react-icons/bi';
import {AiOutlineMinus} from 'react-icons/ai';
import { incrementOne, decrementOne, incrementByAmount } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Counter() {

    const [counter, setCounter] = useState(0);

    const currentCounterValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="text-3xl text-blue-500">
            <p>{currentCounterValue}</p>

            <div className="grid mt-10 grid-cols-auto-fit min-w-0 gap-x-4 gap-y-4 place-items-center">
                <BiPlus onClick={() => dispatch(incrementOne())} className="cursor-pointer outline:none p-2 shadow-black/10 shadow-md rounded-full w-16 h-16"/>
                <AiOutlineMinus onClick={() => dispatch(decrementOne())} className="cursor-pointer p-2 shadow-black/10 shadow-md rounded-full w-16 h-16"/>
                
                <p className="text-black"> IncrementByAmount </p>
                <input onChange={(e) => setCounter(e.target.value)} className="border-2 border-black rounded-md text-center" type="text" placeholder='counter value' />
                <button onClick={() => dispatch(incrementByAmount(Number(counter)))} className="p-4 text-gray-500 transition-all duration-150 hover:text-black shadow-black/20 shadow-sm rounded-md"> IncrementByAmount </button>
            </div>
        </div>
    )
}
