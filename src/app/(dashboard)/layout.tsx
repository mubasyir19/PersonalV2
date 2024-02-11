import { Poppins } from 'next/font/google';
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
        <main>{children}</main>
      </body>
    </html>
  );
}
