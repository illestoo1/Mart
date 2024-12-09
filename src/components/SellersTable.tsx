import React from "react";

type SalesData = {
  product: string;
  price: number;
  amountSold: number;
  profit: number;
};

const salesData: SalesData[] = [
  { product: "Apple", price: 2.5, amountSold: 100, profit: 250 },
  { product: "Banana", price: 1.2, amountSold: 200, profit: 240 },
  { product: "Orange", price: 3.0, amountSold: 150, profit: 450 },
  { product: "Mango", price: 1.8, amountSold: 120, profit: 216 },
];

const SalesTable: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4 px-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="py-2 px-4 border-b text-sm font-semibold text-gray-700">
              Product
            </th>
            <th className="py-2 px-4 border-b text-sm font-semibold text-gray-700">
              Price
            </th>
            <th className="py-2 px-4 border-b text-sm font-semibold text-gray-700">
              Amount Sold
            </th>
            <th className="py-2 px-4 border-b text-sm font-semibold text-gray-700">
              Profit
            </th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-sm text-gray-700">
                {item.product}
              </td>
              <td className="py-2 px-4 border-b text-sm text-gray-700">
                ${item.price.toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b text-sm text-gray-700">
                {item.amountSold}
              </td>
              <td className="py-2 px-4 border-b text-sm text-gray-700">
                ${item.profit.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
