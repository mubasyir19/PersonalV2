'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  ComputerDesktopIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';
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
              <div className='card h-32 w-full p-4 flex justify-between text-white bg-gradient-to-tl from-blue-900 to-black'>
                <div className=''>
                  <h3 className='text-4xl font-semibold'>8</h3>
                  <p className='mt-3 text-lg'>Frameworks</p>
                </div>
                <div className=''>
                  <CodeBracketSquareIcon className='h-20 w-20 text-white text-opacity-20' />
                </div>
              </div>
              <div className='card h-32 w-full p-4 flex justify-between text-white bg-gradient-to-tl from-blue-900 to-black'>
                <div className=''>
                  <h3 className='text-4xl font-semibold'>2</h3>
                  <p className='mt-3 text-lg'>Databases</p>
                </div>
                <div className=''>
                  <CircleStackIcon className='h-20 w-20 text-white text-opacity-20' />
                </div>
              </div>
              <div className='card h-32 w-full p-4 flex justify-between text-white bg-gradient-to-tl from-blue-900 to-black'>
                <div className=''>
                  <h3 className='text-4xl font-semibold'>5</h3>
                  <p className='mt-3 text-lg'>Softwares</p>
                </div>
                <div className=''>
                  <ComputerDesktopIcon className='h-20 w-20 text-white text-opacity-20' />
                </div>
              </div>
              <div className='card h-32 w-full p-4 flex justify-between text-white bg-gradient-to-tl from-blue-900 to-black'>
                <div className=''>
                  <h3 className='text-4xl font-semibold'>23</h3>
                  <p className='mt-3 text-lg'>Projects</p>
                </div>
                <div className=''>
                  <PresentationChartLineIcon className='h-20 w-20 text-white text-opacity-20' />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
