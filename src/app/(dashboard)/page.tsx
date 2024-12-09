
"use client";

import React, { useState, useEffect, useRef } from "react";
import Listingcard from "@/components/Listingcard";
import Barchart from "@/components/Barchart";
import CircularProgressChart from "@/components/CircularProgressChart";
import PieChart from "@/components/Piechart";
import Orders from "@/components/Orders";
import SellersTable from "@/components/SellersTable"
import LineChart from "@/components/LineChart";
import ListingCard2 from "@/components/Listiningcard2";


export interface PriceCardProps {
  title: string;
  amount: number;
  image: string;
  percent: number;
  color: string;
  unitBefore: string | null;
  unitAfter: string | null;
}

export default function DashboardPage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("Last 7 Days");
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to handle outside clicks

  const lst: PriceCardProps[] = [
    { title: "Revenue", amount: 7990, image: "/images/chart.svg", percent: 20, color: "#FFA000", unitBefore: "", unitAfter: "" },
    { title: "Orders", amount: 920, image: "/images/vector.svg", percent: -25, color: "#FF392B", unitBefore: "", unitAfter: "" },
    { title: "Visitors", amount: 15.5, image: "/images/vvector.svg", percent: -20, color: "#279F51", unitBefore: "", unitAfter: "k" },
    { title: "Conversion", amount: 28, image: "/images/vector.svg", percent: 1.9, color: "#FFA000", unitBefore: "", unitAfter: "" },
  ];

  const abandonedCartProgress = 38;

  const pieChartData = {
    labels: ["Mobile", "Desktop", "Tablet", "Others"],
    values: [45, 25, 15, 15],
  };

  const handleDownload = (option: string) => {
    console.log(`Downloading as ${option}`);
    setDropdownOpen(false);
  };

  const handleDateRangeSelect = (range: string) => {
    setSelectedDateRange(range);
    console.log(`Selected Date Range: ${range}`);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="px-14 p-5 bg-[#F8F8F8] space-y-7">
      <div className="flex gap-5">
        {lst.map((e) => (
          <Listingcard key={e.title} {...e} />
        ))}
      </div>

      <div className="flex justify-center items-center space-x-7">
        <div className="md:w-9/12 h-fit border rounded-lg border-gray-300 bg-[#FFFFFF] p-5">
          <div className="flex justify-between">
            <h1 className="font-semibold text-sm text-[#1C2A53]">Dashboard</h1>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-[#FF8901] hover:bg-white hover:text-[#FF8901] text-white rounded-md"
              >
                <p>Advanced Report</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 9"
                  >
                    <path
                      fill="currentColor"
                      d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
                    />
                    <path
                      fill="currentColor"
                      d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                    />
                  </svg>
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 left-0 w-40 bg-white shadow-lg rounded-md">
                  <ul>
                    <li
                      onClick={() => handleDownload("PDF")}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                    >
                      Download PDF
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <Barchart />
          </div>
        </div>

        <div className="border-2 rounded-lg flex flex-col justify-center h-full md:w-3/12 p-5 gap-4 bg-[#FFFFFF]">
          <div className="font-semibold text-base text-[#1C2A53]">
            <h1 className="flex justify-start">Cart</h1>
          </div>
          <div className="flex justify-end text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 8 8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center my-20">
            <CircularProgressChart progress={abandonedCartProgress} />
          </div>
          <div className="w-full">
            <div className="text-center mt-4 flex justify-between">
              <h2 className="font-semibold text-sm text-[#1C2A53]">
                Abandoned Cart
              </h2>
              <p>720</p>
            </div>
            <div className="text-center mt-4 flex justify-between">
              <h2 className="font-semibold text-sm text-[#8E95A9]">
                Abandoned Revenue
              </h2>
              <p>$5,900</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[529px] border rounded-md p-5 bg-[#FFFFFF]">
          <div className="flex justify-between p-5">
            <h1 className="font-medium text-sm">Revenue by device</h1>
            <button className="flex items-center space-x-1 bg-[#FF8901] hover:bg-white hover:text-[#FF8901] p-2 rounded-md text-white focus:outline-none">
              <p className="text-sm font-semibold">More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="flex justify-center items-center my-10">
            <PieChart data={pieChartData} />
          </div>
        </div>

        <div className="w-[529px] border rounded-md p-5 bg-[#FFFFFF]">
          <div className="flex justify-between p-5">
            <h1 className="font-medium text-sm text-[#2B2B4C]">Traffic</h1>

            <button className="flex items-center space-x-1 bg-[#FF8901] hover:bg-white hover:text-[#FF8901] p-2 rounded-md text-white focus:outline-none">
              <p className="text-sm font-semibold">More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="flex justify-between mb-6 px-7">
            <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
              <p className="text-sm text-gray-500">Store Visits</p>
              <p className="text-2xl font-semibold text-gray-800">8950</p>
              <p className="text-green-500 text-sm">+ 22%</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center shadow-sm">
              <p className="text-sm text-gray-500">Visitors</p>
              <p className="text-2xl font-semibold text-gray-800">1520</p>
              <p className="text-red-500 text-sm">- 24%</p>
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-center">
                <p className="text-[#88889B] text-sm font-semibold">
                  Jan 16 - Jan 30 store Visit Chart
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-10">
            <LineChart />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-[529px] border rounded-md p-5 bg-[#FFFFFF]">
          <div className="flex justify-between p-5">
            <h1 className="font-medium text-sm text-[#2B2B4C]">Bestseller</h1>

            <button className="flex items-center space-x-1 bg-[#FF8901] hover:bg-white hover:text-[#FF8901] p-2 rounded-md text-white focus:outline-none">
              <p className="text-sm font-semibold">More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="my-10">
            <div>
              <SellersTable />
            </div>
          </div>
        </div>

        <div className="w-[529px] border rounded-md p-5 bg-[#FFFFFF]">
          <div className="flex justify-between p-5">
            <h1 className="font-medium text-sm">Sale forecast</h1>

            <button className="flex items-center space-x-1 bg-[#FF8901] hover:bg-white hover:text-[#FF8901] p-2 rounded-md text-white focus:outline-none">
              <p className="text-sm font-semibold">More</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {lst.map((e) => (
              <ListingCard2 key={e.title} {...e} />
            ))}
          </div>
        </div>
      </div>
      <div className=" border rounded-md p-5 bg-[#FFFFFF]">
        <div className="flex justify-between p-5">
          <h1 className="font-medium text-sm">Sale forecast</h1>
          <button className="flex items-center space-x-1 bg-[#FF8901] hover:bg-white hover:text-[#FF8901] p-2 rounded-md text-white focus:outline-none">
            <p className="text-sm font-semibold">More</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                />
              </svg>
            </span>
          </button>
        </div>
        <div>
          <Orders />
        </div>
      </div>
    </div>
  );
} 