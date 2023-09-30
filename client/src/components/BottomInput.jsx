import React from 'react';

const BottomInput = () => {
  return (
    <div className="bg-white h-80px fixed bottom-0 p-4 border-t border-gray-300">
      <div className="grid grid-cols-4 gap-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Input 1"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Input 2"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Input 3"
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Input 4"
        />
      </div>
    </div>
  );
};

export default BottomInput;
