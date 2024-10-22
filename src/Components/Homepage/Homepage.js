import React from "react";
import Newsfeed from "../Newsfeed/Newsfeed";
import LSCarts from "../LSCarts/LSCarts";
import RSCarts from "../RSCarts/RSCarts";

const Homepage = () => {
  return (
    <div className="flex flex-row justify-between gap-0">
      <div>
        <LSCarts />
      </div>
      <div>
        <Newsfeed />
      </div>
      <div>
        <RSCarts />
      </div>
    </div>
  );
};

export default Homepage;
