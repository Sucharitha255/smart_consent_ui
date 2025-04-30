import React, { useState, useEffect } from "react";
import usersData from "./data/users.json";
import PermissionCard from "./components/PermissionCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const togglePermission = (id) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, permission: !user.permission } : user
    );
    setUsers(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Smart Consent Dashboard
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {users.map((user) => (
          <PermissionCard
            key={user.id}
            user={user}
            onToggle={togglePermission}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
