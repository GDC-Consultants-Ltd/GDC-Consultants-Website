// components/JobList.js

import { useState } from 'react';

// Sample job data
const jobs = [
  {
    title: 'Graduate Civil Engineer',
    postedDate: '13 days ago',
    location: 'All Locations',
    category: 'Engineering',
  },
  {
    title: 'Campaign Manager',
    postedDate: '15 days ago',
    location: 'New Zealand',
    category: 'Marketing',
  },
  {
    title: 'Software Developer',
    postedDate: '10 days ago',
    location: 'Sri Lanka',
    category: 'Engineering',
  },
  {
    title: 'Marketing Specialist',
    postedDate: '5 days ago',
    location: 'All Locations',
    category: 'Marketing',
  },
];

// Function to group jobs by category
const groupByCategory = (jobs) => {
  return jobs.reduce((groups, job) => {
    if (!groups[job.category]) {
      groups[job.category] = [];
    }
    groups[job.category].push(job);
    return groups;
  }, {});
};

export default function JobList() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const groupedJobs = groupByCategory(jobs);

  // Filter jobs based on the selected location
  const filteredJobs = selectedLocation === 'All Locations'
    ? jobs
    : jobs.filter((job) => job.location === selectedLocation);

  // Regroup the filtered jobs by category
  const filteredGroupedJobs = groupByCategory(filteredJobs);

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl p-6 mx-auto rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-customBlue font-semibold">Job Openings</h2>
          <div className="relative">
            <select
              className="bg-gray-100 border border-gray-300 rounded-md p-2"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option>All Locations</option>
              <option>New Zealand</option>
              <option>Sri Lanka</option>
            </select>
          </div>
        </div>

        {/* Display jobs section-wise based on categories */}
        {Object.keys(filteredGroupedJobs).map((category) => (
          <div key={category} className="space-y-6 mb-6">
            <div className="border-b pb-2">
              <h3 className="text-lg font-medium">{category}</h3>
            </div>
            {filteredGroupedJobs[category].map((job, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white shadow-sm rounded-md hover:border hover:border-customBlue transition cursor-pointer"
              >
                <div>
                  <h4 className="text-md text-customYellow font-bold">{job.title}</h4>
                  <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
                </div>
                <span className="text-sm text-gray-700">{job.location}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
