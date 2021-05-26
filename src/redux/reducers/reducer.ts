import {ActionsType} from "../actions";

interface InitialStateType {
  doneTasks: any;
}

const initialState: InitialStateType = {
  doneTasks: [],
};

const reducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET_TASKS": {
      return { ...state, doneTasks: action.tasks };
    }
    default:
      return state;
  }
};

export default reducer;
