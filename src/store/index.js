import { createContext, useContext } from 'react';
import TasksStore from './Tasks/tasksStore';

const tasksStore = new TasksStore();

export const store = {
  tasksStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
