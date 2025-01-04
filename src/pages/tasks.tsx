import { selectFilter, selectTasks } from "@/redux/features/tasks/tasksSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks, filter);
  return (
    <div>
      <h2>This is a task components</h2>
    </div>
  );
};

export default Tasks;
