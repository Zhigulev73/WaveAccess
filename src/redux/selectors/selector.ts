import { AppStateType } from "../store";

export const getTasksFromState = (state: AppStateType) => state.doneTasks;

