
import React from "react";

const activityData = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 3 },
  { day: "Wed", value: 1 },
  { day: "Thu", value: 4 },
  { day: "Fri", value: 2 },
  { day: "Sat", value: 3 },
  { day: "Sun", value: 0 },
];

const ActivityFeed = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Activity
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        3 appointments on this week
      </p>

      <div className="flex items-end space-x-4 h-40">
        {activityData.map((data, index) => (
          <div key={index} className="flex flex-col items-center justify-end">
            <div
              className="w-6 bg-blue-500 rounded-md"
              style={{ height: `${data.value * 20}px` }}
            />
            <span className="text-xs mt-1 text-gray-600">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
