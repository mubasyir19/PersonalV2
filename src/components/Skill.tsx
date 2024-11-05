"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skill() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="skills"
      className="mx-auto mt-12 px-3 text-white lg:px-28 2xl:w-3/4"
    >
      <h1 className="mb-2 text-center text-2xl underline underline-offset-8 lg:text-4xl">
        My Skills
      </h1>
      <p className="my-4 text-xl">Programming Language</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/HTML.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="html"
          />
          <p className="mt-4 text-xl font-semibold">HTML</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/CSS.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="css"
          />
          <p className="mt-4 text-xl font-semibold">CSS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/javascript.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="javascript"
          />
          <p className="mt-4 text-xl font-semibold">JavaScript</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/typescript.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="typescript"
          />
          <p className="mt-4 text-xl font-semibold">TypeScript</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/golang.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="golang"
          />
          <p className="mt-4 text-xl font-semibold">Golang</p>
        </div>
      </div>
      <p className="my-4 text-xl">Library / Framework</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/reactjs.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="reactjs"
          />
          <p className="mt-4 text-xl font-semibold">React JS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/node.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="nodejs"
          />
          <p className="mt-4 text-xl font-semibold">Node JS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/next.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="nextjs"
          />
          <p className="mt-4 text-xl font-semibold">Next JS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/nestjs.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="nestjs"
          />
          <p className="mt-4 text-xl font-semibold">Nest JS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/express.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="expressjs"
          />
          <p className="mt-4 text-xl font-semibold">Express JS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/reactjs.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="react-native"
          />
          <p className="mt-4 text-xl font-semibold">React Native</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/fiber.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="gofiber"
          />
          <p className="mt-4 text-xl font-semibold">GoFiber</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/tailwind.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="tailwindcss"
          />
          <p className="mt-4 text-xl font-semibold">TailwindCSS</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/bootstrap.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="bootstrap"
          />
          <p className="mt-4 text-xl font-semibold">Bootstrap</p>
        </div>
      </div>
      <p className="my-4 text-xl">Database</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div
          className="card w-full rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/mongodb.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="mongodb"
          />
          <p className="mt-4 text-xl font-semibold">MongoDB</p>
        </div>
        <div
          className="card w-full rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/mysql.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="mysql"
          />
          <p className="mt-4 text-xl font-semibold">MySQL</p>
        </div>
      </div>
      <p className="my-4 text-xl">Software / Tools</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/vscode.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="vscode"
          />
          <p className="mt-4 text-xl font-semibold">VsCode</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/git.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="git"
          />
          <p className="mt-4 text-xl font-semibold">Git</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/github-white.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="github"
          />
          <p className="mt-4 text-xl font-semibold">Github</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/postman.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="postman"
          />
          <p className="mt-4 text-xl font-semibold">Postman</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/figma.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="figma"
          />
          <p className="mt-4 text-xl font-semibold">Figma</p>
        </div>
        <div
          className="card rounded-md border-2 border-[#002352] bg-gradient-to-tr from-blue-900 via-black to-black py-8 text-center"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <Image
            src="/icons/gcloud.png"
            height={72}
            width={72}
            className="mx-auto h-20 w-auto"
            alt="gcloud"
          />
          <p className="mt-4 text-xl font-semibold">Google Cloud</p>
        </div>
      </div>
    </section>
  );
}
