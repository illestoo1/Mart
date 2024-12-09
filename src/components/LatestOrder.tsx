import React from "react";

// Define the order data type
interface Order {
  id: string;
  product: string;
  qty: number;
  date: string;
  revenue: string;
  netProfit: string;
  status: "Pending" | "Completed" | "Cancelled" | "Refund" | "Shipping";
}

const orders: Order[] = [
  {
    id: "#12345",
    product: "Smartphone",
    qty: 2,
    date: "2024-11-14",
    revenue: "$1000",
    netProfit: "$250",
    status: "Completed",
  },
  {
    id: "#12346",
    product: "Laptop",
    qty: 1,
    date: "2024-11-13",
    revenue: "$2000",
    netProfit: "$500",
    status: "Refund",
  },
  {
    id: "#12346",
    product: "mouse",
    qty: 1,
    date: "2024-11-13",
    revenue: "$4000",
    netProfit: "$300",
    status: "Pending",
  },

  {
    id: "#12346",
    product: "Laptop",
    qty: 1,
    date: "2024-11-13",
    revenue: "$2000",
    netProfit: "$500",
    status: "Shipping",
  },
  {
    id: "#12346",
    product: "Laptop",
    qty: 1,
    date: "2024-11-13",
    revenue: "$2000",
    netProfit: "$7000",
    status: "Pending",
  },
  {
    id: "#12346",
    product: "Laptop",
    qty: 1,
    date: "2024-11-13",
    revenue: "$2000",
    netProfit: "$50",
    status: "Completed",
  },
];

const OrderTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#F8F8F8]  rounded-lg">
        <thead>
          <tr className="bg-[#F8F8F8] text-gray-600 text-left">
            <th className="p-4 text-sm font-semibold">Order ID</th>
            <th className="p-4 text-sm font-semibold">Product</th>
            <th className="p-4 text-sm font-semibold">Qty</th>
            <th className="p-4 text-sm font-semibold">Date</th>
            <th className="p-4 text-sm font-semibold">Revenue</th>
            <th className="p-4 text-sm font-semibold">Net Profit</th>
            <th className="p-4 text-sm font-semibold">Status</th>
            <th className="p-4 text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="p-4 text-sm text-gray-700">{order.id}</td>
              <td className="p-4 text-sm text-gray-700">{order.product}</td>
              <td className="p-4 text-sm text-gray-700">{order.qty}</td>
              <td className="p-4 text-sm text-gray-700">{order.date}</td>
              <td className="p-4 text-sm text-gray-700">{order.revenue}</td>
              <td className="p-4 text-sm text-gray-700">{order.netProfit}</td>
              <td className="p-4 text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Completed"
                      ? "text-green-500"
                      : order.status === "Pending"
                      ? "text-red-500"
                      : order.status === "Shipping"
                      ? "text-black"
                      : order.status === "Refund"
                      ? "text-yellow-500"
                      : order.status === "Cancelled"
                      ? "text-gray-500"
                      : "text-gray-500" // Fallback
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-4 text-sm text-gray-700 flex space-x-2">
                <button className="hover:text-blue-500">
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
                <button className="hover:text-red-500">
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
};

export default OrderTable;
