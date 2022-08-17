import { makeAutoObservable } from 'mobx';
import { getUser } from '../../api/auth';

class authStore {
  constructor() {
    makeAutoObservable(this);
  }

  user = null;

  setUser = (data) => {
    this.user = data;
  };

  getUser = async () => {
    const response = await getUser();
    this.setUser(response.data.user);
  };
}

export default authStore;
