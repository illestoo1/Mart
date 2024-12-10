// components/Stats.tsx
import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  icon: JSX.Element;
};

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition">
    <div className="p-4 bg-[#FF8901] text-white rounded-full">{icon}</div>
    <div>
      <h3 className="text-gray-500 uppercase text-sm">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  </div>
);

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatCard
        title="Total Sales"
        value="$25,340"
        icon={
        
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
              />
            </svg>
        
        }
      />
      <StatCard
        title="New Customers"
        value="1,250"
        icon={<i className="fas fa-user-plus text-2xl"></i>}
      />
      <StatCard
        title="Orders Pending"
        value="72"
        icon={<i className="fas fa-clock text-2xl"></i>}
      />
      <StatCard
        title="Total Products"
        value="540"
        icon={<i className="fas fa-box-open text-2xl"></i>}
      />
    </div>
  );
};

export default Stats;
