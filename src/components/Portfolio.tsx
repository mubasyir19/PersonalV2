import { listDesign, portfolios } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    // const portfolioSection = portfolios.map()
    <section className="mx-auto mt-12 px-3 text-white lg:px-28 2xl:w-3/4">
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
                className="h-auto w-full rounded-xl object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{portoflio.name}</h3>
                <p className="tex">{portoflio.tools}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="my-4 text-xl">Design</p>
      <p className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {listDesign.map((design) => {
          return (
            <div
              key={design.id}
              className="card rounded-2xl border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black p-3"
            >
              <Image
                src={design.image}
                width={500}
                height={300}
                alt="photo-project"
                className="h-auto w-full rounded-xl object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{design.name}</h3>
                <p className="tex">{design.tools}</p>
              </div>
            </div>
          );
        })}
      </p>
    </section>
  );
}
