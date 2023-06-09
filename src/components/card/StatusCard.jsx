import React from "react";
import Card from "./Card";

function StatusCard({ children, icon }) {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <span>
          <i className={`wi ${icon} text-2xl lg:text-3xl`}></i>{" "}
        </span>
        <span className="text-xl lg:text-3xl"> {children}</span>
      </div>
    </Card>
  );
}

export default StatusCard;
