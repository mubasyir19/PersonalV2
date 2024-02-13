import Link from 'next/link';
import React from 'react';
import { HomeIcon, TrophyIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';

export default function Dashboard() {
  return (
    <>
      <div className='flex h-screen relative'>
        {/* Sidebar */}
        <aside className='w-60 py-5 bg-gradient-to-t from-blue-900 to-black'>
          <ul className='flex flex-col'>
            <div className='mt-4 text-center'>
              <h2 className='text-xl text-white'>My Dashboard</h2>
            </div>
            <div className='mt-12 flex flex-col'>
              <Link
                href='#'
                className='px-2 py-4 text-sky-500 flex gap-x-4 rounded-r-lg border-l-4 hover:bg-white hover:bg-opacity-10 bg-white bg-opacity-10 border-sky-500'
              >
                <HomeIcon className='h-6 w-6' />
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                  />
                </svg> */}
                <p className='my-auto'>Dashboard</p>
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white flex gap-x-4 rounded-r-lg border-l-4 border-transparent hover:bg-white hover:bg-opacity-10'
              >
                <TrophyIcon className='h-6 w-6' />
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-sky-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0'
                  />
                </svg> */}
                <p className='my-auto'>Skills</p>
              </Link>
              <Link
                href='#'
                className='px-2 py-4 text-white flex gap-x-4 rounded-r-lg border-l-4 border-transparent hover:bg-white hover:bg-opacity-10'
              >
                <PresentationChartLineIcon className='h-6 w-6' />
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
                  />
                </svg> */}
                <p className='my-auto'>Projects</p>
              </Link>
            </div>
          </ul>
        </aside>
        <div className='p-5 flex-1 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <nav className='flex justify-between text-white'>
            <div className=''>
              <p>menu</p>
            </div>
            <div className=''>
              <Link href='#'>Logout</Link>
            </div>
          </nav>
          <main className='mt-20'>
            <div className='grid grid-cols-4 gap-x-4'>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
              <div className='card h-32 w-full bg-gradient-to-tl from-blue-900 to-black'></div>
            </div>
          </main>
        </div>
        {/* <p className='text-white'>Mahdy</p> */}
        {/* <div className='absolute bottom-0 left-28 z-0'>
          <div className='h-96 w-96 bg-blue-500 bg-opacity-90 rounded-full blur-3xl'></div>
        </div> */}
        {/* <div className='absolute top-40 right-40 z-10'>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
        </div> */}
        {/* <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
          <div className='h-96 w-96 bg-blue-500 rounded-full blur-3xl'></div>
        </div> */}
      </div>
    </>
  );
}
