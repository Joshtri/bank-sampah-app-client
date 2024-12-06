import React from 'react';

// Komponen tombol dengan loading state
function LoadingButton({ isLoading, children, ...props }) {
  return (
    <button
      {...props}
      className={`w-full py-2 px-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 mt-6 flex items-center justify-center ${
        isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
      } text-white`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          {/* Spinner */}
          <svg
            className="w-5 h-5 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          {children}
        </div>
      )}
    </button>
  );
}

export default LoadingButton;
