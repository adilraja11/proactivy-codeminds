'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';
import { API_URL } from "@/config/apiUrl";
import Image from 'next/image';

export const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });

      function handleChangeInput(event) {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
      }

      async function handleLogin() {
        const {email, password} = loginData;

        if (!email || !password) {
            toast.error('All field must be filled');
            return;
        }
      
        const res = await fetch("/api/v2/auth/login", {
            method: "POST",
            body: JSON.stringify(loginData),
        });

        if (res.status === 401 || res.status === 404) {
          const { errorMessage } = await res.json();
          toast.error(errorMessage);
          return;
        }

        const {data, message} = await res.json();
        localStorage.setItem("user", JSON.stringify(data));
        toast.success(message);
        window.location.replace(API_URL);
        // console.log(data);
      }
  return (
    <div className='flex'>
      <main className='w-1/2 h-screen space-y-6 flex flex-col justify-center items-center'>
          <div className='text-center'>
              <h1 className='font-bold'>Welcome Back to Proactivy</h1>
              <p>Log In to your account.</p>
          </div>
          <input className='input input-bordered input-primary w-full max-w-lg' type='email' name='email' placeholder='Enter your email' onChange={handleChangeInput}/>
          <input className='input input-bordered input-primary w-full max-w-lg' type='password' name='password' placeholder='Enter your password' onChange={handleChangeInput}/>
          <button className='w-full max-w-lg text-white' onClick={handleLogin}>Login</button>
      </main>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <Image width={600} height={600} src="/login-vektor.svg"/>
      </div>
    </div>
  )
}
