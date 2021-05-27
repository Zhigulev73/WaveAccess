import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL:  'http://localhost:3000',
});

export const API = {
  getTasks: () =>
    instance
      .get(
        `/tasks`
      )
      .then((response: any) => response.data),
  addTask: (NewTaskParams: any) =>
     instance.post(`/tasks/`, NewTaskParams),
};
