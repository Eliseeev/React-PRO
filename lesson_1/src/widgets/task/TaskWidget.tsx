import { Task } from 'entities/task/model/types';
import { TaskList } from 'features/taskList/ui';

const initialData: Task[] = [
  { id: '1', title: 'Поговорить с коллегой', completed: true },
  { id: '2', title: 'Передвинуть задачу в Jira', completed: false },
  { id: '3', title: 'Поменять интерфейсы', completed: false },
  { id: '4', title: 'Перенести встречу', completed: false },
  { id: '5', title: 'Обновить библиотеки', completed: true },
  { id: '6', title: 'Проверить почту', completed: true },
];

export const TaskWidget = () => {
  return (
    <section>
      <TaskList initialTasks={initialData} />
    </section>
  );
};
