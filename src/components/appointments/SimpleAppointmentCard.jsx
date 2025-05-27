
import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm">
      <div className="text-2xl mr-4">{icon}</div>
      <div>
        <h4 className="text-md font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
