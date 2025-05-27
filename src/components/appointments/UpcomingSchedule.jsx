import React from "react";
import upcomingAppointments from "../../data/upcomingAppointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      <div className="space-y-6">
        {upcomingAppointments.map((group, index) => (
          <div key={index}>
            <h3 className="text-md font-bold text-gray-700 mb-2">{group.day}</h3>
            <div className="space-y-2">
              {group.appointments.map((appt, idx) => (
                <SimpleAppointmentCard
                  key={idx}
                  title={appt.title}
                  time={appt.time}
                  icon={appt.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSchedule;
