import React, { useEffect, useState } from 'react'

export default function ToastMessage({error, messageType}) {

    const [toastsArray, setToastsArray] = useState([]);
    const [toast, setToast] = useState(false);

    useEffect(() => {
        if (error) {
          const newToast = { id: Date.now(), message: error };
          setToastsArray((prevToastsArray) => [...prevToastsArray, newToast]);
          setToast(true);
        }
      }, [error]);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setToastsArray((prevToastsArray) => prevToastsArray.slice(1));
                setToast(true);
            }, 2000);
            return () => clearTimeout(timeout);
        }
        else  {
            setToast(false);
        }
    }, [error, toastsArray]);

    return (
        <div className={`${Boolean(error) && messageType && toast ? "translate-x-0": "translate-x-[-20rem]"} transition-all duration-300 max-w-xs absolute top-[90%] left-4 bg-white rounded-md shadow-md `} role="alert">
            <div className="flex p-4">
                <div className="flex-shrink-0 cursor-pointer" onClick={() => setToast(false)}>
                    {
                        messageType === "error"
                        ?
                        <svg className="h-4 w-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                        : 
                        <svg class="h-4 w-4 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    }
                </div>
                
                <div className="ml-3">
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                        {error}
                    </p>
                </div>
            </div>
        </div>
    )
}
