"use client";

import { listDesign, portfolios } from "@/data/data";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // const portfolioSection = portfolios.map()
    <section
      id="portfolio"
      className="mx-auto mt-12 px-3 text-white lg:px-28 2xl:w-3/4"
    >
      <h1 className="mb-2 text-center text-2xl underline underline-offset-8 lg:text-4xl">
        My Project
      </h1>
      <p className="my-4 text-xl">Website</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {portfolios
          .sort((a, b) => b.id - a.id)
          .map((portoflio) => {
            return (
              <div
                key={portoflio.id}
                className="card rounded-2xl border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black p-3"
                data-aos="zoom-in-up"
              >
                <Image
                  src={portoflio.image}
                  width={500}
                  height={300}
                  alt="photo-project"
                  className="h-auto w-full rounded-xl object-cover"
                />
                <div className="mt-4">
                  <div className="flex items-center gap-x-3">
                    <h3 className="text-xl font-semibold">{portoflio.name}</h3>
                    <Link href={portoflio.link} target="_blank">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#006efe]"
                      >
                        <path
                          d="M7 3H1V17H15V11"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 9L16 2"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 1H17V7"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="tex">{portoflio.tools}</p>
                </div>
              </div>
            );
          })}
      </div>
      <p className="my-4 text-xl">Design</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {listDesign
          .sort((a, b) => b.id - a.id)
          .map((design) => {
            return (
              <div
                key={design.id}
                className="card rounded-2xl border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black p-3"
                data-aos="zoom-in-up"
              >
                <Image
                  src={design.image}
                  width={500}
                  height={300}
                  alt="photo-project"
                  className="h-auto w-full rounded-xl object-cover"
                />
                <div className="mt-4">
                  <div className="flex items-center gap-x-3">
                    <h3 className="text-xl font-semibold">{design.name}</h3>
                    <Link href={design.link} target="_blank">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#006efe]"
                      >
                        <path
                          d="M7 3H1V17H15V11"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 9L16 2"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 1H17V7"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="tex">{design.tools}</p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
