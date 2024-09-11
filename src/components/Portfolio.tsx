import { portfolios } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    // const portfolioSection = portfolios.map()
    <section className="mt-12 px-3 text-white lg:px-28">
      <h1 className="mb-2 text-center text-2xl underline underline-offset-8 lg:text-4xl">
        My Project
      </h1>
      <p className="my-4 text-xl">Website</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {portfolios.map((portoflio) => {
          return (
            <div
              key={portoflio.id}
              className="card rounded-2xl border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black p-3"
            >
              <Image
                src={portoflio.image}
                width={500}
                height={300}
                alt="photo-project"
                className="h-auto w-full rounded-xl"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{portoflio.name}</h3>
                <p className="tex">{portoflio.tools}</p>
              </div>
            </div>
          );
        })}
        {/* <div
          className='card py-8 text-center border-2 border-[#002352] rounded-md bg-gradient-to-tr from-blue-900 via-black to-black'
          data-aos='flip-left'
          data-aos-duration='2000'
        >
          <Image src='/icons/HTML.png' height={72} width={72} className='mx-auto h-20 w-auto' alt='html' />
          <p className='mt-4 text-xl font-semibold'>HTML</p>
        </div>
        <div
          className='card py-8 text-center border-2 border-[#002352] rounded-md bg-gradient-to-tr from-blue-900 via-black to-black'
          data-aos='flip-left'
          data-aos-duration='2000'
        >
          <Image src='/icons/CSS.png' height={72} width={72} className='mx-auto h-20 w-auto' alt='css' />
          <p className='mt-4 text-xl font-semibold'>CSS</p>
        </div>
        <div
          className='card py-8 text-center border-2 border-[#002352] rounded-md bg-gradient-to-tr from-blue-900 via-black to-black'
          data-aos='flip-left'
          data-aos-duration='2000'
        >
          <Image src='/icons/javascript.png' height={72} width={72} className='mx-auto h-20 w-auto' alt='javascript' />
          <p className='mt-4 text-xl font-semibold'>JavaScript</p>
        </div>
        <div
          className='card py-8 text-center border-2 border-[#002352] rounded-md bg-gradient-to-tr from-blue-900 via-black to-black'
          data-aos='flip-left'
          data-aos-duration='2000'
        >
          <Image src='/icons/golang.png' height={72} width={72} className='mx-auto h-20 w-auto' alt='golang' />
          <p className='mt-4 text-xl font-semibold'>Golang</p>
        </div> */}
      </div>
    </section>
  );
}
