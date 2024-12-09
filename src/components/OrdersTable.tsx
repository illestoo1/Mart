import { Images } from "lucide-react";
import React from "react";
import { gunzipSync } from "zlib";

const OrdersTable = () => {
  const orders = [
    {
      id: "#32000200",
      customer: {
        name: "Priscilla Warren",
        image: "/images/priscilla.svg",
      },
      qty: 2,
      date: "Jan 10, 2020",
      revenue: "$253.82",
      profit: "$60.76",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: "#32000201",
      customer: {
        name: "Tanya Wilson",
        image: "https://via.placeholder.com/40",
      },
      qty: 1,
      date: "Sep 4, 2020",
      revenue: "$556.24",
      profit: "$66.41",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: "#32000202",
      customer: {
        name: "Theresa Alexander",
        image: "https://via.placeholder.com/40",
      },
      qty: 3,
      date: "Aug 30, 2020",
      revenue: "$115.26",
      profit: "$95.66",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: "#32000203",
      customer: {
        name: "Mitchell Lane",
        image: "https://via.placeholder.com/40",
      },
      qty: 3,
      date: "Aug 29, 2020",
      revenue: "$675.51",
      profit: "$84.80",
      status: "Completed",
      statusColor: "text-green-500",
    },
    {
      id: "#32000204",
      customer: {
        name: "Arlene Richards",
        image: "https://via.placeholder.com/40",
      },
      qty: 4,
      date: "Dec 26, 2020",
      revenue: "$910.71",
      profit: "$46.52",
      status: "Shipping",
      statusColor: "text-gray-500",
    },
    // Add more rows as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Orders
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Customers
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Qty
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Revenue
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Net Profit
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
              <td className="px-6 py-4 flex items-center">
                <img
                  src="images/guy.jpg"
                  alt={order.customer.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <span className="text-sm text-gray-700">
                  {order.customer.name}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.qty}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {order.revenue}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {order.profit}
              </td>
              <td
                className={`px-6 py-4 text-sm font-medium ${order.statusColor}`}
              >
                {order.status}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700 flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="currentColor"
                      d="M10.443 1.56a1.914 1.914 0 0 0-2.707 0l-.55.551a.5.5 0 0 0-.075.074l-5.46 5.461a.5.5 0 0 0-.137.255l-.504 2.5a.5.5 0 0 0 .588.59l2.504-.5a.5.5 0 0 0 .255-.137l6.086-6.086a1.914 1.914 0 0 0 0-2.707M7.502 3.21l1.293 1.293L3.757 9.54l-1.618.324l.325-1.616zm2 .586L8.209 2.502l.234-.234A.914.914 0 1 1 9.736 3.56z"
                    />
                  </svg>
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
