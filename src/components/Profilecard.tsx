import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg ">
      <div className="flex items-center justify-center p-6">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src="/images/guy.jpg"
          alt="User profile"
        />
      </div>
      <div className="p-6">
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Connie Robertson
        </h2>
        <p className="text-center text-gray-500 mb-4">
          victoriasimmons@2020.com
        </p>
        <hr className="my-4" />
        <div className="text-gray-700 space-y-3">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3M10 3h4m-4 0v1m4-1v1"
              />
            </svg>
            <span className="text-sm">
              Group: <strong>9,520</strong>
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6H20M4 12H20M4 18H11"
              />
            </svg>
            <span className="text-sm">
              Location: <strong>Undefined, Minnesota</strong>
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 6h13M8 12h6m2 0h1"
              />
            </svg>
            <span className="text-sm">
              First Order: <strong>September 30, 2019</strong>
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="text-sm">
              Latest Order: <strong>February 14, 2020</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
