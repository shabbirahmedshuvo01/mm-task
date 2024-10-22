import React from "react";
import mimg from "../../Imgs/download.jpeg";
import timg from "../../Imgs/9223998.png";
import nimg from "../../Imgs/download.png";

const LSCarts = () => {
  return (
    <div>
      <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
        {/* Adjust gap for responsiveness */}
        <section className="flex items-center sm:justify-between gap-24">
          {/* Text on the left side */}
          <h3 className="text-blue-600 font-semibold">
            15 Contacts <span>M</span> <span>Q</span>
          </h3>

          {/* Button on the right side */}
          <button className="btn btn-xs rounded-lg bg-blue-600 text-white ml-auto">
            <span>+</span> New Contact
          </button>
        </section>

        <hr className="my-2" />

        {/* Contact list - stacking for small screens */}
        <section className="text-start flex items-center gap-2 my-4">
          <img width="30" height="30" src={mimg} alt="Contact Avatar" />
          <p className="mb-2">Herry</p>
        </section>

        <section className="text-start flex items-center gap-2 my-4">
          <img width="30" height="30" src={mimg} alt="Contact Avatar" />
          <p className="mb-2">Herry</p>
        </section>

        <section className="text-start flex items-center gap-2 my-4">
          <img width="30" height="30" src={mimg} alt="Contact Avatar" />
          <p className="mb-2">Herry</p>
        </section>

        {/* Align the text at the end on larger screens */}
        <p className="text-xs text-blue-400 text-end mt-4">Show All</p>
      </div>

      {/* 2nd card */}

      <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
        {/* Adjust gap for responsiveness */}
        <section className="flex items-center sm:justify-between gap-24">
          {/* Text on the left side */}
          <h3 className="text-blue-600 font-semibold">Projects</h3>

          {/* Button on the right side */}
          <button className="btn btn-xs rounded-lg bg-blue-600 text-white ml-auto">
            <span>+</span> New Project
          </button>
        </section>

        <hr className="my-2" />

        {/* Project list - stacking for small screens */}
        <div className="flex justify-between">
          <section className="text-start flex items-center gap-2 my-4">
            <img width="30" height="30" src={timg} alt="Contact Avatar" />
            <p className="mb-2 text-xs">4359 test</p>
          </section>
          <svg
            className="text-sky-500 mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a1 1 0 0 1 .993.883L9 2v1.07a5.987 5.987 0 0 1 2.755 1.074l.708-.708a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1 0 1.414l-.708.708A5.978 5.978 0 0 1 14 8a5.978 5.978 0 0 1-.636 2.556l.708.708a1 1 0 0 1 0 1.414l-1.1 1.1a1 1 0 0 1-1.414 0l-.708-.708A5.987 5.987 0 0 1 9 13.93V15a1 1 0 0 1-1.993.117L7 15v-1.07a5.987 5.987 0 0 1-2.755-1.074l-.708.708a1 1 0 0 1-1.414 0l-1.1-1.1a1 1 0 0 1 0-1.414l.708-.708A5.978 5.978 0 0 1 2 8a5.978 5.978 0 0 1 .636-2.556l-.708-.708a1 1 0 0 1 0-1.414l1.1-1.1A1 1 0 0 1 4.414 1.5l.708.708A5.987 5.987 0 0 1 7 1.07V1a1 1 0 0 1 1-1zM8 3.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
          </svg>
        </div>
        <div className="flex justify-between">
          <section className="text-start flex items-center gap-2 my-4">
            <img width="30" height="30" src={timg} alt="Contact Avatar" />
            <p className="mb-2 text-xs">a test 5146</p>
          </section>
          <svg
            className="text-sky-500 mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a1 1 0 0 1 .993.883L9 2v1.07a5.987 5.987 0 0 1 2.755 1.074l.708-.708a1 1 0 0 1 1.414 0l1.1 1.1a1 1 0 0 1 0 1.414l-.708.708A5.978 5.978 0 0 1 14 8a5.978 5.978 0 0 1-.636 2.556l.708.708a1 1 0 0 1 0 1.414l-1.1 1.1a1 1 0 0 1-1.414 0l-.708-.708A5.987 5.987 0 0 1 9 13.93V15a1 1 0 0 1-1.993.117L7 15v-1.07a5.987 5.987 0 0 1-2.755-1.074l-.708.708a1 1 0 0 1-1.414 0l-1.1-1.1a1 1 0 0 1 0-1.414l.708-.708A5.978 5.978 0 0 1 2 8a5.978 5.978 0 0 1 .636-2.556l-.708-.708a1 1 0 0 1 0-1.414l1.1-1.1A1 1 0 0 1 4.414 1.5l.708.708A5.987 5.987 0 0 1 7 1.07V1a1 1 0 0 1 1-1zM8 3.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" />
          </svg>
        </div>
        <div className="flex justify-between">
          <section className="text-start flex items-center gap-2 my-4">
            <img width="30" height="30" src={timg} alt="Contact Avatar" />
            <p className="mb-2 text-xs">A traing Project</p>
          </section>
          <svg
            className="text-sky-500 mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
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

      {/* 3rd card  */}
      <section>
        <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
          {/* Adjust gap for responsiveness */}
          <section className="text-start">
            {/* Text on the left side */}
            <h3 className="text-blue-600 font-semibold">Organizations</h3>
          </section>

          <hr className="my-2" />

          {/* Project list - stacking for small screens */}
          <div className="flex justify-between">
            <section className="text-start flex items-center gap-2 my-4">
              <img width="30" height="30" src={nimg} alt="Contact Avatar" />
              <div className="text-xs">
                <p className="mt-2 text-blue-400">An organization demo</p>
                <p>Admin</p>
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
                <p>Admin</p>
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
                <p>Admin</p>
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

      <section>
        <section>
          <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
            {/* Text on the left side */}
            <h3 className="text-blue-600 font-semibold text-start">
              Followers
            </h3>
            <div className="my-5 flex gap-5">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
            </div>
            {/* Align the text at the end on larger screens */}
            <p className="text-xs text-blue-400 text-end mt-4">Show All</p>
          </div>

          <div></div>
        </section>
      </section>
      <section>
        <section>
          <div className="bg-base-300 p-5 shadow-sm rounded-lg m-4">
            {/* Text on the left side */}
            <h3 className="text-blue-600 font-semibold text-start">
            People You Follow
            </h3>
            <div className="my-5 flex gap-5">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <img src={nimg} alt="" />
                </div>
              </div>
            </div>
            {/* Align the text at the end on larger screens */}
            <p className="text-xs text-blue-400 text-end mt-4">Show All</p>
          </div>

          <div></div>
        </section>
      </section>
    </div>
  );
};

export default LSCarts;
