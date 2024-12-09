"use client";
import React from "react";
import Listingcard from "@/components/Listingcard";
import ProductCard from "@/components/Productcard";
import Revenuechart from "@/components/Revenuechart";
import OrdersTable from "@/components/OrdersTable";
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

  return (
    <div className="px-4 sm:px-8 lg:px-14 py-5 bg-[#F8F8F8] space-y-7">
      {/* Top Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
      <div>
        <div className="flex flex-col md:flex-row gap-7  rounded-lg">
          <div className="w-full md:w-1/3  p-2 rounded">
            <ProductCard />
          </div>
          <div className="w-full md:w-2/3 p-2 rounded">
            <Revenuechart />
          </div>
        </div>
        <div>
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}