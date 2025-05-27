import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

function DashboardOverview() {
  return (
    <div className="flex w-full gap-8 p-8">
      {/* Left Side: Anatomy Section */}
      <div className="w-6/7">
        <AnatomySection />
      </div>

      {/* Right Side: Health Status Cards */}
      <div className="w-4/3">
        <HealthStatusCards />
      </div>
    </div>
  );
}

export default DashboardOverview;
