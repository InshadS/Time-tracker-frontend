import axios from './axios';

//Add task
export const addTask = async (userId, task) => {
  await axios.post(`/task/${userId}/add-task`, {
    name: task,
  });
};

//End task
export const endTask = async (id) => {
  return await axios.post(`/task/end-task/${id}`);
};

//Get all tasks
export const getTask = async (userId) => {
  return await axios.get(`/task/${userId}/list-tasks`);
};
