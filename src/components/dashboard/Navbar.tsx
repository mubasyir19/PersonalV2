import React from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';

interface NavbarProps {
  onToogleSidebar: () => void;
}

export default function NavbarDashboard({ onToogleSidebar }: NavbarProps) {
  return (
    <>
      <nav className='px-5 py-3 flex justify-between text-white'>
        <div className='my-auto'>
          <button onClick={onToogleSidebar}>
            <Bars3Icon className='h-6 w-6' />
          </button>
        </div>
        <div className='my-auto'>
          <button className='p-2 flex gap-x-1 bg-white bg-opacity-15 hover:bg-opacity-20 transition-all'>
            <UserCircleIcon className='h-6 w-6' />
            <p>Mahdy Mubasyir</p>
          </button>
        </div>
      </nav>
    </>
  );
}
