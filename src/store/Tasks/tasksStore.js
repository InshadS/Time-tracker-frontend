import { makeAutoObservable } from 'mobx';
import { getTask } from '../../api/task';

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
}

export default tasksStore;
