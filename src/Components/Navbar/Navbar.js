import React from "react";
import img from "../../Imgs/Screenshot 2024-10-20 231640.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-300 h-16">
          <div className="flex-1 flex items-center">
            {/* Logo */}
            <a className="bg-base-300">
              <img className="w-24" src={img} alt="Logo" />
            </a>

            {/* Navigation Links with Vertical Lines */}
            <div className="flex items-center mx-4">
              {/* First Vertical Line */}
              <div className="w-px h-full bg-red-900"></div>

              {/* Navigation Links */}
              <a className="mx-2" href="./">
                My Apps
              </a>

              {/* Second Vertical Line */}
              <div className="w-px h-full bg-red-900 mx-4"></div>

              <a className="mx-2" href="./">
                Home
              </a>

              {/* Third Vertical Line */}
              <div className="w-px h-full bg-red-900 mx-4"></div>

              <a className="mx-2" href="./">
                Explore
              </a>
            </div>

            {/* Search Bar */}
            <div className="mx-4">
              <input
                type="text"
                placeholder="Search for contacts"
                className="input input-bordered max-w-xs"
              />
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center">
            <div className="m-5">
              {/* Search Button */}
              <button className="m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Notification Button */}
              <button className="m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="btn btn-error text-white px-2 py-1 text-sm flex items-center">
                <span className="mr-1">
                  {" "}
                  {/* Margin for spacing between icon and text */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16" // Reduced size for the SVG icon
                    height="16" // Reduced size for the SVG icon
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
                <span>Create</span>
              </button>

              <button className="btn btn-outline btn-accent text-sm px-2 py-1">
                <span>Upgrade</span>
              </button>

              <button className="btn btn-outline btn-accent text-sm px-2 py-1">
                <span>More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
