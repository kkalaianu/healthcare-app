
import { healthData } from '../../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="flex flex-col gap-8">
      {healthData.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 rounded-xl p-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <img src={item.icon} alt={item.title} className="w-10 h-10" />
            <div>
              <h4 className="font-semibold text-gray-700">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
          <div className="w-24 h-2 bg-gray-500 rounded-full">
            <div
              className={`h-full rounded-full ${item.statusColor}`}
              style={{ width: `${item.statusLevel}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
