import React from "react";
import Flow from "./Flow";

const Animae = () => {
  return (
    <div className="h-full">
      <div
        className="absolute mt-14 overflow-hidden md:h-3/4 h-1/4 sm:h-2/4 max-w-min aspect-square animate-[pulsePing_1s_ease-in-out_infinite] bg-blue-300 rounded-full transition-all duration-1200 opacity-0 left-0 right-0 m-auto"
        style={{ backgroundColor: "white" }}
      ></div>
      <Flow />
    </div>
  );
};

export default Animae;
