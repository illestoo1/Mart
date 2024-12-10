import React, { useState } from "react";

type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  orders: Order[];
};

type Order = {
  id: number;
  product: string;
  quantity: number;
  price: string;
  date: string;
};

// Mock Data
const customers: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, New York, NY",
    orders: [
      {
        id: 101,
        product: "Wireless Mouse",
        quantity: 1,
        price: "₹500",
        date: "2024-04-01",
      },
      {
        id: 102,
        product: "Keyboard",
        quantity: 2,
        price: "₹1500",
        date: "2024-04-15",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    address: "456 Elm St, Los Angeles, CA",
    orders: [
      {
        id: 201,
        product: "Laptop",
        quantity: 1,
        price: "₹45000",
        date: "2024-03-20",
      },
      {
        id: 202,
        product: "Headphones",
        quantity: 1,
        price: "₹2000",
        date: "2024-03-22",
      },
    ],
  },
];

const HistoryPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleViewMore = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseDetails = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className=" min-h-screen p-8">
      <div className=" p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#FF8901]">
          Customer History
        </h2>

        {/* Customer List */}
        <div className="space-y-4">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{customer.name}</h3>
                <p className="text-gray-600">{customer.email}</p>
              </div>
              <button
                onClick={() => handleViewMore(customer)}
                className="bg-[#FF8901] text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
              >
                View More
              </button>
            </div>
          ))}
        </div>

        {/* Customer Details Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <h3 className="text-2xl font-bold mb-4">
                {selectedCustomer.name}'s Details
              </h3>
              <p>
                <strong>Email:</strong> {selectedCustomer.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedCustomer.phone}
              </p>
              <p>
                <strong>Address:</strong> {selectedCustomer.address}
              </p>

              <h4 className="font-semibold text-xl mt-4 mb-2">Order History</h4>
              <ul className="space-y-2">
                {selectedCustomer.orders.map((order) => (
                  <li key={order.id} className="p-3 bg-gray-100 rounded-md">
                    <p>
                      <strong>Product:</strong> {order.product}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {order.quantity}
                    </p>
                    <p>
                      <strong>Price:</strong> {order.price}
                    </p>
                    <p>
                      <strong>Date:</strong> {order.date}
                    </p>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCloseDetails}
                className="absolute top-2 right-2 text-red-500 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
