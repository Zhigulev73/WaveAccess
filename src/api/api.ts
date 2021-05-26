import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_URL,
});

export const API = {
  getTasks: () =>
    instance
      .get(
        `/tasks`
      )
      .then((response) => response.data),
};
