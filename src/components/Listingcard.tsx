"Use client";
import React from "react";
import Image from "next/image";

export default function ListingCard(data: any) {
  return (
    <>
      <div className="w-[280px] bg-[#FFFFFF] border rounded-xl p-5 hover:shadow">
        <div className=" flex justify-between gap-3  ">
          <p className="font-medium text-sm text-[#8E95A9]">{data.title}</p>
          <p style={{ color: data.color }}>{data.percent}%</p>
        </div>
        <div className=" flex justify-between ">
          <p className="font-semibold text-base text-[#1C2A53]">
            {data.amount}
          </p>

          <img
            width={75}
            height={29}
            className=""
            src={data.image}
            alt="Chart icon"
          />
        </div>
      </div>
    </>
  );
}
