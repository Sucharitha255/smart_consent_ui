import React from "react";

const PermissionCard = ({ user, onToggle }) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg w-full sm:w-96">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-700">
          Permission: {user.permission ? "Granted" : "Revoked"}
        </span>
        <button
          onClick={() => onToggle(user.id)}
          className={`px-4 py-2 rounded text-white ${
            user.permission ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {user.permission ? "Revoke" : "Grant"}
        </button>
      </div>
    </div>
  );
};

export default PermissionCard;
