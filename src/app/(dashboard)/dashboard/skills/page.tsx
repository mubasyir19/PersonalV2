'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface SkillType {
  name: string;
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataSkills = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/skill');
        const data = await response.json();
        console.log(data);
        setSkills(data.data);
      } catch (error) {
        console.log('Error occured', error);
        setError('An error occurred while fetching data');
      }
      setIsLoading(false);
    };

    dataSkills();
  }, []);

  return (
    <>
      <div className='flex justify-between mb-5'>
        <h2 className='my-auto text-white text-2xl'>Skills</h2>
        <div className='my-auto text-white text-sm flex gap-x-1'>
          <Link href='/dashboard' className='text-sky-400'>
            Dashboard
          </Link>
          /<p className='text-white'>Skills</p>
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
                  Skill Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                    <td className='px-6 py-4 font-medium text-gray-900 dark:text-white text-center' colSpan={3}>
                      Loading...
                    </td>
                  </tr>
                </>
              ) : error ? (
                <>
                  <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                    <td className='px-6 py-4 font-medium text-gray-900 dark:text-white text-center' colSpan={3}>
                      An error occured failed get data ...
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {skills.map((skill, index) => (
                    <>
                      <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                        <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>{index + 1}</td>
                        <td className='px-6 py-4'>{skill.name}</td>
                        <td className='px-6 py-4 flex gap-x-4'>
                          <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                            Edit
                          </a>
                          <a href='#' className='font-medium text-red-600 dark:text-red-500 hover:underline'>
                            hapus
                          </a>
                        </td>
                      </tr>
                    </>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
