import axios from './axios';

export const addTask = async (userId, task) => {
  await axios.post(`/task/${userId}/add-task`, {
    name: task,
  });
};

export const getTask = async (userId) => {
  return await axios.get(`/task/${userId}/list-tasks`);
};
