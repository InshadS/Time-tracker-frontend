import { makeAutoObservable } from 'mobx';
import { addTask, deleteTask, getTask } from '../../api/task';

class tasksStore {
  constructor() {
    makeAutoObservable(this);
  }

  tasks = [];

  taskId = null;

  userId = null;

  setTasks = (data) => {
    this.tasks = data;
  };

  setTaskId = (id) => {
    this.taskId = id;
  };

  setUserId = (id) => {
    this.userId = id;
  };

  getTask = async () => {
    const response = await getTask(this.userId);
    if (response.status === 200) {
      this.setTasks(response.data);
    }
  };

  deleteTask = async () => {
    await deleteTask(this.taskId);
    const index = this.tasks.findIndex((e) => e.id === this.taskId);
    console.log(this.taskId);
    this.tasks.splice(index, 1);
  };

  addTask = async (task, startTime, endTime, taskDuration) => {
    const response = await addTask(
      this.userId,
      task,
      startTime,
      endTime,
      taskDuration
    );

    const newTask = {
      id: response.data.id,
      user_id: response.data.user_id,
      task: response.data.task,
      start_time: response.data.start_time,
      end_time: response.data.end_time,
      task_duration: response.data.task_duration,
    };

    if (response.status === 200) {
      this.tasks.unshift(newTask);
    }
  };
}

export default tasksStore;
