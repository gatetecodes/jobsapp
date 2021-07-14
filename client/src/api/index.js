import axios from 'axios';

const url = 'http://localhost:5000/api/applicants';

export const fetchApplicants = () => axios.get(url);
export const fetchApplicant = (id) => axios.get(`${url}/${id}`);
export const createApplicant = (newApplicant) => axios.post(url, newApplicant);
