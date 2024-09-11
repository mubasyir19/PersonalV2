import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t-2 border-[#002352] p-6 lg:flex lg:justify-between">
      <div className="my-auto gap-x-2 lg:flex">
        <Image
          src="/images/logo.png"
          height={200}
          width={200}
          alt="logo"
          className="mx-auto h-10 w-10 lg:mx-0 lg:my-auto"
        />
        <div className="mt-2 text-center lg:my-auto lg:text-start">
          <p className="text-xs text-white">Practice like you never won</p>
          <p className="text-xs text-white">Play like you never lost</p>
        </div>
      </div>
      <div className="mx-auto mt-6 text-white lg:my-auto">
        <ul className="flex justify-center gap-x-10">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Skills</Link>
          </li>
          <li>
            <Link href="">Project</Link>
          </li>
        </ul>
      </div>
      <p className="mt-6 text-center text-white lg:my-auto">
        &copy;Copyright 2024. By Maher
      </p>
    </footer>
  );
}
