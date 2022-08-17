import { createContext, useContext } from 'react';
import TasksStore from './Tasks/tasksStore';
import AuthStore from './Auth/authStore';

const tasksStore = new TasksStore();
const authStore = new AuthStore();

export const store = {
  tasksStore,
  authStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
