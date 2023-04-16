import React, { useState } from 'react'
import ToastMessage from '../../components/ToastMessage';
import { isValidIPAddress } from '../../functions/isValidIP';
import { getIpDetails } from './ipSlice';
import { useDispatch } from 'react-redux';
import DisplayIpData from './DisplayIpData';


export default function IP() {

    const [messageType, setMessageType] = useState(null);
    const [message, setMessage] = useState(null);
    const [ip, setIP] = useState("");
    
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(isValidIPAddress(ip));
        if (! isValidIPAddress(ip)) {
            setMessage("Invalid IP Provided");
            setMessageType("error");
            return
        }
        setMessageType(false)
        dispatch(getIpDetails(ip));
    }

    return (
        <>
            <main className="py-10 w-[90%] mx-auto">
                <div className="container mx-auto">
                    <form onSubmit={handleFormSubmit} className="rounded-lg bg-white p-10 shadow-lg">
                        <div className="mb-4 flex items-center">
                            <input onChange={(e) => setIP(e.target.value)} type="text" className="w-full rounded-lg border border-gray-400 p-2" placeholder="Search ..." />
                            <button className="group relative p-3 ml-2 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                                <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-black group-hover:text-white">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <DisplayIpData />
            <ToastMessage error={message} messageType={messageType}/>
        </>
    );
}
