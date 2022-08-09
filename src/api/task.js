import axios from './axios';

//Add task
export const addTask = async (
  userId,
  task,
  startTime,
  endTime,
  taskDuration
) => {
  await axios.post(`/task/${userId}/add-task`, {
    task: task,
    start_time: startTime,
    end_time: endTime,
    task_duration: taskDuration,
  });
};

//End task
// export const endTask = async (id) => {
//   return await axios.post(`/task/end-task/${id}`);
// };

//Get all tasks
export const getTask = async (userId) => {
  return await axios.get(`/task/${userId}/list-tasks`);
};
