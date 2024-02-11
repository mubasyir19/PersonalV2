import Image from 'next/image';
import React from 'react';

export default function Login() {
  return (
    <form className='w-80 p-4 flex flex-col gap-y-4 bg-white rounded-lg'>
      <h2 className='text-2xl font-semibold text-center'>Login</h2>
      <div className='form-group'>
        <label>Email</label>
        <input
          type='text'
          name='email'
          className='w-full p-2 border-2 text-base border-slate-300 rounded-lg placeholder:italic placeholder:text-slate-400 placeholder:text-sm'
          placeholder='Type your email'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          className='w-full p-2 border-2 text-base border-slate-300 rounded-lg placeholder:italic placeholder:text-slate-400 placeholder:text-sm'
          placeholder='Type your password'
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
