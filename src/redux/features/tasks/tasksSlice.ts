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
      id: "s1",
      title: "Initialize Frontend",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "s2",
      title: "Initialize GitHub",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "s3",
      title: "Tailwind CSS",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "s4",
      title: "React",
      description: "Create Home Page And Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
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
