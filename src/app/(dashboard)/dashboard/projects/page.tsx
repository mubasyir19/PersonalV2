import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <div className='flex justify-between mb-5'>
        <h2 className='my-auto text-white text-2xl'>Projects</h2>
        <div className='my-auto text-white text-sm flex gap-x-1'>
          <Link href='/dashboard' className='text-sky-400'>
            Dashboard
          </Link>
          /<p className='text-white'>Projects</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='mb-8 text-white'>
          <Link
            href='#skills/tambah'
            className='w-fit text-sm p-2 flex gap-x-1 bg-sky-400 hover:bg-sky-500 transition-all rounded-lg'
          >
            <PlusIcon className='h-6 w-6' />
            <span className='my-auto'>Tambah</span>
          </Link>
        </div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  No
                </th>
                <th scope='col' className='px-6 py-3'>
                  Project Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>1</td>
                <td className='px-6 py-4'>HTML</td>
                <td className='px-6 py-4 flex gap-x-4'>
                  <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    Edit
                  </a>
                  <a href='#' className='font-medium text-red-600 dark:text-red-500 hover:underline'>
                    hapus
                  </a>
                </td>
              </tr>
              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>2</td>
                <td className='px-6 py-4'>CSS</td>
                <td className='px-6 py-4 flex gap-x-4'>
                  <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    Edit
                  </a>
                  <a href='#' className='font-medium text-red-600 dark:text-red-500 hover:underline'>
                    hapus
                  </a>
                </td>
              </tr>
              <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>3</td>
                <td className='px-6 py-4'>JavaScript</td>
                <td className='px-6 py-4 flex gap-x-4'>
                  <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    Edit
                  </a>
                  <a href='#' className='font-medium text-red-600 dark:text-red-500 hover:underline'>
                    hapus
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
