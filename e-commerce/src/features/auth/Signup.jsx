import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { signupUser } from './authSlice';
import { useNavigate } from 'react-router';
import { generateHash } from '../../func/genHash';

export default function Login() {
    
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");  
    const error = useSelector(state => state.user.error);
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {

        if (!password) return alert("provide a password");
        else if (!username) return alert("Provide an email");
       
        dispatch(signupUser({
            id: generateHash(username, password),
            username,
            password
        }));

        if (!error) navigation("/login");
    }

    return (
        <div className="flex mt-[7rem] w-[50%] mx-auto flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Go Shawty</p>
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input onChange={(e) => setUsername(e.target.value)} value={username} placeholder="123@ex.com" type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
                <div className="relative">
                <button type="button" onClick={handleSubmit} className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                    rounded-lg transition duration-200 hover:bg-indigo-600 ease">Signup</button>
                </div>
            </div>
            {error && <p className="text-red-500 w-full text-center font-medium mt-10"> {error} </p>}
        </div>
    );
}
