// OperationalStatus.js
import React from 'react';

function OperationalStatus({ status }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Operational Status</h2>
      <div className="text-xl font-semibold">{status}</div>
    </div>
  );
}

export default OperationalStatus;
