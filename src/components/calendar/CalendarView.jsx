import React from "react";
import calendarAppointments from "../../data/calendarAppointments";

const colorMap = {
  blue: {
    bg: "bg-blue-100",
    border: "border-blue-500",
    text: "text-blue-800",
    time: "text-blue-700"
  },
  green: {
    bg: "bg-green-100",
    border: "border-green-500",
    text: "text-green-800",
    time: "text-green-700"
  },
  red: {
    bg: "bg-red-100",
    border: "border-red-500",
    text: "text-red-800",
    time: "text-red-700"
  },
};

const CalendarView = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Collect appointments by day
  const appointmentsByDay = {};
  calendarAppointments.forEach((appt) => {
    if (!appointmentsByDay[appt.day]) {
      appointmentsByDay[appt.day] = [];
    }
    appointmentsByDay[appt.day].push(appt);
  });

  return (
    <section className="w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">October 2021</h2>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3 text-center text-sm text-gray-700 mb-6">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-500">{day}</div>
        ))}
        {days.map((day) => {
          const appts = appointmentsByDay[day] || [];
          return (
            <div
              key={day}
              className="border border-gray-200 rounded-md h-20 p-1 relative bg-gray-50 flex flex-col items-start justify-start"
            >
              <div className="text-xs font-medium text-gray-700">{day}</div>
              <div className="text-[10px] text-blue-600 space-y-1 mt-1">
                {appts.map((appt, idx) => (
                  <div key={idx}>{appt.times.join(", ")}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Appointment Cards */}
      <div className="space-y-4">
        {calendarAppointments.map((appt, index) => {
          const color = colorMap[appt.color] || colorMap.blue;
          return (
            <div
              key={index}
              className={`p-4 rounded-md shadow-sm ${color.bg} border-l-4 ${color.border}`}
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="text-lg">{appt.icon}</span>
                <span className={color.text}>{appt.title}</span>
              </div>
              <p className={`text-sm ${color.time}`}>
                {appt.times.join(" & ")} on {appt.day}th October
              </p>
              <p className="text-sm text-gray-600 italic">{appt.doctor}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CalendarView;
