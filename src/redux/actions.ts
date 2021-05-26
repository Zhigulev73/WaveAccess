import { FormAction } from "redux-form/lib/actions";
import { API } from "../api/api";
import { BaseThunkType, InferActionsTypes } from "./store";

export const actions = {
  setTasks: (tasks: any) => ({ type: "SET_TASKS", tasks } as const),
};

export const getTasks = (): ThunkType => async (dispatch) => {
  const response = await API.getTasks();
  dispatch(actions.setTasks(response))
};

export type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
