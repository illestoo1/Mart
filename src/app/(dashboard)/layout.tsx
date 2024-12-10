"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className=" flex">
        {/* Sidebar */}
        <div className=" md:w-1/12"></div>
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={` z-10 fixed border-r h-screen transition-all duration-100 overflow-hidden ${
            isOpen ? "w-72" : "w-1/12"
          } bg-[#FF8901] flex flex-col justify-between`}
        >
          <div className="p-5 flex flex-col items-center space-y-5">
            {/* Sidebar Header */}
            <h1 className={`font-bold text-2xl text-white ${!isOpen && ""}`}>
              mart
            </h1>

            {/* Sidebar Icon/Menu Item */}
            <div className="space-y-4 pt-10">
              <Link href="/" className="flex items-center space-x-4">
                <div className="text-white">
                  {/* Icon */}
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className=""
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </g>
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">Home</span>}
              </Link>

              <Link href="/orders" className="flex items-center space-x-4">
                <div className="text-white">
                  {/* Icon */}
                  <span className="hover:bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10m6-6v.172a2 2 0 0 1-.586 1.414l-3.828 3.828a2 2 0 0 1-1.414.586H15m6-6h-4a2 2 0 0 0-2 2v4M7 7h10M7 11h10M7 15h4"
                      />
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">Orders</span>}
              </Link>

              <Link href="/products" className="flex items-center space-x-4">
                <div className="text-white">
                  {/* Icon */}
                  <span className="hover:bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M2.75 4.75h10.5v9.5H2.75z" />
                        <path d="M5.75 7.75c0 1.5 1 2.5 2.25 2.5s2.25-1 2.25-2.5m-7.5-3l1.5-3h7.5l1.5 3" />
                      </g>
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">Products</span>}
              </Link>

              <Link href="/customers" className="flex items-center space-x-4">
                <div className="text-white">
                  {/* Icon */}
                  <span className="hover:bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                      />
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">Customers</span>}
              </Link>

              <Link href="/statistics" className="flex items-center space-x-4">
                <div className="text-white">
                  <span className="hover:bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M14 9a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-2.293l-5.146 5.147a.5.5 0 0 1-.708 0L9 12.707l-2.646 2.647a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0L12 14.293L16.793 9.5H14.5A.5.5 0 0 1 14 9"
                      />
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">Statistics</span>}
              </Link>

              <Link href="/history" className="flex items-center space-x-4">
                <div className="text-white">
                  <span className="hover:bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"
                      />
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">History</span>}
              </Link>

              <Link
                href="/campaignform"
                className="flex items-center space-x-4"
              >
                <div className="text-white">
                  <span className="hover:bg-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      >
                        <path d="M4.5 16.625v-10.5a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v12.5H7.375M4.5 16.62V19" />
                        <path d="M18.5 21.625H7a2.5 2.5 0 0 1 0-5h12.5v4a1 1 0 0 1-1 1" />
                      </g>
                    </svg>
                  </span>
                </div>
                {isOpen && <span className="text-white">CampaignForm</span>}
              </Link>

              <Link href="/" className="flex items-center space-x-4">
                <div className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="40"
                        stroke-dashoffset="40"
                        d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.5s"
                          values="40;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="12"
                        stroke-dashoffset="12"
                        d="M10.5 13.5l-7.5 7.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.5s"
                          dur="0.2s"
                          values="12;0"
                        />
                      </path>
                    </g>
                  </svg>
                </div>
                {isOpen && <span className="text-white">Search</span>}
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-11/12 ">
          <div className=" ">
            <header className="border-b p-5 flex justify-between items-center">
              <h1 className="text-[#999BA2] text-sm">
                {" "}
                {path == "/" ? "Dashboard" : path.split("/", -1)}
              </h1>
            </header>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
