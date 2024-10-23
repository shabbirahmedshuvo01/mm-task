import React, { useState } from "react";
import nimg from "../../Imgs/download.png";
import oimg from "../../Imgs/104101b7b38b229c023e1cf35ee89eec.jpg";
import bimg from "../../Imgs/pngtree-blue-blank-circle-button-badge-png-image_9193772.png";
import pimg from "../../Imgs/pngtree-pink-circle-clipart-png-image_2382069.jpg";

const RSCarts = () => {
  // Initialize the state for progress value
  const [progressValue, setProgressValue] = useState(7); // Setting an initial value

  // Function to increment the progress value
  const handleIncrement = () => {
    if (progressValue < 10) {
      setProgressValue(progressValue + 1);
    }
  };

  return (
    <div>
      {/* first cart */}
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
      </section>

      {/* second card  */}
      <section>
        <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
          {/* Adjust gap for responsiveness */}
          <section className="flex items-center sm:justify-between gap-24">
            {/* Text on the left side */}
            <h3 className="font-semibold">Personal Progress</h3>

            {/* Button on the right side */}
            {/* <button className="btn btn-xs text-blue-400 bg-base-300">Go to board</button> */}
            <span className=" text-blue-400 text-xs">Go to board</span>
          </section>

          <hr className="my-2" />

          {/* Project list - stacking for small screens */}
          <div className="text-start flex flex-row justify-evenly items-center gap-4">
            {/* Image container */}
            <div>
              <img
                width="50"
                height="50"
                src={oimg} // Make sure oimg contains a valid image source
                alt="status"
              />
            </div>

            {/* Progress text and bar */}
            <div className="w-56 relative">
              <p>Are either of your parents living?</p>
              <progress
                className="progress progress-success w-full"
                value={progressValue * 10} // Adjust for percentage value
                max="100"
              ></progress>
              {/* Show the inner value in the middle of the progress bar */}
              <span className="absolute inset-0 flex justify-center items-center text-sm font-bold">
                {progressValue}/10
              </span>
            </div>

            {/* Icon to increase progress */}
            <div>
              <button onClick={handleIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 hover:text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-start flex flex-row justify-evenly items-center gap-4">
            {/* Image container */}
            <div>
              <img
                width="50"
                height="50"
                src={bimg} // Make sure oimg contains a valid image source
                alt="status"
              />
            </div>

            {/* Progress text and bar */}
            <div className="w-56 relative">
              <p>Do you belong to any groups in whi.....</p>
              <progress
                className="progress progress-success w-full"
                value={progressValue * 10} // Adjust for percentage value
                max="100"
              ></progress>
              {/* Show the inner value in the middle of the progress bar */}
              <span className="absolute inset-0 flex justify-center items-center text-sm font-bold">
                {progressValue}/10
              </span>
            </div>

            {/* Icon to increase progress */}
            <div>
              <button onClick={handleIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 hover:text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-start flex flex-row justify-evenly items-center gap-4">
            {/* Image container */}
            <div>
              <img
                width="50"
                height="50"
                src={pimg} // Make sure oimg contains a valid image source
                alt="status"
              />
            </div>

            {/* Progress text and bar */}
            <div className="w-56 relative">
              <p className="text-center">1-2-1 Events</p>
              <progress
                className="progress progress-success w-full mt-5"
                value={progressValue * 10} // Adjust for percentage value
                max="100"
              ></progress>
              {/* Show the inner value in the middle of the progress bar */}
              <span className="absolute inset-0 flex justify-center items-center text-sm font-bold">
                {progressValue}/10
              </span>
            </div>

            {/* Icon to increase progress */}
            <div>
              <button onClick={handleIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 hover:text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Align the text at the end on larger screens */}
          <p className="text-xs text-blue-400 text-end mt-4">Show All</p>
        </div>
      </section>

      {/* third card */}

      <section className="bg-base-300 rounded-lg">
        <div className="flex justify-evenly items-center">
          <p className="font-semibold text-blue-500">Tasks</p>
          <div>
            <button className="btn border border-black font-mono btn-sm">
              25 To Do
            </button>
            | <button className="btn bg-slate-300 btn-sm">43 Done</button>
          </div>
          <button className="font-semibold text-blue-500">Filters</button>
        </div>
        <hr />
        <div className="flex justify-center items-center gap-3 my-5 px-4">
          <input
            className="w-full mx-2 h-10 rounded-lg"
            placeholder="  Add your next task"
            type="text"
            name=""
            id=""
          />
          <button className="btn btn-sm bg-pink-600 text-white rounded-none">
            Save Task
          </button>
        </div>

        <div className="p-5">
          <div class="border border-gray-300 p-4 flex justify-between items-center">
            {/* <!-- Left aligned text --> */}
            <p class="text-sm">This is a one-line text</p>

            {/* <!-- Right aligned checkbox and settings icon --> */}
            <div class="flex items-center space-x-2">
              {/* <!-- Checkbox --> */}
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-blue-600"
              />

              {/* <!-- Settings Icon --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                class="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm7.47 2.25a7.468 7.468 0 01-.36 2.17l1.53 1.53a1.13 1.13 0 010 1.6l-1.6 1.6a1.13 1.13 0 01-1.6 0l-1.53-1.53a7.468 7.468 0 01-2.17.36 7.468 7.468 0 01-2.17-.36l-1.53 1.53a1.13 1.13 0 01-1.6 0l-1.6-1.6a1.13 1.13 0 010-1.6l1.53-1.53a7.468 7.468 0 01-.36-2.17 7.468 7.468 0 01.36-2.17L4.64 9.64a1.13 1.13 0 010-1.6l1.6-1.6a1.13 1.13 0 011.6 0l1.53 1.53a7.468 7.468 0 012.17-.36 7.468 7.468 0 012.17.36l1.53-1.53a1.13 1.13 0 011.6 0l1.6 1.6a1.13 1.13 0 010 1.6l-1.53 1.53a7.468 7.468 0 01.36 2.17z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSCarts;
