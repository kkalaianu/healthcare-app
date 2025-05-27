import React from "react";
import DashboardOverview from "./overview/DashboardOverview";
import CalendarView from "./calendar/CalendarView";
import UpcomingSchedule from "./appointments/UpcomingSchedule";
import ActivityFeed from "./appointments/ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 gap-4 p-2 md:p-4 overflow-hidden">
          {/* Left - Overview & Activity */}
          <div className="w-full md:w-2/3 flex flex-col gap-4 overflow-y-auto min-w-0">
            <DashboardOverview />
            <ActivityFeed />
          </div>

          {/* Right - Calendar & Schedule */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 overflow-y-auto min-w-0">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>


        );
};

export default DashboardMainContent;
