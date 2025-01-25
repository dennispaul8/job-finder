import React, { useEffect, useState } from "react";
import { fetchJobs, Job } from "../services/jobService";

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobData = await fetchJobs();
        setJobs(jobData);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>Job Listings</h1>

      <input
        type="text"
        placeholder="Search for a job"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>
              {job.company} - {job.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default JobList;
