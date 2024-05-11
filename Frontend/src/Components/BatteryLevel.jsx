// BatteryLevel.js
import React from 'react';

function BatteryLevel({ level }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Battery Level</h2>
      <div className="flex items-center">
        <span className="text-2xl font-semibold">{level}%</span>
        <div className="flex-1 bg-gray-200 h-4 ml-2 rounded-full">
          <div className="bg-green-500 h-full rounded-full" style={{ width: `${level}%` }} />
        </div>
      </div>
    </div>
  );
}

export default BatteryLevel;
