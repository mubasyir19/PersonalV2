'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // console.log('response', data.token);
      // console.log('response data', data);

      if (data.token) {
        Swal.fire({
          title: 'Sign in successfully',
          icon: 'success',
        });

        console.log('TOKEN => ', data.token);

        const tokenBase64 = btoa(data.token);
        localStorage.setItem('token', tokenBase64);
        router.push('/dashboard');
      } else {
        Swal.fire({
          title: 'Failed Sign in ',
          icon: 'error',
          text: data.message,
        });
      }
    } catch (error) {
      console.error('An error occured', error);
    }
  };

  return (
    <form
      className='w-80 p-4 flex flex-col gap-y-4 bg-gradient-to-tl border border-blue-900 from-blue-900 to-black rounded-lg'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-semibold text-center text-white'>Login</h2>
      <div className='form-group'>
        <label className='text-white'>Username</label>
        <input
          type='text'
          name='username'
          className='w-full p-2 border-2 text-base text-white border-slate-300 rounded-lg placeholder:italic placeholder:text-slate-400 placeholder:text-sm bg-transparent'
          placeholder='Type your username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label className='text-white'>Password</label>
        <input
          type='password'
          name='password'
          className='w-full p-2 border-2 text-base text-white border-slate-300 rounded-lg placeholder:italic placeholder:text-slate-400 placeholder:text-sm bg-transparent'
          placeholder='Type your password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <button type='submit' className='w-full py-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg'>
          Login
        </button>
      </div>
    </form>
  );
}
