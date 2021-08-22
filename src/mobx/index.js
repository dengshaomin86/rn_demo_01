import {makeAutoObservable} from 'mobx';

class RootStore {
  name;

  changeName(name) {
    this.name = name;
  }

  constructor() {
    this.name = 'root_store_name';
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
