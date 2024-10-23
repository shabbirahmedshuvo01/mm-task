import React from "react";
import mlogo from "../../Imgs/Screenshot 2024-10-20 231640.png";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">
            <img width="80" src={mlogo} alt="" />
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">ORGANISATIONS</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">YOUR ACCOUNT </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">EXPLORE</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">FOLLOW THE MAKERBLE STORY</h6>
          <div className="grid grid-flow-col gap-10">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="w-8 h-8"
              >
                {/* <!-- Background Circle --> */}
                <circle cx="24" cy="24" r="24" fill="#0077b5" />

                {/* <!-- LinkedIn Logo --> */}
                <path
                  fill="#fff"
                  d="M15.47 19.94h-4.94v15.7h4.94v-15.7zm-2.47-8.52c-1.63 0-2.64 1.03-2.64 2.39 0 1.32 1 2.39 2.55 2.39h.03c1.64 0 2.64-1.07 2.64-2.39-.03-1.36-1-2.39-2.58-2.39zm10.23 8.52h-4.72v2.19h.07c.66-1.24 2.27-2.55 4.67-2.55 5 0 5.93 3.26 5.93 7.49v8.56h-4.94v-7.57c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.96-2.88 3.98v7.7h-4.94v-15.7h4.75v2.14h.07c.66-1.24 2.26-2.55 4.65-2.55 5.02 0 5.96 3.26 5.96 7.49v8.56h-4.94v-7.57c0-1.8-.03-4.11-2.49-4.11-2.51 0-2.89 1.96-2.89 3.98v7.7h-4.94v-15.7h4.72v2.14h.07c.66-1.24 2.25-2.55 4.64-2.55 5.03 0 5.96 3.26 5.96 7.49v8.56h-4.94v-7.57c0-1.8-.03-4.11-2.49-4.11-2.5 0-2.88 1.96-2.88 3.98v7.7h-4.94v-15.7h4.72v2.14h.07z"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="w-8 h-8"
              >
                {/* <!-- Background Circle --> */}
                <circle cx="24" cy="24" r="24" fill="#FF0000" />

                {/* <!-- YouTube Logo --> */}
                <path
                  fill="#fff"
                  d="M33.22 19.34c-.16-1.28-1.27-2.27-2.56-2.43-2.32-.28-5.81-.28-5.81-.28s-3.49 0-5.81.28c-1.28.16-2.4 1.15-2.56 2.43-.34 2.74-.34 8.45-.34 8.45s0 5.71.34 8.45c.16 1.28 1.27 2.27 2.56 2.43 2.32.28 5.81.28 5.81.28s3.49 0 5.81-.28c1.28-.16 2.4-1.15 2.56-2.43.34-2.74.34-8.45.34-8.45s0-5.71-.34-8.45zm-12.45 7.9v-6.25l5.71 3.13-5.71 3.12z"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="w-8 h-8"
              >
                {/* <!-- Background Circle --> */}
                <circle cx="24" cy="24" r="24" fill="#4CAF50" />

                {/* <!-- Camera Icon --> */}
                <path
                  fill="#fff"
                  d="M24 13c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 10.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM29.5 7h-11L17 9H9v28h30V9h-8l-1.5-2z"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="w-8 h-8"
              >
                {/* <!-- Background Circle --> */}
                <circle cx="24" cy="24" r="24" fill="#1DA1F2" />

                {/* <!-- Twitter Icon --> */}
                <path
                  fill="#fff"
                  d="M38.4 15.5c-1.1.5-2.2.8-3.4.9 1.2-.7 2.1-1.9 2.5-3.2-1.1.7-2.3 1.2-3.7 1.5a6.13 6.13 0 0 0-10.5 5.6c-5.1-.3-9.6-2.7-12.6-6.4-1.7 3 0 6.8 3.3 8.6-1 .1-2.1-.2-3-.7v.1c0 3.2 2.3 6 5.5 6.7-.8.2-1.7.3-2.6.3-.6 0-1.2-.1-1.7-.2 1.2 3.7 4.7 6.4 8.8 6.4-3.2 2.5-7.3 4-11.7 4-.8 0-1.5 0-2.3-.1 4.2 2.7 9.2 4.3 14.6 4.3 17.6 0 27.3-14.6 27.3-27.3v-1.2c1.9-1.4 2.3-2.4 2.3-2.4z"
                />
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="w-8 h-8"
              >
                {/* <!-- Background Circle --> */}
                <circle cx="24" cy="24" r="24" fill="#1877F2" />

                {/* <!-- Facebook Icon --> */}
                <path
                  fill="#fff"
                  d="M29.6 24.6h-3.4v10.8h-4.4V24.6h-2.2v-3.7h2.2v-2.3c0-1.8 1.2-4.4 4.4-4.4h3.3v3.7h-2.4c-.7 0-1.1.3-1.1 1.1v1.9h3.5l-.3 3.7z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
