import React from 'react';
import anatomyImage from '../../assets/anatomy.png';
import { FaHeartbeat, FaWalking } from 'react-icons/fa';

const AnatomySection = () => {
  return (
    <div className="bg-gray-200 rounded-xl p-4 mb-4 w-full max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h3>

      <div className="relative w-full aspect-[3/4]">
        <img
          src={anatomyImage}
          alt="Human Anatomy"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* 💙 Heart Label */}
        <div className="absolute top-[8%] left-[56%] bottom-[60%] flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-lg" />
          <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1 shadow">
            <FaHeartbeat /> Healthy Heart
          </div>
        </div>

        {/* 🦵 Leg Label */}
        <div className="absolute bottom-[16%] left-[48%] flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-lg" />
          <div className="bg-cyan-500 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1 shadow">
            <FaWalking /> Healthy Leg
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
