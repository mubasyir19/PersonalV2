import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default function Hero() {
  return (
    <section className='px-20 mb-20'>
      <div className='py-20 w-full'>
        <Image
          src='/images/me.jpeg'
          className='mx-auto h-52 object-cover p-1 border-2 border-[#006efe]'
          height={200}
          width={200}
          alt='my-pict'
        />
        <div className='text-center'>
          <h1 className='text-white mt-12 mb-4 text-2xl'>
            I&apos;m <span>Mahdy Mubasyir</span>
          </h1>
          <h3 className='text-white text-xl mb-4'>Programming Enthusiast</h3>
        </div>
        <div className='flex justify-center'>
          <Link href='#' className='text-white'>
            <FontAwesomeIcon icon={['fab', 'github']} size='xs' />
          </Link>
          <Link href='#' className='text-white'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size='xs' />
          </Link>
          <Link href='#' className='text-white'>
            <FontAwesomeIcon icon={['fab', 'instagram']} size='xs' />
          </Link>
          <Link href='#' className='text-white'>
            <FontAwesomeIcon icon={['fab', 'behance']} size='xs' />
          </Link>
        </div>
      </div>
    </section>
  );
}
