import React, { useState } from 'react'
import ToastMessage from '../../components/ToastMessage';
import { dateValidator } from '../../functions/dateValidator';
import { updateTodo } from './taskSlice';
import {useDispatch} from 'react-redux';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../app/store';


export default function EditTodos() {

    const {todoId} = useParams();
    const previouseState = store.getState().tasks.value;
    const currentTodo = useSelector(state => state.tasks.value.find(todo => todo.id === todoId));

    console.log(currentTodo);
    const [taskName, setTaskName] = useState(null);
    const [description, setDescription] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState(false);
    const [messageType, setMessageType] = useState(false);

    const dispatch = useDispatch();

    const handleSbumit = () => {

        console.log(taskName, description, startDate, endDate);
        if (! taskName) setError("Task name is required");
        else if (! startDate) setError("Start Date is required");
        else if (! endDate) setError("End Date is required");
        else if (! dateValidator(startDate, endDate)) setError("Start and end date are not compatible");
        else setError(false);

        dispatch(updateTodo({id: todoId, taskName, startDate, endDate, description}));
        const newState = store.getState().tasks.value;

        if (previouseState !== newState) {
            setError("updated successfully");
            setMessageType("success");
        } else {
            setError("Failed to updated todo");
            setMessageType("error");
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full">                
                <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Edit Todo</div>
                
                <div className="editor w-full rounded-md gap-y-3 mx-auto flex flex-col p-4 shadow-lg max-w-2xl">
                    <input onChange={(e) => setTaskName(e.target.value)} className="title border-none outline-none rounded-md bg-gray-100 border border-gray-300 p-2 mb-4" spellcheck="false" placeholder={currentTodo.taskName} type="text" />
                    <textarea onChange={(e) => setDescription(e.target.value)} className="description rounded-lg bg-gray-100 sec p-3 h-60  outline-none" spellcheck="false" placeholder={currentTodo.description}></textarea>
                    
                  
                    <label htmlFor="start" className="w-full flex items-start flex-col">
                        Start Date
                        <input onChange={(e) => setStartDate(e.target.value)} value={currentTodo.startDate} name="start" type="date" className="border-none bg-gray-100 outline-none text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  " placeholder="Select date start" />
                    </label>
                    <label htmlFor="end" className=" w-full flex items-start flex-col">
                        Finish date
                        <input onChange={(e) => setEndDate(e.target.value)} value={currentTodo.endDate} name="end" type="date" className="border-none bg-gray-100 outline-none text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  " placeholder="Select date end" />
                    </label>
                
                    <div className="buttons flex w-full">
                        <button onClick={handleSbumit} className=" py-2 w-full transition-all duration-300 hover:scale-[1.01] cursor-pointer  ml-2 bg-yellow-400 text-white rounded-md">Update Task</button>
                        <Link to="/" className=" py-2 w-full transition-all duration-300 hover:scale-[1.01] cursor-pointer  ml-2 bg-white text-black border-yellow-400 border-2 rounded-md">Home</Link>
                    </div>
                </div>
              
            </div>
            <div className=" flex flex-col items-center">
                <ToastMessage error={error} messageType={messageType}/>
            </div>
        </div>
    )
}
