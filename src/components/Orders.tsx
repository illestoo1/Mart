import React from "react";

const orders = [
  {
    product: "Analog Table Clock",
    qty: 3,
    date: "2024-11-14",
    revenue: "$150",
    netProfit: "$45",
    status: "Completed",
  },
  {
    product: "Basket with handles",
    qty: 1,
    date: "2024-11-13",
    revenue: "$50",
    netProfit: "$15",
    status: "Refund",
  },
  // ...other orders
];

export default function OrderTable() {
  return (
    <div className="overflow-x-auto bg-white p-5 shadow-lg rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b bg-gray-100 text-sm">
            <th className="py-3 px-6 text-left">Product</th>
            <th className="py-3 px-6 text-left">Qty</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Revenue</th>
            <th className="py-3 px-6 text-left">Net Profit</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{order.product}</td>
              <td className="py-3 px-6">{order.qty}</td>
              <td className="py-3 px-6">{order.date}</td>
              <td className="py-3 px-6">{order.revenue}</td>
              <td className="py-3 px-6">{order.netProfit}</td>
              <td className="py-3 px-6">
                <span
                  className={`px-3 py-1 rounded-full ${
                    order.status === "Completed"
                      ? "text-green-500"
                      : order.status === "Shipped"
                      ? "text-black"
                      : order.status === "Refund"
                      ? "text-yellow-500"
                      : order.status === "Pending"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-6 flex items-center gap-3">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54zM15.36 11L13 8.64l-9 9.02V20h2.34z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
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
}
