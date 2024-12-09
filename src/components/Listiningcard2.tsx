"use client";
import React from "react";
import Image from "next/image";
import { PriceCardProps } from "@/app/(dashboard)/dashboard/page";

export default function ListingCard2(data: PriceCardProps) {
  return (
    <div className="  bg-[#FFFFFF] border rounded-xl p-5 hover:shadow">
      <div>
        <p className="font-medium text-sm text-[#8E95A9]">{data.title}</p>
        <p style={{ color: data.color }}>{data.percent}%</p>
      </div>
      <div className="flex justify-between">
        <img
          width={75}
          height={29}
          className=""
          src={data.image}
          alt="Chart icon"
        />
      </div>
    </div>
  );
}
