import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/tasks' });

export const getTasks = (query) => API.get(`?${query}`);
export const createTask = (data) => API.post('/', data);
export const updateTask = (id, data) => API.put(`/${id}`, data);
export const deleteTask = (id) => API.delete(`/${id}`);
export const toggleTask = (id) => API.patch(`/${id}/toggle`);
