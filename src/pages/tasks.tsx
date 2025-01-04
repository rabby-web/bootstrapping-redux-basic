import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/tasks/tasksSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks, filter);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
