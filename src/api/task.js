import axios from './axios';

//Add task
export const addTask = async (
  userId,
  task,
  startTime,
  endTime,
  taskDuration
) => {
  return await axios.post(`/task/${userId}/add-task`, {
    task: task,
    start_time: startTime,
    end_time: endTime,
    task_duration: taskDuration,
  });
};

//Delete task
export const deleteTask = async (id) => {
  await axios.post(`/task/delete-task/${id}`);
};

//Update task
export const updateTask = async (id, task) => {
  await axios.post(`/task/update-task/${id}`, {
    task: task,
  });
};

//Get all tasks
export const getTask = async (userId, page, size) => {
  return await axios.get(`/task/${userId}/list-tasks`, {
    params: {
      page,
      size,
    },
  });
};
