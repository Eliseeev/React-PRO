import { Task } from 'entities/task/model/types';
import styles from './TaskList.module.css';
import { TaskCard } from 'entities/ui/TaskCard';
import { useTasks } from '../model/useTasks';
import { FilterButton } from 'shared/ui/FilterButton';

interface TaskListProps {
  initialTasks: Task[];
}

export const TaskList = ({ initialTasks }: TaskListProps) => {
  const { tasks, filter, setFilter, removeTask } = useTasks(initialTasks);

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.filters}>
          <FilterButton
            value="all"
            label="Все"
            current={filter}
            onChange={setFilter}
          />
          <FilterButton
            value="completed"
            label="Выполненные"
            current={filter}
            onChange={setFilter}
          />
          <FilterButton
            value="incomplete"
            label="Невыполненные"
            current={filter}
            onChange={setFilter}
          />
        </div>
      </div>

      {tasks.map((item) => (
        <div key={item.id} className={styles.row}>
          <TaskCard task={item} />
          <button
            className={styles.removeButton}
            onClick={() => removeTask(item.id)}
          >
            Удалить
          </button>
        </div>
      ))}

      {tasks.length === 0 && <p>Задач нет</p>}
    </>
  );
};
