import React from 'react';

function BowlingStats(props) {
  const data = props.data;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {data?.headers?.length > 0 && data?.values?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-300">
            <thead className="bg-indigo-600 text-white">
              <tr>
                {data.headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {data.values.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0
                      ? 'bg-gray-100'
                      : 'bg-white'
                  }`}
                >
                  {row.values.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          No data available
        </p>
      )}
    </div>
  );
}

export default BowlingStats;
