'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { HomeIcon, TrophyIcon, Bars3Icon, UserCircleIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import SidebarDashboard from '@/components/dashboard/Sidebar';
import NavbarDashboard from '@/components/dashboard/Navbar';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toogleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className='flex h-screen relative'>
        {/* Sidebar */}
        <SidebarDashboard isSidebarOpen={isSidebarOpen} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <NavbarDashboard onToogleSidebar={toogleOpenSidebar} />
          <main className='px-5 mt-5'>
            <div className='flex justify-between mb-5'>
              <h2 className='my-auto text-white text-2xl'>Dashboard</h2>
              <div className='my-auto text-white text-sm flex gap-x-1'>
                <Link href='/dashboard' className='text-sky-400'>
                  Dashboard
                </Link>
              </div>
            </div>
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
