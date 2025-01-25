import React, { useState } from "react";

interface Application {
  id: number;
  title: string;
  company: string;
  status: string;
}

const ApplicationTracker: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  const addApplication = (job: Application) => {
    setApplications([...applications, job]);
  };

  return (
    <div>
      <h1>Application Tracker</h1>
      <ul>
        {applications.map((app) => (
          <li key={app.id}>
            {app.title} at {app.company} - {app.status}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addApplication({
            id: 1,
            title: "Frontend Developer",
            company: "Tech Co",
            status: "Applied",
          })
        }
      >
        Add Application
      </button>
    </div>
  );
};

export default ApplicationTracker;
