import axios from './axios';

export const addTask = async (userId, task) => {
  await axios.post(`http://localhost:5000/task/${userId}/add-task`, {
    task: task,
  });
};
