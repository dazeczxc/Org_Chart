import React from 'react';

const BottomInput = () => {
  return (
    <div className="bg-white h-80px fixed bottom-0 p-4 border-t border-gray-300">
      <div className="grid grid-cols-8 gap-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Type"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="New Page?"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Order"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Position"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Parent"
        />
        <input
          type="file"
          className="border border-gray-300 p-2 rounded"
          placeholder="Select Image"
        />

        <button className="border border-gray-300 p-2 rounded">Add</button>

      </div>
    </div>
  );
};

export default BottomInput;
