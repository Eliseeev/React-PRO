import { TaskCard } from 'entities/ui';
import { FilterButton } from 'shared/ui';
import { useTasks } from '../model/useTasks';
import styles from './TaskList.module.css';

const FILTERS = [
  { value: 'all' as const, label: 'Все' },
  { value: 'completed' as const, label: 'Выполненные' },
  { value: 'incomplete' as const, label: 'Невыполненные' },
];

export const TaskList = () => {
  const { tasks, filter, setFilter, removeTask, isLoading, isError } = useTasks();

  if (isLoading) {
    return <p className={styles.empty}>Загрузка...</p>;
  }

  if (isError) {
    return <p className={styles.empty}>Не удалось загрузить задачи</p>;
  }

  return (
    <>
      <div className={styles.filters}>
        {FILTERS.map(({ value, label }) => (
          <FilterButton
            key={value}
            value={value}
            label={label}
            current={filter}
            onChange={setFilter}
          />
        ))}
      </div>

      <div className={styles.list}>
        {tasks.map((item) => (
          <div key={item.id} className={styles.row}>
            <TaskCard task={item} />
            <button
              className={styles.removeButton}
              onClick={() => removeTask(Number(item.id))}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      {tasks.length === 0 && <p className={styles.empty}>Задач нет</p>}
    </>
  );
};
