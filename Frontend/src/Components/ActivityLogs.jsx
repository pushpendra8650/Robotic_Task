// ActivityLogs.js
import React from 'react';

function ActivityLogs({ logs }) {
  return (
    <div className="bg-white p-4 rounded shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Activity Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityLogs;
