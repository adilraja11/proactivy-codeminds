'use client'

import { useState } from 'react'
import toast from 'react-hot-toast';
import { API_URL } from "@/config/apiUrl";
import Image from 'next/image';

export const Register = () => {
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      });

      function handleChangeInput(event) {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value });
      }

      async function handleRegister() {
        const {firstName, lastName, email, password} = registerData;

        if (!firstName || !lastName || !email || !password) {
            toast.error('All field must be filled');
            return;
        }

        const res = await fetch("/api/v2/auth/register", {
            method: "POST",
            body: JSON.stringify(registerData),
        });

        const {data, message} = await res.json();
        toast.success(message);
        window.location.replace(`${API_URL}/login`);
        console.log(data);
      }
  return (
    <div className='flex'>
      <main className='w-1/2 h-screen space-y-6 flex flex-col justify-center items-center'>
          <div className='text-center'>
              <h1 className='font-bold'>Register</h1>
              <p>Create your Account for Proactivy</p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
              <input className='input input-bordered input-primary' type='text' name='firstName' placeholder='First Name' onChange={handleChangeInput}/>
              <input className='input input-bordered input-primary' type='text' name='lastName' placeholder='Last Name' onChange={handleChangeInput}/>
          </div>
          <input className='input input-bordered input-primary w-full max-w-lg' type='email' name='email' placeholder='email@domain.com' onChange={handleChangeInput}/>
          <input className='input input-bordered input-primary w-full max-w-lg' type='password' name='password' placeholder='password' onChange={handleChangeInput}/>
          <button className='w-full max-w-lg text-white' onClick={handleRegister}>Register</button>
      </main>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <Image width={600} height={600} src="/signup-vektor.svg"/>
      </div>
    </div>
  )
}
