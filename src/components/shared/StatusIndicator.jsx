import { FaSpinner, FaCheckCircle, FaTimesCircle, FaBan } from 'react-icons/fa';

function getStatusColor(status) {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
    case 'success':
      return 'bg-green-100 text-green-800 border border-green-300';
    case 'failed':
      return 'bg-red-100 text-red-800 border border-red-300';
    case 'cancelled':
      return 'bg-gray-100 text-gray-800 border border-gray-300';
    default:
      return 'bg-gray-200 text-gray-600';
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'pending':
      return <FaSpinner className="animate-spin inline-block mr-2" />;
    case 'success':
      return <FaCheckCircle className="inline-block mr-2 text-green-500" />;
    case 'failed':
      return <FaTimesCircle className="inline-block mr-2 text-red-500" />;
    case 'cancelled':
      return <FaBan className="inline-block mr-2 text-gray-500" />;
    default:
      return null;
  }
}

function StatusIndicator({ status }) {
  return (
    <div
      className={`absolute top-2 right-2 text-center px-2 py-1 rounded-full text-xs font-semibold flex items-center ${getStatusColor(
        status
      )}`}
    >
      {getStatusIcon(status)}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
}

export default StatusIndicator;
