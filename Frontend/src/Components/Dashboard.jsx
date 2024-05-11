// Dashboard.js
import React, { useState, useEffect } from 'react';
import BatteryLevel from './BatteryLevel';
import OperationalStatus from './OperationalStatus';
import ActivityLogs from './ActivityLogs';

function Dashboard() {
  // State for real-time data
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [operationalStatus, setOperationalStatus] = useState('idle');
  const [activityLogs, setActivityLogs] = useState([]);

  // Simulated real-time data update
  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch real-time data from API or update as per your setup
      setBatteryLevel(Math.floor(Math.random() * 100));
      setOperationalStatus(['idle', 'active', 'charging'][Math.floor(Math.random() * 3)]);
      // Fetch recent activity logs
      fetchActivityLogs();
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Fetch recent activity logs
  const fetchActivityLogs = () => {
    // Code to fetch activity logs from API
    // Update activityLogs state
  };

  // Function to refresh data
  const refreshData = () => {
    // Fetch real-time data again
    // Update activity logs
    fetchActivityLogs();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Robotics System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BatteryLevel level={batteryLevel} />
        <OperationalStatus status={operationalStatus} />
      </div>
      <ActivityLogs logs={activityLogs} />
      <div className="mt-4">
        <button
          onClick={refreshData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
