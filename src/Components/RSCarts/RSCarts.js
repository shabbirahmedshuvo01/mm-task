import React from "react";
import nimg from "../../Imgs/download.png";

const RSCarts = () => {
  return (
    <div>
      <section>
        <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
          {/* Adjust gap for responsiveness */}
          <section className="flex items-center sm:justify-between gap-24">
            {/* Text on the left side */}
            <h3 className="text-blue-600 font-semibold">Boards</h3>

            {/* Button on the right side */}
            <button className="btn btn-xs rounded-lg bg-blue-600 text-white ml-auto">
              <span>+</span> New Boards
            </button>
          </section>

          <hr className="my-2" />

          {/* Project list - stacking for small screens */}
          <div className="flex justify-between">
            <section className="text-start flex items-center gap-2 my-4">
              <img width="30" height="30" src={nimg} alt="Contact Avatar" />
              <div className="text-xs">
                <p className="mt-2 text-blue-400">Angola Production</p>
              </div>
            </section>
            <svg
              className="text-sky-500 mt-5"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a1 1 0 0 1 .993.883L9 2v1.07a5.987 5.987 0 0 1 2.755 1.074l.708-.708a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1 0 1.414l-.708.708A5.978 5.978 0 0 1 14 8a5.978 5.978 0 0 1-.636 2.556l.708.708a1 1 0 0 1 0 1.414l-1.1 1.1a1 1 0 0 1-1.414 0l-.708-.708A5.987 5.987 0 0 1 9 13.93V15a1 1 0 0 1-1.993.117L7 15v-1.07a5.987 5.987 0 0 1-2.755-1.074l-.708.708a1 1 0 0 1-1.414 0l-1.1-1.1a1 1 0 0 1 0-1.414l.708-.708A5.978 5.978 0 0 1 2 8a5.978 5.978 0 0 1 .636-2.556l-.708-.708a1 1 0 0 1 0-1.414l1.1-1.1A1 1 0 0 1 4.414 1.5l.708.708A5.987 5.987 0 0 1 7 1.07V1a1 1 0 0 1 1-1zM8 3.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
            </svg>
          </div>
          <div className="flex justify-between">
            <section className="text-start flex items-center gap-2 my-4">
              <img width="30" height="30" src={nimg} alt="Contact Avatar" />
              <div className="text-xs">
                <p className="mt-2 text-blue-400">An organization demo</p>
              </div>
            </section>
            <svg
              className="text-sky-500 mt-5"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a1 1 0 0 1 .993.883L9 2v1.07a5.987 5.987 0 0 1 2.755 1.074l.708-.708a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1 0 1.414l-.708.708A5.978 5.978 0 0 1 14 8a5.978 5.978 0 0 1-.636 2.556l.708.708a1 1 0 0 1 0 1.414l-1.1 1.1a1 1 0 0 1-1.414 0l-.708-.708A5.987 5.987 0 0 1 9 13.93V15a1 1 0 0 1-1.993.117L7 15v-1.07a5.987 5.987 0 0 1-2.755-1.074l-.708.708a1 1 0 0 1-1.414 0l-1.1-1.1a1 1 0 0 1 0-1.414l.708-.708A5.978 5.978 0 0 1 2 8a5.978 5.978 0 0 1 .636-2.556l-.708-.708a1 1 0 0 1 0-1.414l1.1-1.1A1 1 0 0 1 4.414 1.5l.708.708A5.987 5.987 0 0 1 7 1.07V1a1 1 0 0 1 1-1zM8 3.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
            </svg>
          </div>
          <div className="flex justify-between">
            <section className="text-start flex items-center gap-2 my-4">
              <img width="30" height="30" src={nimg} alt="Contact Avatar" />
              <div className="text-xs">
                <p className="mt-2 text-blue-400">An organization demo</p>
              </div>
            </section>
            <svg
              className="text-sky-500 mt-5"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a1 1 0 0 1 .993.883L9 2v1.07a5.987 5.987 0 0 1 2.755 1.074l.708-.708a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1 0 1.414l-.708.708A5.978 5.978 0 0 1 14 8a5.978 5.978 0 0 1-.636 2.556l.708.708a1 1 0 0 1 0 1.414l-1.1 1.1a1 1 0 0 1-1.414 0l-.708-.708A5.987 5.987 0 0 1 9 13.93V15a1 1 0 0 1-1.993.117L7 15v-1.07a5.987 5.987 0 0 1-2.755-1.074l-.708.708a1 1 0 0 1-1.414 0l-1.1-1.1a1 1 0 0 1 0-1.414l.708-.708A5.978 5.978 0 0 1 2 8a5.978 5.978 0 0 1 .636-2.556l-.708-.708a1 1 0 0 1 0-1.414l1.1-1.1A1 1 0 0 1 4.414 1.5l.708.708A5.987 5.987 0 0 1 7 1.07V1a1 1 0 0 1 1-1zM8 3.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
            </svg>
          </div>

          {/* Align the text at the end on larger screens */}
          <p className="text-xs text-blue-400 text-end mt-4">Show All</p>
        </div>
      </section>{" "}
    </div>
  );
};

export default RSCarts;
