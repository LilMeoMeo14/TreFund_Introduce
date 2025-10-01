import React from 'react';

const TickerTape = () => {
  // Số liệu dự án TreFund
  const stats = [
    { label: 'Projects Funded', value: '124' },
    { label: 'Total Raised', value: '$3.2M' },
    { label: 'Active Investors', value: '872' },
    { label: 'Upcoming Startups', value: '14' },
    { label: 'Community Members', value: '5.3K' },
  ];

  // Duplicate array for seamless scroll
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <div className="relative w-full overflow-hidden bg-dark-lighter py-4 border-y border-gray-800 shadow-lg">
      <div className="flex animate-scroll hover:pause">
        {duplicatedStats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-8 whitespace-nowrap border-r border-gray-700 hover:bg-primary/5 transition-all duration-300 group"
          >
            <span className="text-primary font-semibold text-lg group-hover:scale-110 transition-transform duration-300">{stat.label}:</span>
            <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
