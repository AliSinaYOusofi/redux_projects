import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './taskSlice';
import { addToDelete } from '../deletedTasks/deleteSlice';

export default function TodosList() {

  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todoData, setTodoData] = useState(null);

  const todos = useSelector(state => state.tasks.value);
  const dispatch = useDispatch();

  const todosList = todos.map( item => (
    <div key={item.id} href="#d" className="relative w-[40%] block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
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
        
        
        <div>
        <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
          <Link to={`/todos/${item.id}`}
            className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
            title="Edit Todo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>

          <span
            className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative cursor-pointer"
            title="Delete Todo"
            onClick={ () => {
              setShowModalAndTodoId(item.id); 
              setTodoData({id: item.id, taskName: item.taskName, description: item.description, startDate: item.startDate, endDate: item.endDate})
            }}
          >
            <svg
              
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
      </span>
      </div>
      
      </div>
    </div>
  ));
 
  const ToggleModal = () => {
    return (
      <div id="popup-modal" tabindex="-1" className="z-50  p-4 overflow-x-hidden overflow-y-auto">
        <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
                <button onClick={() => setShowModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:shadow-lg shadow-black/20 rounded-full text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="popup-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                    <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                    <button onClick={deleteATodo} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Yes, I'm sure
                    </button>
                    <button data-modal-hide="popup-modal" type="button" className="text-gray-50 rounded-md text-sm font-medium px-5 py-2.5 bg-green-400" onClick={() => setShowModal(false)}>No, cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
  const setShowModalAndTodoId = (id) => {
    setShowModal(true);
    setTodoId(id);
  }

  const deleteATodo = () => {
    dispatch(deleteTodo({id: todoId}));
    addingToDelete();
    setShowModal(false);
  }

  const addingToDelete = () => {
    
    console.log(todoData);
    
    dispatch(addToDelete(todoData))
  }

  return (
    <div className="flex h-full relative items-center justify-start flex-wrap gap-x-2 gap-y-3">
      
      {todosList.length ? todosList : <h1 className="p-10 font-extrabold text-5xl shadow-lg rounded-md"> No Pending Tasks</h1>}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 ">
        { showModal ? <ToggleModal /> : null }
      </div>
    </div>

  )
}
