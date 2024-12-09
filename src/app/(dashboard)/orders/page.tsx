"use client";
import React, { useState } from "react";
import Listingcard from "@/components/Listingcard";
import LineChart from "@/components/LineChart";
import LatestOrder from "@/components/LatestOrder"

export interface PriceCardProps {
  title: string;
  amount: number;
  image: string;
  percent: number;
  color: string;
  unitBefore: string | null;
  unitAfter: string | null;
}

export default function OrdersPage() {
  const lst: PriceCardProps[] = [
    {
      title: "Revenue",
      amount: 7990,
      image: "/images/chart.svg",
      percent: 20,
      color: "#FFA000",
      unitBefore: "",
      unitAfter: "",
    },
    {
      title: "Orders",
      amount: 920,
      image: "/images/vector.svg",
      percent: -25,
      color: "#FF392B",
      unitBefore: "",
      unitAfter: "",
    },
    {
      title: "Visitors",
      amount: 15.5,
      image: "/images/vvector.svg",
      percent: -20,
      color: "#279F51",
      unitBefore: "",
      unitAfter: "k",
    },
    {
      title: "Conversion",
      amount: 28,
      image: "/images/vector.svg",
      percent: 1.9,
      color: "#FFA000",
      unitBefore: "",
      unitAfter: "",
    },
  ];
  const lst2 = [
    {
      title: "Revenue",
      amount: 7990,
      image: "/images/chart.svg",
      percent: 20,
      color: "#FFA000",
      unitBefore: "",
      unitAfter: "",
    },
  ];

  return (
    <div className="px-14 p-5 bg-[#F8F8F8] space-y-7">
      <div className="flex gap-5">
        {lst.map((e) => (
          <Listingcard
            key={e.title}
            title={e.title}
            amount={e.amount}
            image={e.image}
            percent={e.percent}
            color={e.color}
          />
        ))}
      </div>
      <div className="  bg-white p-5 rounded-lg">
        <div className="flex justify-between ">
          <div className="flex items-center gap-3 p-5">
            <div className="bg-[#FF8901] w-3 h-3 rounded-full"></div>
            <h1>Orders Update</h1>
          </div>
          <div>
            <button className="flex items-center space-x-1  hover:bg-[#FF8901] hover:text-white p-2 rounded-md text- focus:outline-none">
              <p className="text-sm font-semibold">View Details</p>
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
        </div>
        <div className="w-full">
          <LineChart />
        </div>
      </div>
      <div className="  bg-white px-5 py-5 rounded-lg">
        <div className="flex justify-between">
          <div>
            <h1 className="font-medium text-sm">Latest Order</h1>
          </div>
          <button className="flex items-center space-x-1  hover:bg-[#FF8901] hover:text-white p-2 rounded-md text-black focus:outline-none">
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
        <div className="p-5 rounded-lg">
          <LatestOrder />
        </div>
      </div>
    </div>
  );
}
