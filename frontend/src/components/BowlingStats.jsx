import React from 'react';

function BowlingStats(props) {
  const data = props.data;

  return (
    <div className="p-4">
      {data?.headers?.length > 0 && data?.values?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden dark:bg-neutral-900 dark:divide-neutral-700">
            <thead className="bg-gray-50 dark:bg-neutral-800">
              <tr>
                {data.headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider dark:text-neutral-400"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-neutral-900 dark:divide-neutral-800">
              {data.values.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0
                      ? 'bg-gray-50 dark:bg-neutral-800'
                      : 'bg-white dark:bg-neutral-900'
                  }`}
                >
                  {row.values.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
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
        <p className="text-sm text-gray-500 dark:text-neutral-400">
          No data available
        </p>
      )}
    </div>
  );
}

export default BowlingStats;
