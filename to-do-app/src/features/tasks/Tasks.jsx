import React, { useState } from 'react'

export default function Tasks() {

    const [taskName, setTaskName] = useState(null);
    const [description, setDescription] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full">                
          
                <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Add New To Do</div>
                
                <div className="editor w-full rounded-md gap-y-3 mx-auto w-10/12 flex flex-col p-4 shadow-lg max-w-2xl">
                    <input onChange={(e) => setTaskName(e.target.value)} className="title border-none outline-none rounded-md bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text" />
                    <textarea onChange={(e) => setDescription(e.target.value)} className="description rounded-lg bg-gray-100 sec p-3 h-60  outline-none" spellcheck="false" placeholder="Description of task"></textarea>
                    
                  
                    <label htmlFor="start" className="w-full flex items-start flex-col">
                        Start Date
                        <input onChange={(e) => setStartDate(e.target.value)} name="start" type="date" className="border-none bg-gray-100 outline-none text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  " placeholder="Select date start" />
                    </label>
                    <label htmlFor="end" className="relative w-full flex items-start flex-col">
                        Finish date
                        <input onChange={(e) => setEndDate(e.target.value)} name="end" type="date" className="border-none bg-gray-100 outline-none text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  " placeholder="Select date end" />
                    </label>
                
                    <div className="buttons flex w-full">
                        <button className=" py-2 w-full transition-all duration-300 hover:scale-[1.01] cursor-pointer  ml-2 bg-yellow-400 text-white rounded-md">Add To Do</button>
                    </div>
                </div>
              
            </div>
        </div>
    )
}
