"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-12 px-3 text-white lg:px-28 2xl:w-3/4"
    >
      <div className="flex flex-col gap-x-12 overflow-hidden rounded-2xl border-2 border-[#002352] bg-black p-2 shadow-2xl md:flex-row">
        <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-xl bg-[#002352] p-10 text-white md:w-2/5">
          <div className="text-center md:text-start">
            <h4 className="text-2xl font-semibold">
              Contact <span className="text-sky-400">Information</span>
            </h4>
            <p className="mt-1">Say something to start a live chat!</p>
          </div>
          <div className="mt-4 flex w-full flex-col gap-y-4 lg:mt-28 lg:gap-y-12">
            <div className="mx-auto flex flex-col gap-x-6 text-center md:mx-0 md:flex-row md:text-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-auto md:mx-0"
              >
                <path
                  d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                  fill="white"
                />
                <path
                  d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061 8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113 3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798 5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298 6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414 18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
                  fill="white"
                />
              </svg>
              <p className="my-auto mt-2 md:mt-0">087774026818</p>
            </div>
            <div className="mx-auto flex flex-col gap-x-6 text-center md:mx-0 md:flex-row md:text-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-auto md:mx-0"
              >
                <path
                  d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="white"
                />
              </svg>
              <p className="my-auto mt-2 md:mt-0">m.mubasyir19@gmail.com</p>
            </div>
            <div className="mx-auto flex flex-col gap-x-6 text-center md:mx-0 md:flex-row md:text-start">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto my-auto md:mx-0"
              >
                <path
                  d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                  fill="white"
                />
              </svg>
              <p className="my-auto mt-2 md:mt-0">
                Jatibening, Bekasi, Indonesia
              </p>
            </div>
          </div>
          <div className="mt-20 flex gap-x-6 lg:mt-40">
            <Link
              href="https://www.linkedin.com/in/mahdy-mubasyir-699424210"
              className="mx-auto my-auto md:mx-0"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/mubasyirmahdy"
              className="mx-auto my-auto md:mx-0"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.40795 0.045C5.20773 0.00818181 5.46273 0 7.5 0C9.53727 0 9.79227 0.00886363 10.5914 0.045C11.3905 0.0811364 11.9359 0.208636 12.4132 0.393409C12.913 0.582273 13.3664 0.8775 13.7414 1.25932C14.1232 1.63364 14.4177 2.08636 14.6059 2.58682C14.7914 3.06409 14.9182 3.60955 14.955 4.40727C14.9918 5.20841 15 5.46341 15 7.5C15 9.53727 14.9911 9.79227 14.955 10.592C14.9189 11.3898 14.7914 11.9352 14.6059 12.4125C14.4177 12.913 14.1227 13.3665 13.7414 13.7414C13.3664 14.1232 12.913 14.4177 12.4132 14.6059C11.9359 14.7914 11.3905 14.9182 10.5927 14.955C9.79227 14.9918 9.53727 15 7.5 15C5.46273 15 5.20773 14.9911 4.40795 14.955C3.61023 14.9189 3.06477 14.7914 2.5875 14.6059C2.08699 14.4177 1.63351 14.1227 1.25864 13.7414C0.877077 13.3668 0.581806 12.9136 0.393409 12.4132C0.208636 11.9359 0.0818182 11.3905 0.045 10.5927C0.00818181 9.79159 0 9.53659 0 7.5C0 5.46273 0.00886363 5.20773 0.045 4.40864C0.0811364 3.60955 0.208636 3.06409 0.393409 2.58682C0.582084 2.08642 0.877581 1.63317 1.25932 1.25864C1.63366 0.87716 2.08669 0.581893 2.58682 0.393409C3.06409 0.208636 3.60955 0.0818182 4.40727 0.045H4.40795ZM10.5307 1.395C9.73977 1.35886 9.5025 1.35136 7.5 1.35136C5.4975 1.35136 5.26023 1.35886 4.46932 1.395C3.73773 1.42841 3.34091 1.55045 3.07636 1.65341C2.72659 1.78977 2.47636 1.95136 2.21386 2.21386C1.96503 2.45594 1.77353 2.75065 1.65341 3.07636C1.55045 3.34091 1.42841 3.73773 1.395 4.46932C1.35886 5.26023 1.35136 5.4975 1.35136 7.5C1.35136 9.5025 1.35886 9.73977 1.395 10.5307C1.42841 11.2623 1.55045 11.6591 1.65341 11.9236C1.77341 12.2489 1.965 12.5441 2.21386 12.7861C2.45591 13.035 2.75114 13.2266 3.07636 13.3466C3.34091 13.4495 3.73773 13.5716 4.46932 13.605C5.26023 13.6411 5.49682 13.6486 7.5 13.6486C9.50318 13.6486 9.73977 13.6411 10.5307 13.605C11.2623 13.5716 11.6591 13.4495 11.9236 13.3466C12.2734 13.2102 12.5236 13.0486 12.7861 12.7861C13.035 12.5441 13.2266 12.2489 13.3466 11.9236C13.4495 11.6591 13.5716 11.2623 13.605 10.5307C13.6411 9.73977 13.6486 9.5025 13.6486 7.5C13.6486 5.4975 13.6411 5.26023 13.605 4.46932C13.5716 3.73773 13.4495 3.34091 13.3466 3.07636C13.2102 2.72659 13.0486 2.47636 12.7861 2.21386C12.544 1.96505 12.2493 1.77355 11.9236 1.65341C11.6591 1.55045 11.2623 1.42841 10.5307 1.395V1.395ZM6.54205 9.81205C7.07704 10.0347 7.67276 10.0648 8.22745 9.89708C8.78215 9.72936 9.2614 9.37426 9.58337 8.89244C9.90534 8.41062 10.05 7.83196 9.99276 7.2553C9.93548 6.67864 9.67978 6.13975 9.26932 5.73068C9.00766 5.46919 8.69128 5.26896 8.34295 5.14442C7.99463 5.01987 7.62302 4.97411 7.25488 5.01042C6.88675 5.04673 6.53124 5.16421 6.21396 5.35441C5.89667 5.5446 5.62551 5.80278 5.41998 6.11035C5.21445 6.41793 5.07967 6.76724 5.02535 7.13316C4.97103 7.49907 4.99851 7.87247 5.10582 8.22649C5.21313 8.5805 5.3976 8.90632 5.64595 9.18049C5.89429 9.45466 6.20034 9.67035 6.54205 9.81205ZM4.77409 4.77409C5.13206 4.41612 5.55704 4.13216 6.02475 3.93843C6.49246 3.7447 6.99375 3.64498 7.5 3.64498C8.00625 3.64498 8.50754 3.7447 8.97525 3.93843C9.44296 4.13216 9.86794 4.41612 10.2259 4.77409C10.5839 5.13206 10.8678 5.55704 11.0616 6.02475C11.2553 6.49246 11.355 6.99375 11.355 7.5C11.355 8.00625 11.2553 8.50754 11.0616 8.97525C10.8678 9.44296 10.5839 9.86794 10.2259 10.2259C9.50295 10.9489 8.52241 11.355 7.5 11.355C6.47759 11.355 5.49705 10.9489 4.77409 10.2259C4.05113 9.50295 3.64498 8.52241 3.64498 7.5C3.64498 6.47759 4.05113 5.49705 4.77409 4.77409V4.77409ZM12.21 4.21909C12.2987 4.13541 12.3697 4.03478 12.4188 3.92316C12.468 3.81155 12.4942 3.69121 12.496 3.56927C12.4977 3.44733 12.475 3.32628 12.4292 3.21328C12.3833 3.10028 12.3153 2.99762 12.2291 2.91139C12.1428 2.82516 12.0402 2.75711 11.9272 2.71126C11.8142 2.66542 11.6931 2.64271 11.5712 2.64449C11.4492 2.64627 11.3289 2.67249 11.2173 2.72161C11.1057 2.77073 11.005 2.84175 10.9214 2.93045C10.7586 3.10297 10.6695 3.33213 10.673 3.56927C10.6764 3.80641 10.7722 4.03287 10.9399 4.20057C11.1076 4.36828 11.334 4.46402 11.5712 4.46748C11.8083 4.47093 12.0375 4.38183 12.21 4.21909V4.21909Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              href="https://github.com/mubasyir19"
              className="mx-auto my-auto md:mx-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="absolute bottom-16 right-16 z-10 h-32 w-32 rounded-full bg-[#FFF9F9] bg-opacity-10"></div>
          <div className="absolute -bottom-24 -right-24 z-10 h-64 w-64 rounded-full bg-[#FFF9F9] bg-opacity-10"></div>
        </div>
        <form
          className="relative mt-8 px-5 pb-20 md:px-0 lg:mt-16 lg:flex-1 lg:pr-12"
          onSubmit={(event) => {
            event.preventDefault();
            alert("under maintenance");
          }}
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-11 lg:grid-cols-2">
            <div className="w-full">
              <label
                htmlFor="firstname"
                className="text-[#8D8D8D] peer-focus:text-black"
              >
                First Name
              </label>
              <br />
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="John"
                className="peer mt-3 w-full border-b-2 border-[#002352] bg-black py-1 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastname"
                className="text-[#8D8D8D] peer-focus:text-black"
              >
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Doe"
                className="mt-3 w-full border-b-2 border-[#002352] bg-black py-1 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-[#8D8D8D] peer-focus:text-black"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johnDoe@gmail.com"
                className="mt-3 w-full border-b-2 border-[#002352] bg-black py-1 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phoneNumber"
                className="text-[#8D8D8D] peer-focus:text-black"
              >
                Phone Number
              </label>
              <br />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+62 877 402 6818"
                className="mt-3 w-full border-b-2 border-[#002352] bg-black py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Select Subject?</p>
            <div className="mt-3 grid grid-cols-2 gap-x-5 lg:grid-cols-4">
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-white"
                >
                  General Inquiry
                </label>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-white"
                >
                  General Inquiry
                </label>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-white"
                >
                  General Inquiry
                </label>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-white"
                >
                  General Inquiry
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={1}
              placeholder="Write your message.."
              className="mt-3 w-full border-b-2 border-[#002352] bg-black py-1 focus:outline-none"
            ></textarea>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="rounded-md bg-blue-600 px-12 py-3 text-white">
              Send Message
            </button>
          </div>
          <div className="absolute -bottom-10 right-32">
            <Image
              src="/images/letter_send.png"
              width={240}
              height={112}
              alt="letter send"
              className="h-36 w-fit lg:h-60 xl:h-36"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
