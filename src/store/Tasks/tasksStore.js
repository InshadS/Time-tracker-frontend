import { makeAutoObservable } from 'mobx';
import { deleteTask, getTask } from '../../api/task';

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
}

export default tasksStore;
