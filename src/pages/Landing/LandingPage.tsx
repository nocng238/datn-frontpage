import { Button } from "@material-tailwind/react";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import DoctorIcon from "@app/assets/landing/doctor.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function LandingPage() {
  return (
    <div className="overflow-x-auto bg-white flex flex-col pb-8">
      <div className="self-stretch flex w-full flex-col items-stretchs max-md:max-w-full">
        <div className="bg-[linear-gradient(81deg,#FFC73B_0%,#FFBCBC_53.29%,#DDA5FF_102.74%)] w-full pl-20 rounded-none max-md:max-w-full max-md:pl-5">
          <div className="gap-5 relative flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className="z-[1] flex flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
                <div className="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-5xl font-bold uppercase bg-clip-text bg-[linear-gradient(81deg,#FFC73B_0%,#FFBCBC_53.29%,#DDA5FF_102.74%)] grow whitespace-nowrap max-md:text-4xl font-black-han-sans">
                    Petcare
                  </div>
                  {/* navbar */}
                  <div className="justify-between items-center self-center flex gap-10 my-auto px-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="text-white text-4xl whitespace-nowrap cursor-pointer hover:text-indigo-400">
                      Service
                    </div>
                    <NavLink
                      to={"/public/doctors"}
                      className="text-white text-4xl hover:text-indigo-400 cursor-pointer"
                    >
                      Doctors
                    </NavLink>
                    <div className="text-white text-4xl hover:text-indigo-400">
                      About
                    </div>
                    <div className="text-white text-4xl hover:text-indigo-400 whitespace-nowrap">
                      Contact
                    </div>
                    <NavLink
                      className="text-white text-4xl bg-amber-300 p-3 rounded-2xl hover:text-indigo-400 hover:bg-amber-600 "
                      to={"/auth/login"}
                    >
                      Login
                    </NavLink>
                  </div>
                </div>
                <div
                  className="text-red-600 text-8xl leading-[159px] tracking-tight items-start self-center max-w-full mt-11 max-md:text-4xl max-md:leading-10 max-md:mt-10 font-black-han-sans mr-[800px]"
                  style={{
                    // fontFamily: "Black Han Sans",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                  }}
                >
                  <span className="text-white">
                    We Care about your <br />
                    pet
                    <br />
                    the same{" "}
                  </span>
                  <span className="text-red-600">way as you</span>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f02de3d77141403e58cfe1cfe8bd3e076c1bb0a277ea959b859a9603e89eb1?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                  className="absolute left-[900px] top-[300px] object-cover object-center inset-0 w-3/6"
                />
              </div>
            </div>
            <div className="absolute flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0 right-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f519faa73f20359fec7f86d15bdeb1e066df020f40b7c6828bd5fbf39ddec47a?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                className="aspect-square object-contain object-center w-full overflow-hidden z-[0] max-md:max-w-full"
              />
            </div>

            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8bd8a160fc48014fc50ab751de7a7050368de310e2fd6fb9080f621a3b99736?apiKey=d1f90749406b400da2bb63e5353ca29d&"
              className="aspect-[1.19] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            /> */}
          </div>
        </div>
        <div className="text-purple-500 text-center z-30 text-6xl font-light leading-[68px] self-center max-w-[604px] mt-40 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
          Everything you need,
          <br />
          all in one piece!
        </div>
      </div>
      <div className="flex-col overflow-hidden relative z-[1] flex  mt-0 w-[1012px] max-w-full justify-center items-stretch pl-5 self-end max-md:mt-0"></div>
      {/* section 2 */}
      <div className="flex items-center justify-between">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08a958a6-ab82-48cd-9238-0147b87d595d?apiKey=d1f90749406b400da2bb63e5353ca29d&"
          className="aspect-[1.09] object-contain object-center w-[804px] overflow-hidden z-[1] max-w-full ml-3.5 -mt-8 self-start"
        />
        <div className="flex mt-0 w-[849px] max-w-full flex-col items-stretch mr-24 self-end max-md:mt-0 max-md:mr-2.5">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="bg-white flex w-full grow flex-col items-stretch mx-auto pl-7 pr-2.5 pt-5 max-md:mt-5 max-md:pl-5">
                  <div className="flex items-stretch gap-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed68ce7fd1ff90a53aa7dad7551a1fed25f86daff51d0e931e81f75e3e6ca80?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[0.98] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-red-400 text-center text-4xl font-light leading-10 my-auto">
                      Pet Food
                    </div>
                  </div>
                  <div className="text-zinc-900 text-2xl font-light leading-7 mt-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus donec quam quis enim ornare.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-white flex w-full grow flex-col items-stretch mx-auto pl-5 pr-2.5 pt-6 max-md:mt-5 max-md:pl-5">
                  <div className="flex items-stretch  gap-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7954c7c2927e3b2e4b409acddd00168f3681660f5a5b9e98ea4f9d55b51294a3?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[0.98] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-teal-400 text-center text-4xl font-light leading-10 my-auto">
                      Grooming
                    </div>
                  </div>
                  <div className="text-zinc-900 text-2xl font-light leading-7 max-w-[380px] mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus donec quam quis enim ornare.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="bg-white flex w-full grow flex-col items-stretch mx-auto pl-6 pr-2.5 pt-5 pb-px max-md:mt-5 max-md:pl-5">
                  <div className="flex  gap-5 items-start">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4ee8a0c3d5aaebb8acc011f6b3a21f96ee2370a54ed9fa17606f8acc732772?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[0.98] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-purple-500 text-center text-4xl font-light leading-10 mt-7">
                      Pet Hotel
                    </div>
                  </div>
                  <div className="text-zinc-900 text-2xl font-light leading-7 max-w-[379px] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus donec quam quis enim ornare.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="bg-white flex w-full grow flex-col items-stretch mx-auto pl-5 pr-2.5 pt-5 max-md:mt-5 max-md:pl-5">
                  <div className="flex items-stretch gap-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/580681286fe88fd4cc129dedcb14c6856d115abf3d2fef138ef13cfc02e77ff6?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[0.98] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-amber-300 text-center text-4xl font-light leading-10 my-auto">
                      Pet Cafe
                    </div>
                  </div>
                  <div className="text-zinc-900 text-2xl font-light leading-7 max-w-[380px] mt-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus donec quam quis enim ornare.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="self-center flex w-full max-w-[1721px] flex-col mt-44 max-md:max-w-full max-md:mt-10">
        <div className="shadow-2xl bg-white self-stretch flex flex-col justify-center items-center px-16 py-12 rounded-[100px] max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1472px] flex-col mt-5 mb-1.5 items-end max-md:max-w-full">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                  <div className="text-black text-9xl font-bold leading-[140px] tracking-tight mt-32 max-md:max-w-full max-md:text-4xl max-md:leading-[50px] max-md:mt-10">
                    <span className="text-slate-500">Proper </span>
                    <span className="text-black">
                      Food <br />
                    </span>
                    <span className="text-slate-500">
                      For your
                      <br />
                    </span>
                    <span className="text-black">Pet</span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-start max-md:max-w-full max-md:mt-10">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3e01b9b70561dbd1beac7364bfde9f443d6e20113568381e9f593972dfadfb9?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[1.01] object-contain object-center w-[421px] overflow-hidden max-w-full"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c186f6b5df1a988c065049017d15462391211f500099e9483560e384e24e57c7?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[1.01] object-contain object-center w-[421px] overflow-hidden max-w-full self-end"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94e751b4c5731c64c77b190a884576a6b5a9b533fec39815dd14979942b95a26?apiKey=d1f90749406b400da2bb63e5353ca29d&"
              className="aspect-[8.04] object-contain object-center w-full overflow-hidden self-stretch mt-9 max-md:max-w-full"
            />
            <div className="justify-between items-center flex w-[413px] max-w-full gap-5 mt-12 px-px max-md:mt-10">
              <div className="text-slate-500 text-3xl font-light leading-6 tracking-wide underline grow whitespace-nowrap my-auto">
                More available brand
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6ab797ed32b42fb1e2b8acf511cc4ad775c30d80791e3f793ff666fb50047f9?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                className="aspect-square object-contain object-center w-[46px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1430px] mt-44 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-1.5 pb-5 px-5 items-start max-md:max-w-full">
                <div className="text-teal-400 text-9xl font-bold leading-[140px] tracking-tight self-stretch whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Grooming
                </div>
                <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-4xl font-light leading-[58px] tracking-tight self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Venenatis, rhoncus dolor, ut rutrum sed fermentum eget. Cursus
                  mattis faucibus senectus cras praesent tortor. Justo, mi nibh
                  ut mauris, pulvinar senectus eu. Vel nullam tincidunt
                  consequat sem.
                </div>
                <div className="bg-black flex items-stretch justify-between gap-5 mt-24 px-20 py-10 rounded-[67px] max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                  <MagnifyingGlassIcon className="aspect-square object-contain object-center w-9 stroke-[1] stroke-white overflow-hidden shrink-0 max-w-full" />
                  <NavLink
                    to={"/public/doctor"}
                    className="text-white uppercase text-4xl leading-4 tracking-wide self-center grow whitespace-nowrap my-auto"
                  >
                    Find doctors now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet={DoctorIcon}
                className="aspect-[0.84] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch mt-44 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-1 pr-6 max-md:mt-4 max-md:pr-5">
                <div className="flex-col overflow-hidden relative flex aspect-[0.7707736389684814] w-full items-stretch pt-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39dc04691a5b703665d4e197883514c18725b8f582515c573e80f812c219bb77?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative flex items-stretch justify-between gap-4 mt-52 pl-4 pr-20 py-5 rounded-none max-md:mt-10 max-md:pr-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebb1a47e2808c42131302545a25ec9b41e0bd088a9f4e2095f5e018a75faa6a?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-white text-xl grow whitespace-nowrap self-start">
                      @Berylcat
                    </div>
                  </div>
                </div>
                <div className="flex-col overflow-hidden relative flex aspect-[1.1208333333333333] w-full items-stretch mt-3.5 pt-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed86eb31f65c322627dfe6ec027574be04e55d015734692e27f9800b8f3bee3?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <div className="relative flex items-stretch justify-between gap-4 mt-24 pl-4 pr-20 py-5 rounded-none max-md:mt-10 max-md:pr-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75b15eb55a38f9d60070be92b68049f4178c085e011a9013c91df2e090c4757f?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-white text-xl grow whitespace-nowrap self-start">
                      @buddyplay
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
              <div className="max-md:max-w-full max-md:mt-3.5 max-md:pr-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch pr-6 max-md:mt-3.5 max-md:pr-5">
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1645021645021645] w-full items-stretch pt-12">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a875aec6982c254cb62800e9a83dd70ae8e9e188221f7c445d6cc9090e7a622?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative flex items-stretch justify-between gap-4 mt-24 pl-4 pr-20 py-5 rounded-none max-md:mt-10 max-md:pr-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7300089350adf6b5bf81877650b554a4915984f48ecc4b50b53ae73ca7e32c?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                          />
                          <div className="text-white text-xl grow whitespace-nowrap self-start">
                            @cheese11
                          </div>
                        </div>
                      </div>
                      <div className="flex-col overflow-hidden relative flex aspect-[1.1208333333333333] w-full items-stretch mt-3 pt-12">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e957e298e2780716417f8bc073ad20c132091cb3abd2b387920fcf49f52947e?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative flex items-stretch justify-between gap-4 mt-24 pl-4 pr-16 py-5 rounded-none max-md:mt-10 max-md:pr-5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba12daa4bdb103d6e4946ddcea87214c63cd0e80eef5078378c9dfa142b8941?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                            className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                          />
                          <div className="text-white text-xl grow whitespace-nowrap self-start">
                            @mozzarella
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex-col overflow-hidden relative flex aspect-[0.5934291581108829] grow items-stretch pt-12 pb-px px-px max-md:mt-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca06fa7f802ad92495461e4e3bc56cdbcd1e7c43eb29ab587dac4f5ea46352f3?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <div className="relative flex items-stretch justify-between gap-4 mt-80 pl-4 pr-20 py-5 rounded-none max-md:mt-10 max-md:pr-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b27ff9fa5b177491e586d8bdd8a9c7591fb1ffdc79469b78cfeb4d37c60aa101?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                          className="aspect-[1.08] object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                        />
                        <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                          <div className="text-white text-xl whitespace-nowrap">
                            @Richards
                          </div>
                          <div className="text-white text-sm font-light whitespace-nowrap">
                            13/05/2021
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-3">
                <div className="text-purple-500 text-9xl font-bold leading-[140px] tracking-tight whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Pet Hotel
                </div>
                <div className="text-black text-4xl font-light mt-8 max-md:max-w-full">
                  A cozy hotel for your anabul.
                  <br />
                  We bet they’re not gonna miss you
                </div>
                <div className="flex flex-col items-stretch mt-10 pt-6 rounded-[30px] border-2 border-solid border-violet-300 max-md:max-w-full max-md:mt-10">
                  <div className="max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch max-md:mt-10">
                          <div className="flex items-stretch justify-between gap-5">
                            <div className="flex grow basis-[0%] flex-col items-stretch pr-1.5">
                              <div className="text-slate-500 text-base whitespace-nowrap">
                                Check-In
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7205520a803a654f79c06f09e5c0394efe384f74e856b684956b53923605e1db?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                                className="aspect-square object-contain object-center w-[67px] overflow-hidden mt-2.5 self-start"
                              />
                            </div>
                            <div className="text-slate-500 text-base font-bold leading-9 tracking-wide mt-8">
                              Monday,
                              <br />8 July
                            </div>
                          </div>
                          <div className="flex w-[145px] max-w-full justify-between gap-5 ml-7 mt-12 self-start items-start max-md:ml-2.5 max-md:mt-10">
                            <div className="text-slate-500 text-6xl font-bold grow whitespace-nowrap max-md:text-4xl">
                              1
                            </div>
                            <div className="flex grow basis-[0%] flex-col items-center">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22a12f758d905bdcf3eba847e6af6820998d6d5727029e94f686a806a8e20bee?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                                className="aspect-square object-contain object-center w-7 overflow-hidden"
                              />
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0706c4dca39180f416db57e721cefa735d92431ed0b8222fdad59c39c784edd8?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                                className="aspect-[0.97] object-contain object-center w-7 overflow-hidden mt-5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-stretch max-md:mt-10">
                          <div className="flex items-stretch justify-between gap-5">
                            <div className="flex grow basis-[0%] flex-col items-stretch pr-8 max-md:pr-5">
                              <div className="text-slate-500 text-base">
                                Check-out
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f4247e090f2b4b8ed0eb37d2defb6a8be7fc618a8921f4e8dfd0c58ddb672ce?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                                className="aspect-[0.93] object-contain object-center w-[62px] overflow-hidden self-center mt-2.5"
                              />
                            </div>
                            <div className="text-slate-500 text-base font-bold leading-9 tracking-wide mt-8">
                              Sunday,
                              <br />
                              03 Aug
                            </div>
                          </div>
                          <div className="text-slate-500 text-base mt-9 self-start">
                            Pet type
                          </div>
                          <div className="bg-purple-300 flex w-[220px] max-w-full items-center justify-between gap-5 mt-2.5 pl-5 pr-1.5 py-1.5 rounded-lg border-2 border-solid border-slate-500 border-opacity-50 self-start">
                            <div className="text-slate-500 text-2xl leading-4 tracking-wide grow whitespace-nowrap my-auto">
                              Cats
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d3710c4ea1e0baccbced286da060784a833c3c836b5efdfb76fe16213c6f104?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-4xl font-light leading-4 tracking-wide bg-purple-500 items-center mt-1.5 pt-6 pb-10 px-16 rounded-none max-md:max-w-full max-md:px-5">
                    Book Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1575px] mt-40 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-1.5 pb-3.5 px-5 items-start max-md:max-w-full max-md:mt-10">
                <div className="text-amber-300 text-9xl font-bold leading-[140px] tracking-tight self-stretch whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Pet Cafe
                </div>
                <div className="text-black text-4xl font-light self-stretch mt-8 max-md:max-w-full">
                  A cozy place for you to hangout
                  <br />
                  with friends and pets
                </div>
                <div className="text-black text-4xl font-light leading-4 tracking-wide whitespace-nowrap bg-amber-300 justify-center items-center mt-12 px-16 py-12 rounded-[67px] max-md:max-w-full max-md:mt-10 max-md:px-5">
                  Foods & Beverage
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7305ee45983923328df89b4595bb3316a34c790bd107651e128b172e45179123?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                className="aspect-[1.64] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="shadow-2xl bg-white self-stretch flex justify-between gap-5 mt-40 pl-5 pr-20 py-11 rounded-[100px] items-end max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7e5d15f16db6831433bbbf6f967b63bbf48b188c793329c31772151f687081?apiKey=d1f90749406b400da2bb63e5353ca29d&"
            className="aspect-square object-contain object-center w-[90px] overflow-hidden shrink-0 max-w-full self-start"
          />
          <div className="flex grow basis-[0%] flex-col mt-11 self-start items-start max-md:max-w-full max-md:mt-10">
            <div className="text-pink-300 text-9xl font-bold leading-[140px] tracking-tight self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              What our Customer Says
            </div>
            <div className="text-black text-4xl font-light tracking-tight self-stretch mt-12 max-md:max-w-full max-md:mt-10">
              “The food wa so good, i recommend
              <br />
              the salad”
            </div>
            <div className="flex items-stretch gap-2.5 ml-24 mt-3.5 max-md:ml-2.5">
              <div className="text-black text-4xl font-light tracking-tight whitespace-nowrap">
                Petparent 1
              </div>
              <div className="text-black text-xl font-light tracking-tight whitespace-nowrap mt-4 self-start">
                February, 24
              </div>
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-stretch mt-96 max-md:max-w-full max-md:mt-10">
            <div className="shadow-2xl bg-white pl-8 pr-20 py-10 rounded-[50px] max-md:max-w-full max-md:px-5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0f4ca401e4e2d80f297c228bd7c598b6c2f6d9cf02e5f9333eeff56fa07ee05?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                    className="aspect-[0.9] object-contain object-center w-[166px] overflow-hidden shrink-0 max-w-full max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-start max-md:mt-10">
                    <div className="text-black text-3xl font-light tracking-tight self-stretch">
                      Beryl’s mom
                    </div>
                    <div className="text-black text-xl italic font-light tracking-tight self-stretch whitespace-nowrap mt-2">
                      Foods
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4282d9c9b299129ace2b03467372411a0c44e885423a65da0f7c939004a40c92?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                      className="aspect-[4.83] object-contain object-center w-[251px] overflow-hidden mt-12 max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-1.5 mt-11 self-end max-md:justify-center max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7d2847f48cecc6a06236b78e9615d37219368a31dd78554716b2a69d587e829?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                className="aspect-square object-contain object-center w-[46px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="self-center flex w-[15px] shrink-0 h-[15px] flex-col my-auto rounded-[50%]" />
              <div className="self-center flex w-[15px] shrink-0 h-[15px] flex-col my-auto rounded-[50%]" />
              <div className="self-center flex w-[15px] shrink-0 h-[15px] flex-col my-auto rounded-[50%]" />
              <div className="bg-neutral-600 self-center flex w-[45px] shrink-0 h-[22px] flex-col my-auto rounded-xl" />
              <div className="self-center flex w-[15px] shrink-0 h-[15px] flex-col my-auto rounded-[50%]" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36476436905e949843cbf118dbfabfb3ece855ee6d066ba9efdb55791355bcdf?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                className="aspect-square object-contain object-center w-[46px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-stretch mt-72 rounded-[70px] max-md:max-w-full max-md:mt-10">
          <div className="flex flex-col justify-center items-center px-16 py-12 rounded-[70px] max-md:max-w-full max-md:px-5">
            <div className="flex w-[765px] max-w-full flex-col items-stretch mt-20 mb-10 max-md:mt-10">
              <div className="z-[1] flex flex-col items-stretch px-9 max-md:max-w-full max-md:px-5">
                <div className="text-white text-5xl font-bold whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                  For our Promos and Benefits
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1690fc91f330377935d686c4b7aca4f57a462923c7e1213a0d9d44201bf84fb?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                  className="aspect-[0.84] object-contain object-center w-[200px] overflow-hidden max-w-full mt-8 self-start"
                />
              </div>
              <div className="bg-white flex mt-0 items-center justify-between gap-5 pl-10 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                <div className="text-neutral-500 text-3xl font-light grow whitespace-nowrap my-auto">
                  PetCare@email.com
                </div>
                <div className="bg-purple-500 self-stretch flex grow basis-[0%] flex-col justify-center items-center px-16 py-9 rounded-3xl max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f711c3efa5c182950a51bebe42e8eb9e14923babd7531d322a2eb2c317fd4da?apiKey=d1f90749406b400da2bb63e5353ca29d&"
                    className="aspect-[1.02] object-contain object-center w-[46px] overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="self-stretch flex flex-col items-center mt-96 pt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="z-[1] flex w-full flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-5xl font-bold uppercase bg-clip-text bg-[linear-gradient(81deg,#FFC73B_0%,#FFBCBC_53.29%,#DDA5FF_102.74%)] grow whitespace-nowrap max-md:text-4xl">
                PetCare
              </div>
              <div className="mt-1.5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                      <div className="text-black text-2xl font-bold capitalize whitespace-nowrap">
                        PetCare
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Service
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Shop
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        About
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize z-[1] whitespace-nowrap mt-8">
                        Contact
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col pr-2.5 pb-12 max-md:mt-10">
                      <div className="text-black text-2xl font-bold capitalize whitespace-nowrap">
                        Cafe
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Food
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Drink
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8 mb-3">
                        Snacks
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                      <div className="text-black text-2xl font-bold capitalize whitespace-nowrap">
                        Follow us
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Twitter
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Instagram
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mt-8">
                        Facebook
                      </div>
                      <div className="text-neutral-400 text-2xl capitalize z-[1] whitespace-nowrap mt-8">
                        Dribbble
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-neutral-400 text-2xl capitalize whitespace-nowrap mr-44 mt-28 self-end max-md:mr-2.5 max-md:mt-10">
              © 2023 PetCare
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
