import React from 'react';
import { useLocation } from 'react-router-dom';

const Message = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <div className="h-full flex items-center justify-center">User not found</div>;
  }

  return (
    <div className="h-full flex flex-col p-6 bg-gray-100">
      <div className="flex items-center mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.message}</p>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
        <img
          src={user.image}
          alt={`${user.name}'s image`}
          className="w-full h-64 object-cover rounded-md"
        />
        <p className="mt-4 text-gray-700">Last message: {user.message}</p>
      </div>
    </div>
  );
};

export default Message;