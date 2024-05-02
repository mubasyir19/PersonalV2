'use client';

import NavbarDashboard from '@/components/dashboard/Navbar';
import SidebarDashboard from '@/components/dashboard/Sidebar';
import { siteMetadataDashboard } from '@/config/siteConfig';
import { Poppins } from 'next/font/google';
import { ReactNode, useState } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toogleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang='en'>
      <head>
        <title>{siteMetadataDashboard.title}</title>
      </head>
      <body className={`bg-black ${poppins.className}`}>
        <div className='flex h-screen relative'>
          {/* Sidebar */}
          <SidebarDashboard isSidebarOpen={isSidebarOpen} />
          <div className='flex-1 flex flex-col overflow-hidden'>
            {/* Navbar */}
            <NavbarDashboard onToogleSidebar={toogleOpenSidebar} />
            <main className='px-5 mt-5'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
