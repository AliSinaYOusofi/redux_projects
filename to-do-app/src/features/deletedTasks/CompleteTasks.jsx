import React from 'react'
import { useSelector } from 'react-redux';

export default function CompleteTasks() {
    
  const todos = useSelector(state => state.deleted.value.filter(todo => todo !== null));
  
  console.log(todos);
  const todosList = todos.map( item => (
      <div key={item.id} href="#d" className="relative w-[40%] block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
       
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg underline font-bold text-gray-900 sm:text-xl">
              {item.taskName}
            </h3>
          </div>
  
          
        </div>
  
        <div className="mt-4">
          <p className="text-sm text-start text-gray-500">
            {item.description}
          </p>
        </div>
  
        <div className="mt-6 flex justify-between gap-4 sm:gap-6">
  
          <div className="flex gap-x-5">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Starting</dt>
              <dd className="text-xs text-gray-500">{item.startDate}</dd>
            </div>
  
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Ending</dt>
              <dd className="text-xs text-gray-500">{item.endDate}</dd>
            </div>
          </div>
          
          
          <span> Completed</span>
        
        </div>
      </div>
  ));

  return (
    <div className="w-full flex gap-x-2 flex-wrap justify-center">
     {todosList.length ? todosList : <h1 className="p-10 font-extrabold text-5xl shadow-lg rounded-md"> No Completed Tasks</h1>}
    </div>
  )
}
