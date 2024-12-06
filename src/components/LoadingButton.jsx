import React from 'react';

// Komponen tombol dengan loading state
function LoadingButton({ isLoading, children, ...props }) {
  return (
    <button
      {...props}
      className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${
        isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
      } text-white`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-t-2 border-white border-opacity-50 rounded-full animate-spin"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default LoadingButton;
