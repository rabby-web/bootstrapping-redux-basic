import { RootState } from "@/redux/store";
import { ITask } from "./../../../../types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "sss",
      title: "Initialize Frontend",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "ssss",
      title: "Initialize GitHub",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
