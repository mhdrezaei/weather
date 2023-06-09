import React from "react";

function Card({ children }) {
  return (
    <div className="w-full  rounded-2xl p-4 shadow-inner bg-gray-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
      {children}
    </div>
  );
}

export default Card;
