import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../services/operations/authAPI"
import { apiConnector } from '../services/apiConnector';
import { authAPIs } from '../services/apis';
import { useNavigate } from 'react-router-dom';
// function Login(props) {

//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     })
//     const { email, password } = formData;
//     const handleChange = (event) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             [event.target.name]: event.target.value
//         }))
//     }
//     const handleSubmit = async(event) => {
//         event.preventDefault();
//         dispatch(login(formData,navigate));

//     }
//     return (
//         <>
//             <div >
//                 <div className="auth">
//                     <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
//                         <input
//                             required
//                             type='text'
//                             onChange={handleChange}
//                             placeholder='Enter Email'
//                             name="email"
//                             value={email}
//                             className='rounded-[25px]'
//                         />
//                         <input
//                             required
//                             type='text'
//                             onChange={handleChange}
//                             placeholder='Enter Password'
//                             name="password"
//                             value={password}
//                             className='rounded-[25px]'
//                         />
//                         <button type='submit'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>

//     );
// }

// export default Login;


export default function Login() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;
    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        dispatch(login(formData,navigate));

    }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                     onChange={handleChange}
                    id="password"
                    name="password"
                    value={password}
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  