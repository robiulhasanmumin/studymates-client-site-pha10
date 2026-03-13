import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyConnectionList from './MyConnectionList';
import { FaHandshake, FaSearch } from 'react-icons/fa';

const MyConnection = () => {
  const connectionData = useLoaderData();
  const [connections, setConnections] = useState(connectionData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUIDelete = (id) => {
    const filterData = connections.filter(c => c._id !== id);
    setConnections(filterData);
  };

  const handleUIUpdate = (id, update) => {
    const updateData = connections.map(u => u._id === id ? { ...u, ...update } : u);
    setConnections(updateData);
  };

   const filteredConnections = connections.filter(conn => 
    conn.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    conn.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-200/30 py-12 px-5 md:px-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="font-black text-4xl md:text-5xl mb-4">
          My <span className="text-[#4F959D]">Partner</span> Connections
        </h1>
        <p className="text-gray-500 text-lg">Manage and stay connected with your study partners in one place.</p>
      </div>

      {/* Stats and Search Control */}
      <div className="max-w-5xl mx-auto bg-base-100 p-6 rounded-[2rem] shadow-sm border border-base-200 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#4F959D]/10 rounded-2xl text-[#4F959D]">
            <FaHandshake size={24} />
          </div>
          <div>
            <p className="text-sm font-bold opacity-60 uppercase tracking-wider">Active Connections</p>
            <p className="text-2xl font-black text-[#4F959D]">{connections.length}</p>
          </div>
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-72">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Filter by name..." 
            className="input input-bordered w-full pl-10 rounded-xl bg-base-200 border-none focus:ring-2 focus:ring-[#4F959D]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Connection List Display */}
      <div className="max-w-5xl mx-auto">
        {filteredConnections.length > 0 ? (
          <div className="space-y-4 animate__animated animate__fadeIn">
            {filteredConnections.map(connection => (
              <MyConnectionList 
                handleUIDelete={handleUIDelete} 
                key={connection._id} 
                handleUIUpdate={handleUIUpdate} 
                connection={connection} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-5 bg-base-100 rounded-[3rem] border-2 border-dashed border-base-300">
            <div className="text-7xl opacity-20">🤝</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-400">No Connections Found</h3>
              <p className="text-gray-400 max-w-xs mx-auto mt-2">
                You haven't connected with any partners yet or your search didn't match.
              </p>
            </div>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")} 
                className="btn btn-sm btn-ghost text-[#4F959D]"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyConnection;