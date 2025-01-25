import axios from 'axios';

export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
}

export const fetchJobs = async (): Promise<Job[]> => {
    const response = await axios.get('http://localhost:5000/api/jobs');
    return response.data;
}

