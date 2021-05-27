
interface InitialStateType {
  doneTasks: any;
}

const initialState: InitialStateType = {
  doneTasks: [],
};

const reducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case "SET_TASKS": {
      return { ...state, doneTasks: action.tasks };
    }
    case "ADD_NEW_TASK": {
      return {
        ...state,
        doneTasks: [...state.doneTasks, action.task],
      };
    }
    default:
      return state;
  }
};

export default reducer;
