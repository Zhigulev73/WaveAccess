import React from "react";
import TaskCreator from "../pages/TaskCreator/taskCreator";
import List from "../pages/TasksList/tasksList";

export type ComponentsType = {
  path: string;
  Component: React.FC;
};

const Routes: ComponentsType[] = [
  {
    path: "/",
    Component: List,
  },
  {
    path: "/task",
    Component: TaskCreator,
  },
  // {
  //   path: "/settings",
  //   Component: SuspendedSettings,
  // },
  // {
  //   path: "/",
  //   Component: SuspendedToDoLists,
  // },
  // {
  //   path: "*",
  //   Component: SuspendedError,
  // },
];

export default Routes;
