import { FormAction } from "redux-form/lib/actions";
import { API } from "../api/api";

export const actions = {
  setTasks: (tasks: any) => ({ type: "SET_TASKS", tasks }),
  addNewTask: (task: any) => ({ type: "ADD_NEW_TASK", task }),
};

export const getTasks = () => async (dispatch: any) => {
  const response = await API.getTasks();
  dispatch(actions.setTasks(response))
};

export const addTask = (NewTaskParams: any) => async (
    dispatch: any
) => {
  const response = await API.addTask(NewTaskParams);
  dispatch(actions.addNewTask(response.data));
};

