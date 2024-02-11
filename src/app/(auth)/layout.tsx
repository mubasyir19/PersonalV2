import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { ReactNode } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Dashboard | Mahdy Mubasyir',
  description: 'Mahdy Mubasyir Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='relative w-full h-screen flex justify-center items-center'>
          <div className='absolute top-10'>
            <Image
              src='/images/logo.png'
              width={100}
              height={100}
              className='p-1 border-2 border-[#006efe]'
              alt='logo'
            />
          </div>
          <div className=''>{children}</div>
          <p className='absolute bottom-10 text-white'>Made with &#x2764;&#xfe0f; By Maher</p>
        </main>
      </body>
    </html>
  );
}
