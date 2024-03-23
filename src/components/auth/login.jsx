'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';
import { API_URL } from "@/config/apiUrl";

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
            console.log("All field must be filled");
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
    <main className='space-y-4'>
        <div className='text-center'>
            <h1>Login</h1>
            <p>Welcome back to Proactivy</p>
        </div>
        <input name='email' placeholder='email@domain.com' onChange={handleChangeInput}/>
        <input name='password' placeholder='password' onChange={handleChangeInput}/>
        <button onClick={handleLogin}>Login</button>
    </main>
  )
}
