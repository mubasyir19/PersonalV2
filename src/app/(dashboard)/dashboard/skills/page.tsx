import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Skills() {
  return (
    <>
      <div className="mb-5 flex justify-between">
        <h2 className="my-auto text-2xl text-white">Skills</h2>
        <div className="my-auto flex gap-x-1 text-sm text-white">
          <Link href="/dashboard" className="text-sky-400">
            Dashboard
          </Link>
          /<p className="text-white">Skills</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-8 text-white">
          <Link
            href="#skills/tambah"
            className="flex w-fit gap-x-1 rounded-lg bg-sky-400 p-2 text-sm transition-all hover:bg-sky-500"
          >
            <PlusIcon className="h-6 w-6" />
            <span className="my-auto">Tambah</span>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-sm uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Skill Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
